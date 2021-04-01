import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Socio Familiar';

  param = {value: 'world'};

  constructor(translate: TranslateService) {
    translate.addLangs(['es', 'nasa'])
      translate.setDefaultLang('es');
      translate.use('es');
  }

}
