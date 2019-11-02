import React from 'react';

export type HitMeButtonProps = {
  // Nothing here yet
  onHit: (damages: number) => void;
}

export const HitMeButton: React.FC<HitMeButtonProps> = ({onHit}) => {

  const inflictDamages = () => onHit(Math.floor(Math.random() * 10));

  return (
    <button onClick={inflictDamages}>Hit Me</button>
  )
};