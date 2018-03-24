import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
	static propTypes = {
		author: PropTypes.string.isRequired
	};

	render() {
		const { title, author, date, children } = this.props;

		return (
			<section style={{ borderBottom: '1px solid #000', marginBottom: 50 }}>
				<h2>{title}</h2>
				<p>
					<em>Escrito por {author}</em>
				</p>
				<p>{date}</p>
				<article>{children}</article>
			</section>
		);
	}
}

// Article.propTypes = {
// 	author: PropTypes.string.isRequired
// };

class App extends Component {
	render() {
		return (
			<div>
				<h4>Children & PropTypes</h4>
				<Article
					author="Ferran"
					date={new Date().toLocaleDateString()}
					title="Artículo sobre la prop children"
				>
					<p>
						Este es el contenido children
						<strong> Más contenido</strong>
					</p>
				</Article>
			</div>
		);
	}
}

export default App;
