import React, {useState} from 'react';
import {
  CombatLogMessage,
  CombatLogs,
  HealMeButton, HealthBar,
  HitMeButton,
  LogType
} from "../components";


export const ButtonsPage: React.FC<{}> = () => {
  const [HPs, setHPs] = useState(100);
  const [combatLogs, setCombatLogs] = useState<CombatLogMessage[]>([]);
  const maxHP = 100;
  const logCombatMessage = (message:CombatLogMessage) => setCombatLogs([...combatLogs, message]);
  const takeDamage = (damages: number) => {

    if (damages === 0) {
      logCombatMessage({
        message: 'Hit missed',
        type: LogType.Status,
      })
    } else {
      setHPs(Math.max(0, HPs - damages));
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
      setHPs(Math.min(maxHP, HPs + heal));
      logCombatMessage({
        message: `HP recovered: ${heal}`,
        type: LogType.Heal
      });
    }
  };

  return (
    <div style={{
      justifyContent: 'center',
      display: 'flex',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        width: '600px',
        alignSelf: 'center',
        gap: '10px'
      }}>
        <HealthBar health={HPs} maxHealth={maxHP}/>
        <div style={{
          display: 'flex',
        }}>
          <div style={{

          }}>
            <HitMeButton onHit={takeDamage}/>
            <HealMeButton onHeal={healDamage}/>
          </div>
          <CombatLogs messages={combatLogs}/>
        </div>
      </div>
    </div>
  )
};