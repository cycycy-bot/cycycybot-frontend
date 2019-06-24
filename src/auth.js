import Cookies from 'js-cookie';

class Auth {
    constructor() {
        this.authenticated = false;
    }

    // callUser() {
        
    //     fetch('http://discordapp.com/api/users/@me', {
    //         method: 'get',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`,
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(user => {
    //         if (user.username) {
    //             this.authenticated = true;
    //             window.location.replace('/banphrase');
    //         } else {
    //             return this.authenticated=false;
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }

    logout(cb) {
        this.authenticated = false;
        Cookies.remove('token');
        cb();
    }

    isAuthenticated() {
        let token = Cookies.get('token');
        if (token) {
            return this.authenticated = true;
        } else {
            return this.authenticated = false;
        }
    }
}

export default new Auth();