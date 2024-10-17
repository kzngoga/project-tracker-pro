import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IconButtonProps extends ButtonProps {}

export default function IconButton(props: IconButtonProps) {
  return (
    <Button variant="ghost" className={cn("p-0", props.className)} {...props}>
      {props.children}
    </Button>
  );
}
