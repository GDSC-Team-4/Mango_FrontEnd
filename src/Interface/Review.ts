export interface Review  {
    content: string;
    star: number;
    images: string[] | undefined;
}

export interface ReviewPorps {
    backgroundColor: string | undefined;
}

export interface ReviewUser  {
    id: number,
    username: string,
    createdDate: string,
    updatedDate: string | undefined,
    userId: string,
    restaurantId:string,
    content: string;
    star: number;
    imageUrls: string[] | undefined;
}