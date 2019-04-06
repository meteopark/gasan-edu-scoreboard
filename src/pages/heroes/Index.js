import React from 'react';
import {Heroes} from "./Heroes";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Register} from "./Register";
import {Nav, NavItem} from "reactstrap";

export class Index extends React.Component {


    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink to="/heroes/hero" className="nav-link">heroes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/heroes/register" className="nav-link">Register</NavLink>
                    </NavItem>
                </Nav>
                <Switch>
                    <Route path="/heroes/hero" component={Heroes}></Route>
                    <Route path="/heroes/register" component={Register}></Route>
                    <Route path="/heroes" render={() => <Redirect to="/heroes/hero" />}></Route>
                </Switch>
            </div>

        )
    }


}
