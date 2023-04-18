import {useState} from 'react'

const Edit = (props) =>  {
    const [item, setItem] = useState({...props.item})
    const [edit, setEdit] = useState(false)

    const handleChange = (event) => {
        setItem({...item, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(item)
    }

    const toggleEdit = () => {
        setEdit(!edit)
    }

    return(
        <>
            <button id='editbtn' type="button" class="btn btn-dark btn-sm" data-toggle="modal" data-target="#staticBackdrop" onClick={toggleEdit}>
            Edit
            </button>
            {edit ? 
                <>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">{props.item.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id='editform' onSubmit={handleSubmit}>
                        <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='item_category'>Category: </label>
                    <div class="col-sm-4">
                        <select class='form-control' type='text' id='item_category' name='item_category' onChange={handleChange}
                        value={item.item_category}>
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
                        <input class='form-control' type='text' name='image' onChange={handleChange} value={item.image}/>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='gender'>Gender: </label>
                    <div class="col-sm-4">
                        <select class='form-control' type='text' id = 'gender' name='gender' onChange={handleChange} value={item.gender}>
                            <option selected disabled value=''>Choose...</option>
                            <option value='M'>M</option>
                            <option value='F'>F</option>
                            <option value='N'>Neutral</option>
                        </select>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='name'>Name: </label>
                    <div class="col-sm-5">
                        <input class='form-control' type='text' name='name' onChange={handleChange} value={item.name}/>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='price'>Price: </label>
                    <div class="col-sm-3">
                        <input class='form-control' type='number' name='price' onChange={handleChange} value={item.price}/>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='tags'>Tags: </label>
                    <div class="col-sm-4">
                        <input class='form-control' type='text' name='tags' onChange={handleChange} value={item.tags}/>
                    </div>
                </div>
                <div class='form-group row'>
                <label class="col-sm-2 col-form-label" htmlFor='clothing_size'>Clothing size: </label>
                    <div class="col-sm-3">
                        <select class='form-control' type='text' name='clothing_size' onChange={handleChange} value={item.clothing_size}>
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
                    <div class="col-sm-3">
                        <select class='form-control' type='text' name='shoe_size' onChange={handleChange} value={item.shoe_size}>
                            <option selected disabled value=''>Choose...</option>
                            <option value='None'>None</option><option value='0'>0</option><option value='0.5'>0.5</option><option>1</option><option>1.5</option><option>2</option><option>3</option><option>3.5</option><option>4</option><option>4.5</option><option>5</option><option>5.5</option><option>6</option><option>6.5</option><option>7</option><option>7.5</option><option>8</option><option>8.5</option><option>9</option><option>9.5</option><option>10</option><option>10.5</option><option>11</option><option>11.5</option><option>12</option><option>12.5</option><option>13</option><option>13.5</option><option>14</option><option>14.5</option><option>15</option><option>15.5</option><option>16</option><option>16.5</option><option>17</option>
                        </select>
                    </div>
                </div>
                <div class='form-group row'>
                    <label class="col-sm-2 col-form-label" htmlFor='description'>Description: </label>
                    <div class="col-sm-10">
                        <textarea class='form-control' type='text' name='description' rows='10' cols='50' onChange={handleChange} value={item.description}/>
                    </div>
                </div>
                    </form>
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={props.handleDelete} value={item.id}>Delete</button>
                        <button type="button submit" form='editform' value='Update' class="btn btn-primary" data-dismiss="modal" >Update</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
            :
            <>
            </>
        }
        </>
    )
}

export default Edit