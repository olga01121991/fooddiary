import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import stl from "./button.module.scss";


interface IButton extends HTMLAttributes<HTMLButtonElement>{ // из HTMLAttributes доступны все атрибуты кнопки и их не надо прописывать в пропсах
  size: 'small' | 'medium' | 'large';
  text: string;
  btnType: 'primary' | 'secondary' | 'ghost' | 'transparent';
}

const Button: FC<IButton> = (props) => {
  const { text, size, btnType, ...btnProps } = props; // ...btnProps - все доступные параметры кнопки из HTMLAttributes
  return (
    <button
      className={cn(
        stl.button,
        stl[`button_${size}`],
        stl[`button_${btnType}`],
      )}
      {...btnProps}
    >
      {text}
    </button>
  )
}
  

export default Button;
