import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { cartList } from 'actions';
import PageTemplate from 'templates/PageTemplates';
import CartItem from 'components/molecules/CartItem/CartItem';

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

const CartPage = () => {
  const productList = useSelector((state) => state.cartList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartList());
  }, []);
  return loading ? (
    <div>LOADING ...</div>
  ) : error ? (
    <div>ERROR</div>
  ) : (
    <PageTemplate>
      <HeadWrapper>
        <Title>Your shoping cart</Title>
      </HeadWrapper>
      <section>
        {products.map((product) => {
          return (
            <CartItem
              title={product.title}
              price={product.price}
              photo={product.photo}
              key={product.photo}
            />
          );
        })}
      </section>
    </PageTemplate>
  );
};

export default CartPage;
