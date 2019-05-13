import React from 'react';
import MyNavbar from './MyNavbar';
import MyHero from './MyHero';
import MyPricing from './MyPricing';
import MyProduct from './MyProducts';
import MySignUp from './MySignUp';
import MyLogIn from './MyLogIn';

const App = () => {
    return (
        <div>
            <MyNavbar/>
            <MyHero/>
            <MyPricing/>
            <MyProduct/>
            <MySignUp/>
            <MyLogIn/>
        </div>
    );
};

export default App;
