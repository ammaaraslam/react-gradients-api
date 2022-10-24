// File to define the different routes/endpoints.

const { db } = require("./database/admin");
const { v4: uuidv4 } = require("uuid");

// Function containing all API routes
const appRouter = (app) => {
  // Default route - homepage
  app.get("/", (req, res, next) => {
    res.json("welcome to react-gradients-api");
  });

  // Function to return all gradients at /gradients with a request method of GET.
  app.get("/gradients", (req, res, next) => {
    // Connecting and retrieving all gradients from the database.
    (async () => {
      try {
        let query = db.collection("gradients");
        let response = [];
        await query.get().then((querySnapshot) => {
          let docs = querySnapshot.docs;
          for (let doc of docs) {
            const selectedItem = {
              id: doc.id,
              name: doc.data().name,
              css: doc.data().css,
              tailwind: doc.data().tailwind,
              colors: doc.data().colors,
            };
            response.push(selectedItem);
          }
        });
        return res.status(200).json(response);
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
    })();
  });

  // Function to add a gradient to the database at the /gradients endpoint with a request method of POST.
  app.post("/gradients", (req, res, next) => {
    // Constant that holds a random and unique UUID every time a POST request is made.
    const generatedId = uuidv4();

    // Connecting and adding request body to database.
    (async () => {
      try {
        await db
          .collection("gradients")
          .doc("/" + generatedId + "/")
          .create({
            name: req.body.name,
            css: req.body.css,
            tailwind: req.body.tailwind,
            colors: req.body.colors,
          });
        return res.status(200).json();
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
    })();
  });
};

module.exports = appRouter;
