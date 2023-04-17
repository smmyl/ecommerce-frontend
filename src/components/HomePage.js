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
            <button onClick = {allToggle}>ALL</button>
            <button onClick = {clothesToggle}>Clothes</button>
            <button onClick = {shoesToggle}>Shoes</button>
            <button onClick = {accessoriesToggle}>Accessories</button>
            {all ? (
                <div className='items'>
                {props.items.map((item) => {
                    return (
                        <div className='item' key={item.id}>
                        <img src = {item.image} alt='' />
                        <h3>Name: {item.name}</h3>
                        <h4>Price: {item.price}</h4>
                        <h4>Gender: {item.gender}</h4>
                        <h4>Size: {item.clothing_size}</h4>
                        <p>Description: {item.description}</p>
                        </div>
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