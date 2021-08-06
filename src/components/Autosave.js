import './buttons.css'

const Autosave = ({onChange, checkedBox}) => {
    
    function handleChange(event) {
        onChange(event);
    }

    return (
        <div className='auto'>
            <input type='checkbox' onChange={handleChange} checked={checkedBox}/>
            <p>Autosave</p>
        </div>

    );
}

export default Autosave;