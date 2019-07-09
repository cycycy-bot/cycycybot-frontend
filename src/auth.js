import Cookies from 'js-cookie';

class Auth {
  constructor() {
    this.states = {
      authenticated: false,
      user: {},
    };
  }

  logout(cb) {
    this.states.authenticated = false;
    Cookies.remove('token');
    cb();
  }

  async isAuthenticated() {
    const token = Cookies.get('token');
    if (token) {
      const response = await fetch('https://discordapp.com/api/users/@me',
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
      const json = await response.json();
      if (json.code === 0) {
        this.states.authenticated = false;
        return this.states.authenticated;
      }
      this.states.authenticated = true;
      this.states.user = json;
      return this.states;
    }
    this.states.authenticated = false;
    return this.states.authenticated;
  }
}

export default new Auth();
