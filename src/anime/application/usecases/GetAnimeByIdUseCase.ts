import { GetAnimeByIdRepository } from "../../domain/repositories/AnimeRepository";

export class GetAnimeByIdUseCase {
  constructor(readonly getAnimeByIdRepository: GetAnimeByIdRepository) {}

  async run(animeId: number) {
    const anime = await this.getAnimeByIdRepository.getById(animeId);
    return anime;
  }
}
