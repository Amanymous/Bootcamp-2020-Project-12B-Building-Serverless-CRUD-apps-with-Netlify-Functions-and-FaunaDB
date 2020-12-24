import React from "react";

// interface Props {
//   name: string;
//   color: string;
// }

interface todos {
  id: string;
  title: string;
  del: (id: string) => void;
  update: (id: string, completed: boolean) => void;
  completed: boolean;
}

const Todo: React.FC<todos> = ({ id, title, del, update, completed }) => {
  return (
    <div>
      <li>
        {completed ? <del>{title}</del> : title}
        <span onClick={() => del(id)}>x</span>
        <span onClick={() => update(id, completed)}>
          {completed ? "Undo" : "Done"}
        </span>
      </li>
    </div>
  );
};
export default Todo;
