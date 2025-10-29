import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const dbPassword = process.env.DB_PASSWORD;

//need to add env file to obscure db password from github
const uri: string = `mongodb+srv://bossunicorn7:${dbPassword}@cluster0.aqkgflm.mongodb.net/?appName=Cluster0`;

const connectDB = async () => {
  let conn: mongoose.Mongoose | null = null;
  try {
    //takes advanage of async and waits for a promise form mongoose
    conn = await mongoose.connect(uri);
    //asserting not null type because typescript
    const pingResult = await conn.connection.db!.admin().command({ ping: 1 });
    console.log("Pinged your deploymen", pingResult);
  } catch {} // } catch (error) {
  //   throw error;
  // } //finally {
  //   await mongoose.disconnect();
  // }
};

(async () => {
  try {
    await connectDB();
  } catch {
    console.log("no db connection");
  } finally {
    // 3. CRITICAL: Disconnect here. This forces the asynchronous cleanup
    // and gives the console buffer time to flush the output before the process exits.
    await mongoose.disconnect();
    console.log("Database connection closed.");
  }
})();
