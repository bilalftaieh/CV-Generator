// import { useState } from "react";
import { useData } from "../AppDataContext";
export default function EducationBackgroundDisplay(){

    const {universityArray} = useData();

    return(
        <div className="education-info-display-section">
                <h2 className="display-header">Education-Background</h2>
                <div className="education-details-display-div">
                    <ul>
                    {universityArray.map((university) => {
                        return <li key={university.id}>
                        <div className="preview-section-flex">
                          <div>
                            <h3>{university.universityName}</h3>
                            <p>{university.degree}</p>
                          </div>
                          <p>{university.enrollmentDate}-{university.graduationDate}</p>
                        </div>
                      </li>
                      ;
                        })}
                    </ul>
                </div>
                
            </div>
    )
}