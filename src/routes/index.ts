import express from "express";
import { authRoutes } from "../modules/auth/auth.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    module: authRoutes,
  },
];

moduleRoutes.forEach(({ path, module }) => {
  if (module) {
    router.use(path, module);
  }
});

export default router;
