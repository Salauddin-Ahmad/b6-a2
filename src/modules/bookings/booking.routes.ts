import { bookingController } from './booking.controller';
import { Router } from "express";

const router = Router();

router.post("/", bookingController.createBooking);
router.get("/:id", bookingController.getBooking);
router.put("/:id", bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);
router.get("/", bookingController.getAllBookings);

export const bookingRoutes = router;