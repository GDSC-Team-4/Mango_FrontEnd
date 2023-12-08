import { SearchDto } from "../../Interface/Search";

export const dummyPlaces: SearchDto[] = [
    {
        id: 1,
        place_name: '미성옥',
        roadAddressName: '서울특별시 마포구 합정동 123-45',
        placeUrl: 'https://place.map.kakao.com/1234567890',
        reviewPoint:4.6
      },
      {
        id: 2,
        place_name: '육전식당',
        roadAddressName: '서울특별시 마포구 합정동 67-89',
        placeUrl: 'https://place.map.kakao.com/2345678901',
        reviewPoint:4.6
      },
      {
          id:3,
          place_name:'합정떡볶이', 
          roadAddressName:'서울특별시 마포구 합정동 987-65', 
          placeUrl:'https://place.map.kakao.com/3456789012',
          reviewPoint:4.6
      },
      {
          id:4, 
          place_name:'합정김밥천국', 
          roadAddressName:'서울특별시 마포구 합정동 543-21', 
          placeUrl:'https://place.map.kakao.com/4567890123',
          reviewPoint:4.6
      },
      {
          id:5, 
          place_name:'합정돈까스집', 
          roadAddressName:'서울특별시 마포구 합정동 321-54', 
          placeUrl:'https://place.map.kakao.com/5678901234',
          reviewPoint:4.6
      },
];

export const dimensions = [
    { width: 24, height: 50, imageURL: 'https://picsum.photos/400/500' },
    { width: 21, height: 33, imageURL: 'https://picsum.photos/370/240' },
    { width: 21, height: 17, imageURL: 'https://picsum.photos/370/150' },
    { width: 24, height: 16, imageURL: 'https://picsum.photos/400/180' },
    { width: 24, height: 34, imageURL: 'https://picsum.photos/400/300' },
];