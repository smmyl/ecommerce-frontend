import {useState} from 'react'
import Add from './Add'
import Edit from './Edit'

const Profile = (props, items, item, handleChange, handleCreate, handleDelete, handleUpdate, handleSubmit) => {

    const [click, setClick] = useState(false)

    const showAdd = () => {
        setClick(true)
    }

    const hideAdd = () => {
        setClick(false)
    }

    return (
        <>
            <h1>Profile Page</h1>
            <button onClick={showAdd}>Add Item</button>
            {click ?  <Add click handleChange={handleChange} handleSubmit={handleSubmit} item={item}/> : null}
            <button onClick={hideAdd}>Cancel</button>
            <div className='items'>
            {props.items.map((item) => {
                return (
                    <div className='item' key={item.id}>
                    <img src = {props.items.image} alt='' />
                    <h4>Name: {props.items.name}</h4>
                    <h5>Price: {props.items.price}</h5>
                    <h5>Gender: {props.items.gender}</h5>
                    <h5>Size: {props.items.clothing_size}</h5>
                    <p>Description: {props.items.description}</p>
                    <Edit handleDelete={handleDelete} handleUpdate={handleUpdate} item={item}/>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Profile