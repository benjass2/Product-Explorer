import {Component, inject} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {environment} from '../../../../../environments/environment';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TranslatePipe, MatButtonToggleGroup, MatButtonToggle],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html',
})
export class Toolbar {
  private readonly translate = inject(TranslateService);
  public currentLanguage: string= 'en';

  readonly logoUrl = environment.logoApiURL;
  constructor() {
    this.translate.use('en');
  }

  public onLanguageChange(lang:string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
  }

}
