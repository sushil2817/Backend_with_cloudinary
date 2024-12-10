class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode = statusCode
        this.data = data
        this.messgae = message
        this.success = statusCode < 400
    }
}