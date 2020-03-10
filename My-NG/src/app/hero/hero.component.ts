import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-hero';
import { Hero } from '../hero';
import { MyserverService } from '../myserver.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero 
  

  constructor(private heroservice : MyserverService) { }

  ngOnInit() {
    this.heroservice.getHeroes().subscribe((data)=>{
      console.log(data);
      this.heroes = data.data;
    })
    //this.heroes = _.sortBy(this.heroes,['name','rating']);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  update(){
    console.log('Heeeeeeeeeeeeeeeeeelllll');
    this.heroservice.getHeroes().subscribe((data)=>{
      console.log(data);
      this.heroes = data.data;
    })
  }


}
