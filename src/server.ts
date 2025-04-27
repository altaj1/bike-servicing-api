import { Server } from "http";

import app from "./app";

// Establish database connection
const startServer = async () => {
  try {
    // Start Express server
    const server: Server = app.listen(6000, () => {
      console.log(`Server running on port: 6000`);
    });
    const exitHandler = () => {
      if (server) {
        server.close(() => {
          console.info("Server closed!");
        });
      }
      process.exit(1);
    };
    process.on("uncaughtException", (error) => {
      console.log(error);
      exitHandler();
    });

    process.on("unhandledRejection", (error) => {
      console.log(error);
      exitHandler();
    });
  } catch (error) {
    // Log if unable to connect to database
    console.error("Error starting server:", error);
  }
};

startServer();
