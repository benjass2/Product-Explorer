import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  imports: [
    TranslatePipe
  ],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  /**
   * Datos requeridos del estudiante en el enunciado
   */
  public readonly developerCode: string ='U202422816';
  public readonly developerName: string ='Benjamin Solorzano Sullca';
}
