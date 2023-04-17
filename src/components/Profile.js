import {useState} from 'react'
import Add from './Add'
import Edit from './Edit'

const Profile = (props) => {

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
            {click ?  <Add click handleChange={props.handleChange} handleSubmit={props.handleSubmit} items={props.items} hideAdd={hideAdd}/> : null}
            <div className='items'>
            {props.items.map((item) => {
                return (
                    <div className='item' key={item.id}>
                    <img src = {item.image} alt='' />
                    <h4>Name: {item.name}</h4>
                    <h5>Price: {item.price}</h5>
                    <h5>Gender: {item.gender}</h5>
                    <h5>Size: {item.clothing_size}</h5>
                    <p>Description: {item.description}</p>
                    <Edit handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} item={item}/>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Profile