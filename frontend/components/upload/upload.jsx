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

        this.handleSongFile = this.handleSongFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    componentDidMount() {
        scrollTo(0,0)
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
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        
        fileReader.onloadend = () => {
            this.setState({
                photoFile: file,
                photoUrl: fileReader.result
            })
        }

        if(file) {
            fileReader.readAsDataURL(file);
        }
    }

    

    render() {

        return (
            <div>
                <NavbarContainer/>
                <div className="upload-page">
                <div className="upload-top-div"></div>
                    <div className="upload-header">
                        <ul className="upload-header-content">
                            <li id="upload-header-text" className="upload-header-li">Upload</li>
                            <li id="strike" className="upload-header-li">Mastering</li>
                            <li id="strike" className="upload-header-li">Pro Plans</li>
                            <li>
                            <FontAwesomeIcon className="upload-header-logo" icon='external-link-alt' />
                            Creators on SoundCheck</li>
                        </ul>
                    </div>
                    <div className="upload-main">
                        <div className="upload-background"></div>
                        <UploadFile 
                            stepNumber={this.state.stepNumber} 
                            handleSongFile={this.handleSongFile}
                        />

                        <UploadDetails 
                            stepNumber={this.state.stepNumber}
                            title={this.state.title}
                            handleInput={this.handleInput}
                            handleSubmit={this.handleSubmit}
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
            </div>
        
        )
    }
};

export default Upload;