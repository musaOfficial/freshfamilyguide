import connectDB from "@/utils/connectDb";
import Post from "@/libs/models/Post";
export default async function handler(req, res)
{
    res.setHeader("Content-Type", "application/json");
    try{
        if(req.method  !== "POST"){return res.statu(404).json({error: "MEthod Not Alloweed!"});}
        await connectDB();
        console.log("Data caught: "+ req.body);
        const {category, content, title, image} = req.body;
        const post = new Post({
            category: category,
            content: content,
            title: title,
            image: image
        });
        await post.save();
        if(post){
            console.log("Post successfully created...");
            return res.status(201).json({message: "Post successfully created.."});
        }
    }
    catch(err) {
        console.error("Error, " + err);
        throw new Error("POST failed..");
    }
}