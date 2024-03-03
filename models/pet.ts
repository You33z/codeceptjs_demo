export enum Status {
    AVAILABLE = 'available',
    PENDING = 'pending',
    SOLD = 'sold'
  }

export interface Pet {
    id: number;
    category: {
        id: number;
        name: string;
    };
    name: string;
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
    status: Status;
}


export const dog: Pet = {
    id: 0,
    category: {
      id: 0,
      name: 'string'
    },
    name: 'doggie',
    photoUrls: [
      'string'
    ],
    tags: [
      {
        id: 0,
        name: 'string'
      }
    ],
    status: Status.AVAILABLE
  }

  export interface Order {
    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: string;
    complete: boolean;
}

  export const order = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: new Date().toISOString(),
    status: "placed",
    complete: true
  }

  export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
}

  export const user: User = {
    "id": 0,
    "username": "dogo",
    "firstName": "dogi",
    "lastName": "doga",
    "email": "dogo@doga.fr",
    "password": "string",
    "phone": "0607080910",
    "userStatus": 0
  }

  

  