import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // When we want to do other things in addition to navigating, we implement a function to do so.
  onLoadServers(id: number) {
    // non-navigation stuff goes here.
    // Using the same params as was done in the Servers Component HTML
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'})
  }

  //=================================================================

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
