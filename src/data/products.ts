export type Product = {
  id: string;
  name: string;
  category: 'vegetable' | 'fruit' | 'flower'; // ✅ FIXED
  description: string;
  price: number;
  image: string;
  inStock: boolean;
};


export const products: Product[] = [
  { id: "product-1", name: "Bottle Gourd (10 seeds)", category: "vegetable", description: "High-quality bottle gourd seeds for healthy vine growth and high yield.", price: 24, image: "https://i.ibb.co/CKRGgHQ3/Whats-App-Image-2025-12-25-at-1-06-50-PM-1.jpg", inStock: true },
  { id: "product-2", name: "Okra (4gms)", category: "vegetable", description: "Premium okra seeds producing tender, nutritious pods.", price: 24, image: "https://i.ibb.co/8DV1r7Sd/Whats-App-Image-2025-12-25-at-1-06-50-PM.jpg", inStock: true },
  { id: "product-3", name: "Long Bottle Gourd (10 seeds)", category: "vegetable", description: "High-yield bottle gourd seeds suitable for home and farm cultivation.", price: 24, image: "https://i.ibb.co/0Rd4Drqs/Whats-App-Image-2025-12-25-at-1-06-51-PM-1.jpg", inStock: true },
  { id: "product-4", name: "Sweet Corn (20 seeds)", category: "vegetable", description: "Sweet corn seeds with excellent taste and uniform cob development.", price: 24, image: "https://i.ibb.co/qFBhVMX3/Whats-App-Image-2025-12-25-at-1-06-51-PM-2.jpg", inStock: true },
  { id: "product-5", name: "Capsicum", category: "vegetable", description: "Capsicum seeds for crisp, colorful bell peppers.", price: 24, image: "https://i.ibb.co/gbDDjpwh/Whats-App-Image-2025-12-25-at-1-06-51-PM.jpg", inStock: true },
  { id: "product-6", name: "Palak (10gms)", category: "vegetable", description: "Nutritious palak (spinach) seeds for fast-growing leafy greens.", price: 24, image: "https://i.ibb.co/GLdtGHK/Whats-App-Image-2025-12-25-at-1-06-52-PM-1.jpg", inStock: true },
  { id: "product-7", name: "Muskmelon (10gms)", category: "fruit", description: "Muskmelon seeds producing sweet, aromatic fruits.", price: 24, image: "https://i.ibb.co/YT1MCSKG/Whats-App-Image-2025-12-25-at-1-06-52-PM-2.jpg", inStock: true },
  { id: "product-8", name: "Watermelon (15 seeds)", category: "fruit", description: "Juicy watermelon seeds with high fruit weight and sweetness.", price: 24, image: "https://i.ibb.co/kg7d1TCQ/Whats-App-Image-2025-12-25-at-1-06-52-PM.jpg", inStock: true },
  { id: "product-9", name: "Drumstick (6 seeds)", category: "vegetable", description: "Drumstick (moringa) seeds rich in nutrients and vitamins.", price: 24, image: "https://i.ibb.co/7x5dwHm7/Whats-App-Image-2025-12-25-at-1-06-53-PM-1.jpg", inStock: true },
  { id: "product-10", name: "Cowpea (10gms)", category: "vegetable", description: "Cowpea seeds suitable for tender pods and pulses.", price: 24, image: "https://i.ibb.co/ZRbmchyf/Whats-App-Image-2025-12-25-at-1-06-53-PM-2.jpg", inStock: true },

  { id: "product-11", name: "Dolichos (10 seeds)", category: "vegetable", description: "Dilichos bean seeds for vigorous climbing vegetable plants.", price: 24, image: "https://i.ibb.co/kVbXGVD1/Whats-App-Image-2025-12-25-at-1-06-53-PM-3.jpg", inStock: true },
  { id: "product-12", name: "Menthi (10gms)", category: "vegetable", description: "Fenugreek (menthi) seeds for aromatic leafy greens.", price: 24, image: "https://i.ibb.co/RkLzL3Br/Whats-App-Image-2025-12-25-at-1-06-53-PM.jpg", inStock: true },
  { id: "product-13", name: "Bajji Chilli (30 seeds)", category: "vegetable", description: "Chilli seeds with strong pungency and high productivity.", price: 24, image: "https://i.ibb.co/VW0z6NH5/Whats-App-Image-2025-12-25-at-1-06-54-PM-1.jpg", inStock: true },
  { id: "product-14", name: "Chilli (100 seeds)", category: "vegetable", description: "Chilli seeds suitable for green and dry chilli production.", price: 24, image: "https://i.ibb.co/RGgJzfY4/Whats-App-Image-2025-12-25-at-1-06-54-PM-2.jpg", inStock: true },
  { id: "product-15", name: "Coriander", category: "vegetable", description: "Coriander seeds for fragrant leaves and flavorful seeds.", price: 24, image: "https://i.ibb.co/x8FHp1f8/Whats-App-Image-2025-12-25-at-1-06-54-PM.jpg", inStock: true },
  { id: "product-16", name: "Tomato", category: "vegetable", description: "Tomato seeds producing juicy, firm, and uniform fruits.", price: 24, image: "https://i.ibb.co/DPwRSpqW/Whats-App-Image-2025-12-25-at-1-06-55-PM-1.jpg", inStock: true },
  { id: "product-17", name: "Parul White Brinjal (100 seeds)", category: "vegetable", description: "Brinjal seeds for glossy fruits and consistent yield.", price: 24, image: "https://i.ibb.co/JRF32hzw/Whats-App-Image-2025-12-25-at-1-06-55-PM-2.jpg", inStock: true },
  { id: "product-18", name: "Cauliflower (50 seeds)", category: "vegetable", description: "Cauliflower seeds producing compact white curds.", price: 24, image: "https://i.ibb.co/3Yhg86S3/Whats-App-Image-2025-12-25-at-1-06-55-PM.jpg", inStock: true },
  { id: "product-19", name: "Black Brinjal (100 seeds)", category: "vegetable", description: "High-yield brinjal seeds suitable for all seasons.", price: 24, image: "https://i.ibb.co/p6WYwZ0Y/Whats-App-Image-2025-12-25-at-1-06-56-PM-1.jpg", inStock: true },
  { id: "product-20", name: "Violet Brinjal (100 seeds)", category: "vegetable", description: "Disease-resistant brinjal seed variety.", price: 24, image: "https://i.ibb.co/MW4Zm96/Whats-App-Image-2025-12-25-at-1-06-56-PM-2.jpg", inStock: true },

  { id: "product-21", name: "Green Brinjal (100 seeds)", category: "vegetable", description: "Brinjal seeds with uniform fruit size and color.", price: 24, image: "https://i.ibb.co/NghD5C16/Whats-App-Image-2025-12-25-at-1-06-56-PM.jpg", inStock: true },
  { id: "product-22", name: "Carrot (100 seeds)", category: "vegetable", description: "Carrot seeds for sweet, crunchy, deep-orange roots.", price: 24, image: "https://i.ibb.co/pF3ZrhD/Whats-App-Image-2025-12-25-at-1-06-57-PM-1.jpg", inStock: true },
  { id: "product-23", name: "Purple Brinjal (100 seeds)", category: "vegetable", description: "Brinjal seeds adapted to Indian growing conditions.", price: 24, image: "https://i.ibb.co/t7wrqxr/Whats-App-Image-2025-12-25-at-1-06-57-PM.jpg", inStock: true },
  { id: "product-24", name: "Bitter Gourd (10 seeds)", category: "vegetable", description: "Bitter gourd seeds producing nutritious green vegetables.", price: 24, image: "https://i.ibb.co/JR92TrFc/Whats-App-Image-2025-12-25-at-1-06-58-PM-1.jpg", inStock: true },
  { id: "product-25", name: "Gongura (10gms)", category: "vegetable", description: "Gongura seeds used for tangy leafy greens.", price: 24, image: "https://i.ibb.co/BvN8tvV/Whats-App-Image-2025-12-25-at-1-06-58-PM-2.jpg", inStock: true },

  { id: "product-26", name: "Brinjal", category: "vegetable", description: "Brinjal seeds with excellent plant vigor.", price: 24, image: "https://i.ibb.co/7wKBtgk/Whats-App-Image-2025-12-25-at-1-06-58-PM.jpg", inStock: true },
  { id: "product-27", name: "Beetroot (50 seeds)", category: "vegetable", description: "Beetroot seeds for sweet, deep-red roots.", price: 24, image: "https://i.ibb.co/ycP9Fhk0/Whats-App-Image-2025-12-25-at-1-06-59-PM-1.jpg", inStock: true },
  // { id: "product-28", name: "Watermelon", category: "fruit", description: "Watermelon seeds with excellent sweetness and texture.", price: 24, image: "https://i.ibb.co/PGfKHFRB/Whats-App-Image-2025-12-25-at-1-06-59-PM-2.jpg", inStock: true },
  { id: "product-29", name: "RSNM-1 (5 seeds)", category: "vegetable", description: "High-quality hybrid vegetable seed variety RSNM-1.", price: 24, image: "https://i.ibb.co/qFRJF6R8/Whats-App-Image-2025-12-25-at-1-06-59-PM-3.jpg", inStock: true },
  { id: "product-30", name: "Ash Gourd (10 seeds)", category: "vegetable", description: "Ash gourd seeds producing large, long-lasting fruits.", price: 24, image: "https://i.ibb.co/fVZ8QKN8/Whats-App-Image-2025-12-25-at-1-06-59-PM.jpg", inStock: true },

  { id: "product-31", name: "Snake Gourd (5 seeds)", category: "vegetable", description: "Snake gourd seeds for long, tender vegetables.", price: 24, image: "https://i.ibb.co/LsvdXZw/Whats-App-Image-2025-12-25-at-1-07-00-PM.jpg", inStock: true },
  { id: "product-32", name: "Papaya (10 seeds)", category: "fruit", description: "Papaya seeds producing sweet, nutritious fruits.", price: 24, image: "https://i.ibb.co/R40MPJSb/Whats-App-Image-2025-12-25-at-1-07-01-PM-1.jpg", inStock: true },
  { id: "product-33", name: "Cucumber (20 seeds)", category: "vegetable", description: "Cucumber seeds for crisp, refreshing vegetables.", price: 24, image: "https://i.ibb.co/KjPDs3ct/Whats-App-Image-2025-12-25-at-1-07-01-PM-2.jpg", inStock: true },
  { id: "product-34", name: "Radish (10gms)", category: "vegetable", description: "Radish seeds producing fast-growing crunchy roots.", price: 24, image: "https://i.ibb.co/pvW8X7J4/Whats-App-Image-2025-12-25-at-1-07-01-PM.jpg", inStock: true },
  { id: "product-35", name: "Watermelon (10 seeds)", category: "fruit", description: "Watermelon seeds with uniform fruit size.", price: 24, image: "https://i.ibb.co/LzF6n5Gr/Whats-App-Image-2025-12-25-at-1-07-02-PM-1.jpg", inStock: true },

  { id: "product-36", name: "Cluster Beans", category: "vegetable", description: "Cluster bean seeds for tender, nutritious pods.", price: 24, image: "https://i.ibb.co/GvyxBwp4/Whats-App-Image-2025-12-25-at-1-07-02-PM.jpg", inStock: true },
  { id: "product-37", name: "Bitter Gourd", category: "vegetable", description: "Bitter gourd seeds with strong vine growth.", price: 24, image: "https://i.ibb.co/JW6RLgm2/Whats-App-Image-2025-12-25-at-1-07-03-PM-1.jpg", inStock: true },
  { id: "product-38", name: "Kanakambaram", category: "flower", description: "Kanakambaram leafy green seeds for home gardens.", price: 24, image: "https://i.ibb.co/YBJrNJgJ/Whats-App-Image-2025-12-25-at-1-07-03-PM-2.jpg", inStock: true },
  { id: "product-39", name: "Tomato (100 seeds)", category: "vegetable", description: "Tomato seeds suitable for fresh consumption and cooking.", price: 24, image: "https://i.ibb.co/gM4DFcHF/Whats-App-Image-2025-12-25-at-1-07-03-PM.jpg", inStock: true },
  { id: "product-40", name: "Bachhali (10gms)", category: "vegetable", description: "Bachhali leafy vegetable seeds rich in nutrients.", price: 24, image: "https://i.ibb.co/cXDkpx4h/Whats-App-Image-2025-12-25-at-1-07-04-PM-1.jpg", inStock: true },

  { id: "product-41", name: "Cherry Tomato", category: "vegetable", description: "Cherry tomato seeds producing sweet bite-sized fruits.", price: 24, image: "https://i.ibb.co/kst5Bsvn/Whats-App-Image-2025-12-25-at-1-07-04-PM-2.jpg", inStock: true },
  { id: "product-42", name: "Chukka Kura (10 gms)", category: "vegetable", description: "Chukka kura seeds for tangy, nutritious leafy greens.", price: 24, image: "https://i.ibb.co/cSWqWPJF/Whats-App-Image-2025-12-25-at-1-07-04-PM.jpg", inStock: true },
  { id: "product-43", name: "Thotakura (10gms)", category: "vegetable", description: "Thotakura (amaranthus) seeds for soft leafy vegetables.", price: 24, image: "https://i.ibb.co/FbgGb1Tm/Whats-App-Image-2025-12-25-at-1-07-05-PM-1.jpg", inStock: true },
  { id: "product-44", name: "Red Okra (20 seeds)", category: "vegetable", description: "Red okra seeds producing colorful, tender pods.", price: 24, image: "https://i.ibb.co/gFLGCpwy/Whats-App-Image-2025-12-25-at-1-07-05-PM-2.jpg", inStock: true },
  { id: "product-45", name: "Red Thotakura (10 gms)", category: "vegetable", description: "Red thotakura seeds for vibrant, nutritious leafy greens.", price: 24, image: "https://i.ibb.co/SXkbc8Ly/Whats-App-Image-2025-12-25-at-1-07-05-PM.jpg", inStock: true },
];


export const categories = [
  { id: 'all', name: 'All Seeds' },
  { id: 'vegetable', name: 'Vegetable Seeds' },
  { id: 'fruit', name: 'Fruit Seeds' },
  {id: 'flower', name: 'Flower Seeds'}
];
