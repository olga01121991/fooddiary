import { FC } from "react";
import stl from "./badge.module.scss";
import { IBaseBadge } from "../interface";
import classNames from "classnames";


const BaseBadge: FC<IBaseBadge> = (props) => {
  const { text, bg } = props;

  return (
    <div 
      className={classNames(stl.badge, bg)}
    >
      {text}
    </div>
  )
}

export default BaseBadge;
