import React, {useState} from 'react';
import './HealthBar.css';

export type HeathBatProp = {
  health: number;
  maxHealth: number;
}

type MousePosition = {
  x: number,
  y: number
}

export const HealthBar: React.FC<HeathBatProp> = ({health, maxHealth}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });
  const toggleHovered = (value: boolean) => () => setIsHovered(value);
  const storeMousePosition = (event: React.MouseEvent) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };
  const percent = health / maxHealth * 100;
  let state = 'healthy';
  if (percent < 15) {
    state = 'low';
  } else if (percent < 33) {
    state = 'medium';
  }

  const renderHps = () => {
    const x = mousePosition.x + 10;
    const y = mousePosition.y + 10;
    return <div style={{
      position: 'absolute',
      left: x,
      top: y,
      background: 'white',
      borderRadius: '4px',
      border: 'grey 1px solid',
      padding: '3px'
    }}>{health}</div>
  };

  return (
    <div
      className="health-bar"
      onMouseMove={storeMousePosition}
      onMouseEnter={toggleHovered(true)}
      onMouseLeave={toggleHovered(false)}
    >
      <div style={{ width: `${percent}%` }} className={`${state} hp-status`} />
      {isHovered && renderHps()}
    </div>
  )
};