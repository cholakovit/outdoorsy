// Styled Elements
import { styled } from "@mui/material/styles";

// MUI Elements
import { Box, Typography } from "@mui/material";

export const Item = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  padding: "10px",
  marginBottom: "20px",
  display: "flex",
}));

export const ItemImg = styled(Box)(({ theme }) => ({
  marginRight: "10px",
  "& img": {
    width: "200px",
    objectFit: "cover",
  },
}));

export const ItemContent = styled(Box)(({ theme }) => ({
  padding: "10px",
  marginBottom: "20px",
  width: "82%",
}));

export const ItemName = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  height: "30px",
  fontWeight: "bold",
}));

export const ItemDescription = styled(Typography)(({ theme }) => ({}));

export const ItemKeywords = styled(Typography)(({ theme }) => ({
  marginTop: "10px",
  fontSize: "14px",
}));
