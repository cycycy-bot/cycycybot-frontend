import Cookies from 'js-cookie';

const Auth = {
  states: {
    isAuthenticated: false,
    user: {},
  },
  logout(cb) {
    this.states.isAuthenticated = false;
    Cookies.remove('token');
    cb();
  },
  async authenticate() {
    const token = await Cookies.get('token');
    if (token) {
      const response = await fetch('http://localhost:5000/api/discord/getuser',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token,
          }),
        });
      console.log('%c[cycycy bot] => ', 'color:green;', 'Setting up user');
      const json = await response.json();
      if (json.code === 0 || json.error) {
        console.log('%c[cycycy bot] => ', 'color:red;', 'Error: ', json.error);
        this.states.isAuthenticated = false;
        return this.states.isAuthenticated;
      }
      this.states.isAuthenticated = true;
      this.states.user = json;
      console.log('%c[cycycy bot] => ', 'color:green', `User: ${json.id}`);
      return this.states;
    }
    this.states.isAuthenticated = false;
    return this.states.isAuthenticated;
  },
  getAuth() {
    return this.states.isAuthenticated;
  },
  getUser() {
    return this.states.user;
  },
};

export default Auth;
