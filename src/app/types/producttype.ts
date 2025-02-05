interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercentage: number;
  imagePath: string;
  stock: number;
  category: string;
  description: string;
  isfeatured: boolean;
  quantity: number;
  slug: {
    current: string;
    _type: "slug";
  }
}



export type { Product};
