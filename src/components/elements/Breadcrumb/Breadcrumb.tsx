import { FC } from 'react'
import cn from "classnames";
import stl from "./breadcrumb.module.scss";


export interface ILink { //интерфейс объекта
  id: number | string;
  title: string;
  url: string;
}

interface IBreadcrumb { // интерфейс компонента
  links: ILink[]; //массив объектов
  title: string;
}

const Breadcrumb: FC<IBreadcrumb> = (props) => {
  const { links, title } = props;

  return (
    <div
      className={cn(stl.breadcrumb)}
    >
      {
        links.map((link) => ( // пробегаемс по массиву links и вытгиваем из объекта ссылку и title
          <> 
            <a href={link.url}>{link.title}</a> 
            &nbsp;/&nbsp; 
          </>
        )) //неразрывный пробел &nbsp;
      }
      {title}
    </div>
  )
}

export default Breadcrumb