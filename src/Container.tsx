import React from 'react';
import App from "./App";
import Header from "./Header";
import Navigation from "./Navigation";
import ContentItem from "./ContentItem";
import Contents from "./Contents";
import Footer from "./Footer";
import Inputs from "./Inputs";
import Object_0 from "./Object_0";

function Container() {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <Contents  />
            <Inputs />
            <Footer/>
            <Object_0/>
            <ContentItem/>

        </div>
    );
}

export default Container;