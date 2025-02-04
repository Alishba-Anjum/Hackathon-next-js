interface Product {
  _id: string;
  name: string;
  price: string;
  discountPercentage: number;
  imagePath: string;
  stockLevel: number;
  category: string;
  description: string;
  slug: {
    current: string;
    _type: "slug";
  }
}



export type { Product};
