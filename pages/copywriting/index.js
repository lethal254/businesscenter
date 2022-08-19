import { Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { runTextGeneration } from '../../services/copyContentGen';
import PageTitleWrapper from '../../src/components/PageTitleWrapper';
import SidebarLayout from '../../src/layouts/SidebarLayout';

const Copywriting = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const handleFetchTextPrediction = async () => {
    try {
      if (prompt) {
        const data = await runTextGeneration(prompt);
        console.log(data);
        setGeneratedText(data.choices[0].text);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <PageTitleWrapper>
        <Typography variant="h2">Generate copy content</Typography>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="outlined-required"
              label="Your query"
              defaultValue="Query"
              multiline
              fullWidth
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={(e) => handleFetchTextPrediction()}
            >
              Generate
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="outlined-required"
              label="Here is what we came up with"
              defaultValue="Response"
              value={generatedText ? generatedText : ''}
              multiline
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Copywriting.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Copywriting;
