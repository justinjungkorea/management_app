const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req,res)=>{
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '이강인',
            'gender': '남자'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '박지성',
            'gender': '남자'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '이승우',
            'gender': '남자'
        }
    ]);
});

app.listen(PORT,()=>console.log(`✅Listening on port ${PORT}`));