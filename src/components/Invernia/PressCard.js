import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import inverniaStyles from './inverniaStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import lorient1 from './Images/lorient1.jpg';

function PressCard() {
  const classes = inverniaStyles();
  return (
    <Card className={classes.rootXs}>
      <CardActionArea>
        <CardMedia className={classes.mediaXs} image={lorient1} title='Contemplative Reptile' />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            Invernía en Lorient
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            No ano 2019 Invernía participou na 49 edición do Festival Interceltique de Lorient
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button mx={5} href='https://www.facebook.com/InverniaOficial' target='blank'>
          <FacebookIcon color='primary' fontSize='large' />
        </Button>
        <Button mx={5} href='https://www.instagram.com/invernia_oficial/?hl=es' target='blank'>
          <InstagramIcon color='primary' fontSize='large' />
        </Button>
        <Button ml={5} href='https://twitter.com/InverniaOf' target='blank'>
          <TwitterIcon color='primary' fontSize='large' />
        </Button>
      </CardActions>
    </Card>
  );
}

export default PressCard;
