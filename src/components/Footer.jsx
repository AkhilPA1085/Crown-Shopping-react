import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled(Container)({
    padding:'100px 0px'
});

const StyledGridItem = styled(Grid)({
    display:'flex',
    justifyContent:'end',
    alignItems:'center'
})

function Footer() {
  return (
    <>
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography>All Copywrites reserved by Crown Shopping</Typography>
                </Grid>
                <StyledGridItem item xs={12} md={6}>
                    <Typography>Site url</Typography>
                    <Typography>Terms & Conditions</Typography>
                </StyledGridItem>
            </Grid>
        </StyledContainer>
    </>
  )
}

export default Footer