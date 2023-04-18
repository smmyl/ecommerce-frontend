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
        <div class='profile-container'>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" onClick={props.profileToggle}>Profile</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Home</a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Menswear</a>
                    <a class="dropdown-item" href="#">Womenswear</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" onClick={props.homeToggle}>Show All</a>
                    </div>
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
                    <Add 
                    handleChange={props.handleChange} 
                    handleSubmit={props.handleSubmit} 
                    items={props.items} 
                    hideAdd={hideAdd}
                    handleCreate={props.handleCreate}
                    /> 
                </>
                : 
                <button id='addbtn' type='button' class='btn btn-dark'  onClick={showAdd}>Add Item</button>
                }
            <h3>Your Shop</h3>
            <div id='profitems' className='items'>
            {props.items.map((item) => {
                return (
                    <div id='profcard' class='card' key={item.id}>
                        <div id='profcardtop'>
                            <img src = {item.image} id='profcard-img-top' class='card-img-top'></img>
                        </div>
                        <div id='profcard-body' class='card-body'>
                            <h3 class='card-title'>{item.name}</h3>
                            <p class='card-text'>Price: {item.price}</p>
                            <p class='card-text'>Gender: {item.gender}</p>
                            <p class='card-text'>Size: {item.clothing_size}</p>
                            <p class='card-text'>Description: {item.description}</p>
                        <Edit handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} item={item}/>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Profile