a="0"
console.log(a)//####8X00jogo9 - # X 089 gojo
const { resolveSoa } = require('dns');
const fs = require('fs');
const path = require('path');
const aphabel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const temp = [1, 2, 3]
const temp2 = [1, 2, 3, 4, 5]
const temp3 = 0
//const id, user_name, email, phone_number, dob, address, created_at, updated_at, deleted_at;
// const photo = {id: 0, url: "https://example.com/photo.jpg"};
const photoList = [
  "https://example.com/photo1.jpg",
  "https://example.com/photo2.jpg",
  "https://example.com/photo3.jpg",
  "https://example.com/photo4.jpg",
  "https://example.com/photo5.jpg"
]

var id = 0;
const user_name = "Nguyen";
const email = "NguyenA@gmail.com";
const phone_number = "1234567890";
const dob = "1990-01-01";
// const address = "123 Main St, Anytown, USA";
const created_at = "2022-12-15T00:00:00Z";
const updated_at = "2022-12-15T00:00:00Z";
const deleted_at = null;
const status = ["active", "inactive", "banned"];
const gender = ["male", "female", "other"];
const photo_url = "https://example.com/photo.jpg";


const roles = ["user", "admin", "guest"];

var user = {
  id: id,
  user_name: user_name,
  email: email,
  phone_number: phone_number,
  dob: dob,
  gender: gender[0],
  photo_url: photoList[0],
  hash_pass: "hash_pass",
  salt: "salt",
  status: status[0],
  roles: roles[0],
  created_at: created_at,
  updated_at: updated_at,
  deleted_at: deleted_at
  // address: address,
}

console.log(email.replace("A", "B"));//
const data = [user]

const addUser = (user) => {
  data.push(user);
  return user;
}


temp.forEach((temp) => { // 1, 2, 3
  // console.log(user)
  // user = {
  //   ...user,
  //   id: temp
  // };
  console.log(user);
  console.log("##############################################################################################################################################");
  console.log(`temp: ${temp}`);
    temp2.forEach((temp2) => {
      console.log("00000000000000000000000000000000000000000000000000000000000000000000000000000000000");
      console.log(`temp2: ${temp2}, temp: ${temp}`);
        aphabel.forEach((word) => {
          console.log(`word: ${word}, temp2: ${temp2}, temp: ${temp}`);
          console.log(`word0: ${aphabel.indexOf(word)}  ||||| ${aphabel.indexOf(word)-1}`);
          console.log(`${aphabel[aphabel.indexOf(word)]}  ||||| ${aphabel[aphabel.indexOf(word)-1]}`);
          if(aphabel.indexOf(word) !== 0) {
            // console.log(`word1: ` , email.replace("A", word))
            user = {
              ...user,
              id: id,
              user_name: user_name.concat(word),
              email: email.replace("A", word),
              phone_number: phone_number,
              dob: dob,
              gender: gender[temp],
              photo_url: photoList[temp2],
              hash_pass: "hash_pass",
              salt: "salt",
              status: status[temp],
              roles: roles[temp],
              created_at: created_at,
              updated_at: updated_at,
              deleted_at: deleted_at
            }
            id = id + 1;
          }
          
          // console.log(user);

          addUser(user);

        });
      // const newUser = { ...user, id: temp2 * 10 + temp, user_name: `user${temp2}${temp}`, email: `user${temp2}${temp}@example.com` };
      // data.push(newUser);
    });
});

console.log(JSON.stringify(data));


//1.write
fs.writeFile('draft.json', JSON.stringify(data), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully');
  }
});






