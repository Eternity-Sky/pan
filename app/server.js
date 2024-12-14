const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// 设置文件存储
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // 文件保存路径
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // 使用原始文件名
    }
});
const upload = multer({ storage });

// 上传文件的路由
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('文件上传成功！');
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器正在运行在 http://localhost:${PORT}`);
}); 