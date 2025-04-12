//универсальная функция для иконок

import { FC } from "react";
import { TIcon } from "./iconType";

interface IIconProps { //интерфейс 
    iconType: TIcon;    //тип иконки, который прописан в отдельном файле iconType.ts (все шрифты)
    size?: number; //размер шрифта, язательный параметр, по умолчанию 16
} 

const Icon: FC<IIconProps> = (props) => { //функциональный компонент
    const { iconType, size = 16 } = props;

    return (        
        <i 
            className={`icon icon-${iconType}`}
            style={{
                fontSize: size
            }}
        />
    )
}

export default Icon;
