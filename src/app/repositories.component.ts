import { Component } from '@angular/core';
import { Repository } from './repository';
import { RepositoriesDataService } from './repositories-data.service';


@Component({
	selector: 'repositories',
	templateUrl: 'app/repositories.component.html',
	styleUrls: ['app/repositories.component.css']
})

export class RepositoriesComponent{
	constructor(private repositoriesDataService: RepositoriesDataService){};
	repositories: Repository[];
	ngOnInit(){
		
		this.repositoriesDataService.getRepositories().subscribe(repositories => this.repositories = repositories);
		//this.repositories = this.repositoriesDataService.getRepositories();

	}
	totalRepositorios(){
		if (Array.isArray(this.repositories)){
			return this.repositories.length;
		}
	}


}