import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public homeCaption: string = 'Hello World!';

  ngOnInit() {
  	console.log('this.homeCaption:', this.homeCaption);
  }
}
