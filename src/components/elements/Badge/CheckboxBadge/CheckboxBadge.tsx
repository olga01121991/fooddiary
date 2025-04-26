import { FC, useState } from "react";
import cn from "classnames";
import stl from "./checkboxBadge.module.scss";


interface ICheckboxBadge {
  text: string;
  // checked: boolean;
  bg?: 'isDone' | 'notIsDone'; //цвет фона зависит от состояния isChecked, как это указать 
}
// и нужен ли вообще интерфейс? ведь по сути здесь только текст и выполнено/не выполнено

const CheckboxBadge: FC<ICheckboxBadge> = (props) => {
  const { text } = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={cn(
        stl.checkbox,
        // stl[`checkbox${checked}`],
      )}
    >
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      >
        {text}
      </input>
    </div>
  )
}

export default CheckboxBadge;
