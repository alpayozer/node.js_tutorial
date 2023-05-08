const fs = require("fs");

// dosya oluşturma
fs.writeFile("employees.json",' {"name": "Employee 1 Name", "salary": 2000}',"utf8",(err)=>{
    if(err) console.log(err);
    console.log("Dosya oluşturuldu.");
});

// dosya okuma
fs.readFile("employees.json","utf8",(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});

//dosya güncelleme
fs.appendFile("employees.json",'\n{"name":"Alpay","salary":10000}',"utf8",(err)=>{
    if(err) console.log(err);
    console.log("Veri güncellendi.");
})

//dosya silme
fs.unlink("employees.json",(err)=>{
    if(err) console.log(err);
    console.log("Dosya silindi.");
})