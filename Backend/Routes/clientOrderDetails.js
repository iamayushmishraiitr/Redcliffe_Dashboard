import express from "express"
const router = express.Router()
import { orderDetail } from "../models/clientOrderDetails.js"
router.post('/', async (req, res) => {
   console.log(req.body)
   const newData = new orderDetail({
      name: req.body.name,
      location: req.body.location,
      units: req.body.units
   })
   try {
      const response = await newData.save();
      if (response) {
         res.status(200).send({ message: 'Data saved successfully' })
      }
   } catch (err) {
      res.status(400).send({ message: 'Data not saved successfully' })
   }
})

router.get('/', async (req, res) => {
   try {
      const reagents = await orderDetail.find();
      res.status(200).json(reagents);
   } catch (error) {
      console.error("Error fetching reagents:", error);
      res.status(500).json({ message: "Failed to fetch reagents" });
   }
})


router.put('/:id', async (req, res) => {
   // const id = useParams();
   // try {
   //    const reagents = await orderDetail.findById();
   //    res.status(200).json(reagents);
   // } catch (error) {
   //    console.error("Error fetching reagents:", error);
   //    res.status(500).json({ message: "Failed to fetch reagents" });
   // }
   try {
      
      const updated = await orderDetail.findByIdAndUpdate(
         req.params.id,
         { $set: req.body },
         { new: true }
      );
      res.status(200).json(updated);
   } catch (err) {
      res.status(500).json(err);
   }
})

export default router