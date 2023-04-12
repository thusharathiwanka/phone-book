export type CategoryI = {
  _id: string;
  name: string;
  contacts: ContactI[];
  createdAt: string;
  updatedAt: string;
};

export type ContactI = {
  name: string;
  description: string;
  phone: string;
};

export type CategoryContextI = {
  categories: CategoryI[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryI[]>>;
};
