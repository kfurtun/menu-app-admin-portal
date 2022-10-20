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
router.get('/all', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield database_service_1.collections
            .ingredients.find({})
            .toArray();
        res.status(200).json(data);
    }
    catch (e) {
        res.status(500).json({ message: 'Error var' });
    }
}));
router.post('/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const newIngredient = req.body;
        const isFound = yield ((_a = database_service_1.collections.ingredients) === null || _a === void 0 ? void 0 : _a.findOne({
            name: newIngredient.name,
        }));
        if (!isFound) {
            const result = yield ((_b = database_service_1.collections.ingredients) === null || _b === void 0 ? void 0 : _b.insertOne(newIngredient));
            result
                ? res.status(201).json(newIngredient)
                : res.status(400).json({
                    message: 'Failed to create a new ingredient.',
                });
        }
        else {
            res.status(400).json({ message: 'Failed to create a new ingredient.' });
        }
    }
    catch (e) {
        res.status(500).json({ message: 'Server error' });
    }
}));
router.delete('/1', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_service_1.collections.ingredients.deleteOne({
            name: req.body.name,
        });
        if (result)
            res.status(200).json({ message: 'Success' });
        else
            res.status(400).json({ message: 'No success' });
    }
    catch (e) {
        res.status(500).json({ message: 'Error var' });
    }
}));
exports.default = router;
