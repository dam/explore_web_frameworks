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
var hero_1 = require('./hero');
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new hero_1.Hero(1, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // NOTE: property for debug purpose
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-form',
            templateUrl: 'app/hero-form.component.html',
            directives: [angular2_1.NgFor, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
})();
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map