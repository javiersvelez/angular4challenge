/* Javier Velez */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RepositoriesComponent } from './repositories.component';
import { AppComponent }  from './app.component';
import { FormsModule} from '@angular/forms';
import { RepositoriesDataService } from './repositories-data.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ 
  	AppComponent,
  	RepositoriesComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:	[ RepositoriesDataService]
})
export class AppModule { }
