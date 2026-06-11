const fs = require('fs');
const path = require('path');


const folderPath = path.join(__dirname, 'my-data');


if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log('✅ Папку "my-data" створено.');
}


const filePath = path.join(folderPath, 'info.txt');
const message = 'Цей файл створено модулем fs у лабораторній роботі №4.';

fs.writeFileSync(filePath, message);
console.log('✅ Файл "info.txt" успішно записано.');


const content = fs.readFileSync(filePath, 'utf8');
console.log('📖 Зміст прочитаного файлу:');
console.log('----------------------------');
console.log(content);
console.log('----------------------------');
