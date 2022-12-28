import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import CategoryCard from './basic/CategoryCard'

import { categories } from '../Data/data'

const StyledContainer = styled(Container)({
    padding:'100px 0px'
})

function CategoryCards() {
  return (
    <>
        <StyledContainer>
            <Grid container spacing={2}>
                {categories.map((category)=>(
                    <Grid item xs={12} md={6}>
                        <CategoryCard key={category.id} category={category}/>
                    </Grid>
                ))}
            </Grid>

        </StyledContainer>
    </>
  )
}

export default CategoryCards