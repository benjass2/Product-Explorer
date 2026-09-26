import {computed, inject, Injectable, signal} from '@angular/core';
import {ProductApiService} from '../infrastructure/services/product-api.service';
import {Product} from '../domain/model/product.entity';

/**
 * Reactive state store for digital asset products using Angular Signals.
 * @remarks Manages active filter, loading state, error state, and cached product collections.
 * @author Benjamin Solorzano
 */
@Injectable({
  providedIn: 'root'
})

export class ProductStoreService {

  private readonly productApiService = inject(ProductApiService);

  private readonly _products = signal<Product[]>([]);
  private readonly _selectedTerm = signal<'phone'|'laptop'>('phone');
  private readonly _isLoading = signal<boolean>(false);
  private readonly _errorMessage = signal<string | null>(null);

  public readonly products = this._products.asReadonly();
  public readonly selectedTerm = this._selectedTerm.asReadonly();
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly errorMessage = this._errorMessage.asReadonly();
  public readonly totalProducts = computed(() => this._products().length);

  loadProducts(term: 'phone' | 'laptop') {
    this._selectedTerm.set(term);
    this._isLoading.set(true);
    this._errorMessage.set(null);

    this.productApiService.searchProducts(term, 12).subscribe({
      next: (data) => {
        this._products.set(data);
        this._isLoading.set(false);
      },
      error: (error) => {
        const message = error?.message || 'Error loading products from server';
        this._errorMessage.set(message);
        this._isLoading.set(false);
      }
    });
  }

}
