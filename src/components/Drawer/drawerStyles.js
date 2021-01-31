import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;
const drawerStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainerXs: {
    overflow: 'hidden',
  },
  drawerContainerUp: {
    overflow: 'auto',
  },
  toolbar: theme.mixins.toolbar,
}));

export default drawerStyles;
