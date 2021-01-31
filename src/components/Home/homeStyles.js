import { makeStyles } from '@material-ui/core';

const homeStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
  image: {
    maxHeight: 400,
    padding: theme.spacing(1),
    aspectRatio: 16 / 9,
  },
}));

export default homeStyles;
