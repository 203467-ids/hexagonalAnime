import { Anime as Anime } from "../../domain/entities/Anime";
import { CreateAnimeRepository } from "../../domain/repositories/AnimeRepository";
import { pool } from "../database/pg";

export class CreateAnimeImplements implements CreateAnimeRepository {
  async createAnime(anime: Anime): Promise<Anime | null> {
    const sql =
      "INSERT INTO anime (nombre, genero, año_emision, descripcion) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [
      anime.nombre,
      anime.genero,
      anime.año_emision,
      anime.descripcion,
    ];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const createdAnimeData = result.rows[0];
        const createdAnime: Anime = {
          id: createdAnimeData.id,
          nombre: createdAnimeData.nombre,
          genero: createdAnimeData.genero,
          año_emision: createdAnimeData.año_emision,
          descripcion: createdAnimeData.descripcion,
        };
        return createdAnime;
      }
      return null;
    } catch (err) {
      throw err;
    }
  }
}
