import React, { useState } from "react";
import style from "./newtodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({ title: "", desc: "" });
    props.onAddTodo(todo);
  };
  return (
    <article className={style.form}>
      <form onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={title}
            required
          />
        </div>

        <div className={style["form-field"]}>
          <label htmlFor="desc">Description:</label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            value={desc}
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Todo</button>
      </form>
    </article>
  );
};

export default NewTodo;
