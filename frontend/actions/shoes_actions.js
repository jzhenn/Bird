import * as APIUtil from '../util/shoes_api_util';

export const RECEIVE_ALL_SHOES = 'RECEIVE_ALL_SHOES';

export const RECEIVE_SHOE = 'RECEIVE_SHOE';

//action shoe creators

const receiveAllShoes = (payload) => {
    return (
        {
            type: RECEIVE_ALL_SHOES,
            payload
        }
    );
}

const receiveShoe = (shoe) => {
    return (
        {
            type: RECEIVE_SHOE, 
            shoe
        }
    );
}



