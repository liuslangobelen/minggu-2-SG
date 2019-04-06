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

exports.getmhs = (req,res)=>{
    res.send(data)
}
exports.getmhs1 = (req,res)=>{
    res.send(data[req.params.index])
}

exports.storemhs=(req,res)=>{
    let mahasiswa = {
                nim:req.body.nim,
                nama:req.body.nama,
                kelas:req.body.kelas
            }
            //data.splice(data.length,0,mahasiswa) 
            //yang di atas sama aja kayak push
            data.push(mahasiswa)
            res.send(data)
            console.log('insert berhasil')
}

exports.updatemhs=(req,res)=>{
    let update_mahasiswa = {
                nim:req.body.nim,
                nama:req.body.nama,
                kelas:req.body.kelas
            }
            //bisa juga data index ke berapa langsung di assign atau ditimpa
            data.splice(req.params.index,1,update_mahasiswa)
            res.send(data)
            console.log('update berhasil')
}

exports.deletemhs=(req,res)=>{
    data.splice(req.params.index,1)
    res.send(data)
}