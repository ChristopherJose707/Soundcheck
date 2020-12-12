import {connect} from 'react-redux'
import Upload from './upload';
import { createSong } from '../../actions/song_actions';

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.currentUser]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        createSong: (song) => dispatch(createSong(song))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload)


