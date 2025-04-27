import prisma from "../../shared/prisma";

// Create a new customer
const createCustomer = async (payload: any) => {
  console.log({ payload });
  try {
    const customer = await prisma.customer.create({
      data: payload,
    });
    return customer;
  } catch (error) {
    console.error("Error creating customer:", error);
    throw new Error("Customer creation failed");
  }
};

// Get all customers
const getCustomers = async () => {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw new Error("Error fetching customers");
  }
};

// Get a customer by ID
const getCustomerById = async (customerId: string) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { customerId },
    });
    return customer;
  } catch (error) {
    console.error("Error fetching customer by ID:", error);
    throw new Error("Customer not found");
  }
};

// Update a customer
const updateCustomer = async (customerId: string, payload: any) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: { customerId },
      data: payload,
    });
    return updatedCustomer;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw new Error("Customer update failed");
  }
};

// Delete a customer
const deleteCustomer = async (customerId: string) => {
  try {
    const deletedCustomer = await prisma.customer.delete({
      where: { customerId },
    });
    return deletedCustomer;
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw new Error("Customer deletion failed");
  }
};

export const customerService = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
