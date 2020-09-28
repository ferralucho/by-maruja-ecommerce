import React from 'react';
import styled from 'styled-components';
import { CartProduct as CP } from '../../../../model/cart-product';
import { StyledH2, LinksLarge } from '../../../../config/global-styled-components';
import { colors } from '../../../../config/global-styles';
import Link from 'next/link';

const EmptyContainer = styled.div<{ cart: CP[] }>`
  ${(props) => (props.cart.length ? 'display: none;' : '')}
  margin: 4.5rem 0 4.5rem 0;
  text-align: center;
`;

const EmptyCartTitle = styled(StyledH2)`
  margin-bottom: 2.5rem;
`;

const Line = styled.div`
  width: 8rem;
  border-bottom: 1px solid ${colors.ui.darkSurface};
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
`;

const CartEmpty = ({ cart }: { cart: CP[] }) => {
  return (
    <EmptyContainer cart={cart}>
      <EmptyCartTitle>
        Tu carrito
        <br /> está vacío.
      </EmptyCartTitle>
      <Link href="/categories/productos">
        <LinksLarge>DESCUBRIR PRODUCTOS</LinksLarge>
      </Link>
      <Line />
    </EmptyContainer>
  );
};

export default CartEmpty;