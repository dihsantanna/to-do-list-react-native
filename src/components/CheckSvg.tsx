import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';

import checkLogo from '@assets/check.svg';

interface Props {
  width: number;
  height: number;
  fill: string;
  stroke: string;
}

export class CheckSvg extends Component<Props> {
  render() {
    const { width, height, fill, stroke } = this.props;
    return <SvgXml xml={checkLogo} width={width} height={height} fill={fill} stroke={stroke} />;
  }
}
