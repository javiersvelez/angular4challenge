/* Javier Velez */

	import { Component } from '@angular/core';

	@Component({
	  selector: 'my-app',
	  styleUrls: ['app/app.component.css'],
	  template: `<h1>Javier Vélez <br>{{name}}</h1>
	  <repositories></repositories>`
	})
	export class AppComponent  { 
		name = 'GitHub - Repositorios';
	}
