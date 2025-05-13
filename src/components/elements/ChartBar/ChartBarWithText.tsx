import { FC } from 'react'
import stl from "./chartBar.module.scss";
import ChartBar, { IChartBar } from './ChartBar';

interface IChartBarWithText extends IChartBar{
  title: string;
}

const ChartBarWithText: FC<IChartBarWithText> = (props) => {
  const { allCount = 10, activCount, title } = props;

  return (
    <div className={stl.wrapper}>
      {title}
      <div className={stl.count}>
        <div className={stl.activCount}>{activCount}</div>
        /{allCount}
      </div>
      <ChartBar activCount={activCount} allCount={allCount}/>
      
    </div>
  )
}

export default ChartBarWithText