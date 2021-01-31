import React from 'react';
import { Toolbar } from '@material-ui/core';
import homeStyles from './homeStyles';
import MainPage from './MainPage';
import { pageColor } from '../Common/exports';
import NavAndDrawer from './NavAndDrawer';
import Footer from '../Footer/Footer';

function Home() {
  document.body.style = `background:${pageColor}`;
  const classes = homeStyles();

  return (
    <div className={classes.root}>
      <NavAndDrawer />
      <main className={classes.content}>
        <Toolbar />
        <MainPage />
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default Home;
