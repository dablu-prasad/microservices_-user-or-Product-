import * as express from "express";         
import ProductController from "./productController";

class AdminRoute {
    public productRoute = express.Router();
 protected productController=new ProductController()
    constructor() {
        this.productRoute.post(
            "/product",
            this.productController.createProduct
        );
        this.productRoute.get(
            "/productList",
            this.productController.productList
        );
        this.productRoute.get(
            "/productDetail",
            this.productController.getProductDetail
        );
        this.productRoute.put(
            "/updateProduct/:productId",
            this.productController.updateProduct
        );
        this.productRoute.delete(
            "/deleteProduct/:productId",
            this.productController.deleteProduct
        );
    }
}
export default new AdminRoute();
