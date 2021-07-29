const responseDto = (res, code, data) => {

    let ts= new Date();

    res.status(code).json({status: code, TimeStamped: ts ,result: data})
}



module.exports.responseDto = responseDto;