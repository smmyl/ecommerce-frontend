import {useState} from 'react'

const HomePage = (props) => {
    const [all, setAll] = useState(true);
    const [men, setMen] = useState(false);
    const [women, setWomen] = useState(false);
    const [clothes, setClothes] = useState(false);
    const [shoes, setShoes] = useState(false);
    const [accessories, setAccessories] = useState(false);

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
    }
    const womenToggle = () => {
        setWomen(true)
    }
    return (
        <div class='home-container'>  
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" onClick={props.profileToggle}>Profile</a>
                </li>
                <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle active" data-toggle="dropdown" role="button" aria-expanded="false">Home</a>
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
            <div class='categories'>
                <button class='btn btn-dark'onClick = {allToggle}>ALL</button>
                <button class='btn btn-dark' onClick = {clothesToggle}>Clothes</button>
                <button class='btn btn-dark' onClick = {shoesToggle}>Shoes</button>
                <button class='btn btn-dark' onClick = {accessoriesToggle}>Accessories</button>
            </div>
   
            {all ? (
                <>
                <h4 class='nav-pointer'>Home > All</h4>
                <h1>All</h1>
                <div className='items'>
                {props.items.map((item) => {
                    if (item.gender = 'M') {
                    return (
                        <>
                        <div class='card' key={item.id}>
                            <img src = {item.image} class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>{item.name}</h3>
                                <p class='card-text'>${item.price}</p>
                                <p class='card-text'>{item.clothing_size}</p>
                            </div>
                        </div>
                        </>
                    )
                    } else {
                        return(
                            <>
                            </>
                        )
                    }
                    })}
                </div>
                </>
            ) : (
                <>
                </>
            )}
            {clothes ? (
                <>
                <h4 class='nav-pointer'>Home > Clothes</h4>
                    <h1>CLOTHES</h1>
                </>
            ) : (
                <>
                </>
            )}
            {shoes ? (
                <>
                <h4 class='nav-pointer'>Home > Shoes</h4>
                    <h1>SHOES</h1>
                </>
            ) : (
                <>
                </>
            )}
            {accessories ? (
                <>
                <h4 class='nav-pointer'>Home > Accessories</h4>
                    <h1>ACS</h1>
                </>
            ) : (
                <>
                </>
            )}
        </div>
    )
}

export default HomePage