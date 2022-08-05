import React from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import ContentItem from "./ContentItem";
import Contents from "./Contents";
import Footer from "./Footer";
import Inputs from "./Inputs";

function Container() {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
{/*            <ContentItem/>
            <ContentsNav/>
*/}
            <Contents  />
            <Inputs />
            <Footer/>
        </div>
    );
}

export default Container;