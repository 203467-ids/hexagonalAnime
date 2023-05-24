import { Request, Response } from "express";

import { GetAllAnimeUseCase } from "../../application/usecases/GetAllAnimeUseCase";

export class GetAllAnimeController {
  constructor(readonly getAllAnimeUseCase: GetAllAnimeUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const animeList = await this.getAllAnimeUseCase.run();
      res.status(200).json(animeList);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
