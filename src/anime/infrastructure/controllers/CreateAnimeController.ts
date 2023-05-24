import { Request, Response } from "express";

import { CreateAnimeUseCase } from "../../application/usecases/CreateAnimeUseCase";
import { Anime } from "../../domain/entities/Anime";

export class CreateanimeController {
  constructor(readonly createAnimeUseCase: CreateAnimeUseCase) {}
  async run(req: Request, res: Response) {
    const animeContent = req.body;

    const anime = await this.createAnimeUseCase.run(
      new Anime(
        0,
        animeContent.nombre,
        animeContent.genero,
        animeContent.año_emision,
        animeContent.descripcion
      )
    );
    res.status(201).json(anime);
  }
}
