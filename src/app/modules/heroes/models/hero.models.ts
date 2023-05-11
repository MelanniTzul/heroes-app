export interface HeroModels {
  id:number,
  superheroe:string,
  alter_ego:string,
  first_apearance:string,
  characters:string,
  alt_img?:string,
  publisher:[]

}

export enum Publisher{DCComics="DC Comics", MarverComics="Marvel Comics",}
