import React, {useState} from 'react';
import {
  Buffs,
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
      background: 'lightgray',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2>RPG</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        width: '600px',
        height: '150px',
        alignSelf: 'center',
        gap: '10px',
        backgroundColor: 'white',
        margin: '10px',
        borderRadius: '5px',
        boxShadow: '5px 3px 3px grey'
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
        }}>
          <HealthBar health={HPs} maxHealth={maxHP}/>
        </div>
        <div style={{
          display: 'flex',
          gap: '5px',
          height: '100%'
        }}>
          <div style={{
            flexDirection: 'column',
            display: 'flex',
            gap: '5px',
          }}>
            <HitMeButton onHit={takeDamage}/>
            <HealMeButton onHeal={healDamage}/>
            <Buffs/>
          </div>
          <CombatLogs messages={combatLogs}/>
        </div>
      </div>
    </div>
  )
};