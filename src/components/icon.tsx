import I from '@mdi/react';
// @ts-ignore
const IconComponent = I.default ? I.default : I;

const Icon: typeof I = IconComponent;

export default Icon;