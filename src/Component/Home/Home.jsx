import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Home = () => {

    const user = use(AuthContext);

    console.log("Context :" , user)
    return (
        <div>

            
            <h2>Home</h2>
        </div>
    );
};

export default Home;