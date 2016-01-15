import React from 'react';
import { Box } from '../../../src/components';

const Block = ({ color, center, ...props }) => (
  <div
    style={{
		textAlign: center ? 'center' : null,
		backgroundColor: color
    }}>
    <Box p={1} { ...props } />
  </div>
);

Block.displayName = 'Block';

Block.defaultProps = {
  color: '#333'
};

export default Block;
