import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';
import NavBarHome from '../NavBar/NavBarHome';
import DrawerLeft from '../Drawer/DrawerLeft';
import homeStyles from './homeStyles';
import { pageColor } from '../Common/exports';

function NavAndDrawer(props) {
  document.body.style = `background:${pageColor}`;
  const classes = homeStyles();
  const [abrir, setAbrir] = useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  return (
    <div className={classes.root}>
      <NavBarHome accionAbrir={accionAbrir} title='RETROUSO' site={props.site} />
      <Hidden xsDown>
        <DrawerLeft variant='permanent' open={true} />
      </Hidden>
      <Hidden smUp>
        <DrawerLeft variant='temporary' open={abrir} onClose={accionAbrir} />
      </Hidden>
    </div>
  );
}

export default NavAndDrawer;
