
import "./Textfield.css";
function Textfield(props) {
    console.log(props);
    return (
        <div>
            <input value={props.initialText}className='input' style={{backgroundColor: props.bgColor}}></input>
        </div>
    );
}

export default Textfield;