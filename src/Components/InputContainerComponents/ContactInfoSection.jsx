import { useData } from '../AppDataContext';
import React from 'react';

export default function ContactInfo(){

  const {contactInfoInputData, setContactInfoInput } = useData();

  const handleEmailChange = (event) =>{
    const { value } = event.target;
    setContactInfoInput({ ...contactInfoInputData, email : value });
  }

  const handlePhoneNumberChange = (event) =>{
    const { value } = event.target;
    setContactInfoInput({ ...contactInfoInputData, phoneNumber : value });
  }

  const handleLocationChange = (event) =>{
    const { value } = event.target;
    setContactInfoInput({ ...contactInfoInputData, location : value });
  }

  const handleWebsiteChange = (event) =>{
    const { value } = event.target;
    setContactInfoInput({ ...contactInfoInputData, website : value });
  }


    return(
        <div className="input-section" id="contact-info-input-section">
  <h2 className="input-header">Contact Info</h2>
  <input
    className="custom-input"
    type="email"
    id="email-input"
    placeholder="Email"
    onChange={handleEmailChange}
  />
  <input
    className="custom-input"
    type="text"
    id="phone-number-input"
    placeholder="Phone-Number"
    onChange={handlePhoneNumberChange}
  />
  <input
    className="custom-input"
    type="text"
    id="location-input"
    placeholder="Location"
    onChange={handleLocationChange}
  />
  <input
    className="custom-input"
    type="text"
    id="website-input"
    placeholder="Website"
    onChange={handleWebsiteChange}
  />
</div>

    )
}