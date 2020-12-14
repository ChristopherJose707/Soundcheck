import { connect } from 'react-redux';
import {fetchSongs} from '../actions/song_actions';
import App from './App';

const mapDispatchToProps = dispatch => {
    return ({
        fetchSongs: () => dispatch(fetchSongs())
    })
};


export default connect(null, mapDispatchToProps)(App)