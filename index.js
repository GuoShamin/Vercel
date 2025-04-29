const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 目标是 OpenAI 官方服务器
const target = 'https://api.openai.com';

app.use('/', createProxyMiddleware({
  target,
  changeOrigin: true,
  pathRewrite: { '^/': '/' },
  onProxyReq: (proxyReq, req, res) => {
    // 这里自动加上你的 OpenAI API Key
    proxyReq.setHeader('Authorization', 'Bearer 你的sk-xxx'); 
  }
}));

module.exports = app;
