import React, {useState} from 'react';
import {
  CombatLogMessage,
  CombatLogs,
  HealMeButton,
  HitMeButton,
  LogType
} from "../components";


export const ButtonsPage: React.FC<{}> = () => {
  const [HPs, setHPs] = useState(100);
  const [combatLogs, setCombatLogs] = useState<CombatLogMessage[]>([]);

  const logCombatMessage = (message:CombatLogMessage) => setCombatLogs([...combatLogs, message]);
  const takeDamage = (damages: number) => {

    if (damages === 0) {
      logCombatMessage({
        message: 'Hit missed',
        type: LogType.Status,
      })
    } else {
      setHPs(HPs - damages);
      logCombatMessage({
        message: `Damage taken from hit: ${damages}`,
        type: LogType.Damage,
      });
    }
  };

  const healDamage = (heal: number) => {
    if(heal === 0) {
      logCombatMessage({
        message: 'Heal failed',
        type: LogType.Status,
      })
    } else {
      setHPs(HPs + heal);
      logCombatMessage({
        message: `HP recovered: ${heal}`,
        type: LogType.Heal
      });
    }
  };

  return (
    <div>
      <h1>Buttons Page</h1>
      <p>Hit count: {HPs}</p>
      <HitMeButton onHit={takeDamage}/>
      <HealMeButton onHeal={healDamage}/>
      <CombatLogs messages={combatLogs}/>
    </div>
  )
};