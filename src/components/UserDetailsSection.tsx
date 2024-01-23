import React, { useState } from 'react';
import { Typography, Grid, Button, Box, Collapse, CardContent } from '@mui/material';
import { User, getUser } from '@rc-ses/self-service-portal-ui';

function UserDetailsSection() {
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
