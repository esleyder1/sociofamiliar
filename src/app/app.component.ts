import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Socio Familiar';

  constructor(t: TranslateService) {
    t.addLangs(['es', 'nasa'])
      t.setDefaultLang('es');
      t.use('es');
  }

}
