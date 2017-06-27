"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var repositories_data_service_1 = require("./repositories-data.service");
var RepositoriesComponent = (function () {
    function RepositoriesComponent(repositoriesDataService) {
        this.repositoriesDataService = repositoriesDataService;
    }
    ;
    RepositoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repositoriesDataService.getRepositories().subscribe(function (repositories) { return _this.repositories = repositories; });
        //this.repositories = this.repositoriesDataService.getRepositories();
    };
    RepositoriesComponent.prototype.totalRepositorios = function () {
        if (Array.isArray(this.repositories)) {
            return this.repositories.length;
        }
    };
    return RepositoriesComponent;
}());
RepositoriesComponent = __decorate([
    core_1.Component({
        selector: 'repositories',
        templateUrl: 'app/repositories.component.html',
        styleUrls: ['app/repositories.component.css']
    }),
    __metadata("design:paramtypes", [repositories_data_service_1.RepositoriesDataService])
], RepositoriesComponent);
exports.RepositoriesComponent = RepositoriesComponent;
//# sourceMappingURL=repositories.component.js.map