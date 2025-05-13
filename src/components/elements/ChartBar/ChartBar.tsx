import { FC } from 'react'
import stl from "./chartBar.module.scss";

export interface IChartBar {
  allCount?: number;
  activCount: number;
}

const ChartBar: FC<IChartBar> = (props) => {
  const { allCount = 10, activCount } = props;
  const arr = new Array(allCount).fill(1).map((_value, index) => index)

  return (
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
  )
}

export default ChartBar