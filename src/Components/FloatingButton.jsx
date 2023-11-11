import '../styles/floating-button.css'

export default function FloatingButton(){

    const handleOnclick = () =>{
        window.print();
    }

    return(
        <button className="floating-button"
        onClick={handleOnclick}><i className="fa-solid fa-print" id='print-icon'></i></button>
    )
}