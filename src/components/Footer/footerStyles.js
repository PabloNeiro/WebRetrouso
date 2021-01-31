import { makeStyles } from '@material-ui/core';

const footerStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // position: 'fixed',
    bottom: theme.spacing(0),
  },
}));

export default footerStyles;
