export interface ThingProps {
  id: string;
  created_at: string;
  description?: string;
  genre?: string;
  person?: string;
  title: string;
  type_of_name: string;
  user?: string;
}

export interface GenreProps {
  id: string;
  title: string;
}
