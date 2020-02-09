import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: './notFound.component.html',
  styleUrls: ['./notFound.component.css']
})
export class NotFoundComponent {
  public caption: string = 'Page not Found';

  ngOnInit() {
  	console.log('this.caption:', this.caption);
  }
}
