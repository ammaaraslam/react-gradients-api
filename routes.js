// File to define the different routes/endpoints.

const { db } = require("./database/admin");
const { v4: uuidv4 } = require("uuid");

const appRouter = (app) => {
  // default route
  app.get("/", (req, res) => {
    res.send("welcome to the react-gradients-api");
  });

  // Function to return all gradients at /gradients with a request method of GET.
  app.get("/gradients", (req, res) => {
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
        return res.status(200).send(response);
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
  });
  app.post("/gradients", (req, res) => {
    const generatedId = uuidv4();
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
        return res.status(200).send();
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
  });
};

module.exports = appRouter;
