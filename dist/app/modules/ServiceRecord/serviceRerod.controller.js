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
exports.serviceController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync")); // Assuming catchAsync is a utility to handle async errors
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const serviceRecord_service_1 = require("./serviceRecord.service");
// Controller to create a new service record
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceData = req.body;
    // Call the service layer to create the service record
    const newService = yield serviceRecord_service_1.serviceService.createService(serviceData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service record created successfully",
        data: newService,
    });
}));
// Controller to get all service records
const getServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield serviceRecord_service_1.serviceService.getServices();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service records fetched successfully",
        data: services,
    });
}));
// Controller to get a specific service record by ID
const getServiceById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Get serviceId from route params
    const service = yield serviceRecord_service_1.serviceService.getServiceById(id);
    if (!service) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: "Service record not found",
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service record fetched successfully",
        data: service,
    });
}));
// Controller to mark a service as completed
const markServiceCompleted = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Get serviceId from route params
    const { completionDate } = req.body;
    const completedService = yield serviceRecord_service_1.serviceService.markServiceCompleted(id, completionDate);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: completedService,
    });
}));
// Controller to get pending or overdue services
const getPendingOrOverdueServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield serviceRecord_service_1.serviceService.getPendingOrOverdueServices();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: services,
    });
}));
exports.serviceController = {
    createService,
    getServices,
    getServiceById,
    markServiceCompleted,
    getPendingOrOverdueServices,
};
