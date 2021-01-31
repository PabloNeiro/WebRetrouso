import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box, Grid, Link } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AlbumIcon from '@material-ui/icons/Album';
import SchoolIcon from '@material-ui/icons/School';
import GroupIcon from '@material-ui/icons/Group';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import LockIcon from '@material-ui/icons/Lock';
import ExtensionIcon from '@material-ui/icons/Extension';
import { drawerColor } from '../Common/exports';

function Lista() {
  const marginTop = 2;
  return (
    <div>
      <Box bgcolor={drawerColor}>
        <List component='nav'>
          <Grid container>
            <Grid item xs={12}>
              <Link color='inherit' underline='none' href='/Galeria'>
                <Box mt={marginTop}>
                  <ListItem>
                    <ListItemIcon>
                      <PhotoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText>GALERÍA</ListItemText>
                  </ListItem>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Link color='inherit' underline='none' href='/Discography'>
                <Box mt={marginTop}>
                  <ListItem>
                    <ListItemIcon>
                      <AlbumIcon />
                    </ListItemIcon>
                    <ListItemText>DISCOS</ListItemText>
                  </ListItem>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Link color='inherit' underline='none' href='/A-Fervenza-de-Ouzande'>
                <Box mt={marginTop}>
                  <ListItem>
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    <ListItemText>A FERVENZA</ListItemText>
                  </ListItem>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Link color='inherit' underline='none' href='/Essays'>
                <Box mt={marginTop}>
                  <ListItem>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText>ESCOLA</ListItemText>
                  </ListItem>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Link color='inherit' underline='none' href='/Invernia'>
                <Box mt={marginTop}>
                  <ListItem>
                    <ListItemIcon>
                      <ExtensionIcon />
                    </ListItemIcon>
                    <ListItemText>INVERNÍA</ListItemText>
                  </ListItem>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Link color='inherit' underline='none' href='/Contact'>
                <Box mt={marginTop}>
                  <ListItem>
                    <ListItemIcon>
                      <PermPhoneMsgIcon />
                    </ListItemIcon>
                    <ListItemText>CONTACTO</ListItemText>
                  </ListItem>
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Link color='inherit' underline='none' href='/Admin'>
                <Box mt={marginTop}>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <LockIcon />
                    </ListItemIcon>
                    <ListItemText>Admin</ListItemText>
                  </ListItem>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </List>
      </Box>
    </div>
  );
}

export default Lista;
