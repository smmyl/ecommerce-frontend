import {useState} from 'react'

const Show = (props) => {
    return (
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
                    <div id='profcard' class='card' key={props.item.id}>
                        <div id='profcardtop'>
                            <img src = {props.item.image} id='profcard-img-top' class='card-img-top'></img>
                        </div>
                        <div id='profcard-body' class='card-body'>
                            <h3 class='card-title'>{props.item.name}</h3>
                            <p class='card-text'>Price: {props.item.price}</p>
                            <p class='card-text'>Gender: {props.item.gender}</p>
                            <p class='card-text'>Size: {props.item.clothing_size}</p>
                            <p class='card-text'>Description: {props.item.description}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" value={props.item.id}>Buy</button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Show