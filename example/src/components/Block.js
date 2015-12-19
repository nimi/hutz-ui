import React from 'react';
import { Box } from '../../../src/components';

const Block = ({ color, center, height, ...props }) => (
  <div
    style={{
		textAlign: center ? 'center' : null,
		backgroundColor: color,
		height: height
    }}>
    <Box { ...props } />
  </div>
);

Block.displayName = 'Block';

Block.defaultProps = {
  color: '#333'
};

export default Block;
