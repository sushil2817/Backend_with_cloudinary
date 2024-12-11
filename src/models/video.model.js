import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            type:String,//cloudinary url,
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number, //cloudinary
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        usPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schmea.Types.ObjectId,
            ref:"User"
        }
    },
    {timestamps:true}
)

export const Video = mongoose.model("Vidoe",videoSchema)