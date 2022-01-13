import moment from 'moment'

import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Loading from 'view/layout/Loading'

import { IPost } from 'types/post'

const StyledPost = styled('div')({
    padding: '2em 1em',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto auto auto auto',
    gridTemplateAreas: `
    "id id"
    "header header"
    "title thumb"
    "main thumb"
    `,
    gap: '1em',
    borderBottom: 'solid 1px gray',
    '& .id': {
        gridArea: 'id',
    },
    '& .header': {
        gridArea: 'header',
    },
    '& .title': {
        gridArea: 'title',
    },
    '& .main': {
        gridArea: 'main',
    },
    '& .thumb': {
        gridArea: 'thumb',
    },
})

export default function Post(props: { post: IPost }) {
    const { post } = props

    return (
        <StyledPost>
            <Typography
                className={'id'}
                variant={'subtitle1'}
                sx={{ fontSize: '0.5rem' }}
            >
                {post.id}
            </Typography>
            <div className={'header'} style={{ display: 'flex', gap: '1em' }}>
                <Typography variant={'subtitle1'} sx={{ fontSize: '0.5rem' }}>
                    {post.forumName}
                </Typography>
                <Typography variant={'subtitle1'} sx={{ fontSize: '0.5rem' }}>
                    {moment(post.createAt).format('YYYY-MM-DD')}
                </Typography>
            </div>
            <Typography
                className={'title'}
                variant={'h2'}
                sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
                {post.title}
            </Typography>
            <Typography className={'main'} variant={'body1'} sx={{ color: 'gray' }}>
                {post.excerpt}
            </Typography>
            {post.media.length > 0 ? (
                <div
                    className={'thumb'}
                    style={{
                        width: 84,
                        height: 84,
                        overflow: 'hidden',
                        borderRadius: '12px',
                    }}
                >
                    <img
                        src={post.media[0].url}
                        alt="media"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            ) : null}
        </StyledPost>
    )
}
