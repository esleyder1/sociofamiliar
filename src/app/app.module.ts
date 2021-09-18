import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { CommonModule,HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbeneficiarioComponent } from './components/add-beneficiario/add-beneficiario.component';
import { beneficiarioDetailsComponent } from './components/beneficiario-details/beneficiario-details.component';
import { beneficiariosListComponent } from './components/beneficiarios-list/beneficiarios-list.component';

//i18n
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import {TranslateModule, TranslateLoader, MissingTranslationHandler} from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}


@NgModule({
  declarations: [
    AppComponent,
    AddbeneficiarioComponent,
    beneficiarioDetailsComponent,
    beneficiariosListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [DatePipe,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
