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
};

export type ProductionCompany = {
  name: string;
  logoPath: string;
  originCountry: string;
};

type Genre = {
  id: number;
  name: string;
};

type Actor = {
  id: number;
  name: string;
  gender: string;
  profilePath: string;
  character: string;
};
