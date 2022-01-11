import { styled } from '@mui/material/styles'

import { useGetPosts } from 'api/post'

const ArticlesContainer = styled('div')({})

export default function Articles() {
    const { posts } = useGetPosts()

    return posts ? (
        <ArticlesContainer>
            {posts.map((post) => (
                <div>{post.title}</div>
            ))}
        </ArticlesContainer>
    ) : null
}
