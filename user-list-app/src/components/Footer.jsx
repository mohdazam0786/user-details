import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledFooter = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: 'purple',
  color: '#FFFFFF',
  textAlign: 'center',
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2">
        © 2024 Azam's pvt ltd
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
