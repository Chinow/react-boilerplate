import React, {useEffect, useRef, useState} from 'react';

type BuffsProps = {
  // nothing here yet
}

type Position = {
  x: number,
  y: number
}

export const Buffs: React.FC<BuffsProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState<Position>({
    x: 0,
    y: 0
  });
  const [maxHeight, setMaxHeight] = useState(0);

  const closeMenu = useRef(() => {
    setIsMenuOpen(false);
  });

  const recomputeMenuPosition = useRef(() => {
    const x = buttonRef.current ? buttonRef.current.offsetLeft : 0;
    const y = buttonRef.current ? buttonRef.current.offsetTop + buttonRef.current.clientHeight + 5 : 0;
    setMenuPosition({
      x,
      y
    });
    setMaxHeight(window.innerHeight - y);
  });

  const toggleMenuOpen = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
    e.preventDefault();
    applyMenuOpen(!isMenuOpen);
  };

  const applyMenuOpen = (value:boolean) => {
    if (value) {
      recomputeMenuPosition.current();
    }
    setIsMenuOpen(value);
  };

  useEffect(() => {
    if (backdropRef.current) {
      if (isMenuOpen) {
        backdropRef.current.addEventListener('click', closeMenu.current);
      } else {
        backdropRef.current.removeEventListener('click', closeMenu.current);
      }
    }

    return () => {
      if (backdropRef.current) {
        backdropRef.current.removeEventListener('click', closeMenu.current);
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('resize', recomputeMenuPosition.current);

    return () => window.addEventListener('resize', recomputeMenuPosition.current);
  });

  return (
    <React.Fragment>
      <button ref={buttonRef} onClick={toggleMenuOpen}>Buff Me !</button>
      {isMenuOpen && buttonRef.current &&
        <React.Fragment>
          <div
            ref={backdropRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }} />
          <div style={{
            position: 'absolute',
            left: menuPosition.x,
            top: menuPosition.y,
            maxHeight,
            background: "white",
            borderRadius: '4px',
            overflow: "auto",
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