import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import footerStyles from './footerStyles';
import CopyrightIcon from '@material-ui/icons/Copyright';
import SubjectIcon from '@material-ui/icons/Subject';
import MessageIcon from '@material-ui/icons/Message';
function Footer() {
  const classes = footerStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label='Retrouso Ouzande' icon={<CopyrightIcon />} />
      <BottomNavigationAction label='Política de privacidade' icon={<SubjectIcon />} />
      <BottomNavigationAction label='Contacta con Retrouso' icon={<MessageIcon />} />
    </BottomNavigation>
  );
}

export default Footer;
