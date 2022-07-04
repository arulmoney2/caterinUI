import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-chef',
  templateUrl: './local-chef.component.html',
  styleUrls: ['./local-chef.component.css']
})
export class LocalChefComponent implements OnInit {
  title = 'Hi Local Chefs.';
  description = 'Please Sign In or Register to get started.';
  constructor() { }

  ngOnInit(): void {
  }

}
