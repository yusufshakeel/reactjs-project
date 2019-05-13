import React from 'react';
import heroImg from './../image/hero.jpg';

class MyHero extends React.Component {

    render() {

        return (
            <div id="home">
                <img className="img-fluid" src={heroImg} alt=""/>
            </div>
        )

    }

}

export default MyHero;
