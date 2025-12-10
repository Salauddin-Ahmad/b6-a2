import { Request, Response } from "express";
import { userService } from "./user.service";

const getAllUser = async (req: Request, res: Response) => {
  const result = await userService.getAllUserService();

  try {
    const result = await userService.getAllUserService();

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.updateUserService();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

};

const deleteUser = async (req: Request, res: Response) => {
try {
    const result = await userService.updateUserService();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
    
};

export const userController = {
  getAllUser,
  updateUser,
  deleteUser,
};
