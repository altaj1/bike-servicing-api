import express from "express";
import { customerController } from "./customer.controller";

// Initialize the router instance
const router = express.Router();

// POST /customers - Create a new customer
router.post("/", customerController.createCustomer);

// GET /customers - Get all customers
router.get("/", customerController.getCustomers);

// GET /customers/:id - Get a customer by ID
router.get("/:id", customerController.getCustomerById);

// PUT /customers/:id - Update an existing customer
router.put("/:id", customerController.updateCustomer);

// DELETE /customers/:id - Delete a customer by ID
router.delete("/:id", customerController.deleteCustomer);

// Export the customer routes
export const customerRoutes = router;
