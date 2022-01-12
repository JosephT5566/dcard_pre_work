import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Loading from 'view/layout/Loading'

import { useGetInfinitePosts } from 'api/post'
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
    const { infinitePosts, fetchNextPage, isFetchingNextPage } = useGetInfinitePosts()

    return (
        <ArticlesContainer>
            {infinitePosts ? (
                <>
                    {infinitePosts.pages.map((posts) =>
                        posts.map((post) => <Post post={post} />)
                    )}
                    {isFetchingNextPage ? (
                        <Loading />
                    ) : (
                        <Button variant={'outlined'} onClick={() => fetchNextPage()}>
                            {'load more...'}
                        </Button>
                    )}
                </>
            ) : (
                <Loading />
            )}
        </ArticlesContainer>
    )
}

const Post = (props: { post: IPost }) => {
    const { post } = props

    return (
        <StyledPost>
            <Typography variant={'subtitle1'} sx={{ fontSize: '0.5rem' }}>
                {post.id}
            </Typography>
            <Typography variant={'h2'} sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {post.title}
            </Typography>
            <Typography variant={'body1'} sx={{ color: 'gray' }}>
                {post.excerpt}
            </Typography>
        </StyledPost>
    )
}
