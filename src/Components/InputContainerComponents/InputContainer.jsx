import BasicInfoSection from "./BasicInfoSection";
import WebsiteHeader from "./WebsiteHeader";
import ContactInfo from "./ContactInfoSection";
import EducationBackgroundSection from "./EducationBackgroundSection";
import WorkExperienceSection from "./WorkExperienceSection";
import SkillsInfoSection from "./SkillsInfoSection";


function InputContainer(){

    return(
        <div className="input-container">
        <WebsiteHeader/>
        <BasicInfoSection/>
        <ContactInfo/>
        <EducationBackgroundSection/>
        <WorkExperienceSection/>
        <SkillsInfoSection/>
        </div>
    )
}

export default InputContainer;