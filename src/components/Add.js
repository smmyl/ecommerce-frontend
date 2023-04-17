import {useState} from 'react'

const Add = (props) => {
    const [item, setItem] = useState()

    const handleChange = (event) => {
        setItem({...item, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(item)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='item_category'>Category: </label>
                <select type='text' id='item_category' name='item_category' onChange={handleChange}>
                    <option>Clothing</option>
                    <option>Shoes</option>
                    <option>Acessories</option>
                </select>
                <br/>
                <br/>
                <label htmlFor='image'>Image URL: </label>
                <input type='url' name='image' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='gender'>Gender: </label>
                <select type='text' id = 'gender' name='gender' onChange={handleChange}>
                    <option>M</option>
                    <option>F</option>
                    <option>Neutral</option>
                </select>
                <br/>
                <br/>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='price'>Price: </label>
                <input type='number' name='price' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='tags'>Tags: </label>
                <input type='text' name='tags' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='clothing_size'>Clothing size: </label>
                <select type='text' name='clothing_size' onChange={handleChange}>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                <br/>
                <br/>
                <label htmlFor='shoe_size'>Shoe size: </label>
                <select type='number' name='shoe_size' onChange={handleChange}>
                    <option>0</option><option>0.5</option><option>1</option><option>1.5</option><option>2</option><option>3</option><option>3.5</option><option>4</option><option>4.5</option><option>5</option><option>5.5</option><option>6</option><option>6.5</option><option>7</option><option>7.5</option><option>8</option><option>8.5</option><option>9</option><option>9.5</option><option>10</option><option>10.5</option><option>11</option><option>11.5</option><option>12</option><option>12.5</option><option>13</option><option>13.5</option><option>14</option><option>14.5</option><option>15</option><option>15.5</option><option>16</option><option>16.5</option><option>17</option>
                </select>
                <br/>
                <br/>
                <label htmlFor='description'>Description: </label>
                <br/>
                <textarea type='text' name='description' rows='10' cols='50' onChange={handleChange}/>
                <br/>
                <input type='submit' value='Add' />
            </form>  
        </>
    )
}

export default Add