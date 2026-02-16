const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.use((req, res, next) => {
    console.log(req.method, req.url);
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});