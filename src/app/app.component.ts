import { Component } from '@angular/core';
import { GetScoreService } from './get-score.service'
// import { HttpModule } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';

  name;
  score;

  constructor(private _http: GetScoreService){ }

  onSubmit(){
    this._http.getUserInfo(this.name).subscribe(
      (response) => {
        this.score = response.json()['followers'] + response.json()['public_repos'];
      },
      (err) => {console.log(err);}
    )
    this.name = undefined;
  }
}
