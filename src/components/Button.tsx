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
}) {
  return (
    <div
      className={clsx(
        `${width} ${height} flex flex-row justify-center items-center gap-2.5 ${radius} ${border} ${bgColor} cursor-pointer`
      )}
    >
      {icon ? (
        <img className="w-[18px] h-[18px]" src={icon} alt="button icon" />
      ) : null}

      <span className={clsx(`${fontStyle} ${textColor}`)}>{label}</span>
    </div>
  );
}
