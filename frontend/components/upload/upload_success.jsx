import React from 'react';
import { Link } from 'react-router-dom';

class UploadSuccess extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        scrollTo(0, 0);
    }

    render() {
        const { stepNumber, songId, artist, title, description, photoUrl } = this.props;
       

        if(stepNumber === 3) {
            return (
              <div className="upload-success">
                <div className="success-song-details">
                    <div className="success-top-details">
                        <p className="success-song-artist">{artist}</p>
                        <h3 className="success-song-title">{title}</h3>
                    </div>
                    <div className="success-bottom-details">
                        <p className="success-song-complete">Upload Complete!</p>
                        <Link className="success-song-link" to={`/song/${songId}`}>
                            Go to your track.
                        </Link>
                    </div>
                </div>
              </div>
            );
        } else {
            return (null)
        }
    }
}

export default UploadSuccess;