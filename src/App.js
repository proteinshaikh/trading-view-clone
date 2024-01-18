import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';
import './styles.css'; 

const App = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" color="primary">
            Welcome to my notes on technology
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            This is a simple website to publish my notes.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link href="Java.md" color="success" underline="hover" fontWeight="bold">
            Java important notes
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
