import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import env from "../env.json";


function Note({switchState}) {
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');
    let {noteURL} = useParams();

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({"url": noteURL})
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    } else {
                        setErrorClass('');
                        setLineClass('hide');
                        setFormClass('hide');
                    }
                })
        } else {
            setFormClass('');
            setLineClass('hide');
            setErrorClass('hide');
        }
    }, [noteURL])

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    function searchNote() {
        window.location.href = env.url
    }


    return (
        <div className="container">
            <div className={`new-url ${lineClass}`}>
                <h4>ваша заметка:</h4>
                <span>{noteText}</span>
                <div>
                    <button className="btn__new-note" onClick={searchNote}>смотреть еще один note</button>
                </div>
            </div>
            <div className={errorClass}>
                <p>произошла ошибка, попробуйте еще раз</p>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <label htmlFor="url">введите hash заметки</label>
                    <input
                        type="text"
                        name="url"
                        id="url"
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary" onClick={switchState} >искать note</button>
                </form>
            </div>
        </div>
    );
}

export default Note;