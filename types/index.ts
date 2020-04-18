export type Movie = {
  id: number;
  adult: boolean;
  title: string;
  backdropPath?: string;
  budget?: number;
  genres?: Genre[];
  originalLanguage?: string;
  originalTitle?: string;
  overview?: string;
  popularity?: number;
  posterPath?: String;
  productionCompanies?: ProductionCompany[];
  runtime?: number;
  cast?: Actor[];
  releaseDate: string;
};

export type ProductionCompany = {
  name: string;
  logoPath: string;
  originCountry: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Actor = {
  id: number;
  name: string;
  gender: string;
  profile_path: string;
  character: string;
};
