import mongoose, {Schema} from "mongoose"
const userSchema = new Schema(
    {
        userSchema:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trime:trim
        },
        fullname:{
            type:String,
            trim:true
        },
        avatar:{
            type:String, // cloudinary url we use
            required:true,
        },
        coverImage:{
            type:String //cloudinary img
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"video"
            }
        ],
        password:{
            type:String,
            required:[true,'Password is required']
        },
        refreshToken:{
            type:String,
            
        }
    },
    {timestamps:true}
)



export const User = mongoose.model("User",userSchema)