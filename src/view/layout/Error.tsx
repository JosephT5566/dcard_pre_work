import React from 'react'

import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const StyledError = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h1': {
        color: theme.palette.error.main,
    },
}))

interface Props {
    err: Error
}

export default function Error({ err }: Props) {
    console.log(err)
    return (
        <StyledError>
            <Typography variant={'h1'}>{'Oops!! Something Wrong...'}</Typography>
            <Typography variant={'body1'}>{err.message}</Typography>
        </StyledError>
    )
}
