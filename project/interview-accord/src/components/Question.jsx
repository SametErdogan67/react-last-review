import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const Question = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { id, question, answer } = item;

  // const clickDown = () => {
  //   setShow(true);
  // };

  // const clickUp = () => {
  //   setShow(false);
  // };
  return (
    <div className="card-group">
      {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}. {question}
            </h5>
            {/*<button onClick={clickUp}>{arrowup}</button>*/}
            <button onClick={handleToggle}>{arrowup}</button>
          </div>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}. {question}
            </h5>
            {/*<button onClick={clickDown}>{arrowdown}</button>*/}
            <button onClick={handleToggle}>{arrowdown}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
