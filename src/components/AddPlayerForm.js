import React from 'react';

class AddPlayerForm extends React.Component {

textInput = React.createRef;

// constructor(props){

// super(props);

// this.state = {
// playerName: '',
// }
// }

// handleValue = (e) => {
// this.setState({playerName: e.target.value});
// }

// submit, 하이퍼링크등 깜빡임을 다 막아 줘야함 ( 앵귤러는 알아서 해줌 ), SPA에서는 변수 초기화 등 이런 걸 상상할 수 없다.
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
