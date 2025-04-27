import prisma from "../../shared/prisma";

// Create a new bike
const createBike = async (payload: any) => {
  try {
    const bike = await prisma.bike.create({
      data: payload,
    });
    return bike;
  } catch (error) {
    console.error("Error creating bike:", error);
    throw new Error("Bike creation failed");
  }
};

// Get all bikes
const getBikes = async () => {
  try {
    const bikes = await prisma.bike.findMany();
    return bikes;
  } catch (error) {
    console.error("Error fetching bikes:", error);
    throw new Error("Error fetching bikes");
  }
};

// Get a bike by ID
const getBikeById = async (bikeId: string) => {
  try {
    const bike = await prisma.bike.findUnique({
      where: { bikeId },
    });
    return bike;
  } catch (error) {
    console.error("Error fetching bike by ID:", error);
    throw new Error("Bike not found");
  }
};

export const bikeService = {
  createBike,
  getBikes,
  getBikeById,
};
