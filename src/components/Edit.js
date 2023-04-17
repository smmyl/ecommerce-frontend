import {useState} from 'react'

const Edit = (props) =>  {
    const [item, setItem] = useState({...props.item})

    const handleChange = (event) => {
        setItem({...item, [event.target.item]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(item)
    }

    return(
        <>
            <details>
                <summary>Edit Item</summary>
                <form onSubmit={handleSubmit}>
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
                    <input type='submit' value='Update'/>
                </form>
                <button onClick={props.handleDelete} value={item.id}>
                X
              </button>
            </details>
        </>
    )
}

export default Edit