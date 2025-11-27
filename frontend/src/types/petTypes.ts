type Pet = {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  price: number;
  newPrice?: number;
  description: string;
  medicalRecord: MedicalRecord;
  photo: string;
  sold: boolean;
  onSale?: boolean;
};
type MedicalRecord = {
  vaccinations: string[];
  weightKg: number;
  microchipId: string | null;
};

type PetQ = {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  price: number;
  newPrice?: number;
  description: string;
  photo: string;
  sold: boolean;
  onSale?: boolean;
  vaccinations: string;
  weightKg: number;
  microchipId: string | null;
};

type PetFilter = {
  species?: string;
  breed?: string;
  search?: string;
};

export type { Pet, MedicalRecord, PetQ, PetFilter };
