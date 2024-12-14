document.addEventListener('DOMContentLoaded', () => {
    fetch('/files')
        .then(response => response.json())
        .then(files => {
            const fileList = document.getElementById('file-list');
            files.forEach(file => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="/files/${file}" download>${file}</a>`;
                fileList.appendChild(listItem);
            });
        })
        .catch(error => console.error('获取文件列表时出错:', error));
});