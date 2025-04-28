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
exports.customerService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
// Create a new customer
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log({ payload });
    try {
        const customer = yield prisma_1.default.customer.create({
            data: payload,
        });
        return customer;
    }
    catch (error) {
        console.error("Error creating customer:", error);
        throw new Error("Customer creation failed");
    }
});
// Get all customers
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield prisma_1.default.customer.findMany();
        return customers;
    }
    catch (error) {
        console.error("Error fetching customers:", error);
        throw new Error("Error fetching customers");
    }
});
// Get a customer by ID
const getCustomerById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield prisma_1.default.customer.findUnique({
            where: { customerId },
        });
        return customer;
    }
    catch (error) {
        console.error("Error fetching customer by ID:", error);
        throw new Error("Customer not found");
    }
});
// Update a customer
const updateCustomer = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCustomer = yield prisma_1.default.customer.update({
            where: { customerId },
            data: payload,
        });
        return updatedCustomer;
    }
    catch (error) {
        console.error("Error updating customer:", error);
        throw new Error("Customer update failed");
    }
});
// Delete a customer
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCustomer = yield prisma_1.default.customer.delete({
            where: { customerId },
        });
        return deletedCustomer;
    }
    catch (error) {
        console.error("Error deleting customer:", error);
        throw new Error("Customer deletion failed");
    }
});
exports.customerService = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};
