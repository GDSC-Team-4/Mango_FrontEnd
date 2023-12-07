interface SearchProps {
    width: number | undefined;
    height: number | undefined;
    imageURL: string | undefined;
}

export default SearchProps

export interface SearchDto {
    id: number;
    place_name: string; 
    roadAddressName: string;
    placeUrl: string;
    reviewPoint: number;
}

export interface SearchData {
    SearchPrams: string;
}

export interface SearchResult {
    id: number;
    place_name: string;
    imageURL: string;
    address_name: string;

    // 기타 필요한 속성...
  }
  