/*
 * @MICROFRONTEND
 *
 * React import'as single-spa kontekste yra privalomas
 * visuose komponentuose, nepriklausomai nuo to ar jis yra naudojamas.
 */
import React, { useState } from 'react';
import { Typography, Grid, Button, Box, Collapse, CardContent } from '@mui/material';

/*
 * @MICROFRONTEND
 *
 * @rc-ses aplinkos teikiamo funkcionalumo import'ai apibrėžti
 * src/@types. Vėliau vietoje tokio formato jie bus pateikiami
 * kaip npm biblioteka.
 */
import { User, getUser } from '@rc-ses/self-service-portal-ui';

function UserDetailsSection() {
  /*
   * @MICROFRONTEND
   *
   * `getUser` metodo kvietimas, bei User tipas, kuriuos eksportuoja
   * single-spa modulis @rc-ses/self-service-portal-ui
   */
  const user: User = getUser();

  const [displayUserDetails, setDisplayUserDetails] = useState<boolean>(false);

  return (
    <Box>
      <Typography variant='body2'>
        Vartotojas:{' '}
        <Button variant='text' type='button' onClick={() => setDisplayUserDetails(!displayUserDetails)}>
          {user?.name} {user?.last_name}
        </Button>
      </Typography>

      <Collapse in={displayUserDetails} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={1}>
            {Object.keys(user).map((key) => (
              <React.Fragment key={key}>
                <Grid item xs={6} textAlign='end'>{key}:</Grid>
                <Grid item xs={6} textAlign='start'>{user[key]}</Grid>
              </React.Fragment>
            ) )}
          </Grid>
        </CardContent>
      </Collapse>
    </Box>
  );
}

export default UserDetailsSection;
