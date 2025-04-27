// bikeRoutes.ts

import express from "express";
import { bikeController } from "./bikes.controller";
// Ensure this is the correct path

const router = express.Router();

// POST /api/bikes - Add a new bike
router.post("/", bikeController.createBike);

// GET /api/bikes - Get all bikes
router.get("/", bikeController.getBikes);

// GET /api/bikes/:id - Get a specific bike by ID
router.get("/:id", bikeController.getBikeById);

export const bikeRoutes = router;
