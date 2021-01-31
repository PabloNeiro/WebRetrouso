import { Divider, Drawer, Hidden, Toolbar } from '@material-ui/core';
import React from 'react';
import drawerStyles from './drawerStyles';
import Lista from './ListaDrawer';

function DrawerLeft(props) {
  const classes = drawerStyles();
  return (
    <>
      <Hidden smUp>
        <Drawer
          className={classes.drawer}
          variant={props.variant}
          classes={{ paper: classes.drawerPaper }}
          anchor='left'
          open={props.open}
          onClose={props.onClose ? props.onClose : null}
        >
          <div className={classes.toolbar}></div>
          <Divider />
          <div className={classes.drawerContainerXs}>
            <Lista />
          </div>
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainerUp}>
            <Lista />
          </div>
        </Drawer>
      </Hidden>
    </>
  );
}

export default DrawerLeft;
