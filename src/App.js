import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Typography variant="h1" color="primary">
        Welcome to my notes on technology
      </Typography>
      <Typography variant="body1">
        This is a simple website to publish my notes.
      </Typography>
      <Link href="Java.md" color="success" underline="hover" fontWeight="bold">
        java important notes
      </Link>
    </Container>
  );
};

export default App;
