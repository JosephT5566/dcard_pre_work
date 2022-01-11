const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

// Create Express Server
const app = express()

// Configuration
const PORT = 5050
const HOST = 'localhost'
const API_SERVICE_URL = 'https://www.dcard.tw/v2'

// Set cors
const origin = [
    'http://localhost:3000',
    'http://localhost:3002'
]

// Proxy endpoints
app.use(cors({ origin: origin })).use(
    '/my-dcard',
    createProxyMiddleware({
        target: API_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
            [`^/my-dcard`]: '',
        },
    })
)

// Start Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`)
})
