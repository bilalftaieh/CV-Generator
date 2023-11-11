export default function DateInput(props){

    return (
        <input
          className="custom-input"
          value={props.dateValue}
          type={props.inputType}
          placeholder={props.placeHolder}
          onFocus={props.handleFocus}
          onBlur={props.handleBlur}
          onChange={props.handleDateChange}
        />
      );
}