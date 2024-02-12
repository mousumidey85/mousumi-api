const userRouter = require("./Routes/user.route");


const initRoutes = (app) => {
    app.use(`/user`, userRouter());
}

module.exports = initRoutes;