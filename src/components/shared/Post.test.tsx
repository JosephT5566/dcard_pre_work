import { render, screen } from '@testing-library/react'
import Post from './Post'
import { IPost } from 'types/post'

test('renders Post component', () => {
    const post: IPost = {
        id: 237886619,
        postAvatar: '頭像',
        forumName: '分類',
        title: '標題',
        excerpt: '摘要',
        createAt: '2022-01-10T10:24:09.935Z',
        media: [{ url: 'https://i.imgur.com/Hzwhj9q.jpg' }],
    } as IPost

    const node = render(<Post post={post} />)
    const linkElement = node.getByText('標題')
    expect(linkElement).toBeInTheDocument()
})

test('media length is 0', () => {
    const post: IPost = {
        id: 237886619,
        postAvatar: '頭像',
        forumName: '分類',
        title: '標題',
        excerpt: '摘要',
        createAt: '2022-01-10T10:24:09.935Z',
        media: [],
    }

    const node = render(<Post post={post} />)
    expect(node.queryByTestId('thumb')).toBeNull()
})
