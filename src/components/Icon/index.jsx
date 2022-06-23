import { Image } from "./style";

export function Icon({src, type}) {
  return <Image type={type} src={src} />;
}
