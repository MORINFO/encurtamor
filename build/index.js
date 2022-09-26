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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const Prisma_1 = __importDefault(require("./Prisma"));
const Routes_1 = __importDefault(require("./Routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/home", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ "message": "helloupdate" });
}));
app.get("/home2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ "message2": "hello2" });
}));
app.get("/prisma", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let busca_usuario = yield Prisma_1.default.usuario.findMany({
            include: {
                arquivos: {
                    orderBy: {
                        updated_at: "desc"
                    }
                },
                links: {
                    orderBy: {
                        updated_at: "desc"
                    }
                }
            }
        });
        return res.json(busca_usuario);
    }
    catch (error) {
        console.log(error);
        return res.json(error);
    }
}));
app.use(Routes_1.default);
app.listen(process.env.PORT, () => { console.log('servidor aberto!'); });
