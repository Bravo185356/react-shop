interface ArrowProps {
  color?: string;
}

export const Arrow = ({ color = "#1A1A1A" }: ArrowProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Medium/chevron-down">
        <path id="Icon" d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};