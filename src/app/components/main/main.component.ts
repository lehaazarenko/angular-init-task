import { Component, Input } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() contactInfo: any;
  @Input() homeCaption: string;
  @Input() notFound: boolean;
  public notFoundCaption: string = 'Page not found';

  ngOnInit() {
    console.log('this.contactInfo:', this.contactInfo);
    console.log('this.homeCaption:', this.homeCaption);
    console.log('this.notFound:', this.notFound);
  }
}
