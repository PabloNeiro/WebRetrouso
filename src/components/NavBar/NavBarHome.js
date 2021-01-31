import React from 'react';
import { AppBar, Hidden, IconButton, Link, Toolbar, Typography, withWidth } from '@material-ui/core';
import navBarStyles from './navBarStyles';
import MenuIcon from '@material-ui/icons/Menu';
import retrouso from '../Home/Images/retrouso.jpg';
import './navbar.css';
function NavBarHome(props) {
  const classes = navBarStyles();
  return (
    <>
      <Hidden smUp>
        <AppBar position='fixed' className={classes.appBarXs}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='menuIcon'
              className={classes.menuButtonHome}
              onClick={() => props.accionAbrir()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              <Link color='inherit' underline='none' href='/'>
                <img src={retrouso} alt='retrouso' className='imgListXs' />
                {/* -- {props.width} */}
              </Link>
            </Typography>
            <Typography variant='h6'>{props.site}</Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden xsDown>
        <AppBar position='fixed' className={classes.appBarUp}>
          <Toolbar>
            <Typography variant='h6' align='center' className={classes.title}>
              <Link color='inherit' underline='none' href='/'>
                <img src={retrouso} alt='retrouso' className='imgList' />
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  );
}

export default withWidth()(NavBarHome);

//
