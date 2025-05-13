import { FC } from 'react'
import stl from "./segmentButton.module.scss";

export interface ISegment {
  id: number;
  title: string;
}

interface ISegmentButton {
  segments: ISegment[];
  onClick: (index: number) => void;
  activeIndex: number;
}

const SegmentButton: FC<ISegmentButton> = (props) => {
  const { segments, onClick, activeIndex } = props;

  return (
    <div className={stl.wrapper}>
      {
        segments.map((segment, index) => (
          <div 
            className={activeIndex === index ? stl.segment  : stl.passiv}
            onClick={() => {onClick(index)}}
            key={segment.id}
          >
            {segment.title}
          </div>
        ))
      }
    </div>
  )
}

export default SegmentButton