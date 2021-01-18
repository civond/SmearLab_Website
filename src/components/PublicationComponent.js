import './PublicationData';
import { PublicationData } from './PublicationData';

const PublicationComponent = () => {
    function Stuff() {
        return(
        <ol reversed>
        {PublicationData.map((pub, index) => {
           return(
               <div>
                       <li>{pub.authors}, {pub.title}, <a href={pub.link}>{pub.journal}</a><br/><br/></li>
               </div>
           );
        })}
        </ol>
        )
    }
    return(
    <>   
    <div>
        <Stuff/>
    </div>
            
            
    </>
    )};
export default PublicationComponent
