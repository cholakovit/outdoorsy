// Styled Elements
import { OutdoorsyContainer, Holder, SearchField } from "./Search.styles";

//Redux
import { useAppDispatch } from "../../store/hooks";
import { requestRentals } from "../../store/rentalsSlice";

const SearchView = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (value: any) => {
    dispatch(requestRentals(value));
  };

  return (
    <OutdoorsyContainer>
      <Holder>
        <SearchField
          id="filled-basic"
          label="Search: rentals, trailer ..."
          variant="filled"
          onKeyUp={(e) => {
            handleSearch((e.target as HTMLInputElement).value);
          }}
        />
      </Holder>
    </OutdoorsyContainer>
  );
};

export default SearchView;
