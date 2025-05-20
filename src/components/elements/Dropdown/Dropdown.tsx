import { FC, useState, useEffect, useRef } from 'react'
import stl from "./dropdown.module.scss";
import Icon from '../Icon/Icon';
import classNames from 'classnames';

export interface IDrop {
  id: number | string;
  title: string;
}

interface IDropdown {
  title: string;
  drop: IDrop[];
  onClick: (value: IDrop) => void;
  activeDrop?: IDrop;
}

const Dropdown: FC<IDropdown> = (props) => {
  const { title, drop, onClick, activeDrop } = props;

  const [showDrop, setShowDrop] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null); // Ссылка на DOM-элемент dropdown

  // Эффект для обработки кликов вне dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Если dropdown открыт и клик был не по dropdown или его детям
      if (showDrop && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDrop(false); // Закрываем dropdown
      }
    };
    
    // Добавляем слушатель при монтировании компонента
    document.addEventListener('mousedown', handleClickOutside);
    
    // Удаляем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDrop]); // Эффект зависит от состояния showDrop

  const HandleClick = (val: IDrop) => {
    setShowDrop(false)
    onClick(val)
  }

  return (
    <div 
      className={classNames(
        stl.wrapper,
        {[stl.wrapper_open]: showDrop === true}
      )}
      ref={dropdownRef}
    >
      {/* Кнопка для открытия/закрытия dropdown */}
      <button
        className={showDrop === true ? stl.graybtn : stl.dropbtn}
        onClick={() => setShowDrop(!showDrop)}
      >
        <Icon iconType='SquaresFour' size={20}/>
        {!!activeDrop ? activeDrop.title : title}
        {showDrop === true ? <Icon iconType='CaretUp'/> : <Icon iconType='CaretDown'/>} 
      </button>

      {/* Содержимое dropdown, которое показывается только если showDrop === true */}
      {
        showDrop === true && (
          <div className={stl.dropdown}>
            {
              drop.map((val) => (
                <div
                  className={stl.drop}
                  // onClick={() => {onClick(val); setShowDrop(false)}}
                  onClick={() => HandleClick(val)}
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