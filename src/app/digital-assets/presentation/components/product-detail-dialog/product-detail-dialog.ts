import {Component, inject, input} from '@angular/core';
import {Product} from '../../../domain/model/product.entity';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  imports: [
    TranslatePipe,
    CurrencyPipe,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  selector: 'app-product-detail-dialog',
  styleUrl: './product-detail-dialog.css',
  templateUrl: './product-detail-dialog.html',
})
/**
 * Product detail modal dialog.
 * @remarks Displays full metadata for a selected product.
 * @author Benjamin Solorzano
 */
export class ProductDetailDialog {
  readonly product: Product = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ProductDetailDialog>);

  close(): void {
    this.dialogRef.close();
  }
}
