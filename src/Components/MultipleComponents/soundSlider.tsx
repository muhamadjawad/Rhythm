import React, {FC, useState, useRef, useCallback} from 'react';
import {PanResponder, Dimensions} from 'react-native';
import Svg, {
  Path,
  Circle,
  G,
  Rect,
  Defs,
  Stop,
  LinearGradient,
} from 'react-native-svg';
import {
  COLOR_BLUE,
  COLOR_PINK,
  COLOR_PURPLE,
  COLOR_SECONDARY,
  COLOR_SKIN,
} from '../../Styles/colorConstants';
import {GRADIENT_SKIN_PURPLE} from '../../Styles/gradients';

interface Props {
  btnRadius?: number;
  dialRadius?: number;
  dialWidth?: number;
  meterColor?: string;
  textColor?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  textSize?: number;
  value?: number;
  min?: number;
  max?: number;
  xCenter?: number;
  yCenter?: number;
  onValueChange?: (x: number) => number;
}

const CircleSlider: FC<Props> = ({
  btnRadius = 15,
  dialRadius = 130,
  dialWidth = 5,
  meterColor = '#0cd',
  textColor = '#fff',
  fillColor = 'none',
  strokeColor = '#fff',
  strokeWidth = 0.5,
  textSize = 10,
  value = 0,
  min = 0,
  max = 359,
  xCenter = Dimensions.get('window').width / 2,
  yCenter = Dimensions.get('window').height / 2,
  onValueChange = x => x,
}) => {
  const [angle, setAngle] = useState(value);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gs) => true,
      onStartShouldSetPanResponderCapture: (e, gs) => true,
      onMoveShouldSetPanResponder: (e, gs) => true,
      onMoveShouldSetPanResponderCapture: (e, gs) => true,
      onPanResponderMove: (e, gs) => {
        let xOrigin = xCenter - (dialRadius + btnRadius);
        let yOrigin = yCenter - (dialRadius + btnRadius);
        let a = cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);

        if (a <= min) {
          setAngle(min);
        } else if (a >= max) {
          setAngle(max);
        } else {
          setAngle(a);
        }
      },
    }),
  ).current;

  const polarToCartesian = useCallback(
    angle => {
      let r = dialRadius;
      let hC = dialRadius + btnRadius;
      let a = ((angle - 90) * Math.PI) / 180.0;

      let x = hC + r * Math.cos(a);
      let y = hC + r * Math.sin(a);
      return {x, y};
    },
    [dialRadius, btnRadius],
  );

  const cartesianToPolar = useCallback(
    (x, y) => {
      let hC = dialRadius + btnRadius;

      if (x === 0) {
        return y > hC ? 0 : 180;
      } else if (y === 0) {
        return x > hC ? 90 : 270;
      } else {
        return (
          Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
          (x > hC ? 90 : 270)
        );
      }
    },
    [dialRadius, btnRadius],
  );

  const width = (dialRadius + btnRadius) * 2;
  const bR = btnRadius;
  const dR = dialRadius;
  const startCoord = polarToCartesian(0);
  var endCoord = polarToCartesian(angle);

  return (
    <Svg width={width} height={width}>
      <Svg>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={COLOR_SKIN} stopOpacity="1" />
            <Stop offset="1" stopColor={COLOR_BLUE} stopOpacity="1" />
            <Stop offset="0" stopColor={COLOR_PINK} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Circle
          r={dR}
          cx={width / 2}
          cy={width / 2}
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          // fill="url(#grad)"
        />
      </Svg>

      <Path
        stroke={meterColor}
        strokeWidth={dialWidth}
        fill="none"
        d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${
          angle > 180 ? 1 : 0
        } 1 ${endCoord.x} ${endCoord.y}`}
      />

      <G x={endCoord.x - bR} y={endCoord.y - bR}>
        <Svg height="150" width="300">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor={COLOR_SECONDARY} stopOpacity="1" />
              <Stop offset="1" stopColor={COLOR_PURPLE} stopOpacity="1" />
              <Stop offset="0" stopColor={COLOR_SKIN} stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect
            x={bR - 7.5}
            y={bR - 7.5}
            width="15"
            height="15"
            // stroke={"url(#path)"}
            strokeWidth="5"
            fill="url(#grad)"
            gradientTransform={GRADIENT_SKIN_PURPLE}
            {...panResponder.panHandlers}
          />
        </Svg>
      </G>
    </Svg>
  );
};

export default React.memo(CircleSlider);

{
  /* <LinearGradient
colors={[COLOR_PRIMARY, COLOR_WHITE, COLOR_SECONDARY]} //'#4c669f', '#3b5998', '#192f6a'
style={{
  // width: '15',
  // height: '15',

  width: 12,
  height: 20,
  justifyContent: 'center',
  alignItems: 'center',
}}
end={{x: bR - 2, y: bR - 2}}
start={{x: bR - 7.5, y: bR - 7.5}}
{...panResponder.panHandlers}>
{/* <Rect
  x={bR - 7.5}
  y={bR - 7.5}
  width="15"
  height="15"
  // stroke={"url(#path)"}
  strokeWidth="5"
  fill="url(#path)"
  gradientTransform={GRADIENT_SKIN_PURPLE}
  {...panResponder.panHandlers}
/> 
</LinearGradient> */
}
