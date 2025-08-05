import mongoose from 'mongoose';
const DB_Name="mern-blog";
console.log(process.env.MONGO_URL);

const connectDB = async() =>{
    try{
      const connect=await  mongoose.connect(`${process.env.MONGO_URL}/${DB_Name}`)
      console.log("mongodb connected successfully");
     } catch(error){
        console.log("mongodb error",error);
     }
}

export default connectDB;

