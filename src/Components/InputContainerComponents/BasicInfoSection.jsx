import React from 'react';
import { useData } from '../AppDataContext';

function BasicInfoSection() {
  const { setBasicInfoInput, basicInfoInputData } = useData();

  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setBasicInfoInput({ ...basicInfoInputData, firstName: value });
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setBasicInfoInput({ ...basicInfoInputData, lastName: value });
  };

  const handleProfessionalTitleChange = (event) => {
    const { value } = event.target;
    setBasicInfoInput({ ...basicInfoInputData, career: value });
  };

  const handleSummaryChange = (event) => {
    const { value } = event.target;
    setBasicInfoInput({ ...basicInfoInputData, summary: value });
  };

  return (
    <div className="input-section" id="basic-info-input-section">
      <h2 className="input-header">Basic Info</h2>
      <input
        className="custom-input"
        type="text"
        id="first-name"
        placeholder="First Name"
        value={basicInfoInputData.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        className="custom-input"
        type="text"
        id="last-name"
        placeholder="Last Name"
        value={basicInfoInputData.lastName}
        onChange={handleLastNameChange}
      />
      <input
        className="custom-input"
        type="text"
        id="professional-title"
        placeholder="Professional Title"
        value={basicInfoInputData.career}
        onChange={handleProfessionalTitleChange}
      />
      <input
        className="custom-input"
        type="text"
        id="summary-input"
        placeholder="Give Summary About You"
        value={basicInfoInputData.summary}
        onChange={handleSummaryChange}
      />
    </div>
  );
}

export default BasicInfoSection;