import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { CustomMaterialModule } from './shared/material.module';
import { NavigationModule } from './navigation/navigation.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { ApiEExemplosComponent } from './api-e-exemplos/api-e-exemplos.component';
import { HttpClientModule } from '@angular/common/http';

export const options: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    ApiEExemplosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    CustomMaterialModule,
    NavigationModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(options),
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
