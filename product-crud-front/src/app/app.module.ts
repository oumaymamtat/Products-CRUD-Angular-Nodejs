import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';


import {ProductService} from './services/product.service';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { EditProdComponent } from './product/edit-prod/edit-prod.component';
import { AddProdComponent } from './product/add-prod/add-prod.component';
import { ProductsComponent } from './product/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EditProdComponent,
    AddProdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatSortModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents : [AddProdComponent,EditProdComponent]
})
export class AppModule { }
