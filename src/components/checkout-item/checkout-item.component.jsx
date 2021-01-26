import React from 'react';
import {connect} from 'react-redux';

import {addItem, decreaseItem, removeItemFromCart} from '../../redux/cart/cart.actions';

import {CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles';

const CheckoutItem = ({cartItem, removeItem, addItem, decreaseItem}) => {
   const {imageUrl, name, quantity, price} = cartItem;
   return (
   <CheckoutItemContainer>
      <ImageContainer>
         <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
         <div onClick={() => decreaseItem(cartItem)}>
            &#10094;
         </div>
         <span>{quantity}</span>
         <div onClick={() => addItem(cartItem)}>
            &#10095;
         </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => removeItem(cartItem)}>
         &#10005;
      </RemoveButtonContainer>
   </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
   removeItem: item => dispatch(removeItemFromCart(item)),
   addItem: item => dispatch(addItem(item)),
   decreaseItem: item => dispatch(decreaseItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);