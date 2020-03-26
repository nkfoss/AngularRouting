import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false; 

  // We inject our activateRoute, so we can access the query parameters and fragment
  constructor(private serversService: ServersService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    // Wisely, we subscribe to params instead of taking a snapshot. 
    // This is in case things change, such as edit permission.

    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false
      }
    );
    this.activatedRoute.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
