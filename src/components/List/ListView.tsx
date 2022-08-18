// Styled Elements
import { ItemsContainer, ItemsHolder } from "./List.styles";

// Redux
import { useAppSelector } from "../../store/hooks";
import { getSearchString } from "../../store/rentalsSlice";
import { useGetRentelsQuery } from "../../store/apiSlice";

// Components
import Skeletons from "../Skeletons/SkeletonsView";
import Error from "../Error/Error";
import ItemView from "../Items/ItemView";
import PaginationView from "../Pagination/PaginationView";

// React Hooks
import { useState } from "react";

const ListView = () => {
  const searchString = useAppSelector(getSearchString);

  const [page, setPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(3);

  let { data, isLoading, isSuccess, isError }: any = useGetRentelsQuery({
    searchString: searchString,
    page: page,
    itemsPerPage: itemsPerPage,
  });

  //Get current data
  const indexOfLastItem: number = page * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItem: any =
    data && data.slice(indexOfFirstItem, indexOfLastItem);

  //Change Page
  const paginate = (pageNumber: number) => setPage(pageNumber);

  return (
    <ItemsContainer>
      <ItemsHolder>
        {isLoading ? (
          <Skeletons flag={1} width={1100} height={200} />
        ) : isError ? (
          <Error error="Network Problem" />
        ) : isSuccess ? (
          currentItem.length > 0 ? (
            <>
              {currentItem &&
                currentItem.map((item: any, index: number) => (
                  <ItemView item={item} key={index} />
                ))}
              <PaginationView
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                page={page}
              />
            </>
          ) : (
            <Skeletons flag={1} width={1100} height={200} />
          )
        ) : (
          ""
        )}
      </ItemsHolder>
    </ItemsContainer>
  );
};

export default ListView;
