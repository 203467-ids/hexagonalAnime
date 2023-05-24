import * as Anime from "../../domain/entities/Anime";
import * as AnimeRepository from "../../domain/repositories/AnimeRepository";
import * as pg from "../database/pg";

export class GetAllAnimeImplements
  implements AnimeRepository.GetAllAnimeRepository
{
  async getAll(): Promise<Anime.Anime[] | null> {
    const sql = "SELECT * FROM anime";
    try {
      const result = await pg.pool.query(sql);
      const animes: Anime.Anime[] = result.rows.map((animeData: any) => ({
        id: animeData.id,
        nombre: animeData.nombre,
        genero: animeData.genero,
        año_emision: animeData.año_emision,
        descripcion: animeData.descripcion,
      }));
      return animes;
    } catch (error) {
      throw error;
    }
  }
}
