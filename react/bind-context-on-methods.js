import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mouseX: 0,
			mouseY: 0
		};

		// this.handleMouseMove = this.handleMouseMove.bind(this);
		// El método bind() crea una nueva función, que cuando es llamada, asigna a
		// su operador this el valor entregado.
		// Resulta necesario aplicarlo, ya que el método de la clase se ejecutará en
		// el contexto de una respuesta a un evento del navegador y no en el contexto
		// del componente y por lo tanto, this no apuntará a la instancia de la clase.
	}

	handleMouseMove = event => {
		// Las arrow function se enlazan siempre al contexto desde donde se declaran.
		const { clientX, clientY } = event;

		this.setState({
			mouseX: clientX,
			mouseY: clientY
		});

		// El parámetro event es en evento sintético.
		// Un evento sintético es un evento especial de React que envuelve el evento
		// nativo para mejorar la compatibilidad entre navegadores.
	};

	render() {
		return (
			<div
				onMouseMove={this.handleMouseMove}
				style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}
			>
				<p>
					{this.state.mouseX}, {this.state.mouseY}
				</p>
			</div>
		);
	}
}

export default App;
