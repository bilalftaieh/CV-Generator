import { usePDF } from 'react-to-pdf';
import FloatingButton from "../FloatingButton";
import BasicInfoDisplay from "./BasicInfoDisplay";
import ContactInfoDisplay from "./ContactInfoDisplay";
import EducationBackgroundDisplay from "./EducationBackgroundDisplay";
import SkillsInfoDisplay from "./SkillsInfoDisplay";
import WorkExperienceDisplay from "./WorkExperienceDisplay";


function DisplayContainer(){

    return(
        <div className="display-container">
            <div className="basic-contact-info-flex-div">
            <BasicInfoDisplay/>
            <ContactInfoDisplay/>
            </div>

            <div className="education-work-skills-display-section">
                <EducationBackgroundDisplay/>
                <WorkExperienceDisplay/>
                <SkillsInfoDisplay/>
            </div>
            
        </div>
    )
}

export default DisplayContainer;
