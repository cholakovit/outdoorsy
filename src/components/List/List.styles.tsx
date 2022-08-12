// Styled Elements
import { styled } from "@mui/material/styles";

// MUI Elements
import { Container, Box } from "@mui/material";

export const ItemsContainer = styled(Container)(({ theme }) => ({
  marginTop: "100px",
}));

export const ItemsHolder = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "100px",
}));
