import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';

  displayname='';
  displayaddress='';
  displaycontact='';
  displayemail='';

  getValue(name:string, address:string,contact:string, email:string){
    this.displayname=name;
    this.displayaddress=address;
    this.displayemail=email;
    this.displaycontact=contact;
  }

}
