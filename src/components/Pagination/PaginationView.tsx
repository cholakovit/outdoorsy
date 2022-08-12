// Functional Component
import { FC } from "react";

// Components
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// Types
import { PaginationProps } from "../../store/types";

const PaginationView: FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  page,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, item: number) => {
    paginate(item);
  };

  return (
    <>
      <Stack spacing={2}>
        <Pagination
          count={pageNumbers.length}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default PaginationView;
