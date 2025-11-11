export type Pet = {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  price: number;
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
    age: 3,
    price: 250,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Distemper', 'Parvovirus'],
      weightKg: 18.4,
      microchipId: null,
    },
    photo:
      'https://images.unsplash.com/photo-1583337130417-3346a1ee1d3c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Milo',
    species: 'Cat',
    breed: 'Siamese',
    age: 2,
    price: 180,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies'],
      weightKg: 5.2,
      microchipId: 'ABC123',
    },
    photo:
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Thumper',
    species: 'Rabbit',
    breed: 'Mini Lop',
    age: 1,
    price: 60,
    sold: false,
    medicalRecord: {
      vaccinations: ['Myxomatosis'],
      weightKg: 2.1,
      microchipId: null,
    },
    photo:
      'https://images.unsplash.com/photo-1558944351-c4e1826d8c98?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Charlie',
    species: 'Dog',
    breed: 'Labrador Retriever',
    age: 4,
    price: 300,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Distemper', 'Parvovirus'],
      weightKg: 28.6,
      microchipId: 'LAB456',
    },
    photo:
      'https://images.unsplash.com/photo-1557976603-915cd8a4c2d2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Luna',
    species: 'Cat',
    breed: 'Maine Coon',
    age: 5,
    price: 220,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Feline Distemper'],
      weightKg: 6.8,
      microchipId: null,
    },
    photo:
      'https://images.unsplash.com/photo-1618944159960-cd9a5d0e35c9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Oscar',
    species: 'Dog',
    breed: 'Beagle',
    age: 2,
    price: 200,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Parvovirus'],
      weightKg: 10.5,
      microchipId: 'BEA789',
    },
    photo:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'Clover',
    species: 'Rabbit',
    breed: 'Netherland Dwarf',
    age: 2,
    price: 55,
    sold: false,
    medicalRecord: {
      vaccinations: ['Myxomatosis'],
      weightKg: 1.5,
      microchipId: null,
    },
    photo:
      'https://images.unsplash.com/photo-1580745294858-5a2b9efbaf45?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Rocky',
    species: 'Dog',
    breed: 'German Shepherd',
    age: 6,
    price: 350,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Distemper', 'Parvovirus'],
      weightKg: 34.2,
      microchipId: 'GER321',
    },
    photo:
      'https://images.unsplash.com/photo-1583511655780-3b9c1f9d6d2c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    name: 'Willow',
    species: 'Cat',
    breed: 'Bengal',
    age: 1,
    price: 250,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies'],
      weightKg: 4.3,
      microchipId: null,
    },
    photo:
      'https://images.unsplash.com/photo-1595433707802-3b5e6f9b01b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    name: 'Hazel',
    species: 'Rabbit',
    breed: 'Flemish Giant',
    age: 4,
    price: 80,
    sold: false,
    medicalRecord: {
      vaccinations: ['Myxomatosis'],
      weightKg: 6.4,
      microchipId: 'RAB654',
    },
    photo:
      'https://images.unsplash.com/photo-1588940061103-1c8a0643cdd9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    price: 320,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Distemper', 'Parvovirus'],
      weightKg: 30.1,
      microchipId: null,
    },
    photo:
      'https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    name: 'Zara',
    species: 'Cat',
    breed: 'Persian',
    age: 7,
    price: 200,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Feline Distemper'],
      weightKg: 5.9,
      microchipId: 'PER852',
    },
    photo:
      'https://images.unsplash.com/photo-1601758062953-2c9d4c2b80b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 13,
    name: 'Max',
    species: 'Dog',
    breed: 'French Bulldog',
    age: 2,
    price: 270,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Parvovirus'],
      weightKg: 11.7,
      microchipId: null,
    },
    photo:
      'https://images.unsplash.com/photo-1583512603702-6c6ad9e3f6c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 14,
    name: 'Daisy',
    species: 'Rabbit',
    breed: 'English Angora',
    age: 3,
    price: 70,
    sold: false,
    medicalRecord: {
      vaccinations: ['Myxomatosis'],
      weightKg: 3.2,
      microchipId: null,
    },
    photo:
      'https://images.unsplash.com/photo-1618824744141-b2c17868b8a3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 15,
    name: 'Simba',
    species: 'Cat',
    breed: 'Ragdoll',
    age: 4,
    price: 240,
    sold: false,
    medicalRecord: {
      vaccinations: ['Rabies', 'Feline Distemper'],
      weightKg: 6.1,
      microchipId: 'RAG963',
    },
    photo:
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80',
  },
];
