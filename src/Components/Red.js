import React from 'react';
import Orange from './Orange'
import Yellow from './Yellow'
import { Route, Link, NavLink, Switch } from 'react-router-dom';

const Red = () => {
    return (
        <div>
            <h2 className="red">Red</h2>
            <NavLink exact to="/red">Red Only</NavLink>
            <NavLink exact to="/red/orange">Orange</NavLink>
            <NavLink exact to="/red/yellow">Yellow</NavLink>
            
                <Switch>
                    <Route path='/red/orange' component={Orange}></Route>
                    <Route path='/red/yellow' component={Yellow}></Route>
                </Switch>
        </div>
    );
};

export default Red;
