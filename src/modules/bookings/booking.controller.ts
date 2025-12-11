import { Request, Response } from "express";


 const createBooking = async (req: Request, res: Response) => {};

 
 const getBooking = async (req: Request, res: Response) => {};
 const updateBooking = async (req: Request, res: Response) => {};
 const deleteBooking = async (req: Request, res: Response) => {};
 const getAllBookings = async (req: Request, res: Response) => {};



export const bookingController = {
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking,
    getAllBookings
}