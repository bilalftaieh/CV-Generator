// DataContext.js
import { createContext, useContext, useState, useRef } from "react";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {

  const [universityArray, setUniversityArray] = useState([]);
  const [workExperienceArray, setWorkExperienceArray] = useState([]);
  const [skillsCategoryArray, setSkillsCategoryArray] = useState([]);
  

  const [basicInfoInputData, setBasicInfoInputData] = useState({
    firstName: '',
    lastName: '',
    career: '',
    summary: '',
  });
  
  const [contactInfoInputData, setContactInfoInputData] = useState({
    email: '',
    phoneNumber: '',
    location: '',
    website: '',
  });

  const [educationInfoInputData, setEducationInfoInputData] = useState({
    universityName: '',
    degree: '',
    enrollmentDate: '',
    graduationDate: '',
  });



  const setBasicInfoInput = (data) => {
    setBasicInfoInputData(data);
  };

  const setContactInfoInput = (data) => {
    setContactInfoInputData(data);
  };

  const setEducationInfoInput = (data) => {
    setEducationInfoInputData(data);
  };

  return (
    <AppDataContext.Provider value={{ basicInfoInputData, setBasicInfoInput, 
    contactInfoInputData, setContactInfoInput,  educationInfoInputData, setEducationInfoInput
    ,universityArray,setUniversityArray,workExperienceArray, setWorkExperienceArray
    ,skillsCategoryArray, setSkillsCategoryArray}}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useData = () => useContext(AppDataContext);
