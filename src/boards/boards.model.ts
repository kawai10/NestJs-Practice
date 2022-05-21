export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
