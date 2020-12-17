import React from 'react';

class UploadFile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        scrollTo(0,0)
    }

   render() {
       const {stepNumber, handleSongFile, handleFileClick} = this.props;

       if (stepNumber === 1) {
           return (
               <div className="upload-file-form">
                    <div className="upload-file-main">
                        <div className="upload-file-content">
                                <h1>What song would you like to upload?</h1>
                           
                                <label className="custom-upload">
                                    <input type="file" 
                                        className="file-upload-input"
                                        onClick={e => e.stopPropagation()}
                                        onChange={handleSongFile}
                                        accept="audio/*"
                                        title=""
                                    />
                                    Choose a file
                                </label>
                        </div>

                    </div>
               </div>
           )
       } else {
           return null;
       }
   }
}

export default UploadFile;