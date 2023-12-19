export interface SearchProps {
    width: number | undefined;
    height: number | undefined;
    imageURL: string | undefined;
}

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
    placeName: string;
    addressName: string; 
    categoryGroupCode: string; 
    categoryGroupName: string; 
    categoryName: string;
    phone: string; 
    placeUrl: string; 
    roadAddressName: string;
    imageUrl: string;
    x:string;
    y:string;
    // 기타 필요한 속성...
  }
  