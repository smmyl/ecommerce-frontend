import {useState} from 'react'

const HomePage = (props) => {
    const [all, setAll] = useState(true);
    const [men, setMen] = useState(false);
    const [women, setWomen] = useState(false);
    const [neutral, setNeutral] = useState(true);
    const [clothes, setClothes] = useState(false);
    const [shoes, setShoes] = useState(false);
    const [accessories, setAccessories] = useState(false);
    const [gender, setGender] = useState('')
    const [schemaGender, setSchemaGender] = useState('')

    const allToggle = () => {
        setAll(true)
        setClothes(false)
        setShoes(false)
        setAccessories(false)
    }
    const clothesToggle = () => {
        setAll(false)
        setClothes(true)
        setShoes(false)
        setAccessories(false)
    }
    const shoesToggle = () => {
        setAll(false)
        setClothes(false)
        setShoes(true)
        setAccessories(false)
    }
    const accessoriesToggle = () => {
        setAll(false)
        setClothes(false)
        setShoes(false)
        setAccessories(true)
    }
    const menToggle = () => {
        setMen(true)
        setWomen(false)
        setNeutral(false)
        setGender('> Menswear')
        setSchemaGender('M')
        props.getItems()
    }
    const womenToggle = () => {
        setWomen(true)
        setMen(false)
        setNeutral(false)
        setGender('> Womenswear')
        setSchemaGender('F')
        props.getItems()
    }
    const neutralToggle = () => {
        setNeutral(true)
        setMen(false)
        setWomen(false)
        setGender('')
        setSchemaGender('')
        props.getItems()
    }

    return (
        <div class='home-container'>  
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" onClick={props.aboutToggle}>About</a>
                </li>
                <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle active" data-toggle="dropdown" role="button" aria-expanded="false">Home</a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" 
                    onClick={()=>{
                        props.homeToggle();
                        menToggle();
                    }}>Menswear</a>
                    <a class="dropdown-item" 
                    onClick={()=>{
                        props.homeToggle();
                        womenToggle();
                    }}>Womenswear</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" 
                    onClick={()=>{
                        props.homeToggle();
                        neutralToggle();
                        }}>Show All</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={props.profileToggle}>Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Contact</a>
                </li>
            </ul>
            <div class='categories'>
                <button class='btn btn-dark'onClick = {allToggle}>ALL</button>
                <button class='btn btn-dark' onClick = {clothesToggle}>Clothes</button>
                <button class='btn btn-dark' onClick = {shoesToggle}>Shoes</button>
                <button class='btn btn-dark' onClick = {accessoriesToggle}>Accessories</button>
                <nav class="navbar navbar-light">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>                
            {all ? (
                <>
                <h4 id='navnavigation'class='nav-pointer'>Home{gender} > All</h4>
                <h1>All</h1>
                <div id='homeitems' className='items'>
                    {props.items.map((item) => {
                        return (
                            <>
                            {schemaGender == 'M' ? (
                            <>
                            {item.gender == 'M' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div>
                                ) : (
                                    <>     
                                    </>
                                )
                            }
                            </>
                            ) : schemaGender == 'F' ? (
                            <>
                            {item.gender == 'F' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div>
                                ) : (
                                    <>     
                                    </>   
                                )
                            }
                            </>
                            ) : (
                            <> 
                            <div class='card' key={item.id}>
                                <img src = {item.image} class='card-img-top'></img>
                                <div class='card-body'>
                                    <h3 class='card-title'>{item.name}</h3>
                                    <p class='card-text'>{item.price}</p>
                                    <p class='card-text'>{item.clothing_size}</p>
                                </div>
                            </div>
                            </>
                            )}
                            </>
                            )  
                    })}
                </div>
                </>
            ) : (
                <>
                </>
            )}
            {clothes ? (
                <>
                    <h4 class='nav-pointer'>Home{gender} > Clothes</h4>
                    <h1>CLOTHES</h1>
                    <div id='homeitems' className='items'>
                    {props.items.map((item) => {
                        return (
                            <>
                            {schemaGender == 'M' ? (
                            <>
                            {item.item_category == 'Clothing' && item.gender == 'M' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div>
                                ) : (
                                    <>     
                                    </>
                                )
                            }
                            </>
                            ) : schemaGender == 'F' ? (
                            <>
                            {item.item_category == 'Clothing' && item.gender == 'F' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div>
                                ) : (
                                    <>     
                                    </>   
                                )
                            }
                            </>
                            ) : (
                            <>
                            {item.item_category == 'Clothing' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div> 
                                ) : (
                                    <>     
                                    </>   
                                )  
                            }
                            </>
                            )}
                            </>
                            )
                    })}
                    </div>
                </>
            ) : (
                <>
                </>
            )}
            {shoes ? (
                <>
                <h4 class='nav-pointer'>Home{gender} > Shoes</h4>
                    <h1>SHOES</h1>
                    <div id='homeitems' className='items'>
                    {props.items.map((item) => {
                        return (
                            <>
                            {schemaGender == 'M' ? (
                            <>
                            {item.item_category == 'Shoes' && item.gender == 'M' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div>
                                ) : (
                                    <>     
                                    </>
                                )
                            }
                            </>
                            ) : schemaGender == 'F' ? (
                            <>
                            {item.item_category == 'Shoes' && item.gender == 'F' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div>
                                ) : (
                                    <>     
                                    </>   
                                )
                            }
                            </>
                            ) : (
                            <>
                            {item.item_category == 'Shoes' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div> 
                                ) : (
                                    <>     
                                    </>   
                                )  
                            }
                            </>
                            )}
                            </>
                            )
                    })}
                    </div>
                </>
            ) : (
                <>
                </>
            )}
            {accessories ? (
                <>
                <h4 class='nav-pointer'>Home{gender} > Accessories</h4>
                    <h1>ACS</h1>
                    <div id='homeitems' className='items'>
                    {props.items.map((item) => {
                        return (
                            <>
                            {schemaGender == 'M' ? (
                            <>
                            {item.item_category == 'Accessories' && item.gender == 'M' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div>
                                ) : (
                                    <>     
                                    </>
                                )
                            }
                            </>
                            ) : schemaGender == 'F' ? (
                            <>
                            {item.item_category == 'Accessories' && item.gender == 'F' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div>
                                ) : (
                                    <>     
                                    </>   
                                )
                            }
                            </>
                            ) : (
                            <>
                            {item.item_category == 'Accessories' ? 
                                (
                                <div class='card' key={item.id}>
                                    <img src = {item.image} class='card-img-top'></img>
                                    <div class='card-body'>
                                        <h3 class='card-title'>{item.name}</h3>
                                        <p class='card-text'>{item.price}</p>
                                        <p class='card-text'>{item.clothing_size}</p>
                                    </div>
                                </div> 
                                ) : (
                                    <>     
                                    </>   
                                )  
                            }
                            </>
                            )}
                            </>
                            )
                    })}
                    </div>
                </>
            ) : (
                <>
                </>
            )}
        </div>
    )
}

export default HomePage