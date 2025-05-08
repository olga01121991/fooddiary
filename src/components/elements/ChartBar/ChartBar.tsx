import { FC } from 'react'
import cn from "classnames";
import stl from "./chatBar.module.scss";

interface IChartBar {
  allCount?: number;
  activCount: number;
}

const ChartBar: FC<IChartBar> = (props) => {
  const { allCount = 10, activCount } = props;
  const arr = new Array(allCount).fill(1).map((_value, index) => index)
  console.log(arr)
  return (
    <div className={cn(stl.wrapper)}>
      {
        arr.map((val) => (
          <div
            className={cn(stl.chatBar)}
            key={val}
          />
        ))
      }
    </div>
  )
}

export default ChartBar