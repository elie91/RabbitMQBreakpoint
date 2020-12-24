const express = require("express");
const app = express();

// Loading application stack
(async () => {
    require("./config")(app);
    console.log("Loading config ...");
    await require("./models")(app);
    console.log("Loading models ...");
    require("./middlewares")(app);
    console.log("Loading middlewares ...");
    require("./controllers")(app);
    console.log("Loading controllers ...");
    require("./routes")(app);
    console.log("Loading routes ...");
    console.log(`App listening on http://localhost:${app.config.port}`);
    app.listen(app.config.port);
})();