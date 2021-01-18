import React from 'react';
import PublicationComponent from '../components/PublicationComponent';
import Footer from '../components/footer';

function publications() {
    document.title = "SMEARLab | Publications"
    return (
        <>
        <br/>
        <div class="pagePadding">
            <div id="header" class="fade-header">
                <br/>
                <font size="7" color="black">SMEAR</font>
                <font size="5"color="gray">Lab </font>
                <font color="black" size="5">| Publications</font>
                <hr width="100%"></hr><br/>
            </div>

            <div id="body" class="fade-content">
                <div id="body-text">
                    <font size="2">
                        <PublicationComponent/>
                    </font>
                </div>
                <Footer/>
            </div>
        </div>
        
        </>
    )
}

export default publications

