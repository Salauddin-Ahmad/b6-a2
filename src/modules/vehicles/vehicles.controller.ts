import { Request, Response } from "express";
import { vehicleServices } from "./vehicles.service";

const crateVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.registerVehicleService(req.body);

    res.status(200).json({
      success: true,
      message: "Vehicle created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getallVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.getAllVehicleService();

    // check if empty
    if (result.rows.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No vehicles found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Vehicles retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleVehicle = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await vehicleServices.getSingleService(id!);

    //check if empty
    if (result.rows.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No vehicles found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle retrieved successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const updateSingleVehicle = async (req: Request, res: Response) => {
 const id = req.params.id
  try {
    const result = await vehicleServices.updateSingleService(req.body, id!);

    //check if empty
    if (result.rows.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No vehicles found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const deleteSingleVehicle = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await vehicleServices.deleteSingleService(id!);

    //check if empty
    if (result.rows.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No vehicles found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const vehicleController = {
  crateVehicle,
  getallVehicle,
  getSingleVehicle,
  updateSingleVehicle,
  deleteSingleVehicle
};
