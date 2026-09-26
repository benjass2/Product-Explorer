import { Product } from '../../domain/model/product.entity';
import { ProductResource } from '../resource/product.resource';

/**
 * Product Assembler
 * @remarks Transforms external ProductResource DTOs into domain Product entities
 * @author Benjamin Solorzano
 */
export class ProductAssembler {

  public static toEntityFromResource(resource: ProductResource): Product {
    return new Product(
      resource.id,
      resource.title,
      resource.description,
      resource.category,
      resource.price,
      resource.rating,
      resource.thumbnail,
      resource.brand,
      resource.stock
    );
  }

  /**
   * Converts an array of ProductResource items into an array of Product domain entities
   * @param resources - Array of resources
   * @returns Array of Product entities
   */
  public static toEntitiesFromResources(resources: ProductResource[]): Product[] {
    return resources.map(resource => this.toEntityFromResource(resource));
  }
}
