import React from 'react';

type HealMeButtonProps = {
  onHeal: (hpRecovered: number) => void;
}

export const HealMeButton: React.FC<HealMeButtonProps> = ({onHeal}) => {
  const heal = () => onHeal(Math.floor(Math.random() * 5));
  return (
    <button onClick={heal}>Heal me !</button>
  )
};