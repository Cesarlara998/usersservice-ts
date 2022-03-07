import express from "express";
import * as bodyParser from "body-parser";
import ErrorMiddleware from "./middleware/Error.middleware";
import morgan from "morgan";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core/dist/plugin/drainHttpServer";
import http from "http";
export default class App {
  public app: express.Application;
  private port: Number;
  constructor(routers, port) {
    this.app = express();
    this.port = port;
    //

    this.initMorganLogger();
    this.initializeMiddlewares();
    this.initializeMiddlewares();
    if (routers) this.initializeRouters(routers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
  }

  private initializeRouters(routers) {
    routers.forEach((router) => {
      this.app.use("", router.router);
    });
  }
  private async initMorganLogger() {
    morgan.token(`status`, (req, res) => {
      const status = (
        typeof res.headersSent !== `boolean`
          ? Boolean(res._header)
          : res.headersSent
      )
        ? res.statusCode
        : undefined;

      // get status color
      const color =
        status >= 500
          ? 31 // red
          : status >= 400
          ? 33 // yellow
          : status >= 300
          ? 36 // cyan
          : status >= 200
          ? 32 // green
          : 0; // no color
      return `\x1b[${color}m${status}\x1b[0m`;
    });
    this.app.use(morgan(":method :url :status - :response-time ms"));
  }
  public async listenGraphql(typeDefs, resolvers) {
    try {
      const httpServer = http.createServer(this.app);
      const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      });
      await server.start();
      const app = this.app
      server.applyMiddleware( {app} );
      await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    } catch (error) {
      console.log("GRAPHQL WITHOUT VALID DATA");
    }
  }
  public async listen() {
    try {
      this.app.listen(this.port, () => {
        console.log(`App listening on the port ${this.port}`);
      });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}
