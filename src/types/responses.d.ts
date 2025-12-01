type IResData<T = Record<string, never>> = {
  total: number;
  skip: number;
  limit: number;
} & T;
