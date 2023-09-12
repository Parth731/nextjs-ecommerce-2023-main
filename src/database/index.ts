import { configOptionsType } from "@/types/type";
import mongoose from "mongoose";

const configOptions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl: any = `mongodb+srv://parthdangroshiya31:5JNDyagEMGRjpEG7@cluster0.9fsm5wt.mongodb.net/nextjs-thirteen-ecommerce`;

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
