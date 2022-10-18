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
const database_service_1 = require("../database/services/database.service");
const router = express_1.default.Router();
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = (yield database_service_1.collections
            .ingredients.find({})
            .toArray());
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send('Error var');
    }
}));
router.post('/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newIngredients = req.body;
        console.log(newIngredients);
        const result = yield database_service_1.collections.ingredients.insertMany([newIngredients]);
        result
            ? res.status(201).send(`Successfully added a new ingredient: ${result}`)
            : res.status(400).send('Failed to create a new ingredient.');
    }
    catch (e) {
        console.error(e);
        // res.status(500).send(e.message);
    }
}));
exports.default = router;
