import React, { Component } from 'react';

class App extends Component {
	handleClick = e => {
		e.preventDefault();

		const name = this.inputName.value;
		const twitter = document.getElementById('twitter').value;
		console.log({ name, twitter });
	};

	render() {
		// La prop ref permite enlazar una variable con cualquier elemento del DOM.
		
		return (
			<div>
				<h4>Formularios</h4>
				<form>
					<p>
						<label htmlFor="name">Nombre: </label>
						<input
							name="name"
							placeholder="Introduce el nombre"
							ref={inputElement => (this.inputName = inputElement)}
						/>
					</p>
					<p>
						<label htmlFor="twitter">Twitter: </label>
						<input
							id="twitter"
							name="twitterAccount"
							placeholder="Introduce tu twitter"
						/>
					</p>
					<button onClick={this.handleClick}>Enviar</button>
				</form>
			</div>
		);
	}
}

export default App;
