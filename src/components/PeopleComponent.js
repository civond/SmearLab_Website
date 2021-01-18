import './PeopleData';
import { PeopleData } from './PeopleData';
import matt from '../images/team/matt.jpg'
import './People.css'
//Make sure each category in this has at least one entry (refer back to PeopleData.js), or else this component will look funky

const PeopleComponent = () => {
    return(
    <>
    <div class="PI" id="PIbox">
			<div id="PI11">
				<img src={matt}></img>
                <b>
				<font size="4">MATTHEW C. SMEAR
				<br/>Principal Investigator</font></b>
				<br/>CV | <a href="publications-lab.htm">Publications</a>
			</div>
			<div id="PI12">
				<br/><font size="4">Assistant Professor</font>
		        <br/><font size="2">University of Oregon</font>
				<br/>
				<br/> <font size="2"><em>Ph.D. Neuroscience, University of California - San Francisco, 2005
				<br/> B.S. Biology, Duke University, 1998</em></font>
				<br/>
				<br/><a href="https://psychology.uoregon.edu/">Dept. of Psychology </a>
				<br/><a href="https://ion.uoregon.edu/content/institute-neuroscience">Institute of Neuroscience</a>
				<br/>
				<br/>
			</div>
		</div>

        <br/><br/>
<hr width="100%"></hr>
    <h2 align="center">Post-Doctoral Fellows</h2><hr width="20%" color="black"></hr>
    {PeopleData.map((person, index) => {
        if (person.rank === 'postdoc'){            
            const education = person.education.split('|').map(str => <div>{str}</div>);
           return (
            <div class="people">
            <div id="people1">
                <img id="portraitimg" src={person.portrait} alt="portrait"></img>
            </div>
            <div id="people2">
                <br/><b><font size="4">{person.name}</font></b><br/>
                <font size="2"><em>{education}</em></font><br/>
                <div id="peopleBio">
                    <font>{person.bio} <a href={person.weblink}>{person.website}</a><br/><br/></font>
                </div>
            </div>
        </div>
           )}})}
<hr width="100%"></hr>
    <h2 align="center">Graduate Students</h2><hr width="20%" color="black"></hr>
    {PeopleData.map((person, index) => {
        if (person.rank === 'gradstudent'){            
            const education = person.education.split('|').map(str => <div>{str}</div>);
           return (
            <div class="people">
            <div id="people1">
                <img id="portraitimg" src={person.portrait} alt="portrait"></img>
            </div>
            <div id="people2">
                <br/><b><font size="4">{person.name}</font></b><br/>
                <font size="2"><em>{education}</em></font><br/>
                <div id="peopleBio">
                    <font>{person.bio} <a href={person.weblink}>{person.website}</a><br/><br/></font>
                </div>
            </div>
        </div>
           )}})}
    <hr width="100%"></hr>
    <h2 align="center">Staff</h2><hr width="20%" color="black"></hr>
    {PeopleData.map((person, index) => {
        if (person.rank === 'staff'){            
            const education = person.education.split('|').map(str => <div>{str}</div>);
           return (
            <div class="people">
            <div id="people1">
                <img id="portraitimg" src={person.portrait} alt="portrait"></img>
            </div>
            <div id="people2">
                <br/><b><font size="4">{person.name}</font></b><br/>
                <font size="2"><em>{education}</em></font><br/>
                <div id="peopleBio">
                    <font>{person.bio} <a href={person.weblink}>{person.website}</a><br/><br/></font>
                </div>
            </div>
        </div>
           )}})}

    <hr width="100%"></hr>
    <h2 align="center">Undergraduates</h2><hr width="20%" color="black"></hr>
    {PeopleData.map((person, index) => {
        if (person.rank === 'undergraduate'){            
            const education = person.education.split('|').map(str => <div>{str}</div>);
           return (
            <div class="people">
            <div id="people1">
                <img id="portraitimg" src={person.portrait} alt="portrait"></img>
            </div>
            <div id="people2">
                <br/><b><font size="4">{person.name}</font></b><br/>
                <font size="2"><em>{education}</em></font><br/>
                <div id="peopleBio">
                    <font>{person.bio} <a href={person.weblink}>{person.website}</a><br/><br/></font>
                </div>
            </div>
        </div>
           )}})}
    </>
    )};
export default PeopleComponent
