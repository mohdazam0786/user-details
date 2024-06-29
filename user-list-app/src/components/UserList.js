import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, CircularProgress, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';
const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  maxHeight: '80vh',
  overflowY: 'auto',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(2),
  width: theme.spacing(7),
  height: theme.spacing(7),
}));


const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h5">No data to show</Typography>;

  return (
    <StyledPaper>
      <List >
        {users.map((user, index) => (
          <StyledListItem button key={`${user.id}-${index}`} onClick={() => onSelectUser(user)}>
            <ListItemAvatar>
              <StyledAvatar src={user.avatar} />
            </ListItemAvatar>
            {" "}
            <ListItemText primary={user.profile.username}  />
            <Divider variant="inset" component="li" />
          </StyledListItem>
        ))}
      </List>
    </StyledPaper>
  );
};

export default UserList;
