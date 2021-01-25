const express = require('express')
const multer =require('multer')
var app = express()
app.set(express.static('public'))
app.get('/',(req,res)=>{
    res.send('hello')
})
storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
    }
)

var upload = multer({
    storage : storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
      if (!file.originalname.endsWith('jpg')) {
        return cb(new Error('Only jpg are allowed'))
      }
      cb(null, true);
    }
 
  }).single('image');


  app.post('/upload',function(req,res){
    upload(req,res,function(err) {
        if(err) {
              res.json({
                      success:false,
                      msg:err.message
                  })
        }
        else{
            res.json({
                success:true,
                msg:'file uploaded'
            })
        }
    })
  })

app.listen(4000,()=>console.log('port running in 4000'))
