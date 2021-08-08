const responseDto = (res, code, data) =>{
    let ts = new Date();

    res.status(code).json({
        status: code,
        TimeStamped: ts,
        result: data
    })
}

const errorResponseDto = (res, code, errMsg) =>{
    let ts= new Date()
    
    res.status(code).json({
        status: code, 
        TimeStamped: ts,
        errMsg: errMsg
    })
    
}

module.exports = {
    "responseDto": responseDto,
    "errorResponseDto":errorResponseDto
}