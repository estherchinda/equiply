export interface User {
  // Define the properties of a user, for example:
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  phone: string;
  farmType: string;
  farmSize: string;
  experience: string;
  username: string;
}

export const userData: User[] = [
  {
    "id": 1,
    "firstName": "Chinedu",
    "lastName": "Okoro",
    "email": "chinedu.okoro@example.com",
    "location": "Enugu, Nigeria",
    "phone": "+2348034567890",
    "farmType": "Cassava & Yam",
    "farmSize": "3.5 hectares",
    "experience": "7 years",
    "username": "chineduokoro",
  },
  {
    "id": 2,
    "firstName": "Grace",
    "lastName": "Yakubu",
    "email": "grace.yakubu@example.com",
    "location": "Kaduna, Nigeria",
    "phone": "+2348123456789",
    "farmType": "Maize & Groundnut",
    "farmSize": "5 hectares",
    "experience": "10 years",
    "username": "graceyakubu",
  },
  {
    "id": 3,
    "firstName": "Ifeanyi",
    "lastName": "Nwankwo",
    "email": "ifeanyi.nwankwo@example.com",
    "location": "Owerri, Nigeria",
    "phone": "+2347012345678",
    "farmType": "Vegetables & Tomatoes",
    "farmSize": "2 hectares",
    "experience": "4 years",
    "username": "ifeanyinwankwo",
  },
  {
    "id": 4,
    "firstName": "Zainab",
    "lastName": "Abdullahi",
    "email": "zainab.abdullahi@example.com",
    "location": "Sokoto, Nigeria",
    "phone": "+2349098765432",
    "farmType": "Millet & Sorghum",
    "farmSize": "6 hectares",
    "experience": "12 years",
    "username": "zainababudu",
  },
  {
    "id": 5,
    "firstName": "Tunde",
    "lastName": "Balogun",
    "email": "tunde.balogun@example.com",
    "location": "Ibadan, Nigeria",
    "phone": "+2348023344556",
    "farmType": "Poultry & Plantain",
    "farmSize": "4 hectares",
    "experience": "6 years",
    "username": "tundebalogun",
  }
];
