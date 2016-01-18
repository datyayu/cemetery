import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Hero} from './hero';


@Component({
    selector: 'my-app',
    directives: [HeroDetailComponent],
    providers: [HeroService],
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero"(click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `
})
export class AppComponent implements OnInit {
    public title : string;
    public heroes : Hero[];
    public selectedHero : Hero;
    
    constructor(private _heroService : HeroService) {
        this.title = 'Tour of Heroes :D';
    }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    onSelect(hero : Hero) {
        this.selectedHero = hero;
    }
    
    getHeroes() {
        this._heroService.getHeroes();
    }
}