/* eslint-disable react/prop-types */
import delete_icon from "../assets/delete.png";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";

const TodoItems = ({ text, deleteTodo, id, isComplete, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 decoration-gray-500 text-lg ${
            isComplete ? "line-through opacity-70" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        className="w-4 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;