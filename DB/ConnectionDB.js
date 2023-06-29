import mongoose from "mongoose"





const ConnectionDB =async ()=>{
    return await mongoose.connect(process.env.CONNECTED_DB)
    .then((res)=> console.log("ConnectionDB Running.........."))
    .catch((err)=> console.log({message:"ConnectionDB error",err}))
}

export default ConnectionDB