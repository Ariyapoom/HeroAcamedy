import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HeroComponent} from '../hero/hero.component'
import { Hero } from '../hero';
import { MyserverService } from '../myserver.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  
  @Input() hero : Hero
  @Output() update = new EventEmitter();
  wanttoadd = false;
  addedHero ={
    id: null,
    name:"",
    rating: 0
  };
  
  constructor(private heroservice : MyserverService ) { }

  ngOnInit() {
  }

  deleteHero(){
    console.log('deleted!!')
    this.heroservice.deleteHeroes(this.hero.name).subscribe(data =>{
      console.log('returnformserver')
      this.update.emit(null);
    })
  }
  
  toadd(){
    this.wanttoadd = !this.wanttoadd;
  }

  addHero(){
    console.log('added!!')
    this.toadd()
  }
}
