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
    switch(code){
        case 400:
            res.status(code).json({
                status: code, 
                TimeStamped: ts,
                errMsg: errMsg
            })
        case 500:
            res.status(code).json({
                status: code, 
                TimeStamped: ts
            })

    }
    
}

module.exports = {
    "responseDto": responseDto,
    "errorResponseDto":errorResponseDto
}