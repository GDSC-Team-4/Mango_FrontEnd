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
