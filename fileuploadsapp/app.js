// TODO: Загрузка файлов с помощью multer
/* Одной из наиболее часто встречаемых задач в Node.js является загрузка файлов на сервер. В Node.js для этого нет встроенных инструментов, однако мы можем использовать дополнительные специальные пакеты. Одним из популярных подобных пакетов является multer, который работает поверх Express.*/
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static(__dirname));
app.use(multer({ dest: 'uploads' }).single('filedata'));
app.post('/upload', function(req, res, next) {
  let filedata = req.file;
  console.log(filedata);
  if (!filedata) res.send('Произошла ошибка при загрузке файла');
  else res.send('Файл успешно загружен');
});

app.listen(3000, () => {
  console.log(`Server started on 3000 🔥`);
});

/* В данном случае multer добавляется в виде компонента middleware. Для конфигурации в функцию multer передается объект, в котором параметр dest указывает на путь, по которому будет загружаться файл. 

Если внутри проекта такой папки нет, то она автоматически будет создана.

Далее вызывается функция single(), кот-ая указывает, что загружаться будет один файл. Собственно на форме в index.html мы имеем поле для загрузки одного файла. В этот метод передается название поля, которое используется на форме для загрузки файла. Соответствующее поле в файле index.html называется "filedata", поэтому в функцию single() передается соответствующее значение.

В результате в папке проекта будет создан подкаталог uploads, где мы найдем загруженный файл.
*/