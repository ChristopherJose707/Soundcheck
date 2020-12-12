import React from 'react';
import { Link } from 'react-router-dom';

class UploadSuccess extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const { stepNumber, songId, artist, title, description } = this.props;
        if(stepNumber === 3) {
            return (
                <div className="upload-success">
                    <div className="success-song-detais">
                        <img></img>
                        <p className="success-song-artist">{artist}</p>
                        <h3 className="success-song-title">{title}</h3>
                        <p className="success-song-description">{description}</p>
                        <p className="success-song-complete">Upload Complete.</p>
                        <Link className="success-song-link" 
                            to={`/song/${songId}`}>Go to your track.</Link>
                    </div>
                </div>
            )
        } else {
            return (null)
        }
    }
}

export default UploadSuccess;