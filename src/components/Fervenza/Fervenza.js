import { Hidden } from '@material-ui/core';
import React from 'react';
import inverniaStyles from '../Invernia/inverniaStyles';
import NavBarPage from '../NavBar/NavBarPage';
import NavAndDrawer from '../Home/NavAndDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { pageColor } from '../Common/exports';

function Fervenza() {
  document.body.style = `background: ${pageColor}`;
  const classes = inverniaStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Hidden xsDown>
          <NavBarPage site='A FERVENZA DE OUZANDE' />
        </Hidden>
        <Hidden smUp>
          <NavAndDrawer />
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
    </>
  );
}

export default Fervenza;
