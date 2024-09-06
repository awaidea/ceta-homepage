const express = require('express');
const app = express();
const path = require('path');

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 定义首页路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
const port = 3000;
app.listen(port, () => {
    console.log(`服务器运行在端口 ${port}`);
});
