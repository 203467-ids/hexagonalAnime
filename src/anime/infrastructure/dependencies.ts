import { CreateAnimeUseCase } from "../application/usecases/CreateAnimeUseCase";
import { GetAllAnimeUseCase } from "../application/usecases/GetAllAnimeUseCase";
import { GetAnimeByIdUseCase } from "../application/usecases/GetAnimeByIdUseCase";
import { CreateanimeController } from "./controllers/CreateAnimeController";
import { GetAllAnimeController } from "./controllers/GetAllAnimeController";
import { GetAnimeByIdController } from "./controllers/GetAnimeByIdController";
import { CreateAnimeImplements } from "./implements/CreateAnimeImplements";
import { GetAllAnimeImplements } from "./implements/GetAllAnimeImplements";
import { GetAnimeByIdImplements } from "./implements/GetAnimeByIdImplements";

const createAnimeImplements = new CreateAnimeImplements();
const getAllAnimeImplements = new GetAllAnimeImplements();
const getAnimeByIdImplements = new GetAnimeByIdImplements();

export const createAnimeUseCase = new CreateAnimeUseCase(createAnimeImplements);
export const getAllAnimeUseCase = new GetAllAnimeUseCase(getAllAnimeImplements);
export const getAnimeByIdUseCase = new GetAnimeByIdUseCase(
  getAnimeByIdImplements
);

export const createAnimeController = new CreateanimeController(
  createAnimeUseCase
);
export const getAllAnimeController = new GetAllAnimeController(
  getAllAnimeUseCase
);
export const getAnimeByIdController = new GetAnimeByIdController(
  getAnimeByIdUseCase
);
