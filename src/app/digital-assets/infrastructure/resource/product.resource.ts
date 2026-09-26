/**
 * Raw product response object contract from external DummyJSON API
 * @remarks Model externals provider response data fields
 * @author Benjamin Solorzano
 */ import {Product} from '../../domain/model/product.entity';

export interface ProductResource{
  id:number;
  title:string;
  description:string;
  category:string;
  price:number;
  rating:number;
  thumbnail:string;
  brand?:string;
  stock?:number;
}

/**
 * Product search wrapper contract
 * @author Benjamin Solorzano
 */

export interface ProductSearchResponse{
  products:ProductResource[];
  total:number;
  skip:number;
  limit:number;
}
