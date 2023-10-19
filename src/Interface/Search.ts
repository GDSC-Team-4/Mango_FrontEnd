interface SearchProps {
    width: number | undefined;
    height: number | undefined;
    imageURL: string | undefined;
}

export default SearchProps

export interface SearchDto {
    id: number;
    placeName: string; 
    roadAddressName: string;
    placeUrl: string;
    reviewPoint: number;
}

export interface SearchData {
    SearchPrams: string;
}
