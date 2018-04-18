import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';

  constructor() { }

  ngOnInit() {
  }

}
