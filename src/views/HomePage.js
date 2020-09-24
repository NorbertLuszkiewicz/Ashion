import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { bestProductsList, cardsList } from 'actions';
import PageTemplate from 'templates/PageTemplates';
import Card from 'components/molecules/Card/Card';
import ProductItem from 'components/molecules/ProductItem/ProductItem';
import Heading from 'components/atoms/Heading/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMoneyBillAlt, faLifeRing, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import photo1 from 'assets/categories/category-1.jpg';

const StyledHeading = styled(Heading)`
  margin-left: 20px;
  padding: 5px 0;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 70px;
    background-color: ${({ theme }) => theme.mainRed};
  }
`;

const Benefits = styled.section`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  * {
    margin: 7px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.mainRed};
`;

const HomePage = () => {
  const bestProductList = useSelector((state) => state.bestProductList);
  const cardList = useSelector((state) => state.cardList);
  const { bestProducts, productsLoading, productsError } = bestProductList;
  const { cards, cardsLoading, cardsError } = cardList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bestProductsList());
    dispatch(cardsList());
  }, []);

  return (
    productsLoading,
    cardsLoading ? (
      <div>LOADING ...</div>
    ) : productsError ? (
      <div>ERROR</div>
    ) : cardsError ? (
      <div>ERROR</div>
    ) : (
      <PageTemplate>
        <Card
          big
          title="Women’s fashion"
          quantity="Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
  edolore magna aliquapendisse ultrices gravida."
          link="/"
          photo={photo1}
        />
        {cards.map((card) => {
          return (
            <Card
              title={card.title}
              quantity={card.quantity}
              link={card.link}
              photo={card.photo}
              key={card.photo}
            />
          );
        })}

        <article>
          <StyledHeading>NEW PRODUCT</StyledHeading>;
          {bestProducts.map((product) => {
            return (
              <ProductItem
                title={product.title}
                price={product.price}
                photo={product.photo}
                color={product.color}
                label={product.label}
                key={product.photo}
              />
            );
          })}{' '}
        </article>
        <Benefits>
          <IconWrapper>
            <StyledIcon icon={faCar} />
            <div>
              <h3>Free Shipping</h3>
              <p>For all oder over $99</p>
            </div>
          </IconWrapper>
          <IconWrapper>
            <StyledIcon icon={faMoneyBillAlt} />
            <div>
              <h3>Money Back Guarantee</h3>
              <p>If good have Problems</p>
            </div>
          </IconWrapper>
          <IconWrapper>
            <StyledIcon icon={faLifeRing} />
            <div>
              <h3>Online Support 24/7</h3>
              <p>Dedicated support</p>
            </div>
          </IconWrapper>
          <IconWrapper>
            <StyledIcon icon={faShieldAlt} />
            <div>
              <h3>Payment Secure</h3>
              <p>100% secure payment</p>
            </div>
          </IconWrapper>
        </Benefits>
      </PageTemplate>
    )
  );
};

export default HomePage;
