import React from 'react';
import ResearchButtons from '../components/research-tabs/ResearchButtons';
import Footer from '../components/footer';

function research() {
  document.title = "SMEARLab | Research"
    return (
        <>
        <div class="pagePadding">
          <div id="header" class="fade-header">
            <br/>
            <font size="7" color="black">SMEAR</font>
            <font size="5"color="gray">Lab </font>
            <font color="black" size="5">| Research</font>
            <hr width="100%"></hr><br/>
          </div>

          <div class="fade-content" id="body">
            <div id="body-text">
              <div> 
                Mice have an excellent sense of smell – much of their genome encodes
                odorant receptors (over 1000 genes), and a large portion of their brain
                processes olfactory information. These neural features support a rich
                repertoire of olfactory behaviors. By interrogating this, we pursue
                general principles of how neural circuts generate behavior. The Smear
                Lab is broadly interested in the intersection of brain, behavior, and
                data.
              </div><br />

              <div>
                We currently have three ongoing projects, click the buttons below to learn more!
              </div>
              <ResearchButtons/>
            </div>
            <Footer/>
          </div>
        </div> 
        </>
    )
}

export default research

