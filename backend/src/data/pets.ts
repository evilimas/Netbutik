export type Pet = {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  price: number;
  description: string;
  medicalRecord: MedicalRecord;
  photo: string;
  sold: boolean;
};
type MedicalRecord = {
  vaccinations: string[];
  weightKg: number;
  microchipId: string | null;
};

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Bella',
    species: 'Dog',
    breed: 'Border Collie',
    description: 'A friendly and energetic dog.',
    age: 3,
    price: 250,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Distemper', 'Parvovirus'],
      weightKg: 18.4,
      microchipId: null,
    },
    photo:
      'https://images.pexels.com/photos/3523317/pexels-photo-3523317.jpeg ',
  },
  {
    id: 2,
    name: 'Milo',
    species: 'Cat',
    breed: 'Siamese',
    description: 'A curious and playful cat.',
    age: 2,
    price: 180,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies'],
      weightKg: 5.2,
      microchipId: 'ABC123',
    },
    photo: 'https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg',
  },
  {
    id: 3,
    name: 'Thumper',
    species: 'Rabbit',
    breed: 'Mini Lop',
    description: 'A gentle and cuddly rabbit.',
    age: 1,
    price: 60,
    sold: false,
    medicalRecord: {
      vaccinations: ['Myxomatosis'],
      weightKg: 2.1,
      microchipId: null,
    },
    photo: 'https://images.pexels.com/photos/104373/pexels-photo-104373.jpeg',
  },
  {
    id: 4,
    name: 'Charlie',
    species: 'Dog',
    breed: 'Labrador Retriever',
    description: 'A loyal and friendly companion.',
    age: 4,
    price: 300,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Distemper', 'Parvovirus'],
      weightKg: 28.6,
      microchipId: 'LAB456',
    },
    photo: 'https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg',
  },
  {
    id: 5,
    name: 'Luna',
    species: 'Cat',
    breed: 'Maine Coon',
    description: 'A large and sociable cat.',
    age: 5,
    price: 220,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Feline Distemper'],
      weightKg: 6.8,
      microchipId: null,
    },
    photo: 'https://images.pexels.com/photos/2518134/pexels-photo-2518134.jpeg',
  },
  {
    id: 6,
    name: 'Oscar',
    species: 'Dog',
    breed: 'Beagle',
    description: 'A curious and playful dog.',
    age: 2,
    price: 200,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Parvovirus'],
      weightKg: 10.5,
      microchipId: 'BEA789',
    },
    photo: 'https://images.pexels.com/photos/38010/pexels-photo-38010.jpeg',
  },
  {
    id: 7,
    name: 'Clover',
    species: 'Rabbit',
    breed: 'Netherland Dwarf',
    description: 'A small and energetic rabbit.',
    age: 2,
    price: 55,
    sold: false,
    medicalRecord: {
      vaccinations: ['Myxomatosis'],
      weightKg: 1.5,
      microchipId: null,
    },
    photo: 'https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg',
  },
  {
    id: 8,
    name: 'Rocky',
    species: 'Dog',
    breed: 'German Shepherd',
    description: 'A strong and intelligent dog.',
    age: 6,
    price: 350,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Distemper', 'Parvovirus'],
      weightKg: 34.2,
      microchipId: 'GER321',
    },
    photo:
      'https://images.pexels.com/photos/17786596/pexels-photo-17786596.jpeg',
  },
  {
    id: 9,
    name: 'Willow',
    species: 'Cat',
    breed: 'Bengal',
    description: 'An active and affectionate cat.',
    age: 1,
    price: 250,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies'],
      weightKg: 4.3,
      microchipId: null,
    },
    photo:
      'https://images.pexels.com/photos/10908498/pexels-photo-10908498.jpeg',
  },
  {
    id: 10,
    name: 'Hazel',
    species: 'Rabbit',
    breed: 'Flemish Giant',
    description: 'A gentle giant of a rabbit.',
    age: 4,
    price: 80,
    sold: false,
    medicalRecord: {
      vaccinations: ['Myxomatosis'],
      weightKg: 6.4,
      microchipId: 'RAB654',
    },
    photo: 'https://images.pexels.com/photos/583676/pexels-photo-583676.jpeg',
  },
  {
    id: 11,
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    description: 'A friendly and devoted dog.',
    age: 3,
    price: 320,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Distemper', 'Parvovirus'],
      weightKg: 30.1,
      microchipId: null,
    },
    photo: 'https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg',
  },
  {
    id: 12,
    name: 'Zara',
    species: 'Cat',
    breed: 'Persian',
    description: 'A calm and loving cat.',
    age: 7,
    price: 200,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Feline Distemper'],
      weightKg: 5.9,
      microchipId: 'PER852',
    },
    photo: 'https://images.pexels.com/photos/1644767/pexels-photo-1644767.jpeg',
  },
  {
    id: 13,
    name: 'Max',
    species: 'Dog',
    breed: 'French Bulldog',
    description: 'A charming and playful dog.',
    age: 2,
    price: 270,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Parvovirus'],
      weightKg: 11.7,
      microchipId: null,
    },
    photo:
      'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg',
  },
  {
    id: 14,
    name: 'Daisy',
    species: 'Rabbit',
    breed: 'English Angora',
    description: 'A fluffy and affectionate rabbit.',
    age: 3,
    price: 70,
    sold: false,
    medicalRecord: {
      vaccinations: ['Myxomatosis'],
      weightKg: 3.2,
      microchipId: null,
    },
    photo: 'https://images.pexels.com/photos/1931383/pexels-photo-1931383.jpeg',
  },
  {
    id: 15,
    name: 'Simba',
    species: 'Cat',
    breed: 'Ragdoll',
    description: 'A gentle and sociable cat.',
    age: 4,
    price: 240,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Feline Distemper'],
      weightKg: 6.1,
      microchipId: 'RAG963',
    },
    photo: 'https://images.pexels.com/photos/7106228/pexels-photo-7106228.jpeg',
  },
];
