interface ITierData {
  name: string;
  pricing: string;
  isFavorite: boolean;
  feature: string[];
}

export const TierData: ITierData[] = [
  {
    name: "Basic",
    pricing: "12.000",
    isFavorite: false,
    feature: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
    ],
  },
  {
    name: "Business",
    pricing: "30.000",
    isFavorite: true,
    feature: [
      "Mencatat barang masuk",
      "Mencatat keuntungan",
      "Dapat menganilisa hasil penjualan dengan CHART",
    ],
  },
  {
    name: "Enterpreneur",
    pricing: "40.000",
    isFavorite: false,
    feature: [
      "Mencatat barang masuk",
      "Mencatat keuntungan",
      "Dapat menganilisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
      "Export data ke Excel",
      "AI Prediksi penghasilan",
    ],
  },
];
