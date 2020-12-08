import React from 'react';
import GreetingContainer from "./user_auth_testing/greeting_container";
import ModalContainer from "./modal/modal_container";

const App = () => {
    return (
        <div>
            <ModalContainer />
            <h1>Soundcheck!</h1>
            <GreetingContainer />
        </div>
    )
};

export default App