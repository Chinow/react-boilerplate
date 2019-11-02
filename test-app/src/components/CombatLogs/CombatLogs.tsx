import React from 'react';
import './combat-logs.css';

type CombatLogsProps = {
  messages: CombatLogMessage[]
}

export type CombatLogMessage = {
  type: LogType,
  message: string
}

export enum LogType {
  Damage = 0,
  Heal = 1,
  Status = 2,
}

export const CombatLogs: React.FC<CombatLogsProps> = ({messages}) => {
  return (
    <div className="combat-logs-box">
      {
        (() => [...messages].reverse().map((logMessage, index) => {
          let messageType = '';
          switch (logMessage.type) {
            case LogType.Damage:
              messageType = 'damage';
              break;
            case LogType.Heal:
              messageType = 'heal';
              break;
            case LogType.Status:
              messageType = 'status';
              break;
            default:
              throw new Error("Unreachable");
          }
          return (
            <span className={`combat-log-message ${messageType}`} key={`combat-log-message-${index}`}>
              {logMessage.message}
            </span>
          )
        }))()
      }
    </div>
  )
};