const StatusCodes = require("http-status-codes");
const info = (req,res)=>{
      return res
      .status(StatusCodes.OK)
      .json({
        sucess: true ,
        message: "Info fetched successfully",
        error:{},
        data: {}
      })
}


module.exports = {
    info
}