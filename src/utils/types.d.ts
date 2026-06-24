interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  ariaLabel?: string;
}

declare module "*.png" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.jpg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.jpeg" {
  const content: import("next/image").StaticImageData;
  export default content;
}
