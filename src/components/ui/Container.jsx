import { cn } from "../lib/utils";

export default function Container({ children, className }) {
  return (
    <div className={cn("w-[100%] max-w-[1420px] mx-auto", className)}>
      {children}
    </div>
  );
}
