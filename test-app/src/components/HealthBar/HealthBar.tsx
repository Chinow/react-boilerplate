import React from 'react';
import './HealthBar.css';

export type HeathBatProp = {
  health: number;
  maxHealth: number;
}

export const HealthBar: React.FC<HeathBatProp> = ({health, maxHealth}) => {
  const percent = health / maxHealth * 100;
  let state = 'healthy';
  if (percent < 15) {
    state = 'low';
  } else if (percent < 33) {
    state = 'medium';
  }
  return (
    <div className="health-bar">
      <div style={{ width: `${percent}%` }} className={`${state} hp-status`} />
    </div>
  )
};