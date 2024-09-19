class ApiError extends Error {
    constructor(statusCode, message) {
        // call super() to call constructor of Error to use its constructor (inheritance)
        // call super() to use "this." in JS
        super(message);

        // Custom name: if no specify, default name is "Error"
        this.name = "ApiError";

        this.statusCode = statusCode;

        // Logging stack trace (dấu vết)
        Error.captureStackTrace(this, this.constructor);
    }
}

export default ApiError;
