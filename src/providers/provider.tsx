
'use client'
import StyledJsxRegistry from "../registry";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ 
  children 
}: Props) => {
  return (
    <StyledJsxRegistry>
      {children}
    </StyledJsxRegistry>
  );
};