
import mongoose from {mongoose}

export default async function connectToDB(){
    const URL = "mongodb+srv://shushant:grozam416@cluster0.hm8ymfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    mongoose.connect(URL).then(()=>console.log("DB CONNECTED!")).catch((error)=>console.log(error));
}

