import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // "hero" must be a Input property, b/c it's being used by another Component.
  // We are passing in this variable here.
  @Input() hero: Hero;

  // The ActivatedRoute holds information about the route to this instance of
  // the HeroDetailComponent. This component is interested in the route's bag
  // of parameters extracted from the URL. The "id" parameter is the id of the
  // hero to display.
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // Route parameters are always strings. The JavaScript (+) operator
    // converts the string to a number, which is what a hero id should be.
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
     this.heroService.updateHero(this.hero)
       .subscribe(() => this.goBack());
   }

  goBack(): void {
    this.location.back();
  }

}
