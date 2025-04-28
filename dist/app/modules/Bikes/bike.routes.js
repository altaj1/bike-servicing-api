"use strict";
// bikeRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bikes_controller_1 = require("./bikes.controller");
// Ensure this is the correct path
const router = express_1.default.Router();
// POST /api/bikes - Add a new bike
router.post("/", bikes_controller_1.bikeController.createBike);
// GET /api/bikes - Get all bikes
router.get("/", bikes_controller_1.bikeController.getBikes);
// GET /api/bikes/:id - Get a specific bike by ID
router.get("/:id", bikes_controller_1.bikeController.getBikeById);
exports.bikeRoutes = router;
