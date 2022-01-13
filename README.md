# dcard_pre_work
An infinite scrolled website

## Start procedure

1. Install all the dependencies
    ```
    yarn install-all
    ```
2. Execute proxy service
    ```
    yarn proxy
    ```
3. Execute React service
    ```
    yarn start
    ```
    make sure the React service is running on port `3000`

## Description

### Tools

* @mui/material: handle the basic component
* react-query: handle the data-fetching in React

### Proxy

Use proxy service to pass the requests to api server, avoiding the restriction of CORS

### Structure

```txt
src/
    api/
        post.tsx
    components/
        shared/
            Post.tsx
    types/
        post.ts
    utils/
        fetcher.ts
    view/
        layout/
            Loading.tsx
        payment/
            Articles.tsx
```
