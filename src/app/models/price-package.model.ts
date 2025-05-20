export interface PricePackage {
  header: string;
  subheader: string;
  includedFeatures: Feature[];
  description: string;
  price: Price;
}

export interface Feature {
  header: string;
  description: string;
}

export interface Price {
  amount: string;
  currency: string;
}
