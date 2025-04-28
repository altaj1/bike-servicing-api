"use strict";
// bike.controller.ts
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
exports.bikeController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync")); // Assuming you have a catchAsync utility
const bike_service_1 = require("./bike.service");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
// Controller to create a new bike
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeData = req.body;
    // Create the bike using bikeService
    const newBike = yield bike_service_1.bikeService.createBike(bikeData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Bike added successfully",
        data: newBike,
    });
}));
// Controller to get all bikes
const getBikes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield bike_service_1.bikeService.getBikes();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: bikes,
    });
}));
// Controller to get a specific bike by ID
const getBikeById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Get bikeId from route params
    const bike = yield bike_service_1.bikeService.getBikeById(id);
    if (!bike) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: "Bike not found",
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bike fetched successfully",
        data: bike,
    });
}));
exports.bikeController = {
    createBike,
    getBikes,
    getBikeById,
};
