import { FC } from "react";
import stl from "./roundedBadge.module.scss";
import { IBaseBadge } from "../interface";
import classNames from "classnames";

const RoundedBadge: FC<IBaseBadge> = (props) => {
    const { text, bg } = props;

    return (
        <div 
          className={classNames(stl.badge, bg)}
        >
          {text}
        </div>
    )
}

export default RoundedBadge;
