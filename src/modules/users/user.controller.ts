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
  const targetUserId = req.params.userId!; // user being updated
  const loggedInUser = req.user!; // from JWT middleware

  try {
   
    if (
      loggedInUser.role !== "admin" &&
      loggedInUser.id !== Number(targetUserId)
    ) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this user",
      });
    }

    // Remove forbidden fields
    delete req.body.password; // nobody updates password here

    if (loggedInUser.role !== "admin") {
      delete req.body.role; 
    }

    const updatedUser = await userService.updateUserService(
      targetUserId,
      req.body
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    const result = await userService.deleteUserService(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
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
