import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { useGetPosts } from 'api/post'
import { IPost } from 'types/post'

const ArticlesContainer = styled('div')({
    padding: '1em',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
})

const StyledPost = styled('div')({
    padding: '2em 1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    borderBottom: 'solid 1px gray',
})

export default function Articles() {
    const { posts } = useGetPosts()

    return posts ? (
        <ArticlesContainer>
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </ArticlesContainer>
    ) : null
}

const Post = (props: { post: IPost }) => {
    const { post } = props

    return (
        <StyledPost>
            <Typography variant={'h2'} sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {post.title}
            </Typography>
            <Typography variant={'body1'} sx={{ color: 'gray' }}>
                {post.excerpt}
            </Typography>
        </StyledPost>
    )
}
