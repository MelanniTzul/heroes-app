export interface Hero {
  id:string;
  superhero:string;
  alter_ego:string;
  first_appearance:string;
  characters:string;
  alt_img?:string;
  publisher:Publisher;

}

export enum Publisher{
  DCComics="DC Comics",
  MarverComics="Marvel Comics",
  }
