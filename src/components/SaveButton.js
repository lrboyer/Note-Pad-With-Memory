import './buttons.css'

const SaveButton = (prop) => {

    return (
        <button className='save' onClick={prop.handleSave}>
            Save
        </button>
    );
}

export default SaveButton;