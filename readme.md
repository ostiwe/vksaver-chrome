Добавление кнопок:

```js
// После строчки chrome.contextMenus.removeAll();
chrome.contextMenus.create({
    'id': 'uniqId',
    'title': 'Любое название кнопки, чтобы вам было понятно',
    'contexts': ['image'],
});
```

Вместо ``super_puper1secret0code`` придумайте свой секретный код. Его нужно
будет указать в настройках на сервере ( [к чему это](https://github.com/ostiwe/vksaver) )



Вместо ``https://example.com/`` укажите адрес вашего сервера.

Так же, не забудьте разрешить CORS на вашем сервере.