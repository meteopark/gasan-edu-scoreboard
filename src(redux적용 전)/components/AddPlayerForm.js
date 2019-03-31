import React from 'react';

class AddPlayerForm extends React.Component {

    textInput = React.createRef;

    handleSubmit = (e) => {

        e.preventDefault();
        // this.props.hanldeAddPlayer(this.state.playerName) // class일때는 this 붙이기
        this.props.hanldeAddPlayer(this.textInput.current.value) // class일때는 this 붙이기
        e.currentTarget.reset();
    }

    render(){

        return(
        <form onSubmit={this.handleSubmit}>
        <input type="text"
        ref={this.textInput}
        onChange={this.handleValue}
        required // html validation!!! 브라우저 마다 alert 메시지가 다 틀리다.
        placeholder="enter a playre's name" />
        <input type="submit" value="ADD PLAYER"/>
        </form>
        )
    }
}

export default AddPlayerForm
