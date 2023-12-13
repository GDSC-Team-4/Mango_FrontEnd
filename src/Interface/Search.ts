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
    place_name: string;
    imageURL: string;
    address_name: string; 
    category_group_code: string; 
    category_group_name: string; 
    category_name: string;
    phone: string; 
    place_url: string; 
    road_address_name: string;
    x:string;
    y:string;
    // 기타 필요한 속성...
  }
  