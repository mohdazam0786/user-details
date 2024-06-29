import React from 'react';
import { CardContent, Typography, Avatar, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#FFFF', // White background
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Box shadow for depth
  borderRadius: '20px', // Rounded square corners
  border: `2px solid #964734`, // Deep Orange border
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  border: `3px solid #964734`, // Deep Orange border
  borderRadius: '20px', // Rounded square corners for avatar
}));

const UserDetails = ({ user }) => {
  if (!user) return <Typography variant="h6">Select a user to see the details</Typography>;

  return (
    <StyledPaper>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <StyledAvatar src={user.avatar} />
        </Grid>
        <Grid item xs>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: '8px', color: '#FF5722' }}>
              {user.profile.firstName} {user.profile.lastName}
            </Typography>
            <Typography variant="body1" color="textSecondary">{user.profile.email}</Typography>
            <Typography variant="body2" style={{ marginTop: '8px', color: '#333333' }}>{user.Bio}</Typography>
            <Typography variant="body3" color='purple'>{user.jobTitle}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default UserDetails;
