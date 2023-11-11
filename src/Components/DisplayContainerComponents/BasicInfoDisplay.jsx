import { useData } from "../AppDataContext"


export default function BasicInfoDisplay(){
    const { basicInfoInputData } = useData(); // Access the context's inputData value


    return(
        <div className="basic-info-display-section">
            <h2>{basicInfoInputData.firstName} {basicInfoInputData.lastName}</h2>
            <h3>{basicInfoInputData.career}</h3>
            <p>
                {basicInfoInputData.summary}
            </p>
    </div>
    )
}