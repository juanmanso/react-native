import React from 'react';

import { CoonsPatchMeshGradient } from './components/CoonsPatchMeshGradient';

export const Aurora = () => {
  return (
    <CoonsPatchMeshGradient
      rows={3}
      cols={3}
      colors={palette.otto}
      //   lines
      //   handles
      play
    />
  );
};

const palette = {
  otto: [
    '#FEF8C4',
    '#E1F1D5',
    '#C4EBE5',
    '#ECA171',
    '#FFFCF3',
    '#D4B3B7',
    '#B5A8D2',
    '#F068A1',
    '#EDD9A2',
    '#FEEFAB',
    '#A666C0',
    '#8556E5',
    '#DC4C4C',
    '#EC795A',
    '#E599F0',
    '#96EDF2',
  ],
};
