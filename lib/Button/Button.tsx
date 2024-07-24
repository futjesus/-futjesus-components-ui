import { FC } from "react";

export interface Props {
  color: "red";
}

export const Button: FC<Props> = () => {
  return <div>Button</div>;
};
