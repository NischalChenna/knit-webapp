interface SvgComponentProps {
  svgPath: string;
}

const SvgComponent = ({ svgPath }: SvgComponentProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d={svgPath} fill="currentColor" />
  </svg>
);

export default SvgComponent;
