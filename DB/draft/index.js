const fs = require('fs');
const path = require('path');

const aphabel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const id, user_name, email, phone_number, address, order_history, reservation_history, payment_history, created_at, updated_at, deleted_at;
//"nguyen van A"
//0123456789
//NguyenVanA@gmail.com
//123 Nguyen Van A, Phuong 1, Quan 1, HCM

const data = [
    {
        id: id,
        user_name: user_name,
        email: email,
        phone_number: phone_number,
        address: address,
        order_history: order_history,
        reservation_history: reservation_history,
        payment_history: payment_history,
        created_at: created_at,
        updated_at: updated_at,
        deleted_at: deleted_at
    }
]

//1.write
fs.writeFile('draft.json', '', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully');
  }
});

// const models = {};

// const loadModels = (dir) => {
//   const files = fs.readdirSync(dir);
//   files.forEach((file) => {
//     if (file.endsWith('.model.js')) {
//       const modelName = path.basename(file, '.model.js');
//       models[modelName] = require(path.join(dir, file));
//     }
//   });
// };

// loadModels(__dirname);

// module.exports = models;