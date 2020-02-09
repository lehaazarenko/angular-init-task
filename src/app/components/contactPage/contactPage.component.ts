import { Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contactPage.component.html',
  styleUrls: ['./contactPage.component.css']
})
export class ContactPageComponent {
  public contactInfo: any = {
    name: 'Alexei Azarenko',
    email: 'myemail@gmail.com',
    telephoneNumber: '+375292929290'
  };

  ngOnInit() {
  	console.log('this.contactInfo:', this.contactInfo);
  }
}
