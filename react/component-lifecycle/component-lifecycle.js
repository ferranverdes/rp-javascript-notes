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
	};

	handleClick = () => {
		this.setState({
			initialMessage: 'mensaje cambiado'
		});
	};

	componentWillReceiveProps = nextProps => {
		console.log('componentWillReceiveProps');
		// Se ejecuta siempre que el ciclo de actualización haya sido iniciado por recibir
		// nuevas props.
		// El valor de nextProps no importa, es decir, nextProps no significa que sean
		// distintas que las anteriores sino que pueden ser exactamente las mismas.
	};

	shouldComponentUpdate = (nextProps, nextState) => {
		console.log('shouldComponentUpdate');
		// En el caso que el ciclo de actualización haya sido iniciado por un cambio de
		// state en el propio compomente, shouldComponentUpdate será el primer método
		// que se ejecutará.
		// Su finalidad es decidir si se debe ejecutar de nuevo el método render del
		// componente y por lo tanto, debe devolver un valor boolean (por defecto true)
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
