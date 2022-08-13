// File to define the different routes/endpoints.
const appRouter = (app) => {
  // default route
  app.get("/", (req, res) => {
    res.send("welcome to the react-gradients-api");
  });
};

module.exports = appRouter;
