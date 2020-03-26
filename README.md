# Using Routing in Angular

### Child routing:

1. ~~App.module~~ **Routing.module**: please read the comments about the 'children' property of the user and server routes.
2. **servers.component.html**: Look for the router-outlet. All child routes go there. 

### Preserving Query Params 

If you would like keep some query params from the current URL, and apply them to your navigation...

1. **servers.component.html**: notice that queryParam 'allowEdit' has a tertiary function determining it (allow server 3 can be edited). Clicking that will change the server component displayed.
2. **server.component.ts**: the 'edit' button triggers the onEdit() function. Notice the use of 'preserve' for the query params. 
3. **edit-server.component.ts**: Edit permission is false by default. In ngOnInit, we check the query params, and then set the permission as appropriate.

### Other topics

1. **Redirects**: see the app.module

