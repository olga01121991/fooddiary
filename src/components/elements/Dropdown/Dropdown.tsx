import { FC, useState } from 'react'
import stl from "./dropdown.module.scss";
import Icon from '../Icon/Icon';

export interface IDrop {
  id: number | string;
  title: string;
}

interface IDropdown {
  title: string;
  drop: IDrop[];
  onClick: (index: number) => void;
  activeDrop: number;
}

const Dropdown: FC<IDropdown> = (props) => {
  const { title, drop, onClick, activeDrop } = props;

  const [showDrop, setShowDrop] = useState(false);
  
  const clickDrop = () => {  
      setShowDrop(!showDrop)
  }

  return (
    <div className={stl.wrapper}>
      <button
        className={showDrop === true ? stl.graybtn : stl.dropbtn}
        onClick={clickDrop}
      >
        <Icon iconType='SquaresFour' size={20}/>
        {title}
        {showDrop === true ? <Icon iconType='CaretUp'/> : <Icon iconType='CaretDown'/>} 
      </button>
      {
        showDrop === true && (
          <div className={stl.dropdown}>
            {
              drop.map((val, index) => (
                <div
                  className={activeDrop === index ? stl.drop : stl.passiv}
                  onClick={() => {onClick(index)}}
                  key={val.id}
                >
                  {val.title}
                </div>
              ))
            }
          </div>
          )
      }
    </div>
  )
}

export default Dropdown