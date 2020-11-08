import React from 'react';
import { BrowserRouter as Router , Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Row , Col} from 'react-bootstrap';
import Hero from '../components/Hero';

function HomePage(props){
    return (
        <Hero title ={props.title} subTitle = {props.subTitle} text = {props.text}/>
    );
}
export default HomePage;