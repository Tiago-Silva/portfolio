
'use client'
import { ThemeProvider } from "styled-components";
import StyledJsxRegistry from "../../registry";
import theme from "../global/theme";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ 
  children 
}: Props) => {
  return (
    <StyledJsxRegistry>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledJsxRegistry>
  );
};