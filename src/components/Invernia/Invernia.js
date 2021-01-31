import React from 'react';
import { Box, Grid, Hidden } from '@material-ui/core';
import MainCard from '../Invernia/MainCard';
import PressCard from '../Invernia/PressCard';
import RedesCard from '../Invernia/RedesCard';
import { pageColor } from '../Common/exports';
import NavBarPage from '../NavBar/NavBarPage';
import NavAndDrawer from '../Home/NavAndDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import inverniaStyles from './inverniaStyles';

function Invernia() {
  document.body.style = `background: ${pageColor}`;
  const classes = inverniaStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden xsDown>
        <NavBarPage site='INVERNÍA' />
      </Hidden>
      <Hidden smUp>
        <NavAndDrawer site='INVERNÍA' />
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container color='primary.main'>
          <Grid mt={3} item sm={12} md={9} className={classes.paper}>
            <MainCard />
          </Grid>
          <Hidden smDown>
            <Grid item md={3} className={classes.paper}>
              <Grid item xs={12}>
                <RedesCard />
              </Grid>
              <Box mt={5}>
                <Grid item xs={12}>
                  <PressCard />
                </Grid>
              </Box>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item sm={6} xs={12} className={classes.paper}>
              <RedesCard />
            </Grid>
            <Grid item sm={6} xs={12} className={classes.paper}>
              <PressCard />
            </Grid>
          </Hidden>
        </Grid>
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default Invernia;
