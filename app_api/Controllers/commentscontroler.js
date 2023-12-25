var mongoose=require("mongoose")
var venue = mongoose.model("venue");

const createResponse=function(res,status,content){
    res.status(status).json(content);
 }
 

 const listComment=function(res,res){
    createResponse(res,200,{status:"Bsasri"});
}

// const getComment=function(res,res){
//     createResponse(res,200,{status:"Bsasri"});
// }


const getComment= async function(req,res){
    try{
        await venue.findById(req.params.venueid)
        .select("name comments")
        .exec()
        .then(function(venue){
            var response, comment;
            if(!venue){
                createResponse(res,404,{
                    status:"venueid bulunamadı",
                });
                return;
            } else if(venue.comments && venue.comments.length > 0){
                comment=venue.comments.id(req.params.commentid);
                if(!comment){
                    createResponse(res,404,{
                        status:"commmentid bulunamadı",
                    });
                }else {
                    response={
                        venue:{
                            name:venue.name,
                            id:req.params.venueid,
                        },
                        comment:comment,
                    };
                    createResponse(res,200,response);
                }
            }else {
                
                createResponse(res,404,{
                    status:"Hiç Yorum Yok",
                });
            }
        });
    }catch (error){
        createResponse(res,404,{
            status:"venueid bulunamadı",
        });  
    }
};









const addComment=function(res,res){
    createResponse(res,200,{status:"Bsasri"});
}

const deleteComment=function(res,res){
    createResponse(res,200,{status:"Bsasri"});
}
const updateComment=function(res,res){
    createResponse(res,200,{status:"Bsasri"});
}

module.exports={
    listComment,
    getComment,
    addComment,
    deleteComment,
    updateComment

};