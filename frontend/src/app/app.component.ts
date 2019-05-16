import { Component, OnInit } from '@angular/core';
import { TwitterService } from './services/twitter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TwitterService]
})
export class AppComponent implements OnInit{
  public tweets = [];
  constructor(private twitter: TwitterService) { }

  ngOnInit(){
    this.twitter.getTweets().then(all=>{
      console.log(all)
      this.tweets = all;
    })
  }
}
