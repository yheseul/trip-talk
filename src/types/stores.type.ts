export interface ImageStoreState {
  imageMap: { [key: string]: string };
  setImage: (id: string, url: string) => void;
}

export interface AccessTokenState {
  accessToken: string;
  setAccessToken: (newAccessToken: string) => void;
}

export interface IDateRangeState {
  dateRange: [Date | null, Date | null];
  setDateRange: (range: [Date | null, Date | null]) => void;
}

export interface LoadState {
  isLoaded: boolean;
  setIsLoaded: () => void;
}

export interface SearchBarState {
  searchBar: string;
  setSearchBar: (keyWord: string) => void;
}
