import { useState } from "react";
import { useData } from "../AppDataContext";
import { v4 as uuidv4 } from "uuid";
import { format, parse } from "date-fns";
import DateInput from "../DateInput";

// Main WorkExperienceSection component
export default function WorkExperienceSection() {
  // State variables for various input fields
  const [inputType, setInputType] = useState('');
  const [isOngoingChecked, setIsOngoingChecked] = useState(false);
  const [jobResponsibility, setJobResponsibility] = useState('');
  const [jobResponsibilitiesArray, setJobResponsibilitiesArray] = useState([]);
  const [title, setTitle] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');

  // Accessing data from context
  const {
    workExperienceArray,
    setWorkExperienceArray
  } = useData();

  // Event handler for input focus
  const handleFocus = () => {
    setInputType('date');
  };

  // Event handler for input blur
  const handleBlur = () => {
    setInputType('text');
  };

  // Event handler for "Ongoing" checkbox change
  const handleOnGoingCheckBoxChange = (event) => {
    setIsOngoingChecked(event.target.checked);
  };

  // Event handler for start date input change
  const handleStartDateChange = (event) => {
    const selectedDate = event.target.value;
    const parsedDate = parse(selectedDate, "yyyy-MM-dd", new Date());
    const formatted = format(parsedDate, "MMMM yyyy");
    setStartingDate(formatted);
  };

  // Event handler for end date input change
  const handleEndDateChange = (event) => {
    const selectedDate = event.target.value;
    const parsedDate = parse(selectedDate, "yyyy-MM-dd", new Date());
    const formatted = format(parsedDate, "MMMM yyyy");
    setEndingDate(formatted);
  };

  // Event handler for adding a job responsibility
  const handleAddResponsibilityButtonClick = () => {
    if (jobResponsibility) {
      addJobResponsibilities(jobResponsibility);
      setJobResponsibility('');
    }
  };

  // Event handler for deleting a job responsibility
  const handleDeleteResponsibilityButtonClick = (event) => {
    deleteJobResponsibilities(event.target.value);
  };

  // Event handler for adding work experience
  const handleAddWorkExperienceButtonClick = () => {
    addWorkInfo(title, workplace, startingDate, endingDate, jobResponsibilitiesArray);
    setTitle('');
    setWorkplace('');
    setStartingDate('');
    setEndingDate('');
    setJobResponsibilitiesArray([]);
    
  };

  // Event handler for deleting work experience
  const handleDeleteWorkExperienceButtonClick = (event) => {
    deleteWorkInfo(event.target.value);
  };

  // Function to conditionally add graduation date input
  const addEndingDateInput = () => {
    if (isOngoingChecked) {
      return (
        <DateInput
          inputType={inputType}
          dateValue={endingDate}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleDateChange={handleEndDateChange}
          placeHolder = {'Ending Date'}
        />
      );
    }
    return null; // Return null if not needed
  };

  // Function to add a job responsibility to the array
  const addJobResponsibilities = (name) => {
    setJobResponsibilitiesArray((prevArray) => [
      ...prevArray,
      {
        id: uuidv4(),
        responsibiltyName: name,
      },
    ]);
  };

  // Function to delete a job responsibility from the array
  const deleteJobResponsibilities = (responsibilityIdToDelete) => {
    const updatedArray = jobResponsibilitiesArray.filter(
      (responsibility) => responsibility.id !== responsibilityIdToDelete
    );
    setJobResponsibilitiesArray(updatedArray);
  };

  // Function to add work information to the array
  const addWorkInfo = (positionName, companyName, startDate, endDate, jobResponsibilitiesArray) => {
    const workInfo = {
      id: uuidv4(),
      position: positionName,
      company: companyName,
      startDate: startDate,
      endDate: isOngoingChecked ? endDate : 'present',
      jobResponsibilities: jobResponsibilitiesArray,
    };

    if (
      positionName.trim() === "" ||
      companyName.trim() === "" ||
      startDate.trim() === "" 
    ) {
      alert('Please Fill The Work Experience! ')
      
    } 
    
    else {
      setWorkExperienceArray((prevArray) => [...prevArray, workInfo]);
    }
      

    
  };

  // Function to delete work information from the array
  const deleteWorkInfo = (workIdToDelete) => {
    const updatedArray = workExperienceArray.filter((workExperience) => workExperience.id !== workIdToDelete);
    setWorkExperienceArray(updatedArray);
  };

  return (
    <div className="input-section" id="work-info-input-section">
      <h2 className="input-header">Work Experience</h2>

      {/* Input fields for job title, workplace, and start date */}
      <input
        className="custom-input"
        type="text"
        id="position-input"
        placeholder="Title/Position"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="custom-input"
        type="text"
        id="company-input"
        placeholder="Workplace/Company/Organization"
        value={workplace}
        onChange={(e) => setWorkplace(e.target.value)}
      />
      <input
        className="custom-input"
        type={inputType}
        id="start-date-input"
        placeholder="Starting Date"
        value={startingDate}
        onChange={handleStartDateChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {/* Checkbox for "Ongoing" and graduation date input */}
      <div className="on-going-div">
        <p>not ongoing?</p>
        <label className="switch">
          <input type="checkbox" onChange={handleOnGoingCheckBoxChange} />
          <span className="slider round" />
        </label>
      </div>
      {addEndingDateInput()}

      {/* Fieldset for job responsibilities */}
      <fieldset style={{ border: "2px solid #ccc", borderRadius: 10, width: "80%" }}>
        <legend>Job Responsibility:</legend>
        <div className="fieldset-items-div">
          {jobResponsibilitiesArray.map((responsibility) => (
            <div className="fieldset-items" key={responsibility.id}>
              <p>{responsibility.responsibiltyName}</p>
              <button value={responsibility.id} onClick={handleDeleteResponsibilityButtonClick}>
                <i className="fa-solid fa-ban" />
              </button>
            </div>
          ))}
        </div>
        <div id="fieldset-items-input-div">
          <input
            type="text"
            placeholder="Enter Job Responsibility"
            id="job-responsibility-input"
            className="fieldset-items-input"
            value={jobResponsibility}
            onChange={(e) => setJobResponsibility(e.target.value)}
          />
          <button className="fieldset-items-add-button" onClick={handleAddResponsibilityButtonClick}>
            +
          </button>
        </div>
      </fieldset>

      {/* Button to add work information */}
      <button id="add-work-info-button" className="add-info-btn" onClick={handleAddWorkExperienceButtonClick}>
        Add Work Info
      </button>

      {/* Display work entries with delete buttons */}
      <div className="work-entry">
        {workExperienceArray.map((workExperience) => (
          <div className="work-details" key={workExperience.id}>
            <div className="work-info">
              <p>{workExperience.position}</p>
              <p>{workExperience.company}</p>
              <p>
                {workExperience.startDate}-{workExperience.endDate}
              </p>
            </div>
            <button className="delete-work-button" value={workExperience.id} onClick={handleDeleteWorkExperienceButtonClick}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
