import { LoginComponent } from './pages/login/login.component';
import { environment } from '../../../environments/environment.prod';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from '../../modules/main/body/app.component';
import { SharedModule } from '../shared/shared.module';
import { effectsOF } from '../../ngrx/effects/index.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from '../../ngrx/app.state';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AuthInterceptorProviders} from "@core/interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    HttpClientModule,//TODO: To use http functions
    BrowserAnimationsModule, //TODO: include dependency injetion providers for use with animations
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effectsOF),
    FormsModule
  ],
  providers: [
    AuthInterceptorProviders
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
