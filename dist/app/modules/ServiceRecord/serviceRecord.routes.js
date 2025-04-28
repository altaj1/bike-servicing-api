"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const serviceRerod_controller_1 = require("./serviceRerod.controller");
const router = express_1.default.Router();
// POST /api/services - Create a new service record
router.post("/", serviceRerod_controller_1.serviceController.createService);
// GET /api/services - Get all service records
router.get("/", serviceRerod_controller_1.serviceController.getServices);
// GET /api/services/:id - Get a specific service record by ID
router.get("/:id", serviceRerod_controller_1.serviceController.getServiceById);
// PUT /api/services/:id/complete - Mark a service as completed
router.put("/:id/complete", serviceRerod_controller_1.serviceController.markServiceCompleted);
// GET fetching pending or overdue services
router.get("/status", serviceRerod_controller_1.serviceController.getPendingOrOverdueServices);
exports.serviceRoutes = router;
