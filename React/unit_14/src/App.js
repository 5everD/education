import React, {useState, useEffect} from 'react';

import './App.css';


export default function App() {
    const [t1, setT1] = useState('');
    const url = 'http://unit14.ru/api.php';
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
            .then(res => res.text())
            .then(res => setT1(res))
    }

    function task2(event) {

    }

    function task3(event) {

    }

    function task4(event) {

    }

    function task5(event) {

    }

    return (
        <div>
            <h1>ItGid.info</h1>
            <p>{t1}</p>
            <hr/>
            <div>
                <h2>Время сервера</h2>
                <button onClick={task1}>GET</button>
                <p></p>
            </div>
            <hr/>
            <div>
                <h2>Случайное число между</h2>
                <form action="" onSubmit={task2}>
                    <div><input type="number" name="num1" defaultValue="30"/></div>
                    <div><input type="number" name="num2" defaultValue="44"/></div>
                    <button type="sumbit">Push</button>
                </form>
                <p></p>
            </div>
            <hr/>
            <div>
                <h2>Создание файла</h2>
                <form action="" onSubmit={task3}>
                    <div><input type="text" name="filename"/></div>
                    <div><input type="text" name="filedata"/></div>
                    <button type="sumbit">Push</button>
                </form>
                <p></p>
            </div>
            <hr/>
            <div>
                <h2>Получение данных компьютера</h2>
                <form action="" onSubmit={task4}>
                    <button type="sumbit">Push</button>
                </form>
                {/*<p>{t4}></p>*/}
                <hr/>
                <div>
                    <h2>Получение курса валют</h2>
                    <form action="" onSubmit={task5}>
                        <button type="sumbit">Push</button>
                    </form>
                    <ul></ul>
                </div>
            </div>
        </div>
    )
}
