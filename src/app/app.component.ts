import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kosher';
  subtitle = 'This is a card';
  body = 'body ...';

  ngOnInit():void {
    this.title = 'This Word !';
    this.subtitle = 'This is a modified Subtitle ..';
}

}
