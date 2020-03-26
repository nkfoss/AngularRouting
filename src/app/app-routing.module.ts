import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { ServersComponent } from "./servers/servers.component"
import { ServerComponent } from "./servers/server/server.component"
import { EditServerComponent } from "./servers/edit-server/edit-server.component"
import { UsersComponent } from "./users/users.component"
import { UserComponent } from "./users/user/user.component"
import { HomeComponent } from "./home/home.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { AuthGuard } from "./auth-guard.service"

const appRoutes: Routes = [

    { path: '', component: HomeComponent },
  
    // The :id and :name are dynamic parameters. 
    // This children property allows us to use nested routing.
    // CanActivate allows us to use our AuthGuard for servers and ALL child routes.
    // CanActivateChild makes this so it applies ONLY to the child routes.
    
    { path: 'servers', 
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],
    component: ServersComponent, 
    children: [ 
      { path: ':id', component: ServerComponent }, 
      { path: ':id/edit', component: EditServerComponent } ] 
    },
  
    { path: 'users', 
    component: UsersComponent, 
    children: [
      {path: ':id/:name', component: UserComponent}
    ] },
  
    // Here we handle 404 errors, and also use redirection.
    // *** IMPORTANT: Make sure the wildcard route is the LAST route on your route list.
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found'},
  
  ];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
    // We outsource our routes by using the exports array.
    // This simply tells angular, if I add THIS (AppRouting) module to the imports of another module... 
     // ...then what should be accessible?
 })

 export class AppRoutingModule {

}