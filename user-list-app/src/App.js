import React, { useState } from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
}));

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Container>
      <StyledPaper>
        <Typography variant="h4" gutterBottom>
          User List
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <UserList onSelectUser={setSelectedUser} />
          </Grid>
          <Grid item xs={12} md={6}>
            <UserDetails user={selectedUser} />
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default App;
