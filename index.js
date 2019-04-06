const express = require('express');
let app=express()
const bodyParser = require('body-parser')
let mhs = require('./controller/mahasiswa')
app.use(bodyParser.urlencoded({extended:true}))

let data =[
    {
        nim : "1231231231",
        nama : "kiki",
        kelas : "IF-41-11"
    },
    {
        nim : "2342342342",
        nama : "lili",
        kelas : "IF-39-12"
    }
]

app.get('/mahasiswa',mhs.getmhs)
app.post('/mahasiswa',mhs.storemhs)
app.put('/mahasiswa/:index',mhs.updatemhs)
app.delete('/mahasiswa/:index',mhs.deletemhs)


// app.use((req,res,next)=>{
//     if(req.body.nim){
//         next()
//     }else{
//         res.send('maaf nim tidak ada')
//     }
// })
// app.post('/mahasiswa',(req,res)=>{
//     let mahasiswa = {
//         nim:req.body.nim,
//         nama:req.body.nama,
//         kelas:req.body.kelas
//     }
//     //data.splice(data.length,0,mahasiswa) 
//     //yang di atas sama aja kayak push
//     data.push(mahasiswa)
//     res.send(data)
//     console.log('insert berhasil')
// })
// app.put('/mahasiswa/:index',(req,res)=>{
//     let update_mahasiswa = {
//         nim:req.body.nim,
//         nama:req.body.nama,
//         kelas:req.body.kelas
//     }
//     //bisa juga data index ke berapa langsung di assign atau ditimpa
//     data.splice(req.params.index,1,update_mahasiswa)
//     res.send(data)
//     console.log('update berhasil')
// })

// app.delete('/mahasiswa/:index',(req,res)=>{
//     data.splice(req.params.index,1)
//     res.send(data)
// })

// app.get('/mahasiswa/:index',(req,res)=>{
//     res.send(req.params.index)
// })
// app.get('/mahasiswa',(req,res)=>{
//     res.send(data)
// })

// app.post('/mahasiswa',(req,res)=>{
//     res.send('ini post')
// })
// app.delete('/mahasiswa',(req,res)=>{
//     res.send('ini delete')
// })
// app.put('/mahasiswa',(req,res)=>{
//     res.send('ini put')
// })


///////////////////////////////




app.listen(3000)
