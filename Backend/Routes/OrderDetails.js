import express from "express"
const router = express.Router()
import { orderDetail } from "../models/clientOrderDetails.js"

router.post('/', async (req, res) => {
   try {

      const location = req.body.location
      console.log("assa   ",req.body);
      const reagents = await orderDetail.find({ location: location });
      console.log(reagents)
      res.status(200).json(reagents);
   } catch (error) {
      console.error("Error fetching reagents:", error);
      res.status(500).json({ message: "Failed to fetch reagents" });
   }
})



export default router