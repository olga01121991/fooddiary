import { FC } from 'react'

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
    <div className='wrapper'>
      {
        segments.map((segment, index) => (
          <div 
            style={{background: activeIndex === index ? "red"  : "none"}}
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