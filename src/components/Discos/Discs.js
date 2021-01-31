import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import NavBarPage from '../NavBar/NavBarPage';
import NavAndDrawer from '../Home/NavAndDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { pageColor } from '../Common/exports';
import OuCard from './OuCard';
import inverniaStyles from '../Invernia/inverniaStyles';
import DousCard from './DousCard';

function Discs() {
  document.body.style = `background: ${pageColor}`;
  const classes = inverniaStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Hidden xsDown>
          <NavBarPage site='DISCOS' />
        </Hidden>
        <Hidden smUp>
          <NavAndDrawer />
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container>
            <Grid xs={12}>
              <Box m={4} bgcolor='#C7EA8F'>
                <Typography align='center' variant='h5'>
                  {/* En Retrouso gravamos dous discos que blablabla... */}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid mt={3} item sm={12} md={5} className={classes.paper}>
              <Box mr={4}>
                <OuCard />
              </Box>
            </Grid>

            <Grid mt={3} item sm={12} md={5} className={classes.paper}>
              <Box mr={4}>
                <DousCard />
              </Box>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
        </main>
      </div>
    </>
  );
}

export default Discs;
