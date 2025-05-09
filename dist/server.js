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
const app_1 = __importDefault(require("./app"));
// Establish database connection
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Start Express server
        const server = app_1.default.listen(6000, () => {
            console.log(`Server running on port: 6000`);
        });
        const exitHandler = () => {
            if (server) {
                server.close(() => {
                    console.info("Server closed!");
                });
            }
            process.exit(1);
        };
        process.on("uncaughtException", (error) => {
            console.log(error);
            exitHandler();
        });
        process.on("unhandledRejection", (error) => {
            console.log(error);
            exitHandler();
        });
    }
    catch (error) {
        // Log if unable to connect to database
        console.error("Error starting server:", error);
    }
});
startServer();
