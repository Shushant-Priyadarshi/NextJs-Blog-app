//Post Req to add the data to DB

import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const addNewBlog = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required()
})

export  async function POST(req){
    try{
        await connectToDB();
        const extractBlogData = await req.json();
        const {title,description} =extractBlogData;

        const {error} = addNewBlog.validate({
            title,description
        })

        if(error){
            return NextResponse.json({
                success:false,
                message:error.details[0].message
            })
        }

        const newlyCreateBlog=await Blog.create(extractBlogData);
        if(newlyCreateBlog){
            return NextResponse.json({
                success:true,
                message:"Blog added !-"
            })
        }
    }catch(e){
        console.log(e);
        return NextResponse.json({
            success:false,
            message:"Something went Wrong!"
        });
    }
}