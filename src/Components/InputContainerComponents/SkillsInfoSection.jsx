import { useState } from "react";
import { useData } from "../AppDataContext"
import { v4 as uuidv4 } from "uuid";

// Individual skill item in the fieldset
function SkillFieldSetItems({ skillName, id, handleOnclick }) {
  return (
    <div className="fieldset-items">
      <p>{skillName}</p>
      <button value={id} onClick={handleOnclick}>
        <i className="fa-solid fa-ban"></i>
      </button>
    </div>
  );
}

// Display for each skill category with its associated skills
function SkillCategoryItemDisplay({ skillCategoryName, id, handleOnclick, skills }) {
  return (
    <div className="skills-details">
      <div className="skills-info">
        <p>{skillCategoryName}</p>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>{skill.skillName}</li>
          ))}
        </ul>
      </div>
      <button className="delete-skills-button" onClick={handleOnclick} value={id}>
        X
      </button>
    </div>
  );
}

// Main SkillsInfoSection component
export default function SkillsInfoSection() {
  // State and data management hooks
  const { skillsCategoryArray, setSkillsCategoryArray } = useData();
  const [skillsArray, setSkillsArray] = useState([]);
  const [skillCategoryName, setSkillCategoryName] = useState('');
  const [skillName, setSkillName] = useState('');

  // Event handlers with input validation
  const handleSkillAddClick = () => {
    if (skillName.trim() !== '') {
      addSkillToArray(skillName);
      setSkillName('');
    } else {
      // Display an error message or take appropriate action for invalid input
      alert('Skill name cannot be empty');

    }
  };

  const handleSkillDeleteClick = (event) => {
    deleteSkillFromArray(event.target.value);
  };

  const handleSkillCategoryAddClick = () => {
    if (skillCategoryName.trim() !== '' && skillsArray.length > 0) {
      addSkillCategoryToArray(skillCategoryName, skillsArray);
      setSkillCategoryName('');
      setSkillsArray([]);
    } else {
      // Display an error message or take appropriate action for invalid input
      alert('Skill category name cannot be empty, and at least one skill must be added');
    }
  };

  const handleSkillCategoryDeleteClick = (event) => {
    deleteSkillCategoryFromArray(event.target.value);
  };

  // Functions to update state arrays
  const addSkillToArray = (skillNameString) => {
    setSkillsArray((prevArray) => [
      ...prevArray,
      {
        id: uuidv4(),
        skillName: skillNameString,
      },
    ]);
  };

  const addSkillCategoryToArray = (skillCategoryNameString, skillsArray) => {
    setSkillsCategoryArray((prevArray) => [
      ...prevArray,
      {
        id: uuidv4(),
        skillCategoryName: skillCategoryNameString,
        skills: skillsArray,
      },
    ]);
  };

  const deleteSkillCategoryFromArray = (skillCategoryIdToDelete) => {
    const updatedArray = skillsCategoryArray.filter((skillCategory) => skillCategory.id !== skillCategoryIdToDelete);
    setSkillsCategoryArray(updatedArray);
  };

  const deleteSkillFromArray = (skillIdToDelete) => {
    const updatedArray = skillsArray.filter((skill) => skill.id !== skillIdToDelete);
    setSkillsArray(updatedArray);
  };

  // JSX structure for the component
  return (
    <div className="input-section" id="skills-info-input-section">
      <h2 className="input-header">Skills</h2>
      {/* Input for skill category name */}
      <input
        className="custom-input"
        type="text"
        id="skill-category-input"
        placeholder="Skill Category Name"
        value={skillCategoryName}
        onChange={(e) => setSkillCategoryName(e.target.value)}
      />
      {/* Fieldset for managing individual skills */}
      <fieldset>
        <legend>Skills:</legend>
        <div className="fieldset-items-div">
          {skillsArray.map((skill) => (
            <SkillFieldSetItems key={skill.id} skillName={skill.skillName} id={skill.id} handleOnclick={handleSkillDeleteClick} />
          ))}
        </div>
        <div className="fieldset-items-input-div">
          {/* Input for adding new skills */}
          <input
            type="text"
            placeholder="Enter Skill Name"
            id="skills-input"
            className="fieldset-items-input"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
          {/* Button to add a new skill */}
          <button className="fieldset-items-add-button" onClick={handleSkillAddClick}>
            +
          </button>
        </div>
      </fieldset>
      {/* Button to add the entire skills info */}
      <button id="add-skills-info-button" className="add-info-btn" onClick={handleSkillCategoryAddClick}>
        Add Skills Info
      </button>
      {/* Display for each skill category */}
      <div className="skills-entry">
        {skillsCategoryArray.map((skillCategory) => (
          <SkillCategoryItemDisplay
            key={skillCategory.id}
            skillCategoryName={skillCategory.skillCategoryName}
            id={skillCategory.id}
            handleOnclick={handleSkillCategoryDeleteClick}
            skills={skillCategory.skills}
          />
        ))}
      </div>
    </div>
  );
}
