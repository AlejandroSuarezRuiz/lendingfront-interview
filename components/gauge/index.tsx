import { useRef } from 'react';
import styled from 'styled-components';
import { mainTheme } from '../layout/theme';
import { GaugeProps } from './interface';

/* Gauge Component
Maybe this is the most complex component because use svg html
tag and a trick with the stroke to give the gauge effect.
Also use some math operations to determine the position of the
end point wich is a div. Basically calculates the line position
to move that div. */

const Wrapper = styled.div`
  border-radius: 9999px;
  position: relative;
  width: 70px;
  height: 70px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  .progress-ring__circle {
    transition: 0.35s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`;

const EndPoint = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${p => p.theme.SoftBlue};
  border-radius: 9999px;

  left: 0px;
  bottom: 0px;
  opacity: 0;

  transition: 0.35s opacity;
`;

const Inner = styled.div`
  position: absolute;
  background-color: ${p => p.theme.LightGray};
  width: 68px;
  height: 68px;
  border-radius: 9999px;
  z-index: -1;
`;

const TextContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 62px;
  height: 62px;
  top: 3px;
  left: 3px;
  border-radius: 9999px;
  z-index: -1;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Gauge = ({value}: GaugeProps) => {

  const circleRef = useRef<SVGCircleElement>(null);
  const endPoint = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    let circle: SVGCircleElement | null = circleRef.current;
    if(circle){
      let radius = circle.r.baseVal.value;
      let circumference = radius * 2 * Math.PI;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
  
      const offset = circumference - value / 100 * circumference;
      circle.style.strokeDashoffset = offset.toString();

      let grades = value * 360 / 100;
      let test = grades * (Math.PI / 180);
      let x = 31 + radius * Math.cos(test);
      let y = 31 + radius * Math.sin(test);
      if(endPoint.current) {
        endPoint.current.style.bottom = `${x}px`
        endPoint.current.style.left = `${y}px`
        endPoint.current.style.opacity = "1";
      }
    }
  }, 200);

  return(
    <div>
      <Wrapper>
        <EndPoint ref={endPoint} />
        <Inner>
          <TextContainer>
            {value}
          </TextContainer>
        </Inner>
        <svg
          className="progress-ring"
          width="70"
          height="70">
          <circle
            ref={circleRef}
            className="progress-ring__circle"
            stroke={mainTheme.Aqua}
            strokeWidth="4"
            fill="transparent"
            r="32.5"
            cx="35"
            cy="35"/>
        </svg>
      </Wrapper>
    </div>
  )
}

export default Gauge;