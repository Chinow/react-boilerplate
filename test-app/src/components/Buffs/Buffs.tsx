import React, {useEffect, useRef, useState} from 'react';

type BuffsProps = {
  // nothing here yet
}
export const Buffs: React.FC<BuffsProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeMenu = useRef(() => {
    setIsMenuOpen(false);
  });
  const toggleMenuOpen = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
    e.preventDefault();
    applyMenuOpen(!isMenuOpen);
  };

  const applyMenuOpen = (value:boolean) => setIsMenuOpen(value);

  useEffect(() => {
    if (backdropRef.current) {
      if (isMenuOpen) {
        backdropRef.current.addEventListener('click', closeMenu.current);
      } else {
        backdropRef.current.removeEventListener('click', closeMenu.current);
      }
    }
  }, [backdropRef.current, isMenuOpen]);

  const x = buttonRef.current ? buttonRef.current.offsetLeft : 0;
  const y = buttonRef.current ? buttonRef.current.offsetTop + buttonRef.current.clientHeight + 5 : 0;
  return (
    <React.Fragment>
      <button ref={buttonRef} onClick={toggleMenuOpen}>Buff Me !</button>
      {isMenuOpen && buttonRef.current &&
        <React.Fragment>
          <div
            ref={backdropRef}
            style={{
              position: 'absolute',
              width: "100%",
              height: '100%',
              top: 0,
              left: 0,
            }} />
          <div style={{
            position: 'absolute',
            left: x,
            top: y,
            background: "white",
            borderRadius: '4px',
            padding: '5px',
            boxShadow: '5px 5px 5px grey',
            border: '1px solid grey'
          }}>
            Buffs!
            <ul>Spell 1</ul>
            <ul>Spell 2</ul>
            <ul>Spell 3</ul>
            <ul>Spell 4</ul>
            <ul>Spell 5</ul>
            <ul>Spell 6</ul>
          </div>
        </React.Fragment>
      }
    </React.Fragment>
  )
};