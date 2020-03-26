# Using Routing in Angular

### Route Guarding:

1. **app-routing.module**: Notice the 'canActivate' and 'canActivateChild' used with AuthGuard.
2. **auth.service**: This is just a mock authentication service. It's self-explanatory and needed for the AuthGuard.
3. **auth-guard.service**: There are special methods called 'canActivate' and 'canActivateChild.


### Child routing:

1. ~~App.module~~ **app-routing.module**: please read the comments about the 'children' property of the user and server routes.
2. **servers.component.html**: Look for the router-outlet. All child routes go there. 


### Preserving Query Params 

If you would like keep some query params from the current URL, and apply them to your navigation...

1. **servers.component.html**: notice that queryParam 'allowEdit' has a tertiary function determining it (allow server 3 can be edited). Clicking that will change the server component displayed.
2. **server.component.ts**: the 'edit' button triggers the onEdit() function. Notice the use of 'preserve' for the query params. 
3. **edit-server.component.ts**: Edit permission is false by default. In ngOnInit, we check the query params, and then set the permission as appropriate.


### Other topics

1. **Redirects**: see the app.module

