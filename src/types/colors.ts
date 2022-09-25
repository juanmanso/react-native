type TRGB = `rgb(${number}, ${number}, ${number})`;
type TRGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type THEX = `#${string}`;

export type TColor = TRGB | TRGBA | THEX;
