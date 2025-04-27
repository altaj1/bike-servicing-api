import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync"; // Assuming catchAsync is a utility to handle async errors

import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { serviceService } from "./serviceRecord.service";

// Controller to create a new service record
const createService = catchAsync(async (req: Request, res: Response) => {
  const serviceData = req.body;

  // Call the service layer to create the service record
  const newService = await serviceService.createService(serviceData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: newService,
  });
});

// Controller to get all service records
const getServices = catchAsync(async (req: Request, res: Response) => {
  const services = await serviceService.getServices();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: services,
  });
});

// Controller to get a specific service record by ID
const getServiceById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params; // Get serviceId from route params

  const service = await serviceService.getServiceById(id);

  if (!service) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Service record not found",
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: service,
  });
});

// Controller to mark a service as completed
const markServiceCompleted = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params; // Get serviceId from route params
  const { completionDate } = req.body;

  const completedService = await serviceService.markServiceCompleted(
    id,
    completionDate
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: completedService,
  });
});
// Controller to get pending or overdue services
const getPendingOrOverdueServices = catchAsync(
  async (req: Request, res: Response) => {
    const services = await serviceService.getPendingOrOverdueServices();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Overdue or pending services fetched successfully",
      data: services,
    });
  }
);
export const serviceController = {
  createService,
  getServices,
  getServiceById,
  markServiceCompleted,
  getPendingOrOverdueServices,
};
