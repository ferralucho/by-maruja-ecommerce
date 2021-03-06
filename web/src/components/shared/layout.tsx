import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import styled, { createGlobalStyle } from 'styled-components';

import NavBar from './navbar';
import Footer from './footer/footer';
import { CategoryConfiguration } from '../../model/category-configuration';
import { fonts, colors } from '../../config/global-styles';
import SEO from '../../../next-seo.config';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
  }

  @font-face {
    font-family: ${fonts.primary.name};
    src: url('/fonts/Ortica-Light.woff') format("woff");
    font-display: block;
  }

  @font-face {
    font-family: ${fonts.secondary.regular.name};
    src: url('/fonts/Proxima-Nova.woff') format("woff");
    font-display: block;
  }

  @font-face {
    font-family: ${fonts.secondary.bold.name};
    src: url('/fonts/Proxima-Nova-Bold.woff') format("woff");
    font-display: block;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Main = styled.main`
  background-color: ${colors.ui.whiteBackground};
`;

type LayoutProps = {
  categories: CategoryConfiguration[];
};

const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <Main>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} twitter={SEO.twitter} />
      <GlobalStyle />
      <Head>
        <title>By Maruja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar categories={props.categories} />
      {props.children}
      <Footer />
    </Main>
  );
};

export default Layout;
