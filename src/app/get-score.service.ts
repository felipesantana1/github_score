import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class GetScoreService {

  private name;

  constructor(private _http: Http) { }

  setUsername = function(name){
    this.name = name;
  };

  getUsername = function(){
    return this.name;  
  };

  getUserInfo = function(name){
    return this._http.get(`https://api.github.com/users/${name}`);
  }

}
