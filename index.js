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
    proxyReq.setHeader('Authorization', 'Bearer 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'); 
  }
}));

module.exports = app;
