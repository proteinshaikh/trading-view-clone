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
          Welcome to my notes on technology
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          This is a simple website to publish my notes.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="/java" style={{ textDecoration: 'none' }}>
          <Typography color="success" underline="hover" fontWeight="bold">
            Java important notes
          </Typography>
        </Link>
      </Grid>
    </Grid>
  </Container>
);

const JavaNote = () => {
  const [javaContent, setJavaContent] = useState('');

  useEffect(() => {
    // Fetch the content of Java.md (replace with your own logic if needed)
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

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/java" element={<JavaNote />} />
    </Routes>
  </Router>
);

export default App;
