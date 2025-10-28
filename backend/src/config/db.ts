import { error } from "console";
import mongoose from "mongoose";

//need to add env file to obscure db password from github
const uri =
  "mongodb+srv://bossunicorn7:<db_password>@cluster0.aqkgflm.mongodb.net/?appName=Cluster0";

const connectDB = async () => {
  let conn: mongoose.Mongoose | null = null;
  try {
    //takes advanage of async and waits for a promise form mongoose
    conn = await mongoose.connect(uri);
    const pingResult = await conn.connection.db!.admin().command({ ping: 1 });
    console.log("Pinged your deploymen", pingResult);
  } catch (error) {
  } finally {
    if (conn) {
      conn.connection.close();
    }
    mongoose.connection.close();
  }
};
