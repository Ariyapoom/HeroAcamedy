import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {MessageService} from './massage.service'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserverService {

  constructor(private http : HttpClient,private messageService :MessageService) {
      
  }
  private log(message: string){
      this.messageService.add(` HeroService: ${message} `);
  }

  getHeroes (): Observable<any> {
    return this.http.get('http://localhost:3000/heros', )
  }
  
  deleteHeroes (name): Observable<any> {
    return this.http.delete('http://localhost:3000/hero/'+name)
  }

  postHeroes(hero) : Observable<any>{
    return this.http.post('http://localhost:3000/hero/',hero)
  }

}
