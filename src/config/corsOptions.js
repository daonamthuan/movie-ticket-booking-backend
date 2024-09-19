export const corsOptions = {
    origin: function (origin, callback) {
        return callback(null, true);
    },

    // Some legacy browsers (IE11, various SmartTVs) choke on 204
    optionsSuccessStatus: 200,

    // CORS allow to receive cookie from request
    credentials: true,
};
