import React, { Component } from 'react';

// Fase de Montaje.
// Se ejecuta siempre y solamente una vez.
// Construye el componente en su estado inicial.
// Obtiene las props.

// Fase de Actualización.
// Se ejecuta cada vez que recibe nuevas props o se actualiza su estado.

// Fase de Desmontaje.
// Eliminación de listeners
// Eliminación de referencias al DOM (liberación de memoria)

class App extends Component {
	constructor(props) {
		console.log('constructor');
		super(props);

		this.state = {
			initialMessage: 'mensaje inicial'
		};
	}

	componentWillMount = () => {
		console.log('componentWillMount');
		// Se utiliza para preparar la configuración inicial del componente.
		//
		// Es probable que no tengamos la necesidad de usarlo, ya que prácticamente
		// todo lo que podemos hacer aquí, lo podemos hacer en el constructor.
		// Aunque es una buena idea utilizarlo para mejorar la legibilidad del código
		// si el constructor está muy codificado.
		//
		// Se invoca antes de montar el componente y no tenemos disponible el componente
		// en el DOM ni ninguno de sus Children.
	};

	componentDidMount = () => {
		console.log('componentDidMount');
		// Ideal para realizar llamadas a APIs, suscribirse a eventos, hacer setInterval.
		// Llamar a setState en este método implica un extra rendering, pero sucederá
		// antes de que el navegador actualice la pantalla y sea visible por el usuario.
	}

	handleClick = () => {
		this.setState({
			initialMessage: 'mensaje cambiado'
		});
	};

	render() {
		console.log('render');
		const { initialMessage } = this.state;

		return (
			<div>
				<h4>Ciclo de montaje</h4>
				{initialMessage}
				<button onClick={this.handleClick}>Cambiar mensaje</button>
			</div>
		);
	}
}

export default App;
