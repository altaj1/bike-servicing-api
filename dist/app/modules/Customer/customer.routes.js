"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
// Initialize the router instance
const router = express_1.default.Router();
// POST /customers - Create a new customer
router.post("/", customer_controller_1.customerController.createCustomer);
// GET /customers - Get all customers
router.get("/", customer_controller_1.customerController.getCustomers);
// GET /customers/:id - Get a customer by ID
router.get("/:id", customer_controller_1.customerController.getCustomerById);
// PUT /customers/:id - Update an existing customer
router.put("/:id", customer_controller_1.customerController.updateCustomer);
// DELETE /customers/:id - Delete a customer by ID
router.delete("/:id", customer_controller_1.customerController.deleteCustomer);
// Export the customer routes
exports.customerRoutes = router;
