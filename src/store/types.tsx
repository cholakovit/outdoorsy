// data type received from outdoorsy
export type OutdoorsyData = {
  data: [];
  meta: {
    lat: string;
    lng: string;
    city: string;
    state: string;
    country: string;
    country_code: string;
    country_name: string;
    total: number;
    total_unavailable: number;
    start_position: number;
    stop_position: number;
    price_max: number;
    price_min: number;
    price_average: number;
    price_median: number;
    price_histogram: {
      data: [number: number];
      max_value: number;
    };
    vehicle_types: [
      number: {
        string: string;
      }
    ];
    locale: string;
    suggested: boolean;
    experiments: {};
    experiments_data: {};
    request: {};
    FlexibleDates: null;
    is_blended: boolean;
  };
};

// for the rentals slice
export type InitialStateType = {
  searchString: string;
  //status: string;
  //error: string | null | undefined
};

// for the Theme
export type colorModeProps = {
  toggleColorMode?: any;
};

export type errorProps = {
  error: string;
};

// for the Skeleton
export type SkeletonProps = {
  flag: number;
  width: number;
  height: number;
};

// for Itms
export type ItemProps = {
  item: any;
};

// for Pagination
export type PaginationProps = {
  itemsPerPage: number
  totalItems: number
  paginate: any
  page: number
}