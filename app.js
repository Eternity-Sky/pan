const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// 用户注册
app.post('/register', (req, res) => {
    const { username } = req.body;
    let users = [];

    // 读取用户信息
    if (fs.existsSync('users.json')) {
        users = JSON.parse(fs.readFileSync('users.json'));
    }

    // 检查用户是否已存在
    if (users.find(user => user.username === username)) {
        return res.status(400).send('用户已存在');
    }

    // 添加新用户
    users.push({ username });
    fs.writeFileSync('users.json', JSON.stringify(users));
    res.send('注册成功');
});

// 文件上传
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('文件上传成功');
});

// 获取文件列表
app.get('/files', (req, res) => {
    fs.readdir('uploads', (err, files) => {
        if (err) {
            return res.status(500).send('无法读取文件');
        }
        res.json(files);
    });
});

// 下载文件
app.get('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);
    res.download(filePath, (err) => {
        if (err) {
            res.status(404).send('文件未找到');
        }
    });
});

// 启动服务器
app.listen(3000, () => {
    console.log('服务器在 http://localhost:3000 上运行');
}); 