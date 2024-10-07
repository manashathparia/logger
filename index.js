import express, {
    json
} from 'express';

const app = express();
app.use(json());

let logs = [];

app.post('/', (req, res) => {
    if (req.query.reset === 'true') {
        logs = [];
    }

    logs.push(req.body);
    res.send('OK');
});

app.get('/', (req, res) => {
    res.send(logs);
});

app.listen(8111, () => {
    console.log('Server is running on port 3000');
});

