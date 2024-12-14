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

// 文件类型检查
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']; // 允许的文件类型
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('不支持的文件类型！'), false);
    }
};

// 设置文件大小限制（例如：限制为 5MB）
const upload = multer({ 
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// 上传文件的路由
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('文件上传成功！');
});

// 错误处理
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(500).send(err.message);
    } else if (err) {
        return res.status(400).send(err.message);
    }
    next();
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器正在运行在 http://localhost:${PORT}`);
}); 