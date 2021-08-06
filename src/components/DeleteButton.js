import './buttons.css'

const DeleteButton = (prop) => {

    return (
        <button className='delete' onClick={prop.handleDelete}>
            Delete
        </button>
    );
}

export default DeleteButton;