import {useState} from 'react'

const Edit = (props) =>  {
    const [item, setItem] = useState({...props.item})
    const [edit, setEdit] = useState(false)

    const handleChange = (event) => {
        setItem({...item, [event.target.item]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(item)
    }

    const toggleEdit = () => {
        setEdit(true)
    }

    return(
        <>
            <button id='editbtn' type="button" class="btn btn-dark btn-sm" data-toggle="modal" data-target="#staticBackdrop" onClick={toggleEdit}>
            Edit
            </button>
            {edit ? 
                <>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">{props.item.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id='editform' onSubmit={handleSubmit}>
                            <label htmlFor='category'>Category </label>
                            <select
                                name='category'
                                value={item.category}
                                onChange={handleChange}
                            >
                                <option>Clothing</option>
                                <option>Shoes</option>
                                <option>Acessories</option>
                            </select>
                            <br/>
                            <br/>
                            <label htmlFor='name'>Name: </label>
                            <input
                                type='text'
                                name='name'
                                value={item.name}
                                onChange={handleChange}
                            />
                            <br/>
                            <br/>
                            <label htmlFor='price'>Price: </label>
                            <input
                                type='number'
                                name='age'
                                value={item.price}
                                onChange={handleChange}
                            />
                            <br/>
                            <br/>
                            <label htmlFor='tags'>Tags: </label>
                            <input
                                type='text'
                                name='tags'
                                value={item.tags}
                                onChange={handleChange}
                            />
                            <br/>
                            <br/>
                            <label htmlFor='clothing_size'>Clothing Size: </label>
                            <select
                                name='clothing_size'
                                value={item.clothing_size}
                                onChange={handleChange}
                            >
                                <option>X-Small</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>X-Large</option>
                                <option>XX-Large</option>
                            </select>
                            <br/>
                            <label htmlFor='description'>Description: </label>
                            <br/>
                            <textarea 
                                name='description' 
                                rows='10' 
                                cols='50' 
                                onChange={handleChange}/>
                            <br/>
                            </form>
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={props.handleDelete} value={item.id}>Delete</button>
                        <button type="button submit" form='editform' value='Update' class="btn btn-primary" data-dismiss="modal">Update</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
            :
            <>
            </>
        }
        </>
    )
}

export default Edit