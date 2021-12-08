import React, {useState} from 'react';

import './App.css';


export default function App() {
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [t3, setT3] = useState(false);
    const [t4, setT4] = useState('');
    const [t5, setT5] = useState([]);

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
            .then(res => setT1(res));
    }

    function task2(event) {
        event.preventDefault();
        const task2_1 = event.target.num1.value;
        const task2_2 = event.target.num2.value;
        fetch(url, headers({
            action: 2,
            num1: task2_1,
            num2: task2_2
        }))
            .then(res => res.text())
            .then(res => setT2(res));
    }

    function task3(event) {
        event.preventDefault();
        const task3_1 = event.target.filename.value;
        const task3_2 = event.target.filedata.value;
        fetch(url, headers({
            action: 3,
            filename: task3_1,
            filedata: task3_2
        }))
            .then(res => res.text())
            .then(res => res > 0 && setT3(task3_1));
    }

    function task4(event) {
        event.preventDefault();
        fetch(url, headers({action: 4}))
            .then(res => res.text())
            .then(res => setT4(res));
    }

    function task5(event) {
        event.preventDefault();
        fetch(url, headers({action: 5}))
            .then(res => res.json())
            .then(res => setT5(res));
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
                <p>{t3}</p>
            </div>
            <hr/>

            <div>
                <h2>Получение данных компьютера</h2>
                <form action="" onSubmit={task4}>
                    <button type="submit">Push</button>
                </form>
                <p>{t4}></p>
            </div>
            <hr/>

            <div>
                <h2>Получение курса валют</h2>
                <form action="" onSubmit={task5}>
                    <button type="submit">Push</button>
                </form>
                <ul>
                    {t5.map(e => <li key={e.buy}>
                        {e.ccy + ' < > ' + e.base_ccy
                            + ': покупка - ' + e.buy
                            + '; продажа - ' + e.sale}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}
