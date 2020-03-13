import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // When we want to do other things in addition to navigating, we implement a function to do so.
  onLoadServers() {
    // First we do the actual navigation.
    this.router.navigate(['/servers'])

  }

  //=================================================================

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
