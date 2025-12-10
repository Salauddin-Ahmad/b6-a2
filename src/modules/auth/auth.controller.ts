import { Request, Response } from "express";
import { authService } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await authService.registerUserService(req.body);

    const { password, ...safeUser } = result.rows[0]; // for removing the pass from the response

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: safeUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.loginUserService(email, password);
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: { token, user },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const authController = {
  createUser,
  loginUser,
};
