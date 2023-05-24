import { GetAllAnimeRepository } from "../../domain/repositories/AnimeRepository";

export class GetAllAnimeUseCase {
  constructor(readonly getAllAnimeRepository: GetAllAnimeRepository) {
    // TODO document why this constructor is empty
  }

  async run() {
    const listAllAnime = await this.getAllAnimeRepository.getAll();
    return listAllAnime;
  }
}
