"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUniqueId = void 0;
const updateUniqueId = (collection, updateAmount) => {
    return collection === null || collection === void 0 ? void 0 : collection.findOneAndUpdate({ _id: 'UNIQUE COUNT DOCUMENT IDENTIFIER' }, { $inc: { COUNT: updateAmount } });
};
exports.updateUniqueId = updateUniqueId;
