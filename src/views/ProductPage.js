import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import PageTemplate from 'templates/PageTemplates';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { detailsProduct } from 'actions';

const Wrapper = styled.main`
  display: grid;
  margin-top: 20px;
`;

const TitleWrapper = styled.main`
  text-align: center;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledButton = styled.button`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 5px;
  background-color: ${({ theme }) => theme.lightGreen};

  border: none;
  border-radius: 20px;
`;

const StyledSection = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  margin: 20px 0 5px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 400;
`;

const Price = styled.h2`
  margin: 10px 0 25px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
`;

const StyledStrong = styled.strong`
  font-weight: 400;
`;

const ReviewsWrapper = styled.div``;

const ReviewsStars = styled.div`
  color: #e3c01c;
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: -10px 0 -5px;
`;

const Created = styled(Paragraph)`
  color: #888;
`;

const ProductPage = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}`);
  };

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return loading ? (
    <div>LOADING ...</div>
  ) : error ? (
    <div>ERROR</div>
  ) : (
    <PageTemplate>
      <Wrapper>
        <StyledSection>
          <StyledImg src={product.photo} alt={product.photo} />
          <TitleWrapper>
            <Title>{product.title}</Title>
            <Price>
              Price:<StyledStrong>{product.price}</StyledStrong>
            </Price>
            <StyledButton onClick={handleAddToCart}>Add to cart</StyledButton>
          </TitleWrapper>
        </StyledSection>
        <StyledSection>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam beatae, officiis iure,
          fugit, laboriosam itaque sequi molestiae accusamus omnis iste alias repellat quos esse
          saepe aliquam a fuga unde? Consectetur
        </StyledSection>
        <StyledSection>
          <ReviewsWrapper>
            <h3>Amazing</h3>
            <ReviewsStars>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </ReviewsStars>
            <Created>by Oralia B. on Aug 10, 2020</Created>
            <Paragraph>
              This item was brilliant. Arrived just as described and on time. It is spot on.
            </Paragraph>
          </ReviewsWrapper>
          <ReviewsWrapper>
            <h3>Fantastic!</h3>
            <ReviewsStars>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </ReviewsStars>
            <Created>by Alex R. on May 13, 2020</Created>
            <Paragraph>
              Omg... This is so high quality. This isnt a bot feedback... I actually love this item
              and the quality!❤❤❤
            </Paragraph>
          </ReviewsWrapper>
        </StyledSection>
      </Wrapper>
    </PageTemplate>
  );
};

export default ProductPage;
