import React, { FC } from "react";
import { privateRoute, RoutesName } from "../../routes";
import { IRoute } from "../../models/IRoute";
import { Switch, Route, Redirect } from "react-router-dom";

const AppRouter: FC = () => {
  return (
    <Switch>
      {privateRoute.map((route: IRoute) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect to={RoutesName.HOME} />
    </Switch>
  );
};

export default AppRouter;
