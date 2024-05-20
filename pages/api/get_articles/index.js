import connectDB from "@/utils/connectDb";
import Post from "@/libs/models/Post";

export default async function GET(req, res){
    if(req.method === "GET"){
        try{
            await connectDB();
            const {path} = req.query;
            const posts = await Post.find({}).sort({createdAt: "asc"});
            res.status(200).json(posts);
        }
        catch(err) {
            console.error(err);
            res.status(401).json({error: "Server Error.."});
        }
    }
    else {
        res.status(401).json({error: "Method Not Allowed!"});
    }
   
}