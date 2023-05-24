import { Anime } from "../../domain/entities/Anime";
import { CreateAnimeRepository } from "../../domain/repositories/AnimeRepository";

export class CreateAnimeUseCase {
  constructor(readonly createAnimeRepository: CreateAnimeRepository) {
    // TODO document why this constructor is empty
  }

  async run(anime: Anime) {
    const createAnime = await this.createAnimeRepository.createAnime(anime);
    return createAnime;
  }
}
