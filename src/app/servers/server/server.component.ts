import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
   private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // Initial params
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    // Notice the use of '+' here, and in the subscription below.
    // This is to convert the string returned from params, into a number. We need a number because our
    // server id's are NOT strings, they are numbers. We cannot match without the correct type.
    // ** FUN FACT: When we parse params from our URL, it will ALWAYS be string! **

    // Update page when params change
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        let serverId = +params['id']
        this.server = this.serversService.getServer(serverId)
      }
    )
  }

}
