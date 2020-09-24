import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { womenProductsList } from 'actions';
import PageTemplate from 'templates/PageTemplates';
import ProductItem from 'components/molecules/ProductItem/ProductItem';
import Heading from 'components/atoms/Heading/Heading';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin: 0 15px;
`;

const Form = styled.form`
  display: flex;
  margin: auto;
`;

const StyledNumberInput = styled.input`
  width: 100%;
  margin: 0 0px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: auto;
`;

const WomenPage = () => {
  const [category, setCategory] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState(99);

  const womenProductList = useSelector((state) => state.womenProductList);
  const { products, loading, error } = womenProductList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(womenProductsList());
  }, []);

  return loading ? (
    <div>LOADING ...</div>
  ) : error ? (
    <div>ERROR</div>
  ) : (
    <PageTemplate>
      <div>
        <div>
          <Heading>CATEGORIES</Heading>
          <StyledForm defaultValue="all">
            <label>
              <input
                type="radio"
                name="category"
                value="all"
                onClick={(e) => setCategory(e.target.value)}
              />
              {'ALL'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="jeans"
                onClick={(e) => setCategory(e.target.value)}
              />
              {'JEANS'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="hat"
                onClick={(e) => setCategory(e.target.value)}
              />
              {'HAT'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="bag"
                onClick={(e) => setCategory(e.target.value)}
              />
              {'BAG'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="shoes"
                onClick={(e) => setCategory(e.target.value)}
              />
              {'SHOES'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="scraf"
                onClick={(e) => setCategory(e.target.value)}
              />
              {'SCRAF'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="jacket"
                onClick={(e) => setCategory(e.target.value)}
              />
              {'JACKET'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="rings"
                onClick={(e) => setCategory(e.target.value)}
              />
              {'RINGS'}
            </label>
          </StyledForm>
        </div>
        <div>
          <Heading>PRICE</Heading>
          <Form>
            <StyledLabel>
              {' '}
              MINIMAL PRICE
              <StyledNumberInput
                type="number"
                placeholder="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </StyledLabel>
            <StyledLabel>
              MAXIMAL PRICE
              <StyledNumberInput
                type="number"
                placeholder="99"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </StyledLabel>
          </Form>
        </div>
      </div>

      <div>
        {category === 'all'
          ? products
              .filter((item) => item.cost >= minPrice && item.cost <= maxPrice)
              .map((item) => {
                return (
                  <ProductItem
                    title={item.title}
                    price={item.price}
                    photo={item.photo}
                    color={item.color}
                    label={item.label}
                    key={item.photo}
                  />
                );
              })
          : products
              .filter(
                (item) =>
                  item.category === category && item.cost >= minPrice && item.cost <= maxPrice,
              )
              .map((item) => {
                return (
                  <ProductItem
                    title={item.title}
                    price={item.price}
                    photo={item.photo}
                    color={item.color}
                    label={item.label}
                    key={item.photo}
                  />
                );
              })}
      </div>
    </PageTemplate>
  );
};
export default WomenPage;
