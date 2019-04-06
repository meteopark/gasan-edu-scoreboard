import React from 'react';
import {Heroes} from "./Heroes";
import {Route, Switch} from "react-router-dom";
import {Register} from "./Register";

export class Index extends React.Component {


    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div>
                <p>Sub Menu</p>
                <Switch>
                    <Route exact path="/heroes/hero" component={Heroes}></Route>
                    <Route path="/heroes/register" component={Register}></Route>
                </Switch>
            </div>

        )
    }


}
