import { FC } from "react";

import { SvgIcon } from "@mui/material";

import { TIconProps } from "@app/types/icons";

const CloseIcon: FC<TIconProps> = ({ size = 16, color = "primary" }) => {
  return (
    <SvgIcon
      width={size}
      height={size}
      viewBox="0 0 30 28"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path d="M23.7305 7.48114L21.9845 5.85156L15 12.3704L8.01551 5.85156L6.26953 7.48114L13.254 14L6.26953 20.5189L8.01551 22.1484L15 15.6296L21.9845 22.1484L23.7305 20.5189L16.746 14L23.7305 7.48114Z" />
    </SvgIcon>
  );
};

export default CloseIcon;
