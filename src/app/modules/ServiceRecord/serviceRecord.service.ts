import prisma from "../../shared/prisma";

// Create a new service record
const createService = async (payload: any) => {
  try {
    const service = await prisma.serviceRecord.create({
      data: {
        bikeId: payload.bikeId,
        serviceDate: payload.serviceDate,
        description: payload.description,
        status: payload.status,
      },
    });
    return service;
  } catch (error) {
    console.error("Error creating service:", error);
    throw new Error("Service creation failed");
  }
};

// Get all service records
const getServices = async () => {
  try {
    const services = await prisma.serviceRecord.findMany();
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw new Error("Error fetching services");
  }
};

// Get a specific service record by ID
const getServiceById = async (serviceId: string) => {
  try {
    const service = await prisma.serviceRecord.findUnique({
      where: { serviceId },
    });
    return service;
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    throw new Error("Service not found");
  }
};

// Mark a service as completed
const markServiceCompleted = async (
  serviceId: string,
  completionDate: string | null
) => {
  try {
    const completedService = await prisma.serviceRecord.update({
      where: { serviceId },
      data: {
        completionDate: completionDate || new Date(),
        status: "done",
      },
    });
    return completedService;
  } catch (error) {
    console.error("Error marking service as completed:", error);
    throw new Error("Service update failed");
  }
};

// Get pending or overdue services (older than 7 days)
const getPendingOrOverdueServices = async () => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Get the date 7 days ago

    const overdueOrPendingServices = await prisma.serviceRecord.findMany({
      where: {
        OR: [{ status: "pending" }, { status: "in-progress" }],
        serviceDate: {
          lt: sevenDaysAgo,
        },
      },
    });
    return overdueOrPendingServices;
  } catch (error) {
    console.error("Error fetching overdue or pending services:", error);
    throw new Error("Error fetching overdue or pending services");
  }
};

export const serviceService = {
  createService,
  getServices,
  getServiceById,
  markServiceCompleted,
  getPendingOrOverdueServices,
};
