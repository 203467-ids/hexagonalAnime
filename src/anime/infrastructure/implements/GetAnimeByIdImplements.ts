import { Anime } from "../../domain/entities/Anime";
import { GetAnimeByIdRepository } from "../../domain/repositories/AnimeRepository";
import { pool } from "../database/pg";

export class GetAnimeByIdImplements implements GetAnimeByIdRepository {
  async getById(animeId: number): Promise<Anime | null> {
    const sql = "SELECT * FROM anime WHERE id = $1";
    const values = [animeId];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const animeData = result.rows[0];
        const anime: Anime = {
          id: animeData.id,
          nombre: animeData.nombre,
          genero: animeData.genero,
          año_emision: animeData.año_emision,
          descripcion: animeData.descripcion,
        };
        return anime;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
