
const Post= require('..models/post')


exports.createPost=  async (req,res,next)=>{
    try {
       const {title,body,device}=req.body
       const user=req.user
       const post= new Post({title,body,device,user})
       await post.save()
       res.send({msg:"post created successfully"})

    } catch (error) {
        next(error)
    }
}


exports.getpost=  async (req,res,next)=>{
    try {
        const {device}=req.query
        const filters =device?{device}:{}
        const posts= await post.find(filters).populate('user',"name")
        res.send(posts)
    
    } catch (error) {
        next(error)
    }
}

exports.deletePost= async (req,res,next)=>{
    try {
        const PostId=req.params.id;
        const user =req.user
        const post = await Post.findOne({_id:PostId, user})

        if(!post){
            return res.send({msg:"post not found"})
        }
        await post.remove()
        res.send({msg:"Post deleted"})
    } catch (error) {
        next(error)
    }
}