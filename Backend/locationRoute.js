import express, { request, response } from 'express';
import {Location} from '../Api/models/locationData.js'
const router= express.Router() ;
router.put('/location/:id', async ()=>{
    try{
          if(!request.body.name && !request.body.quantity) 
          {
            return response.status(400).send({
              message:"Send all required Data"
            })
          }
         const {id}= request.params ;
         const result = await Location.findByIdAndUpdate(id, request.body);
         if(!result) 
         {
           return response.status(404).json({message :"Data Not Found"}) ;
         }   
         return response.status(200).send({ message: 'Book updated successfully' });                 
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
})





export default router ;