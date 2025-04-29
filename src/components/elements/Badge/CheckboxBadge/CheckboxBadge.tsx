import { FC } from "react";
import cn from "classnames";
import stl from "./checkboxBadge.module.scss";
import { IBaseBadge } from "../interface";


interface ICheckboxBadge extends IBaseBadge {
  isCheck: boolean;
  setIsCheck: (value: boolean) => void;
}

const CheckboxBadge: FC<ICheckboxBadge> = (props) => {
  const { 
    text, 
    bg, 
    isCheck, 
    setIsCheck,
  } = props;

  return (
    <div
      className={cn(
        stl.checkbox,
        bg,
      )}
      onClick={() => {setIsCheck(!isCheck)}}
    >
      <input 
        type="checkbox"
        checked={isCheck}
        onChange={(event) => setIsCheck(event.target.checked)}
      />
      {text}
    </div>
  )
}

export default CheckboxBadge;
