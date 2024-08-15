"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const generated_1 = require("./generated");
const flags_1 = __importDefault(require("./services/flags"));
const PORT = process.env.PORT ?? 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, generated_1.register)(app, {
    flags: flags_1.default,
});
app.listen(PORT);
console.log(`🎉 Listening on port ${PORT}...`);
