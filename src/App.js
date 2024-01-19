import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import './styles.css'; 

const Home = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" color="primary">
          welcome to my notes on technology
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          here you will find important notes on technology.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="/java" style={{ textDecoration: 'none' }}>
          <Typography color="success" underline="hover" fontWeight="bold">
            Java important notes
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/hashmap" style={{ textDecoration: 'none' }}>
          <Typography color="success" underline="hover" fontWeight="bold">
            how hashmap works
          </Typography>
        </Link>
      </Grid>
    </Grid>
  </Container>
);

const JavaNote = () => {
  const [javaContent, setJavaContent] = useState('');

  useEffect(() => {
    fetch('/Java.md')
      .then(response => response.text())
      .then(data => setJavaContent(data))
      .catch(error => console.error('Error fetching Java.md:', error));
  }, []);

  return (
    <Container>
      <ReactMarkdown>{javaContent}</ReactMarkdown>
    </Container>
  );
};

const HashmapNote = () => {
  const [hashmapContent, setHashmapContent] = useState('');

  useEffect(() => {
    fetch('/javastepbystep.md')
      .then(response => response.text())
      .then(data => setHashmapContent(data))
      .catch(error => console.error('Error fetching javastepbystep.md:', error));
  }, []);

  return (
    <Container>
      <ReactMarkdown>{hashmapContent}</ReactMarkdown>
    </Container>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/java" element={<JavaNote />} />
      <Route path="/hashmap" element={<HashmapNote />} />
    </Routes>
  </Router>
);

export default App;
