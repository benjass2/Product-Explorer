import { Component, signal } from '@angular/core';
import {Toolbar} from './shared/presentation/components/toolbar/toolbar';
import {Footer} from './shared/presentation/components/footer/footer';
import {ProductCatalogue} from './digital-assets/presentation/views/product-catalogue/product-catalogue';

@Component({
  imports: [Toolbar,Footer,ProductCatalogue],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('product-explorer');
}
