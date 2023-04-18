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
        <div class='add-container'>
            <form onSubmit={handleSubmit}>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='item_category'>Category: </label>
                    <div class="col-sm-2">
                        <select class='form-control' type='text' id='item_category' name='item_category' onChange={handleChange}>
                            <option selected disabled value=''>Choose...</option>
                            <option value='Clothing'>Clothing</option>
                            <option value='Shoes'>Shoes</option>
                            <option value='Accessories'>Accessories</option>
                        </select>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='image'>Image URL: </label>
                    <div class="col-sm-8">
                        <input class='form-control' type='text' name='image' onChange={handleChange}/>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='gender'>Gender: </label>
                    <div class="col-sm-2">
                        <select class='form-control' type='text' id = 'gender' name='gender' onChange={handleChange}>
                            <option selected disabled value=''>Choose...</option>
                            <option value='M'>M</option>
                            <option value='F'>F</option>
                            <option value='N'>Neutral</option>
                        </select>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='name'>Name: </label>
                    <div class="col-sm-3">
                        <input class='form-control' type='text' name='name' onChange={handleChange}/>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='price'>Price: </label>
                    <div class="col-sm-2">
                        <input class='form-control' type='number' name='price' onChange={handleChange}/>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='tags'>Tags: </label>
                    <div class="col-sm-2">
                        <input class='form-control' type='text' name='tags' onChange={handleChange}/>
                    </div>
                </div>
                <div class='form-group row'>
                <label class="col-sm-2 col-form-label" htmlFor='clothing_size'>Clothing size: </label>
                    <div class="col-sm-2">
                        <select class='form-control' type='text' name='clothing_size' onChange={handleChange}>
                            <option selected disabled value=''>Choose...</option>
                            <option value='None'>None</option>
                            <option value='XS'>XS</option>
                            <option value='S'>S</option>
                            <option value='M'>M</option>
                            <option value='L'>L</option>
                            <option value='XL'>XL</option>
                            <option value='XXL'>XXL</option>
                        </select>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='shoe_size'>Shoe size: </label>
                    <div class="col-sm-2">
                        <select class='form-control' type='text' name='shoe_size' onChange={handleChange}>
                            <option selected disabled value=''>Choose...</option>
                            <option value='None'>None</option><option value='0'>0</option><option value='0.5'>0.5</option><option>1</option><option>1.5</option><option>2</option><option>3</option><option>3.5</option><option>4</option><option>4.5</option><option>5</option><option>5.5</option><option>6</option><option>6.5</option><option>7</option><option>7.5</option><option>8</option><option>8.5</option><option>9</option><option>9.5</option><option>10</option><option>10.5</option><option>11</option><option>11.5</option><option>12</option><option>12.5</option><option>13</option><option>13.5</option><option>14</option><option>14.5</option><option>15</option><option>15.5</option><option>16</option><option>16.5</option><option>17</option>
                        </select>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='description'>Description: </label>
                    <div class="col-sm-6">
                        <textarea class='form-control' type='text' name='description' rows='10' cols='50' onChange={handleChange}/>
                    </div>
                </div>
                    <input type='submit' value='Add' />
                    <button onClick={props.hideAdd}>Cancel</button>
            </form>  
        </div>
    )
}

export default Add