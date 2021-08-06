import './Notepad.css'

const Notepad = ({text, onChange}) => {

    function updateText(event) {
        onChange(event);
    }

    return (
        <textarea className='note' value={text} onChange={updateText} autoFocus placeholder='Start typing your notes here'>
        </textarea>
    );
}

export default Notepad;