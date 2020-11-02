import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from 'actions';
import PageTemplate from 'templates/PageTemplates';
import CartItem from 'components/molecules/CartItem/CartItem';

const StyledButton = styled.button`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 8px 20px;
  background: ${({ theme }) => theme.lightGreen};
  border: none;
  border-radius: 15px;
  margin-top: 40px;
`;

const HeadWrapper = styled.div`
  position: relative;
  padding: 10px 0;
  margin: 0 0 30px;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 300;
  text-align: center;
`;

const CartPage = (props) => {
  const productId = props.match.params.id;
  const dispatch = useDispatch();

  const cartsList = useSelector((state) => state.cart);
  const { cartItems } = cartsList;
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [productId, dispatch]);

  return (
    <PageTemplate>
      <HeadWrapper>
        <Title>Your shoping cart</Title>
      </HeadWrapper>
      <section>
        {cartItems.map((product) => {
          return (
            <CartItem
              title={product.title}
              price={product.price}
              photo={product.photo}
              key={product.id}
              remote={() => removeFromCartHandler(product.id)}
            />
          );
        })}
      </section>
      <StyledButton>Proceed to checkout</StyledButton>
    </PageTemplate>
  );
};

export default CartPage;
