import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import auth from '../../auth';

const ProtectedRoute = withRouter(({ history, component: Component, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.authenticate().then((res) => {
      if (res.isAuthenticated) {
        return setIsLoading(false);
      }
      return auth.logout(() => { history.replace('/'); });
    });
  }, [history]);

  return (
    <React.Fragment>
      {
        isLoading
          ? <div>Loading...</div>
          : (
            <Route
              {...rest}
              render={props => <Component {...props} />}
            />
          )
      }

    </React.Fragment>
  );
});
export default ProtectedRoute;
