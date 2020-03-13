import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  onReloadPage() {

    this.router.navigate(['servers'])
  
      // Unlike the routerLink which always knows what component it resides in,
      // the navigate method doesn't know. It will do it from the root.
      // To remedy this we can use 'relativeTo' and 'Activated Route'

      // this.router.navigate(['servers'], {relativeTo: this.activatedRoute})
  }


  //===========================================

  constructor(private serversService: ServersService, 
    private router: Router,
    // private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
