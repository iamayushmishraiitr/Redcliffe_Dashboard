import mongoose from "mongoose";

const clientOrderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  usedIn: [
      {
        type: String,
        required: true,
      }
    ] ,
     
    stock: {
        type: Number,
      },
    },
);

export const ClientOrder = mongoose.model('clientOrder', clientOrderSchema);
