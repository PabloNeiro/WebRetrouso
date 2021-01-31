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
import redes from './Images/redes.jpg';

function RedesCard() {
  const classes = inverniaStyles();
  return (
    <Card className={classes.rootXs}>
      <CardActionArea>
        <CardMedia className={classes.mediaXs} image={redes} title='Contemplative Reptile' />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            Invernía nas Redes
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Podes seguir a Invernía nas súas redes sociais para estar ó tanto de todas as súas novas
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

export default RedesCard;
