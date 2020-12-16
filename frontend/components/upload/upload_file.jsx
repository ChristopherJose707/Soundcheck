import React from 'react';

class UploadFile extends React.Component {
    constructor(props) {
        super(props)
    }

   render() {
       const {stepNumber, handleSongFile, handleFileClick} = this.props;

       if (stepNumber === 1) {
           return (
               <div className="upload-file-form">
                    <div className="upload-file-main">
                        <div className="upload-file-content">
                                <h1>What song would you like to upload?</h1>
                            {/* <button className="file-upload-button" > */}
                                <label class="custom-upload">
                                    <input type="file" 
                                        className="file-upload-input"
                                        onClick={e => e.stopPropagation()}
                                        onChange={handleSongFile}
                                        accept="audio/mpeg"
                                        title=""
                                    />
                                    Choose a file
                                </label>
                            {/* </button> */}
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