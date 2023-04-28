import React from "react";
import style from "./todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveTodos(id);
  };
  return (
    <section className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </section>
  );
};

export default Todo;
