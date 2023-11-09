import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'check-router';
  isTrue :boolean = true;
  isAdmin:boolean =false;
  imgPath :string = 'https://ychef.files.bbci.co.uk/976x549/p02y4d6r.jpg';
  difPath:string ='https://m.media-amazon.com/images/I/91kR5pWBpcL.jpg'
}
