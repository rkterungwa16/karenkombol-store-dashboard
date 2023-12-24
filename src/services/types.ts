export type RequestOptions = {
  query?: string;
  headers?: HeadersInit;
}
export type RequestWithPayloadOptions<T> = {
  payload?: T;
  headers?: HeadersInit;
}
export type StringFilter = {
  $eq?: string;
  $contains?: string;
  $in?: string[];
};

export type NumberFilter = {
  $lt?: number;
  $gt?: number;
  $lte?: number;
  $gte?: number;
  eq?: number;
};

export type DateFilter = {
  $lt?: Date;
  $gt?: Date;
  $lte?: Date;
  $gte?: Date;
  eq?: Date;
};

export type BooleanFilter = {
  eq?: boolean;
};
