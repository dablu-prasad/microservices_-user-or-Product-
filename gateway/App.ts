import * as cors from "cors";
import * as express from "express";
import * as proxy from "express-http-proxy"
class App {
    public express;
    constructor() {
        this.express = express();
        this.express.use(cors());
        this.express.set("port", process.env.PORT);
        this.mountRoutes();
    }
    private mountRoutes(): void {
        const router = express.Router();
        router.use("/admin", proxy(process.env.ADMIN_PORT));
        router.use("/product", proxy(process.env.PRODUCT_PORT));
        router.use("/user", proxy(process.env.USER_PORT));
        this.express.use(router);
    }
}
export default new App().express;
