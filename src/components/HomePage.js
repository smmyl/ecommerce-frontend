import {useState} from 'react'

const HomePage = (props) => {
    const [all, setAll] = useState(true);
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
    return (
        <>  
            <h1>HomePage</h1>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" onClick={props.profileToggle}>Profile</a>
                </li>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" data-toggle="dropdown" role="button" aria-expanded="false" onClick={props.homeToggle}>Home</a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Clothes</a>
                    <a class="dropdown-item" href="#">Shoes</a>
                    <a class="dropdown-item" href="#">Accessories</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" onClick={props.homeToggle}>Home</a>
                    </div>
                </li> */}
                <li class="nav-item">
                    <a class="nav-link active" onClick={props.homeToggle}>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Contact</a>
                </li>
            </ul>
            <button onClick = {allToggle}>ALL</button>
            <button onClick = {clothesToggle}>Clothes</button>
            <button onClick = {shoesToggle}>Shoes</button>
            <button onClick = {accessoriesToggle}>Accessories</button>
            {all ? (
                <div className='items'>
                {props.items.map((item) => {
                    return (
                        <>
                        <div class='card' key={item.id}>
                            <img src = {item.image} class='card-img-top'></img>
                            <div class='card-body'>
                                <h3 class='card-title'>{item.name}</h3>
                                <p class='card-text'>Price: {item.price}</p>
                                <p class='card-text'>Gender: {item.gender}</p>
                                <p class='card-text'>Size: {item.clothing_size}</p>
                                <p class='card-text'>Description: {item.description}</p>
                            </div>
                        </div>
                        </>
                    )
                    })}
                </div>
            ) : (
                <>
                </>
            )}
            {clothes ? (
                <>
                    <h1>CLOTHES</h1>
                </>
            ) : (
                <>
                </>
            )}
            {shoes ? (
                <>
                    <h1>SHOES</h1>
                </>
            ) : (
                <>
                </>
            )}
            {accessories ? (
                <>
                    <h1>ACS</h1>
                </>
            ) : (
                <>
                </>
            )}
        </>
    )
}

export default HomePage