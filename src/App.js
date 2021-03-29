import React, { Fragment } from 'react';
import AdminMainLayout from './Components/Admin/AdminMainLayout';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (

    <Switch>

      {/* <AdminMainLayout /> */}
      <Route path="/admin" component={AdminMainLayout} />

    </Switch>

  );
}

export default App;
