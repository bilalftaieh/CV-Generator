import { useData } from "../AppDataContext"
export default function WorkExperienceDisplay(){
    const {workExperienceArray} = useData();


    return(
        <div className="work-info-display-section">
            <h2 className="display-header">Work Experience</h2>
            <div className="work-details-div">
                <ul>
                {workExperienceArray.map((workExperience) => {
                        return <li key={workExperience.id}> 
                                <div className="preview-section-flex">
                                    <div>
                                    <h3>{workExperience.position}</h3>
                                    <p>{workExperience.company}</p>
                                    </div>
                                    <p>{workExperience.startDate} - {workExperience.endDate}</p>
                                </div>
                                <ul style={{ marginLeft: 20 }}>
                                    {workExperience.jobResponsibilities.map((jobResponsibilty)=>{
                                        return <li key={jobResponsibilty.id}>
                                            {jobResponsibilty.responsibiltyName}
                                        </li>
                                    })}
                                </ul>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    )
}