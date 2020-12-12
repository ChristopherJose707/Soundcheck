import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UploadFile from './upload_file';

class Upload extends React.Component {
    constructor(props) {
        super(props)

        const { currentUser } = this.props;
        this.state = {
            stepNumber: 1,
            userId: currentUser,
            title: "",
            description: "",
            photoFile: null,
            songFile: null,
            photoUrl: "" 
        }
        
        this.handleFileClick = this.handleFileClick.bind(this);
        this.handleSongFile = this.handleSongFile.bind(this);
    }

    handleSongFile(e) {
        e.preventDefault();
        const file = e.target.files[0];
        if (file && file.type === "audio/mpeg") {
            this.setState({
                stepNumber: 2,
                title: file.name.split(".")[0],
                songFile: file
            })
        }
    };

    handleFileClick() {
        document.getElementById("file").click();
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

    }

    render() {
        return (
            <div>
                <NavbarContainer/>
                
                <div className="upload-page">
                    <div className="upload-header">
                        <div className="upload-header-left">
                            <li>Upload</li>
                            <li>Mastering</li>
                            <li>Pro Plans</li>
                        </div>
                        <div className="uploader-header-right">
                            <li>
                            <FontAwesomeIcon icon='external-link-alt' />
                            Creators on SoundCheck</li>
                        </div>
                    </div>

                    <UploadFile 
                        stepNumber={this.state.stepNumber} 
                        handleSongFile={this.handleSongFile}
                        handleFileClick={this.handleFileClick}
                    />
                </div>
            </div>
        
        )
    }
};

export default Upload;