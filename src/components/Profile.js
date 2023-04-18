import {useState} from 'react'
import Add from './Add'
import Edit from './Edit'

const Profile = (props) => {

    const [click, setClick] = useState(false)

    const showAdd = () => {
        setClick(true)
        props.getItems()
    }

    const hideAdd = () => {
        setClick(false)
        props.getItems()
    }

    return (
        <div class='profile-container'>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" onClick={props.aboutToggle}>About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Home</a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" 
                    onClick={()=>{
                        props.homeToggle();

                    }}>Menswear</a>
                    <a class="dropdown-item" 
                    onClick={()=>{
                        props.homeToggle();

                    }}>Womenswear</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" 
                    onClick={()=>{
                        props.homeToggle();

                        }}>Show All</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" onClick={props.profileToggle}>Profile</a>
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
                    getItems={props.getItems}
                    /> 
                </>
                : 
                <>
                    <h3>Your Shop</h3>
                    <div class='yourshop'>
                        <button id='addbtn' type='button' class='btn btn-dark'  onClick={showAdd}>Add Item</button>
                        <nav class="navbar navbar-light">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                    </div>
                </>
                }
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
                        <Edit 
                            handleDelete={props.handleDelete}
                            handleUpdate={props.handleUpdate}
                            item={item}
                            getItems={props.getItems}
                        />
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Profile