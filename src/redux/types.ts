export type CategorieItem = {
  categoryId: number;
  name: string;
};

export type DonationItems = {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: Array<number>;
  price: string;
};

export type Donation = {
  items: DonationItems[];
  selectedDonationId: number | null;
  selectedDonation: DonationItems | null;
};

export type User = {
  displayName: string;
  email: string;
  uid: string;
  token: string;
};
