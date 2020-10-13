import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world';
  isvalue:boolean = false;

  ngOnInit(){
    setInterval(() => this.change(),1000);
  }

  change(){
    this.isvalue = !this.isvalue
    }
  }

