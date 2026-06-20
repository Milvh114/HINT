const fs = require('fs');
const path = require('path');


//1.write
// fs.writeFile('draft.json', '', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File written successfully');
//   }
// });



// fs.readFile()
// const file = fs.open('./bootstrap.min.js')

const content = fs.readFileSync('bootstrap.min.js', 'utf8');

// Thêm xuống dòng sau mỗi dấu ;
const formatted = content.replace(/;/g, ';\n');
 const formatted2 = formatted.replace(/{/g, '{\n');
 const formatted3 = formatted.replace(/}/g, '}\n');


fs.writeFileSync('output.js', formatted3);

console.log('Done!');