import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  HamburgerIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import { FC } from "react";

import React from "react";

export default function PriorityIcon({
  priority,
}: {
  priority: string | undefined;
}) {
  let icon;

  switch (priority?.toLocaleLowerCase()) {
    case "lowest":
      return (
        <ArrowLeftIcon style={{ transform: "rotate(270deg)", color: "blue" }} />
      );
    case "low":
      return <ChevronDownIcon color="blue" />;
    case "medium":
      return <HamburgerIcon color="yellow" />;
    case "high":
      return <ChevronUpIcon color="red" />;
    case "highest":
      return (
        <ArrowLeftIcon style={{ transform: "rotate(90deg)", color: "red" }} />
      );
    default:
      icon = <div>No icon</div>; // You can replace this with your own default icon or message
      break;
  }

  return <div>{icon}</div>;
}
