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
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" onClick={props.profileToggle}>Profile</a>
                </li>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Home</a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Clothes</a>
                    <a class="dropdown-item" href="#">Shoes</a>
                    <a class="dropdown-item" href="#">Accessories</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" onClick={props.homeToggle}>Home</a>
                    </div>
                </li> */}
                <li class="nav-item">
                    <a class="nav-link" onClick={props.homeToggle}>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={props.aboutToggle}>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Contact</a>
                </li>
            </ul>
            {click ?  
                <>
                    <Add click handleChange={props.handleChange} handleSubmit={props.handleSubmit} items={props.items} hideAdd={hideAdd}/> 
                </>
                : 
                <button type='button' class='btn btn-success' onClick={showAdd}>Add Item</button>
                }
            <div className='items'>
            {props.items.map((item) => {
                return (
                    <div class='card' key={item.id}>
                        <img src = {item.image} class='card-img-top'></img>
                        <div class='card-body'>
                            <h3 class='card-title'>{item.name}</h3>
                            <p class='card-text'>Price: {item.price}</p>
                            <p class='card-text'>Gender: {item.gender}</p>
                            <p class='card-text'>Size: {item.clothing_size}</p>
                            <p class='card-text'>Description: {item.description}</p>
                        </div>
                        <Edit handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} item={item}/>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Profile