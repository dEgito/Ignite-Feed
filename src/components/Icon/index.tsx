import { Image } from "./style";

interface IconProps {
  src: string;
  type?: string;
}

export function Icon({src, type}: IconProps) {
  return <Image type={type} src={src} />;
}
