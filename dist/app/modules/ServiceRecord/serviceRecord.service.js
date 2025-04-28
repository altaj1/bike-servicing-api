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
exports.serviceService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
// Create a new service record
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield prisma_1.default.serviceRecord.create({
            data: {
                bikeId: payload.bikeId,
                serviceDate: payload.serviceDate,
                description: payload.description,
                status: payload.status,
            },
        });
        return service;
    }
    catch (error) {
        console.error("Error creating service:", error);
        throw new Error("Service creation failed");
    }
});
// Get all service records
const getServices = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield prisma_1.default.serviceRecord.findMany();
        return services;
    }
    catch (error) {
        console.error("Error fetching services:", error);
        throw new Error("Error fetching services");
    }
});
// Get a specific service record by ID
const getServiceById = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield prisma_1.default.serviceRecord.findUnique({
            where: { serviceId },
        });
        return service;
    }
    catch (error) {
        console.error("Error fetching service by ID:", error);
        throw new Error("Service not found");
    }
});
// Mark a service as completed
const markServiceCompleted = (serviceId, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const completedService = yield prisma_1.default.serviceRecord.update({
            where: { serviceId },
            data: {
                completionDate: completionDate || new Date(),
                status: "done",
            },
        });
        return completedService;
    }
    catch (error) {
        console.error("Error marking service as completed:", error);
        throw new Error("Service update failed");
    }
});
// Get pending or overdue services (older than 7 days)
const getPendingOrOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Get the date 7 days ago
        const overdueOrPendingServices = yield prisma_1.default.serviceRecord.findMany({
            where: {
                OR: [{ status: "pending" }, { status: "in-progress" }],
                serviceDate: {
                    lt: sevenDaysAgo,
                },
            },
        });
        return overdueOrPendingServices;
    }
    catch (error) {
        console.error("Error fetching overdue or pending services:", error);
        throw new Error("Error fetching overdue or pending services");
    }
});
exports.serviceService = {
    createService,
    getServices,
    getServiceById,
    markServiceCompleted,
    getPendingOrOverdueServices,
};
