import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import "./scss/index.scss";
import "./assets/fonts/icomoon/style.scss";
import Icon from './components/elements/Icon/Icon';
import Button from './components/elements/Button/Button';
import Badge from './components/elements/Badge/BaseBadge/BaseBadge';
import RoundedBadge from './components/elements/Badge/RoundedBadge/RoundedBadge';
import Breadcrumb, { ILink } from './components/elements/Breadcrumb/Breadcrumb';
import SegmentButton, { ISegment } from './components/elements/SegmentButton/SegmentButton';

const links: ILink[] = [
  {
    id: 0,
    title: "Ссылка 1",
    url: "google.com"
  },
  {
    id: 1,
    title: "Ссылка 2",
    url: "google.com"
  },
]

const segments: ISegment[] = [
  {
    id: 0,
    title: "Ссылка 1",
  },
  {
    id: 1,
    title: "Ссылка 2",
  },
]


function App() {
  const [count, setCount] = useState(0)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <>
      <div>
        <Icon iconType="ArrowsLeftRight" size={54}/>
        <Icon iconType="ArrowsLeftRight" />
        <Badge text="Completed" color="red"/>
        <RoundedBadge text="любой" />
        <RoundedBadge text="любой" bg="bg_green_light" />

        <Button size='small' text='кнопка' btnType='primary'/>
        <Button size='medium' text='кнопка' btnType='primary'/>
        <Button 
          size='large' 
          text='кнопка' 
          btnType='primary'
          prefixIcon={<Icon iconType="CalendarBlank" size={13}/>}
          postfixIcon={<Icon iconType="CaretDown" size={13}/>}
        />
        <Button size='small' text='кнопка' btnType='secondary'/>
        <Button size='small' text='кнопка' btnType='ghost'/>
        <Button size='small' text='кнопка' btnType='transparent'/>
        
        <Breadcrumb links={links} title='нажать'/>
        <SegmentButton 
          segments={segments} 
          // onClick={(index: number) => {setActiveIndex(index)}} 
          onClick={setActiveIndex} 
          activeIndex={activeIndex}
        />

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
