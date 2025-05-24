import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react'
import "./text.scss"

type TFont = "Nunito-Bold" 
| "Nunito-Black"
| "Nunito-Regular"
| "Nunito-ExtraBold"
| "Nunito-SemiBold"

interface IText extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode;
  font?: TFont;
  size?: number;
}

const Text: FC<IText> = (props) => {

  const {
    children,
    font = "Nunito-Black",
    size = 14,
    ...divProps
  } = props;

  return (
    <div
      className={classNames(font, divProps.className)}
      style={{
        ...divProps.style,
        fontSize: size,
      }}
      {...divProps}
    >
      {children}
    </div>
  )
}

export default Text