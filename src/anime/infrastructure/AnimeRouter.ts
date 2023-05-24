import express from "express";

import {
  createAnimeController,
  getAllAnimeController,
  getAnimeByIdController,
} from "./dependencies";

export const animeRouter = express.Router();

animeRouter.post(
  "/create",
  createAnimeController.run.bind(createAnimeController)
);
animeRouter.get("/", getAllAnimeController.run.bind(getAllAnimeController));
animeRouter.get(
  "/:id",
  getAnimeByIdController.run.bind(getAnimeByIdController)
);
