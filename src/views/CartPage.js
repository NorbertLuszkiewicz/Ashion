import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { cartList } from 'actions';
import PageTemplate from 'templates/PageTemplates';
import ProductItem from 'components/molecules/ProductItem/ProductItem';

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
      <div>
        {products.map((product) => {
          return (
            <ProductItem
              title={product.title}
              price={product.price}
              photo={product.photo}
              key={product.photo}
            />
          );
        })}
      </div>
    </PageTemplate>
  );
};

export default CartPage;
