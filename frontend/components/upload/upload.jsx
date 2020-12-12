import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UploadFile from './upload_file';
import UploadDetails from './upload_details';
import UploadSuccess from './upload_success';


class Upload extends React.Component {
    constructor(props) {
        super(props)

        const { currentUser } = this.props;
        this.state = {
            stepNumber: 1,
            userId: currentUser.id,
            title: "",
            description: "",
            photoFile: null,
            songFile: null,
            photoUrl: "" 
        }

        this.handleFileClick = this.handleFileClick.bind(this);
        this.handleSongFile = this.handleSongFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
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

    cancel() {
        this.setState({
            stepNumber: 1,
            title: "",
            genre: "",
            description: "",
            songFile: null,
            songUrl: ""
        })
    }

    handleFileClick() {
        document.getElementById("file").click();
    };

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('song[user_id]', this.state.userId);
        formData.append('song[title]', this.state.title);
        formData.append('song[description]', this.state.description);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[song]', this.state.songFile);
        if (this.state.photoFile) {
            formData.append('song[photo]', this.state.photoFile)
        }
    
        this.props.createSong(formData).then(song => {
            this.setState({
                songId: song.song.id,
                stepNumber: 3
            });
        });

    };

    handlePhotoFile(e) {
        e.preventDefault();
        const file = e.target.files[0];

        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = () => {
                this.setState({
                    photoFile: file,
                    photoUrl: fileReader.result
                })
            }
        }
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

                    <UploadDetails 
                        stepNumber={this.state.stepNumber}
                        title={this.state.title}
                        handleInput={this.handleInput}
                        handleSubmit={this.handleSubmit}
                        handleFileClick={this.handleFileClick}
                        handlePhotoFile={this.handlePhotoFile}
                        photoUrl={this.state.photoUrl}
                    />

                    <UploadSuccess 
                        stepNumber={this.state.stepNumber}
                        songId={this.state.songId}
                        artist={this.props.currentUser.display_name}
                        title={this.state.title}
                        description={this.state.description}
                        songUrl={this.state.songUrl}
                    />
                </div>
            </div>
        
        )
    }
};

export default Upload;