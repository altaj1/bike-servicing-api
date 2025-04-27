// bike.controller.ts

import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync"; // Assuming you have a catchAsync utility
import { bikeService } from "./bike.service";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

// Controller to create a new bike
const createBike = catchAsync(async (req: Request, res: Response) => {
  const bikeData = req.body;

  // Create the bike using bikeService
  const newBike = await bikeService.createBike(bikeData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike added successfully",
    data: newBike,
  });
});

// Controller to get all bikes
const getBikes = catchAsync(async (req: Request, res: Response) => {
  const bikes = await bikeService.getBikes();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: bikes,
  });
});

// Controller to get a specific bike by ID
const getBikeById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params; // Get bikeId from route params

  const bike = await bikeService.getBikeById(id);

  if (!bike) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Bike not found",
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: bike,
  });
});

export const bikeController = {
  createBike,
  getBikes,
  getBikeById,
};
