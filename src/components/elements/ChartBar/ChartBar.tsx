import { FC } from 'react'
import stl from "./chartBar.module.scss";

interface IChartBar {
  title: string;
  allCount?: number;
  activCount: number;
}

const ChartBar: FC<IChartBar> = (props) => {
  const { allCount = 10, activCount, title } = props;
  const arr = new Array(allCount).fill(1).map((_value, index) => index)

  return (
    <div className={stl.wrapper}>
      {title}
      <div className={stl.count}>
        <div className={stl.activCount}>{activCount}</div>
        /{allCount}
      </div>
      <div className={stl.chart}>
        {
          arr.map((val, index) => (
            <div
              className={index < activCount ? stl.chartBarActiv  : stl.chartBar}
              key={val}
            />
          ))
        }
      </div>
      
    </div>
  )
}

export default ChartBar