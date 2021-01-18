import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Footer from '../components/footer';
function home() {
    document.title = "SMEARLab | Home"
    return (
        <>
        <br/>
        <div class="pagePadding">
            <div id="header" class="fade-header">
                <font size="20" color="black">SMEAR</font>
                <font size="5"color="gray">Lab</font><br/>
                <font size="2"><em>(Smell, Movement, Electrophysiology, and Response)</em></font>
                <hr width="100%"></hr><br/>
            </div>
            <div class="fade-content">
                <br/>
                <ImageSlider slides={SliderData}/>
                <Footer/>
            </div>
        </div>
        <br/><br/>
        </>
    )
}

export default home

