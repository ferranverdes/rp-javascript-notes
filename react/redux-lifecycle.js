/**
 * Reducers
 */

import PostsReducer from './posts-reducer';

const rootReducer = combineReducers({
	allPosts: PostsReducer
});

export default rootReducer;

//----------------------------------------------------------------------------//

import { GET_POSTS } from '../actions';

function postsReducer(state = {}, action) {
	switch (action.type) {
		case GET_POSTS:
			return [
				{ title: 'First Post', content: 'Hi' },
				{ title: 'Second Post', content: 'There' },
				{ title: 'Third Post', content: 'Bye' }
			];

		default:
			return state;
	}
}

/**
 * Actions
 */

export const GET_POSTS = 'GET_POSTS';

export function getPosts() {
	return {
		type: GET_POSTS
	};
}

/**
 * Component
 */

import { getPosts } from '../actions';

class PostIndex extends Component() {
  componentDidMount() {
    this.props.getPostsAction();
    // En el moment en que l'estat de redux canvia, es renderitzen de nou
    // els components associats a aquell estat (a través de la funció mapStateToProps)
  }

  render() {
    <div>{this.props.componentPosts}</div>
  }
}

function mapStateToProps(state) {
	// state is from function combineReducers()
	return {
		componentPosts: state.allPosts
	};
}

export default connect(mapStateToProps, {
  getPostsAction: getPosts
})(PostIndex);
