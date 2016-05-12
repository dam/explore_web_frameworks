/// <reference path="../../node_modules/angular2/typings/tsd.d.ts" />
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var heroes_service_1 = require('./heroes-service');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.title = 'Tour of heroes';
        this.heroes = heroService.getHeroes();
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            template: "\n\t  <h1>{{title}}</h1>\n\t\t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t  <li *ng-for=\"#hero of heroes\" (click)=\"onSelect(hero)\" [ng-class]=\"getSelectedClass(hero)\">\n\t\t\t  <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<div *ng-if=\"selectedHero\">\n\t\t  <h2>{{selectedHero.name}} details!</h2>\n\t\t  <div><label>id: </label>{{selectedHero.id}}</div>\n\t\t  <div>\n\t\t    <label>name: </label>\n\t\t\t  <div><input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\"/></div>\n\t\t  </div>\n\t\t</div>\n\t\t",
            styles: ["\n\t\t.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n    .heroes .badge {\n      font-size: small;\n      color: white;\n      padding: 0.1em 0.7em;\n      background-color: #369;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -1px;\n    }\n    .selected { background-color: #EEE; color: #369; }\n\t"]
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [heroes_service_1.HeroService]);
//# sourceMappingURL=app.js.map