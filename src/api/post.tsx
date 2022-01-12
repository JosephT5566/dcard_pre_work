import { useState } from 'react'
import { useQuery, useInfiniteQuery, QueryFunctionContext } from 'react-query'
import { fetcher } from 'utils/fetcher'
import { IPost } from 'types/post'

import { API_ENDPOINT } from '../config'

// https://www.dcard.tw/v2/posts?popular=true
// before?: number (post id)

export const useGetPosts = () => {
    const { data, error } = useQuery<Array<IPost>, Error>({
        queryKey: [`${API_ENDPOINT}/posts?popular=true`],
        queryFn: () => fetcher(`${API_ENDPOINT}/posts?popular=true`),
        // onSuccess: (data) => {
        //     console.log('posts', data)
        // },
    })

    return {
        posts: data,
        error,
    }
}

export const useGetInfinitePostsV2 = () => {
    const [cursor, setCursor] = useState<number | undefined>(undefined)
    const [posts, setPosts] = useState<IPost[] | undefined>(undefined)

    const url = cursor
        ? `${API_ENDPOINT}/posts?popular=true&before=${cursor}`
        : `${API_ENDPOINT}/posts?popular=true`

    const { error, isFetching, refetch } = useQuery<Array<IPost>, Error>({
        queryKey: [`${API_ENDPOINT}/posts?popular=true`],
        queryFn: () => fetcher(url),
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            // console.log('posts', data)

            setPosts((prev) => (prev ? [...prev, ...data] : data))
            setCursor(data[data.length - 1].id)
        },
    })

    return {
        posts,
        isFetching,
        error,
        refetch,
    }
}

export const useGetInfinitePosts = () => {
    const { data, error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<
        Array<IPost>,
        Error
    >([`${API_ENDPOINT}/posts?popular=true`], fetchPosts, {
        getNextPageParam: (lastPage, pages) => lastPage[lastPage.length - 1].id,
        refetchOnWindowFocus: false,
        // onSuccess: (data) => {
        //     console.log('infinite data', data)
        // },
    })

    return {
        infinitePosts: data,
        error,
        fetchNextPage,
        isFetchingNextPage,
    }
}

async function fetchPosts<T>(props: QueryFunctionContext) {
    const url = props.pageParam
        ? `${API_ENDPOINT}/posts?popular=true&before=${props.pageParam}`
        : `${API_ENDPOINT}/posts?popular=true`

    try {
        const response = await fetch(url, {
            method: 'GET',
        })
        if (!response.ok) {
            const errResp = await response.json()
            console.log(errResp)
            throw response.status
        }
        return (await response.json()) as T
    } catch (error) {
        throw error
    }
}
