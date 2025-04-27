import express from "express";
import { serviceController } from "./serviceRerod.controller";

const router = express.Router();

// POST /api/services - Create a new service record
router.post("/", serviceController.createService);

// GET /api/services - Get all service records
router.get("/", serviceController.getServices);

// GET /api/services/:id - Get a specific service record by ID
router.get("/:id", serviceController.getServiceById);

// PUT /api/services/:id/complete - Mark a service as completed
router.put("/:id/complete", serviceController.markServiceCompleted);

// GET fetching pending or overdue services
router.get("/status", serviceController.getPendingOrOverdueServices);

export const serviceRoutes = router;
