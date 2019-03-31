import React from 'react';
import connect from 'react';
import {addPlayer} from '../redux/actions'; // import 시킬때는  { }

class AddPlayerForm extends React.Component {

    textInput = React.createRef;

    constructor(props) {
        super(props);
        // this.state = {
        //   playerName: ''
        // }
    }


    handleSubmit = (e) => {

        e.preventDefault();
        // this.props.hanldeAddPlayer(this.state.playerName) // class일때는 this 붙이기
        this.props.hanldeAddPlayer(this.textInput.current.value) // class일때는 this 붙이기
        e.currentTarget.reset();
    }

    render(){

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.textInput}
                       placeholder="enter a player's name" required></input>
                <input type="submit" value="Add Player"></input>
            </form>
        );

    }
}

export default connect(null, {addPlayer})(AddPlayerForm);
