import React from 'react';

class UploadFile extends React.Component {
    constructor(props) {
        super(props)
    }
    
   render() {
       const {stepNumber, handleSongFile, handleFileClick} = this.props;

       if (stepNumber === 1) {
           return (
               <div>

               </div>
           )
       } else {
           return null;
       }
   }
}

export default UploadFile;