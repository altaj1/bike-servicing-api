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
exports.customerController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync")); // You can use catchAsync to handle async errors automatically
const sendResponse_1 = __importDefault(require("../../shared/sendResponse")); // Assuming you have a sendResponse helper function
const http_status_1 = __importDefault(require("http-status"));
const customer_service_1 = require("./customer.service");
// Controller for creating a customer
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = req.body;
    // Create the customer using customerService
    const customer = yield customer_service_1.customerService.createCustomer(customerData);
    // Send success response
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Customer created successfully!",
        data: customer,
    });
}));
// Controller to get all customers
const getCustomers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customer_service_1.customerService.getCustomers();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customers fetched successfully!",
        data: customers,
    });
}));
// Controller to get a customer by ID
const getCustomerById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Assuming the customerId is passed as a route parameter
    const customer = yield customer_service_1.customerService.getCustomerById(id);
    if (!customer) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: "Customer not found!",
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer fetched successfully!",
        data: customer,
    });
}));
// Controller to update a customer
const updateCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Get customerId from the route parameter
    const customerData = req.body;
    const updatedCustomer = yield customer_service_1.customerService.updateCustomer(id, customerData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer updated successfully!",
        data: updatedCustomer,
    });
}));
// Controller to delete a customer
const deleteCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Get customerId from the route parameter
    const deletedCustomer = yield customer_service_1.customerService.deleteCustomer(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer deleted successfully!",
        data: deletedCustomer,
    });
}));
exports.customerController = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};
