import { Card, CardActions, CardContent, CardMedia, Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton';


const StyledCard = styled(Card)({
    position:'relative',
    cursor:'pointer',

    '&:hover >*':{
        transform:'translateX(0%)'
    }
});

const StyledCardMedia = styled(CardMedia)({
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    height: "100%",
    width: "100%"
});

const StyledCardContent = styled(CardContent)({
    position:'relative',
    backgroundColor: "transparent"
});

const StyledCardActions = styled(CardActions)({
    position:'relative'
});

const StyledContentContainer = styled.div` 
    position: relative;
    padding: 50px 0px;
    background-color: rgb(255,255,255,0.75);
    transform: translateX(100%);
    transition: transform 0.5s;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`

function CategoryCard({category}) {
  return (
    <>
        <StyledCard>
            <StyledCardMedia
            image={category.img}
            title=""
            />

            <StyledContentContainer className='content-container'>
                <StyledCardContent>
                    <h1>{category.title}</h1>
                </StyledCardContent>

                <StyledCardActions>
                    <StyledButton value='shop now'/>
                </StyledCardActions>
            </StyledContentContainer>    
        </StyledCard>
       
    </>
  )
}

export default CategoryCard