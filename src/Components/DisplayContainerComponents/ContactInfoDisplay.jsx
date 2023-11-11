import { useData } from "../AppDataContext"

export default function ContactInfoDisplay(){

    const {contactInfoInputData} = useData();
    return(
        <div className="contact-info-display-section">
            <div className="contact-info">
                <i className="fa-solid fa-envelope" />
                <p>{contactInfoInputData.email}</p>
            </div>
            <div className="contact-info">
                <i className="fa-solid fa-phone" />
                <p>{contactInfoInputData.phoneNumber}</p>
            </div>
            <div className="contact-info">
                <i className="fa-solid fa-location-dot" />
                <p>{contactInfoInputData.location}</p>
            </div>
            <div className="contact-info">
                <i className="fa-brands fa-linkedin" />
                <p>{contactInfoInputData.website}</p>
            </div>
    </div>
    )
}