// This is SOLELY used with the AuthGuard. It's not meant to be an official AuthService

export class AuthService {

    // Initially not logged in.
    loggedIn = false;

    // Here we are simulating authentication, which can take a little bit of time.
    // So we use a Promise here...
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout( () => {
                    resolve(this.loggedIn)
                }, 800);
            }
        );
        return promise
    }

    // Self-explanatory methods
    logIn() { this.loggedIn = true }
    logout() { this.loggedIn = false }
}