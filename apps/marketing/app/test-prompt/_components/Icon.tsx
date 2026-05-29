type Props = {
  name: string;
  className?: string;
  fill?: 0 | 1;
  weight?: 300 | 400 | 500 | 600;
  size?: number;
  "aria-hidden"?: boolean;
};

export function Icon({
  name,
  className = "",
  fill = 0,
  weight = 400,
  size = 20,
  "aria-hidden": ariaHidden = true,
}: Props) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}, "GRAD" 0, "opsz" ${size}`,
      }}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}
