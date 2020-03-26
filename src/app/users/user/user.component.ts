import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: {id: number, name: string};

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    // Snapshot gives you information about the route when the component is FIRST loaded
    // ...we're just getting the ID and name from the URL.
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    };

    // Params outside of snapshots are observables, and unlike snapshots, can be used
    // after the first load. It fires whenever new data is sent thru.
    // This is useful if we are already on the page we want, but need to view different info.
    this.activeRoute.params.subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name']
        }
    );

    // *** IMPORTANT: In the background, when this component is destroyed, Angular unsubscribes from the params.
    // This is important. Just in case, you can implement the un-subscribe in ngOnDestroy.
    // You'd implement it like this:

    // (property)
    // paramsSubscription: Subscription;

    // (inside ngOnInit)
    // {.... this.paramsSubscription = this.route.params.subscribe(
    //    (params: Params) => .. etc. same thing.. }

    // ngOnDestroy() { this.paramsSubscription.unsubscribe()}

    }


  }


