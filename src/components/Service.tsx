/*
 * @MICROFRONTEND
 *
 * React import'as single-spa kontekste yra privalomas
 * visuose komponentuose, nepriklausomai nuo to ar jis yra naudojamas.
 */
import React from 'react';
import { Typography, Grid, Button } from '@mui/material';

/*
 * @MICROFRONTEND
 *
 * @rc-ses aplinkos teikiamo funkcionalumo import'ai apibrėžti
 * src/@types. Vėliau vietoje tokio formato jie bus pateikiami
 * kaip npm biblioteka.
 */
import { redirectToLanding } from '@rc-ses/self-service-portal-ui-root';
import { addToCart } from '@rc-ses/self-service-portal-ui';

import UserDetailsSection from './UserDetailsSection';

function Service() {
  const serviceName = 'React paslauga #1';

  return (
    <center>
      <Typography variant='h4'>React demo paslauga</Typography>

      <UserDetailsSection />

      <Grid container spacing={1} sx={{ justifyContent: 'center', my: 3 }}>
        <Grid item>
          <Typography variant='h5'>{serviceName}</Typography>
        </Grid>

        <Grid item>
          <Button
            component='button'
            /*
             * @MICROFRONTEND
             *
             * `addToCart` metodo kvietimas, kurį eksportuoja
             * single-spa modulis @rc-ses/self-service-portal-ui
             */
            onClick={() => addToCart(serviceName)}
            variant='contained'
          >Pridėti paslaugą į krepšelį</Button>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ justifyContent: 'center', my: 3 }}>
        <Grid item>
          <Button
            component='button'
            /*
             * @MICROFRONTEND
             *
             * `redirectToLanding` metodo kvietimas, kurį eksportuoja
             * single-spa modulis @rc-ses/self-service-portal-ui-root
             */
            onClick={() => redirectToLanding()}
            variant='text'
          >Grįžti į titulinį</Button>
        </Grid>
      </Grid>
    </center>
  );
}

export default Service;
