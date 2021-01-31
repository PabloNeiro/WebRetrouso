import Carousel from 'react-material-ui-carousel';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import inverniaStyles from './inverniaStyles';
import inverniaPortada from './Images/inverniaPortada.jpg';
import portadaInvernia1 from './Images/portadaInvernia1.jpg';
import portadaInvernia2 from './Images/portadaInvernia2.jpg';
import portadaInvernia3 from './Images/portadaInvernia3.jpg';

function MainCard() {
  const classes = inverniaStyles();
  var items = [portadaInvernia2, inverniaPortada, portadaInvernia3, portadaInvernia1];

  return (
    <Card className={classes.rootMd}>
      <CardActionArea>
        <Carousel interval='10000' animation='fade' indicators='false' navButtonsAlwaysVisible='true'>
          {items.map((item, i) => (
            <CardMedia key={i} className={classes.mediaMd} image={item} title='Banda de gaitas Invernía' />
          ))}
        </Carousel>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' align='center'>
            Banda de gaitas INVERNÍA
          </Typography>
          <Typography variant='body1' color='textSecondary' component='h4'>
            Esta agrupación é froito dun proxecto nacido no 2018 a medio camiño entre Santiago, Dumbría, Vedra
            e A Estrada, e conta cuns corenta compoñentes de todas as idades. O seu obxectivo é poñer en común
            o traballo das escolas de música tradicional dos devanditos concellos baixo a dirección dos
            mestres Ramón Maril, Marcos Varela e Noelia Bouzón. Ademais da banda de gaitas, Invernía conta
            tamén cun grupo de pandereteiras, bautizadas como Folerpas de Invernía, conformado polas propias
            percusionistas e gaiteiras que forman parte do proxecto. O nome foi idea dun dos seus impulsores,
            Marcos Varela, quen asegura que "primeiramente é un nome con moita musicalidade; ademais o inverno
            é algo moi galego, unha característica moi importante do noso país, ao igual que a gaita é un
            elemento moi representantivo da nosa cultura". Contan cunha identidade gráfica deseñada por Rosa
            de Cabanas, inspirada no propio nome da banda e nas súas evocacións: ventos, néboa, nubes; no son
            da música e tamén na estrutura da formación, composta por catro grupos coas súas respectivas
            traxectorias e cuxos camiños se xuntan nun proxecto común. A pesares da súa corta vida, Invernía
            goza xa de intensa actividade, tendo participado en diferentes foliadas e seráns tradicionais (Fía
            de Baile e Pandeireta de Trazo, Foliada "Fervenza de Músicas" de Ouzande).
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}

export default MainCard;
