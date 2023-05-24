import { Request, Response } from "express";

import { GetAnimeByIdUseCase } from "../../application/usecases/GetAnimeByIdUseCase";

export class GetAnimeByIdController {
  constructor(readonly animeById: GetAnimeByIdUseCase) {}

  async run(req: Request, res: Response) {
    const animeId = Number(req.params.id);

    const anime = await this.animeById.run(animeId);
    res.status(200).json(anime);
  }
}
