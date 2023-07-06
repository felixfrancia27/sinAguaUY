import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import Swal from 'sweetalert2';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
// Add this line to import MatDatepickerModule
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoginComponent } from './login/login.component';

export function provideSwal() {
  return Swal;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    
    ImageDialogComponent,
         LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    FlexLayoutModule,

    // Add this line to import MatDatepickerModule into your app
    MatDatepickerModule
  ],
  providers: [
    { provide: 'Swal', useFactory: provideSwal }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
