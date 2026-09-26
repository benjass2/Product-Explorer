import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map, Observable} from 'rxjs';
import {Product} from '../../domain/model/product.entity';
import {ProductResource, ProductSearchResponse} from '../resource/product.resource';
import {ProductAssembler} from '../assembler/product.assembler';



/**
 * Product API communication service
 * @remarks Handles HTTP communication with the DummyJSON API.
 * @author Benjamin Solorzano
 */


@Injectable({
  providedIn: 'root'
})

export class ProductApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.dummyJsonApiURL;

  /**
   * Retrieves products matching a query term.
   * @param query - Search term (e.g., 'phone' or 'laptop').
   * @param limit - Max number of items to retrieve (default: 12).
   * @returns Observable of Product domain entities array.
   */
  searchProducts(query:string,limit:number =12):Observable<Product[]>{
    const params = new HttpParams()
      .set('q', query)
      .set('limit', limit.toString());

    return this.http.get<ProductSearchResponse>(`${this.baseUrl}/products/search`,{params}).pipe(
      map(response=>ProductAssembler.toEntitiesFromResources(response.products))
    );
  }

  /**
   * Fetches single product details by id.
   * @param id - Product identifier.
   * @returns Observable of single Product entity.
   */

  getProductById(id:number): Observable<Product>{
    return this.http.get<ProductResource>(`${this.baseUrl}/products/${id}`)
      .pipe(
        map(resource => ProductAssembler.toEntityFromResource(resource))
      );
  }
}
