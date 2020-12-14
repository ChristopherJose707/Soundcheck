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
                            <input type="file"
                                className="file-drop"
                                onChange={handleSongFile}
                                accept="audio/mpeg"
                                title=""
                            />
                            <h2>Drag and drop your tracks & albums here</h2>
                            <button onClick={handleFileClick}>
                                or choose files to upload 
                                <input type="file" 
                                    className="file-upload-button"
                                    onClick={e => e.stopPropagation()}
                                    onChange={handleSongFile}
                                    accept="audio/mpeg"
                                    title=""
                                />
                            </button>
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