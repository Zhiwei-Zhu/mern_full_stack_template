import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import required components
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import UserList from './UserList';

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={UserList}/>
        {/*pass the id through the EditUser component*/}
        <Route path="/edit-student/:id" component={EditUser}/>
        {/*set the path to create a new student to CreateUser component*/}
        <Route path="/create-student" component={CreateUser}/>
      </div>
    </HashRouter>
  );
};

export default App;
