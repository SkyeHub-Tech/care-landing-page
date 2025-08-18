"use client";
import { Button } from "@material-tailwind/react";
import React from "react";

export default function CustomButton({
  children,
  className,
  onClick,
  type,
}: CustomButtonProps) {
  return (
    <Button type={type} className={className} onClick={onClick}>
      {children}
    </Button>
  );
}
