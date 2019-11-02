import {mount} from 'enzyme';
import React from 'react';
import {CombatLogMessage, CombatLogs, LogType} from "./CombatLogs";

describe('<CombatLogs />', () => {
  it('should render given combat logs', () => {
    const messages: CombatLogMessage[] = [
      {
        message: 'statusMessage',
        type: LogType.Status
      },
      {
        message: 'damageMessage',
        type: LogType.Damage
      }
    ];
    const wrapper = mount(<CombatLogs messages={messages}/>)

    expect(wrapper.text()).toContain('statusMessage');
    expect(wrapper.text()).toContain('damageMessage');
  });

  it('should display empty', () => {
    const wrapper = mount(<CombatLogs messages={[]}/>)

    expect(wrapper.text()).toBe('');
  })
});