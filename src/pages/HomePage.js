import React from 'react';
import Hero from '../components/Hero';
import me from '../assets/images/me.png';
const HomePage = (props) => {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        </div>
    );
};
export default HomePage;
