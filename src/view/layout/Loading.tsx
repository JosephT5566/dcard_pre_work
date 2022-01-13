import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

const StyledLoading = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
})

export default function Loading() {
    return (
        <StyledLoading>
            <CircularProgress />
        </StyledLoading>
    )
}
