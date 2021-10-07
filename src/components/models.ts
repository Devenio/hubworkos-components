export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export type UnknownObject = {
  [key: string]: unknown
}[]
