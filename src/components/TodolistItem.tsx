import { TasksPropsType } from "../App";
import { Button } from "./Button";

type TodolistItemPropsType = {
  title: string;
  tasks: TasksPropsType[];
  date?: string;
};

export const TodolistItem = ({ title, tasks, date }: TodolistItemPropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title="+" />
      </div>

      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map((t) => {
            return (
              <li key={t.id}>
                <input type="checkbox" checked={t.isDone} />{" "}
                <span>{t.title}</span>
              </li>
            );
          })}
        </ul>
      )}

      <div>
        <Button title="All" />
        <Button title="Active" />
        <Button title="Completed" />
      </div>
      {date ? <div>Date: {date}</div> : <div>Дата не указана</div>}
    </div>
  );
};
