import React, { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { SvgProps } from "constants/types";
import { aBlack } from "constants/brand";

export default memo(
  ({ size, color = aBlack }: SvgProps): JSX.Element => (
    <Svg width={size} height={size} viewBox='0 0 56 13' style={{ aspectRatio: 56 / 13 }}>
      <Path
        fill={color}
        d='M6.06 5.06L1.644 6.8L6.06 8.54V9.284L0.84 7.196V6.404L6.06 4.304V5.06ZM10.5623 0.895999H11.3423L7.38234 12.2H6.60234L10.5623 0.895999ZM16.9819 6.404V7.196L11.7619 9.284V8.54L16.1779 6.8L11.7619 5.06V4.304L16.9819 6.404ZM27.7166 9.056H23.5166L22.6886 11H21.0806L24.8606 2.6H26.3966L30.1886 11H28.5566L27.7166 9.056ZM27.2006 7.832L25.6166 4.16L24.0446 7.832H27.2006ZM34.6931 11.12C33.5331 11.12 32.6291 10.796 31.9811 10.148C31.3331 9.492 31.0091 8.556 31.0091 7.34V2.6H32.5691V7.28C32.5691 8.928 33.2811 9.752 34.7051 9.752C36.1211 9.752 36.8291 8.928 36.8291 7.28V2.6H38.3651V7.34C38.3651 8.556 38.0411 9.492 37.3931 10.148C36.7531 10.796 35.8531 11.12 34.6931 11.12ZM42.1015 3.92H39.3175V2.6H46.4455V3.92H43.6615V11H42.1015V3.92ZM55.0803 2.6V11H53.5203V7.4H49.1763V11H47.6163V2.6H49.1763V6.068H53.5203V2.6H55.0803Z'
      />
    </Svg>
  ),
);
