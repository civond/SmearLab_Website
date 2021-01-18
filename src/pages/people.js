import React from 'react';
import PeopleComponent from '../components/PeopleComponent';
import Footer from '../components/footer';

function people() {
    document.title = "SMEARLab | People"
    return (
        <>
            <div class='pagePadding'>
                <div id="header" class="fade-header">
                    <br/>
                    <font size="7" color="black">SMEAR</font>
                    <font size="5"color="gray">Lab </font>
                    <font color="black" size="5">| People</font>
                    <hr width="100%"></hr><br/>
                </div>
                <div id="body" class="fade-content">
                    <PeopleComponent/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default people

