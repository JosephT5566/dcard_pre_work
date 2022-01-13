import { useEffect } from 'react'

import { styled } from '@mui/material/styles'
import Loading from 'view/layout/Loading'
import Post from 'components/shared/Post'

import { useGetInfinitePostsV2 } from 'api/post'

const ArticlesContainer = styled('div')({
    padding: '1em',
    paddingBottom: '8em',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
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
    }, [refetch])

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
