// File to define the different routes/endpoints.
const appRouter = (app, fs) => {
  const gradients = "./gradients.json";

  // default route
  app.get("/", (req, res) => {
    res.send("welcome to the react-gradients-api");
  });

  // Helper function to read from the json file.
  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  // Helper function to write to the json file.
  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  app.get("/gradients", (req, res) => {
    fs.readFile(gradients, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = appRouter;
