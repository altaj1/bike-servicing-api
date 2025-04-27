import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync"; // You can use catchAsync to handle async errors automatically
import sendResponse from "../../shared/sendResponse"; // Assuming you have a sendResponse helper function
import httpStatus from "http-status";
import { customerService } from "./customer.service";

// Controller for creating a customer
const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const customerData = req.body;

  // Create the customer using customerService
  const customer = await customerService.createCustomer(customerData);

  // Send success response
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Customer created successfully!",
    data: customer,
  });
});

// Controller to get all customers
const getCustomers = catchAsync(async (req: Request, res: Response) => {
  const customers = await customerService.getCustomers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully!",
    data: customers,
  });
});

// Controller to get a customer by ID
const getCustomerById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params; // Assuming the customerId is passed as a route parameter

  const customer = await customerService.getCustomerById(id);

  if (!customer) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Customer not found!",
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer fetched successfully!",
    data: customer,
  });
});

// Controller to update a customer
const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params; // Get customerId from the route parameter
  const customerData = req.body;

  const updatedCustomer = await customerService.updateCustomer(
    id,
    customerData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully!",
    data: updatedCustomer,
  });
});

// Controller to delete a customer
const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params; // Get customerId from the route parameter

  const deletedCustomer = await customerService.deleteCustomer(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully!",
    data: deletedCustomer,
  });
});

export const customerController = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
