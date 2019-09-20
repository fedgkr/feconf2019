import React, {useCallback, useEffect, useRef, useState} from 'react';
import cc from 'classcat';
import css from './ConventionMap.scss';

interface ConventionMapProps {
}

const rects = [
  {
    x: 0.01,
    y: 0,
    w: 0.76,
    h: 0.299,
  },
  {
    x: 0.46,
    y: 0.355,
    w: 0.115,
    h: 0.3,
  },
  {
    x: 0.3,
    y: 0.25,
    w: 0.18,
    h: 0.15,
  },
  {
    x: 0.2,
    y: 0.5,
    w: 0.13,
    h: 0.12,
  },
];

const ConventionMap: React.FC<ConventionMapProps> = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const imageLoaded = useRef(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const rafId = useRef<number>(null);
  const [currentIdx, setIdx] = useState(0);
  const size = 825;
  const draw = useCallback((alpha, clipIdx?) => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;
    ctx.globalAlpha = alpha;
    ctx.drawImage(imageRef.current, 0, 0, size, size);
    if (clipIdx) {
      const { x, y, w, h } = rects[clipIdx - 1];
      const imgSize = imageRef.current.naturalWidth;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(
        imageRef.current,
        (imgSize * x),
        (imgSize * y),
        (imgSize * w),
        (imgSize * h),
        size * x,
        size * y,
        size * w,
        size * h,
      );
    }
  }, [currentIdx]);
  useEffect(() => {
    imageRef.current = new Image();
    imageRef.current.onload = () => {
      fadeIn(Date.now());
      imageLoaded.current = true;
    };
    imageRef.current.src = '/static/images/map.png';
    function fadeIn(ts) {
      const progress = Math.pow((Date.now() - ts) / 350, 3);
      draw(progress);
      rafId.current = progress <= 1 && requestAnimationFrame(() => fadeIn(ts));
    }
  }, []);
  useEffect(() => {
    const onResize = () => {
      const canvas = ref.current;
      if (canvas.width !== size) {
        canvas.width = size;
        canvas.height = size;
        draw(1, currentIdx);
      }
    }
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [currentIdx]);
  const onClickBtn = useCallback((e, idx) => {
    e.preventDefault();
    cancelAnimationFrame(rafId.current);
    setIdx(idx);
    draw(1, idx);
  }, []);

  return (
    <div className={css.ConventionMap}>
      <div className={cc([css.ButtonWrap, 'kr-text'])}>
        <a href="#" className={currentIdx === 0 ? css.active : ''} onClick={(e) => onClickBtn(e, 0)}>전체</a>
        <a href="#" className={currentIdx === 1 ? css.active : ''} onClick={(e) => onClickBtn(e, 1)}>행사장</a>
        <a href="#" className={currentIdx === 2 ? css.active : ''} onClick={(e) => onClickBtn(e, 2)}>화장실</a>
        <a href="#" className={currentIdx === 3 ? css.active : ''} onClick={(e) => onClickBtn(e, 3)}>흡연실</a>
        <a href="#" className={currentIdx === 4 ? css.active : ''} onClick={(e) => onClickBtn(e, 4)}>유아휴게실</a>
      </div>
      <div className={css.CanvasWrap}>
        <canvas className="extended" ref={ref}/>
      </div>
    </div>
  );
}

export default ConventionMap;
