import React, {useEffect, useState} from 'react';

export default function CommentsListHook(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data.length > 0) setData(props.data);
  }, [props]);

  const onlyEven = () => {
    let a = data;
    const evenPost = a.filter((item, index) => {
      return !(index % 2);
    });
    setData(evenPost);
  }

  return (
    <>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
      {data.map((el, index) => (
        <section key={el.id}>
          <p><b>{index + 1}. {el.email}</b></p>
          <p>{el.body}</p>
        </section>
      ))}
    </>
  );
}


