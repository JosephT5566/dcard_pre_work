import { useQuery, useInfiniteQuery } from 'react-query'
import { fetcher } from 'utils/fetcher'
import { Post } from 'types/post'

import { API_ENDPOINT } from '../config'

// https://www.dcard.tw/v2/posts?popular=true
// before?: number (post id)

export const useGetPosts = () => {
    const { data, error } = useQuery<Array<Post>, Error>({
        queryKey: [`${API_ENDPOINT}/posts?popular=true`],
        queryFn: () => fetcher(`${API_ENDPOINT}/posts?popular=true`),
        onSuccess: (data) => {
            console.log('posts', data)
        },
    })

    return {
        posts: data,
        error,
    }
}

export const useGetInfinitePosts = () => {
    const { data, error } = useInfiniteQuery<Array<Post>, Error>({
        queryKey: [`${API_ENDPOINT}/posts?popular=true`],
        queryFn: () => fetcher(`${API_ENDPOINT}/posts?popular=true`),
    })

    return {
        posts: data,
        error,
    }
}
