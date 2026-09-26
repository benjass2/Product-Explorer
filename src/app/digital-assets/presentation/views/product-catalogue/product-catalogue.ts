import {Component, inject, OnInit} from '@angular/core';
import {ProductDetailDialog} from '../../components/product-detail-dialog/product-detail-dialog';
import {Product} from '../../../domain/model/product.entity';
import {MatDialog} from '@angular/material/dialog';
import {ProductStoreService} from '../../../application/product.store';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TranslatePipe} from '@ngx-translate/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';
import {CurrencyPipe} from '@angular/common';

@Component({
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    TranslatePipe,
    MatProgressSpinner,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    MatButton,
    CurrencyPipe
  ],
  selector: 'app-product-catalogue',
  styleUrl: './product-catalogue.css',
  templateUrl: './product-catalogue.html',
})
export class ProductCatalogue implements OnInit {
  readonly store = inject(ProductStoreService);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    // Carga inicial por defecto con término 'phone'
    this.store.loadProducts('phone');
  }

  /**
   * Handles term changes via toggle buttons.
   * @param term - Selected category term ('phone' | 'laptop').
   */
  onTermChange(term: 'phone' | 'laptop'): void {
    if (term) {
      this.store.loadProducts(term);
    }
  }

  /**
   * Opens modal dialog displaying full product details.
   * @param product - Selected product entity.
   */
  openDetails(product: Product): void {
    this.dialog.open(ProductDetailDialog, {
      width: '500px',
      data: product
    });
  }
}
