// ./src/components/Rainbow.js
import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import Red from './Red'
import Green from './Green'
import Blue from './Blue'
import Violet from './Violet'

const Rainbow = () => (
        <>
            <h1>Rainbow Router!</h1>
                <NavLink activeClassName='parent-active' to="/red">Red</NavLink>
                <NavLink activeClassName='parent-active' to="/green">Green</NavLink>
                <NavLink activeClassName='parent-active' to="/blue">Blue</NavLink>
                <NavLink activeClassName='parent-active' to="/violet">Violet</NavLink>

            
            <div id="rainbow">
                <Switch>
                    <Route path='/red' component={Red}></Route>
                    <Route path='/green' component={Green}></Route>
                    <Route path='/blue' component={Blue}></Route>
                    <Route path='/violet' component={Violet}></Route>
                </Switch>
            </div>
        </>

);

export default Rainbow;
// { <BrowserRouter>
    // <NavLink exact={true} activeStyle={{ fontWeight: "bolder" }} to="/">App</NavLink>
    // <NavLink exact={true} activeClassName="red" to="/users">Users</NavLink>
    // <NavLink exact={true} activeClassName="blue" to="/hello">Hello</NavLink>
    // <NavLink exact={true} activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
//     <NavLink exact={true} to="/" onClick={handleClick}>App with click handler</NavLink>

//     <Switch>
//         <Route path='/' component={App} />
//         {/* {<Route exact path='/' render= {(this.props.currentUser) ? <App /> : <Redirect to='/users' /> } />} */}
//         <Route path='/users' render={() => <Users users={users} />} />
//         <Route path='/users/:userId' render={(props) => <Profile users={users} {...props} />} />
//         <Route render={() => <h1>Page Not Found</h1>} />
//     </Switch>
// </BrowserRouter>
//   ); }
