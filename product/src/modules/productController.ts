import Axios from "axios";
import responseConstants from "../constants/modelConstants";
import productService from "./productService";

export default class ProductController {
    constructor() {
    }
    public createProduct = async (req, res) => {
        try {
            await productService.addProduct(req.body)
            return res.status(responseConstants.STANDARD.SUCCESS).send({
                message: "User Register Successfully"
            });
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }


    public productList = async (req, res)=> {
        try {
            const data = await productService.productList()
            return res.status(responseConstants.STANDARD.SUCCESS).send({
                message: "Product list fetched successfully",
                data: data.rows
            });
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }

    public getProductDetail = async (req, res) => {
        try {
            const data = await productService.getProductDetail({ field1: `product_id=$1` }, { userId: req.query.id })
            return res.status(responseConstants.STANDARD.SUCCESS).send({
                message: "Product List",
                data: data.rows
            });
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }

    public updateProduct = async (req, res)=> {
        try {
            await productService.updateProduct({
                productName: req.body.productName,
                productType: req.body.productType,
                productPrice: req.body.productPrice,
                productQty: req.body.productQty,
                productId: req.params.productId
            })
            return res.status(responseConstants.STANDARD.SUCCESS).send({
                message: "Updated Product List"
            });
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }


    public deleteProduct = async (req, res) => {
        try {
            await productService.deleteProduct({
                productId: req.params.productId
            })
            return res.status(responseConstants.STANDARD.SUCCESS).send({
                message: "Deleted Product Successfully"
            });
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }
}
