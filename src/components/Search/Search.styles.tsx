// Styled Elements
import { styled } from "@mui/material/styles";

// MUI Elements
import { Box, Container, TextField } from "@mui/material";

export const OutdoorsyContainer = styled(Container)(({ theme }) => ({
  marginTop: "100px",
  display: "flex",
}));

export const Holder = styled(Box)(({ theme }) => ({
  flex: 3,
  display: "flex",
  justifyContent: "center",
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  width: theme.outDoorsySizing.boxWidth,
  backgroundColor: theme.palette.primary.black,
  borderTopRightRadius: theme.outDoorsySizing.cornerRounded,
  borderTopLeftRadius: theme.outDoorsySizing.cornerRounded,
  "& label": {
    color: theme.palette.primary.main,
  },
  "& input": {
    color: theme.palette.primary.main,
  },
}));
