//LOG:

\x1b[33m → màu vàng (warning chuẩn)
\x1b[31m → đỏ (error nặng)
\x1b[32m → xanh lá
\x1b[0m → reset về mặc định
<console.warn("\x1b[33m%s\x1b[0m", "ERROR: Body empty. Require body");>

//\\option 2: chalk

npm install chalk

<import chalk from "chalk";
console.warn(chalk.yellow("ERROR: Body empty. Require body"));
console.error(chalk.red("ERROR: Body empty. Require body"));
>
Code nhìn rõ ràng
Dễ style (bold, underline, background…)

////////////////////////////////////////////////////////////////////////////
neu url: api/get/object?name=ABC
thi goi bien
<const name = req.query.name;>

///////////////
 bien moi roi gan lai bien cu => nhanh hon
dung lai bien cu => cham hon
//////////////////////////////set name easy read//////////////////////////////////////////////
upper case - lower case
abc_abc
abc_Abc
ABC_ABC

abc-abc
abc-Abc
ABC-ABC

abcAbc
AbcAbc

/////
thieu file data dto
dong goi controller no chi goi cac ham
getAllUser -> goi cac ham con
/////////////////////
set up project team
1 project --- project main (is project push to git)
          \--- project working (is project for demo
           \--- Manager project forlder (is manager old version of project main/ project working)
