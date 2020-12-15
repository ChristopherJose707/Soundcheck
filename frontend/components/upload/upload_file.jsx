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
                                <h1>What files would you like to upload?</h1>
                            <button >
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