// require('dotenv').config({path:'./env'})
import { app } from "./app.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

//import routes from './routes';

class Index {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    //this.server.use(routes);
  }
}

export default new Index().server;

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!! ", err);
  });

// connectDB()
// .then(()=>{

//     app.on("error",(error)=>{
//         console.log("ERRR: ", error);
//         throw error
//     })

//     app.listen(process.env.PORT || 8000,()=>{
//         console.log(`⚙ Server is running at port : ${process.env.PORT}`);

//     })

// })
// .catch((err)=>{
//     console.log("MONGO db connection failed !!!",err);

// })

/*
import express from "express"
const app = express()
;( async ()=>{
    try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error",(error)=>{
                console.log("Errr: ",error);
                throw error
            })

            app.listen(process.env.PORT,()=>{
                console.log(`App is listening on port ${process.env.PORT}`);
                
            })
    } catch (error) {
        console.error("ERROR: ",error);
        throw err
    }
})()
*/
