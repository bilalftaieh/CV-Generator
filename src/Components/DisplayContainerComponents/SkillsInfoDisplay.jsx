import { useData } from "../AppDataContext"

function SkillCategoryDisplay({categoryName,skills}){

    return(
        <div className="skill-category">
            <h3 className="skill-category-header">{categoryName}</h3>
            <ul className="skills-list">
                {skills.map((skill) => (
                <li key={skill.id}>{skill.skillName}</li>
            ))}
            </ul>
        </div>
    )
}

export default function SkillsInfoDisplay(){
const {skillsCategoryArray} = useData();

    return(
        <div className="skills-info-display-section">
            <h2 className="display-header">Skills</h2>
            <div className="skills-flex-div">
                {skillsCategoryArray.map((skillCategory)=>{
                    return <SkillCategoryDisplay key={skillCategory.id} 
                    categoryName={skillCategory.skillCategoryName} skills={skillCategory.skills}/>
                })}
            </div>
        </div>

    )
}