import clsx from "clsx";

export function Button({
  width,
  height,
  bgColor,
  border,
  radius,
  textColor,
  fontStyle,
  icon,
  label,
  onClick,
}: {
  width: string;
  height: string;
  bgColor?: string;
  border?: string;
  radius?: string;
  textColor: string;
  fontStyle: string;
  icon?: any;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={clsx(
        `${width} ${height} flex flex-row justify-center items-center gap-2.5 ${radius} ${border} ${bgColor} cursor-pointer`
      )}
      onClick={onClick}
    >
      {icon ? (
        <img className="w-[18px] h-[18px]" src={icon} alt="button icon" />
      ) : null}

      <span className={clsx(`${fontStyle} ${textColor}`)}>{label}</span>
    </div>
  );
}
