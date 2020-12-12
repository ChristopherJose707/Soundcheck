import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class UploadDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { stepNumber, title, handleInput, cancel, handleSubmit,
                 handleFileClick, handlePhotoFile, photoUrl } = this.props;
        
        const photoPreview = this.props.photoUrl ? 
            <img className="upload-photo-preview" src={photoUrl} /> : null;

        
        if(stepNumber === 2) {
            return (
                
            )

        } else {
            return null;
        }
    }
};

export default UploadDetails;