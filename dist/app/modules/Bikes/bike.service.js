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
exports.bikeService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
// Create a new bike
const createBike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bike = yield prisma_1.default.bike.create({
            data: payload,
        });
        return bike;
    }
    catch (error) {
        console.error("Error creating bike:", error);
        throw new Error("Bike creation failed");
    }
});
// Get all bikes
const getBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikes = yield prisma_1.default.bike.findMany();
        return bikes;
    }
    catch (error) {
        console.error("Error fetching bikes:", error);
        throw new Error("Error fetching bikes");
    }
});
// Get a bike by ID
const getBikeById = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bike = yield prisma_1.default.bike.findUnique({
            where: { bikeId },
        });
        return bike;
    }
    catch (error) {
        console.error("Error fetching bike by ID:", error);
        throw new Error("Bike not found");
    }
});
exports.bikeService = {
    createBike,
    getBikes,
    getBikeById,
};
