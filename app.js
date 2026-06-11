const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

let tasks = ['Опанувати JavaScript', 'Опанувати Node.js'];
let completedTasks = ['Опанувати HTML та CSS', 'Опанувати Git та GitHub'];

app.get('/', (req, res) => {
    let listHtml = tasks.map(t => `<li><input type="checkbox"> ${t}</li>`).join('');
    let doneHtml = completedTasks.map(t => `<li><input type="checkbox" checked disabled> ${t}</li>`).join('');
    
    res.send(`
        <body style="background: #ccc; font-family: sans-serif; text-align: center;">
            <h1>Список завдань</h1>
            <form method="POST" action="/add">
                <input name="task" placeholder="Введіть нове завдання" required>
                <button>Додати завдання</button>
            </form>
            <h2>Додані завдання</h2>
            <ul style="list-style: none; padding: 0;">${listHtml}</ul>
            <button>Виконати завдання</button>
            <h2>Виконані завдання</h2>
            <ul style="list-style: none; padding: 0; color: #444;">${doneHtml}</ul>
        </body>
    `);
});

app.post('/add', (req, res) => {
    tasks.push(req.body.task);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});
