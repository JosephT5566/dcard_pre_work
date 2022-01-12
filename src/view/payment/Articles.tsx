import { useEffect } from 'react'

import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Loading from 'view/layout/Loading'

import { useGetInfinitePostsV2 } from 'api/post'
import { IPost } from 'types/post'

const ArticlesContainer = styled('div')({
    padding: '1em',
    paddingBottom: '8em',
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
    const { posts, isFetching, refetch } = useGetInfinitePostsV2()

    useEffect(() => {
        const scrollEvent = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                // console.log('at the bottom of the page')
                refetch()
            }
        }

        window.addEventListener('scroll', scrollEvent)

        return () => window.removeEventListener('scroll', scrollEvent)
    }, [])

    return (
        <ArticlesContainer>
            {posts ? (
                <>
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                    {isFetching ? (
                        <Loading />
                    ) : (
                        <div style={{ padding: '1em', textAlign: 'center' }}>
                            {'load more...'}
                        </div>
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
