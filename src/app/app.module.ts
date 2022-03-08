import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientFormComponent } from './client-details/client-form/client-form.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-details/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientFormComponent,
    ProductDetailsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
