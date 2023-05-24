import { Anime as Anime } from "../entities/Anime";

export interface GetAnimeByIdRepository {
  getById(animeId: number): Promise<Anime | null>;
}

export interface CreateAnimeRepository {
  createAnime(anime: Anime): Promise<Anime | null>;
}

export interface GetAllAnimeRepository {
  getAll(): Promise<Anime[] | null>;
}
