import { AppBar, IconButton, Link, Toolbar, Typography, withWidth } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import navBarStyles from './navBarStyles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import Lista from '../Drawer/ListaDrawer';
import { useTheme } from '@material-ui/core/styles';
import retrouso from '../Home/Images/retrouso.jpg';
import { drawerColor } from '../Common/exports';
function NavBarPage(props) {
  const classes = navBarStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color={drawerColor}
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButtonPage, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <Link color='inherit' underline='none' href='/'>
              <img src={retrouso} alt='retrouso' className='imgList' />
            </Link>
            {/* <Typography variant='h6'>{props.site}</Typography> */}
          </Typography>
          <Typography variant='h6'>{props.site}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Lista />
      </Drawer>
    </>
  );
}

export default withWidth()(NavBarPage);
