import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RepositoriesDataService{
	constructor(private http: Http){}
	getRepositories(){
		let obsvData =  this.http.get('https://api.github.com/users/javiersvelez/repos');		
		let mappedData = obsvData.map(response => <Repository[]>response.json());
		return mappedData;
	}
}

