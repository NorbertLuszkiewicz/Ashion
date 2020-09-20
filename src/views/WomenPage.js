import React, { useState } from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplates';
import { women } from 'data';
import ProductItem from 'components/molecules/ProductItem/ProductItem';
import Heading from 'components/atoms/Heading/Heading';

const CategoriesWrapper = styled.div``;

const PriceWrapper = styled.div``;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: auto;
`;

const WomenPage = () => {
  const [category, setCategory] = useState('all');

  return (
    <PageTemplate>
      <div>
        <CategoriesWrapper>
          <Heading>CATEGORIES</Heading>
          <StyledForm defaultValue="all">
            <label>
              <input type="radio" name="category" value="all" onClick={() => setCategory('all')} />
              {'ALL'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="jeans"
                onClick={() => setCategory('jeans')}
              />
              {'JEANS'}
            </label>
            <label>
              <input type="radio" name="category" value="hat" onClick={() => setCategory('hat')} />
              {'HAT'}
            </label>
            <label>
              <input type="radio" name="category" value="bag" onClick={() => setCategory('bag')} />
              {'BAG'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="shoes"
                onClick={() => setCategory('shoes')}
              />
              {'SHOES'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="scraf"
                onClick={() => setCategory('scraf')}
              />
              {'SCRAF'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="jacket"
                onClick={() => setCategory('jacket')}
              />
              {'JACKET'}
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="rings"
                onClick={() => setCategory('rings')}
              />
              {'RINGS'}
            </label>
          </StyledForm>
        </CategoriesWrapper>
        <PriceWrapper>
          <Heading>PRICE</Heading>
          <form>
            <input type="number" placeholder="0" />
            <input type="number" placeholder="99" />
          </form>
        </PriceWrapper>
      </div>

      <div>
        {category === 'all'
          ? women.map((item) => {
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
          : women
              .filter((item) => item.category === category)
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
