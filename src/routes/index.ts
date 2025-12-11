import express from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { vehicleRoutes } from "../modules/vehicles/vehicles.route";
import { userRoutes } from "../modules/users/user.routes";
import { bookingRoutes } from "../modules/bookings/booking.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    module: authRoutes,
  },
  {
    path: "/vehicles",
    module: vehicleRoutes,
  },
  {
    path: "/users",
    module: userRoutes,
  },
  {
    path: "/bookings",
    module: bookingRoutes,
  }
];

moduleRoutes.forEach(({ path, module }) => {
  if (module) {
    router.use(path, module);
  }
});

export default router;
