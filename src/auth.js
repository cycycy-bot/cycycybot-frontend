import Cookies from 'js-cookie';

class Auth {
  constructor() {
    this.authenticated = false;
  }

  logout(cb) {
    this.authenticated = false;
    Cookies.remove('token');
    cb();
  }

  isAuthenticated() {
    const token = Cookies.get('token');
    if (token) {
      this.authenticated = true;
      return this.authenticated;
    }
    this.authenticated = false;
    return this.authenticated;
  }
}

export default new Auth();
