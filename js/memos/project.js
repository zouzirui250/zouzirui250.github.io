todolist();
function todolist() {
    fetch('https://memos.guyinga.top/api/v1/memo?creatorId=1&tag=清单').then(res => res.json()).then(data => {
        // 获取并处理数据
        data.forEach(item => {
            // 处理数据
            let content = item.content,
                title = content.match(/\[(.*?)\]/g)[0].replace(/\[(.*?)\]/, '$1');
            // 去掉多余内容，替换清单内容
            content = content.replace(/#.*\s/g, '').replace(/(-\s\[\s\]\s)(.*)/g, `<li><i style="margin-right: 5px;" class="fa-regular fa-circle"></i>$2</li>`).replace(/(-\s\[x\]\s)(.*)/g, `<li class="achieve"><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>$2</li>`);
            // 渲染数据
            let div = document.createElement('div');
            div.className = 'list_item';
            div.innerHTML = `<h3>${title}</h3><ul>${content}</ul>`;
            document.getElementById('todolist').appendChild(div);
        });
        waterfall('#todolist');
    }).catch()
}

// 清单函数

