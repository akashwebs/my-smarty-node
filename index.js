const express=require('express');
const cors=require('cors');
const app = express();
// const bodyParser= require('body-parser');
const port =process.env.PORT || 5000;

app.use(express.json());

app.use(cors());
const users=[
   {"id": 1, "name" : "apu biswas", "age" : 24},
   {"id": 2, "name" : "ranu biswas", "age" : 28},
   {"id": 3, "name" : "banu biswas", "age" : 29},
   {"id": 4, "name" : "sanu biswas", "age" : 21},
   {"id": 5, "name" : "lanu biswas", "age" : 22},
   {"id": 6, "name" : "fanu biswas", "age" : 23},
]

app.get('/', (req, res)=>{
    res.send('hello jhankar vai world, valo asen vai');
})

app.get('/users', (req, res)=>{
   
    if(req.query.name){
        const serach=req.query.name.toLowerCase();
        const serachUser=users.filter(user=>user.name.toLowerCase().includes(serach))
        res.send(serachUser)
    }
    
    res.send(users);
})

app.get('/user/:id', (req,res)=>{

    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id);
    res.send(user)
})

app.get('/furites', (req, res)=>{
    res.send('this is heare all fuireds');
})

app.post('/user', (req,res)=>{
    const user=req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user)
})
app.get('/foods/mango/laal-mango', (req, res)=>{
    res.send('this is mango, laalmango, jori mango');
})
app.listen(port, ()=>{
    console.log('this is log', port);
})
