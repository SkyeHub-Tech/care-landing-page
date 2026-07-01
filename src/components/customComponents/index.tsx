import Link from "next/link";

export default function CustomButton({
  children,
  className = "",
  onClick,
  type = "button",
  href,
  ariaLabel,
}: CustomButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bbb8] focus-visible:ring-offset-2 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
