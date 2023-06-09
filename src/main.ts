import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";

import { animeRouter } from "./anime/infrastructure/AnimeRouter";
import { config } from "./config";
import { healthRouter } from "./health/health-router";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/animes", animeRouter);
  app.use("/health", healthRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
