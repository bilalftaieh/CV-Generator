import { useState } from "react";
import { useData } from "../AppDataContext";
import { format, parse } from "date-fns";
import { v4 as uuidv4 } from 'uuid';
import DateInput from "../DateInput";
export default function EducationBackgroundSection(){

    const [inputType, setInputType] = useState('text');
    const [isOngoingChecked, setIsOngoingChecked] = useState(false);
    const [universityName, setUniversityName] = useState('');
    const [degree, setDegree] = useState("");
    const [enrollmentDate, setEnrollmentDate] = useState("");
    const [graduationDate, setGraduationDate] = useState("");
  

    const {universityArray,setUniversityArray} = useData();
  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    setInputType('text');
  };

    // Event handler for "Ongoing" checkbox change
    const handleOnGoingCheckBoxChange = (event) => {
      setIsOngoingChecked(event.target.checked);
    };

  const handleEnrollmentDateChange = (event) =>{
    const selectedDate = event.target.value;

    // Parse the input date
    const parsedDate = parse(selectedDate, "yyyy-MM-dd", new Date());

    // Format the parsed date to "MMMM yyyy" format
    const formatted = format(parsedDate, "MMMM yyyy");
    setEnrollmentDate(formatted);
  }

  const handleGraduationDateChange = (event) =>{
    const selectedDate = event.target.value;

    // Parse the input date
    const parsedDate = parse(selectedDate, "yyyy-MM-dd", new Date());

    // Format the parsed date to "MMMM yyyy" format
    const formatted = format(parsedDate, "MMMM yyyy");
    setGraduationDate(formatted);
  }

  const handleDeleteEducation = (event) =>{
    deleteUniversity(event.target.value);
  }

  const addUniversity = (universityName, degree, enrollmentDate, graduationDate) => {
    let graduationDateValue = '';

    if(isOngoingChecked){
      graduationDateValue = graduationDate
    }

    else{
      graduationDateValue = 'present'
    }
    
    setUniversityArray((prevArray) => [
      ...prevArray,
      {
        id : uuidv4(),
        universityName: universityName,
        degree: degree,
        enrollmentDate: enrollmentDate,
        graduationDate: graduationDateValue,
      },
    ]);
  };

  const deleteUniversity = (universityIdToDelete) => {
    // Create a new array without the element to delete
    const updatedArray = universityArray.filter((university) => university.id !== universityIdToDelete);

    // Update the state with the new array
    setUniversityArray(updatedArray);
  }

  const handleClick = (event) => {
    event.preventDefault();
  
    if (
      universityName.trim() === "" ||
      degree.trim() === "" ||
      enrollmentDate.trim() === "" 
    ) {
      return;
      
    } else {
      addUniversity(universityName, degree, enrollmentDate, graduationDate);
      setUniversityName("");
      setDegree("");
      setEnrollmentDate("");
      setGraduationDate("");
    }
  };

  // Function to conditionally add graduation date input
  const addGraduationInput = () => {
    if (isOngoingChecked) {
      return (
        <DateInput
          inputType={inputType}
          dateValue={graduationDate}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleDateChange={handleGraduationDateChange}
          placeHolder = {'Graduation Date'}
        />
      );
    }
    return null; // Return null if not needed
  };
  

    return(
   <div className="input-section" id="education-info-input-section">
    <h2 className="input-header">Education Background</h2>
    <input
        className="custom-input"
        type="text"
        id="university-input"
        placeholder="University/Institution/Organization"
        value={universityName}
        onChange={(e)=>setUniversityName(e.target.value)}
        autoComplete="on"
        required
  />
  <input
    className="custom-input"
    type="text"
    id="degree-input"
    placeholder="Program/Degree/Course"
    value={degree}
    onChange={(e)=>setDegree(e.target.value)}
    autoComplete="on"
    required
  />
  <input
    className="custom-input"
    type={inputType}
    id="enrollment-date-input"
    placeholder="Enrollment Date"
    onFocus={handleFocus}
    onBlur={handleBlur}
    value={enrollmentDate}
    onChange={handleEnrollmentDateChange}
    autoComplete="on"
    required
  />

  <div className="on-going-div">
          <p>not ongoing?</p>
          <label className="switch">
            <input type="checkbox" onChange={handleOnGoingCheckBoxChange} />
            <span className="slider round" />
          </label>
  </div>

  {addGraduationInput()}

  <button id="add-education-info-button" className="add-info-btn" type="submit" onClick={handleClick}>Add Education Info</button>

  <div className="education-entry">
      {universityArray.map((university) => {
                    return <div className="education-details" key={university.id}>
                    <div className="education-info">
                      <p>{university.universityName}</p>
                      <p>{university.degree}</p>
                      <p>{university.enrollmentDate}-{university.graduationDate}</p>
                    </div>
                    <button className="delete-education-button" value={university.id}
                    onClick={handleDeleteEducation}>X</button>
                  </div>
                  ;
                    })}
</div>
</div>




    )
}