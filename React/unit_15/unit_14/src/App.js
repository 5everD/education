import React, {useState} from 'react';

import './App.css';


export default function App() {

    // const [text, setText] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [t3, setT3] = useState('');
    const [t4, setT4] = useState('');

    const url = "http://localhost:3500";
    const headers = (task) => {
        return (
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(task)
            }
        );
    };

    function task1() {
        fetch(url, headers({action: 1}))
            .then(response => response.text())
            .then(response => {
                console.log(response);
                setT1(response);
            })
    }

    function task2(event) {
        event.preventDefault();
        fetch(url, headers({
            "action": 2,
            "num1": event.target.num1.value,
            "num2": event.target.num2.value
        }))
            .then(response => response.text())
            .then(response => {
                console.log(response);
                setT2(response);
            })
    }

    function task3(event) {
        event.preventDefault();
        fetch(url, headers({
            "action": 3,
            "filename": event.target.filename.value,
            "filedata": event.target.filedata.value
        }))
            .then(response => response.text())
            .then(response => {
                console.log(response);
                response ? setT3(url + event.target.filename.value) : setT3(false);
            })
    }

    function task4(event) {
        event.preventDefault();
        fetch(url, headers({action: 4}))
            .then(response => response.text())
            .then(response => {
                console.log(response);
                setT4(response);
            })
    }


    return (
        <div>
            <h1>ItGid.info</h1>
            {/*<p>{text}</p>*/}
            <hr/>
            <div>
                <h2>Время сервера</h2>
                <button onClick={task1}>GET</button>
                <p>{t1}</p>
            </div>
            <hr/>
            <div>
                <h2>Случайное число между</h2>
                <form action="" onSubmit={task2}>
                    <div><input type="number" name="num1" defaultValue="30"/></div>
                    <div><input type="number" name="num2" defaultValue="44"/></div>
                    <button type="submit">Push</button>
                </form>
                <p>{t2}</p>
            </div>
            <hr/>
            <div>
                <h2>Создание файла</h2>
                <form action="" onSubmit={task3}>
                    <div><input type="text" name="filename"/></div>
                    <div><input type="text" name="filedata"/></div>
                    <button type="submit">Push</button>
                </form>
                <p>{t3 && <a href={t3}>Скачать</a>}</p>
            </div>
            <hr/>
            <div>
                <h2>Получение данных компьютера</h2>
                <form action="" onSubmit={task4}>
                    <button type="submit">Push</button>
                </form>
                <p>{t4}</p>
            </div>
            <hr/>
        </div>
    );
}
