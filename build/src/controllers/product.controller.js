"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_models_1 = __importDefault(require("../models/product.models"));
const logger_1 = __importDefault(require("../../lib/logger"));
class ProductController {
    createProduct(product) {
        logger_1.default.info(`creating ${product}`);
        return new Promise((resolve, reject) => {
            if (!product) {
                return reject({ ok: false, message: 'Parametros incorrectos', response: null, code: 400 });
            }
            product_models_1.default.create(product).then((res) => {
                logger_1.default.info(`${product}fue agregado correctamente`);
                return resolve({ ok: true, message: 'producto agragado correctamente', response: res, code: 201 });
            }).catch((err) => {
                logger_1.default.error(err);
                return reject({ ok: false, message: 'Error del servidor', response: err, code: 500 });
            });
        });
    }
    readProductByCategory(category) {
        const regexp = new RegExp(category, 'i');
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!category) {
                return reject({ ok: false, message: 'parametros incorrectos', response: null, code: 500 });
            }
            try {
                const result = yield product_models_1.default.find({ category: regexp });
                if (result.length < 1) {
                    return reject({ ok: false, message: 'producto no encontrado', response: null, code: 404 });
                }
                return resolve({ ok: true, message: 'Producto encontrado', response: result, code: 200 });
            }
            catch (e) {
                return reject({ ok: false, message: 'Error del servidor', response: e, code: 500 });
            }
        }));
    }
}
exports.default = ProductController;
