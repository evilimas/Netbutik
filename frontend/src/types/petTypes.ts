type Pet = {
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

export type { Pet, MedicalRecord };
