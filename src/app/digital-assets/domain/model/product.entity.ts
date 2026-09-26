/**
 * Product domain Entity
 * @remarks Represents a catalog product within the core business logic.
 * @author Benjamin Solorzano
 */

export class Product{
  constructor(
    public readonly id:number,
    public readonly title:string,
    public readonly description:string,
    public readonly category:string,
    public readonly price:number,
    public readonly rating:number,
    public readonly thumbnail:string,
    public readonly brand?:string,
    public readonly stock?:number,
  ) {}
}
