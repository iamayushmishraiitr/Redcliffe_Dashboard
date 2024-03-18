import express from "express";
import { ClientOrder } from "../models/clientOrdermodel.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const reagents = await ClientOrder.find(); 
        res.status(200).json(reagents); 
      } catch (error) {
        console.error("Error fetching reagents:", error);
        res.status(500).json({ message: "Failed to fetch reagents" });
      }
});

export default router;
