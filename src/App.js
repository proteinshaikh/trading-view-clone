import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import './styles.css'; 

const Home = () => (
  <>
    <div className="background-shade"></div>
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" color="brown">
        <p class="p3">Welcome to my notes on technology</p>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ color: 'indigo' }} fontWeight="bold" variant="body1">
        <p class="p3">here you will find important notes on technology.</p>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="/java" style={{ textDecoration: 'none' }}>
          <Typography style={{ color: 'black', textDecoration: 'underline' }} fontWeight="bold">
            <p class="p3">Java important notes</p>
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/hashmap" style={{ textDecoration: 'none' }}>
          <Typography style={{ color: 'black', textDecoration: 'underline' }} fontWeight="bold">
          <p class="p3">how hashmap works</p>
          </Typography>
        </Link>
      </Grid>
    </Grid>
  </Container>
  </>
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
  <Router basename="/trading-view-clone">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/java" element={<JavaNote />} />
      <Route path="/hashmap" element={<HashmapNote />} />
    </Routes>
  </Router>
);

export default App;
