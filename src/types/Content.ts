export interface Content {
  _id: string;
  title: string;
  rating: number;
  imageUrl: string;
  platformName: string;
  categoryName: string;
  typeName: string;
  produtionCompany: produtionCompany;
}

export interface produtionCompany {
  name: string;
  founded: number;
  country: string;
}
