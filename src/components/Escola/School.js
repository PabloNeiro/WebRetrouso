import { Hidden } from '@material-ui/core';
import React from 'react';
import inverniaStyles from '../Invernia/inverniaStyles';
import NavBarPage from '../NavBar/NavBarPage';
import NavAndDrawer from '../Home/NavAndDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { pageColor } from '../Common/exports';
import Footer from '../Footer/Footer';

function School() {
  document.body.style = `background: ${pageColor}`;
  const classes = inverniaStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Hidden xsDown>
          <NavBarPage site='ESCOLA' />
        </Hidden>
        <Hidden smUp>
          <NavAndDrawer />
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
}

export default School;
