import React from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import ContentItem from "./ContentItem";
import Contents from "./Contents";
import Footer from "./Footer";
function Container() {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
{/*            <ContentItem/>
            <ContentsNav/>
*/}
            <Contents />
            <Footer/>
        </div>
    );
}

export default Container;