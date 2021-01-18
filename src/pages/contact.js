import React from 'react'
import Footer from '../components/footer';
import knightmouse from '../images/knightmouse.png'
import '../components/contact.css'

function contact() {
    document.title = "SMEARLab | Contact"
    return (
        <>
        
        <div class="pagePadding">
            <div id="header" class="fade-header">
                <br/>
                <font size="7" color="black">SMEAR</font>
                <font size="5"color="gray">Lab </font>
                <font color="black" size="5">| Contact</font>
                <hr width="100%"></hr><br/>
            </div>
            <div id="body" class="fade-content">
                <div id="body-text">

                    <div class="contact">
                    <div id="contact1">
                        <img src={knightmouse} alt="knightmouse"></img>
                    </div>
                    <div id="contact2">
                        We are always looking for talented individuals who are interested in our research!
                        <br/><br/><a href="https://www.uoregon.edu/">University of Oregon</a>
                        <br/>Huestis Hall, room 212 
                        <br />smear@uoregon.edu 
                        <br />541-346-4389
                    </div>
                    </div>

                </div>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default contact

