chrome.contextMenus.removeAll();

// Это можно удалить
chrome.contextMenus.create({
    'id': 'testButton',
    'title': 'Тестовая кнопка',
    'contexts': ['image'],
});

function sendRequest(photoURL, pubId) {
    let xr = new XMLHttpRequest(),
        body = JSON.stringify({
            type: 'browser_plugin',
            secret: 'super_puper1secret0code',
            photo: photoURL,
            group_id: pubId
        });
    xr.open('POST', 'https://example.com/');
    // xr.open('POST', 'http://127.0.0.1:8080/'); // for dev
    xr.send(body);
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "testButton":
            sendRequest(info.srcUrl, 78771671);
            break;
        // Для других кнопок
    }
});
