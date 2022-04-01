import { createSlice } from '@reduxjs/toolkit';

const building = createSlice({
  name: 'building',
  initialState: {
    data: [
      {
        id: 1,
        name: 'Campus X',
        image: 'img',
        adress: '1 rue de la gare',
        description: 'This is a building',
        rooms: [
          {
            id: 1,
            name: 'Room 1',
            description: 'This is room 1',
          },
          {
            id: 2,
            name: 'Room 2',
            description: 'This room 2',
          },
        ],
        offices: [
          {
            id: 1,
            name: 'Office 1',
            description: 'This is an office',
          },
        ],
        floors: [
          {
            id: 1,
            name: 'Floor 1',
            image: 'img',
            description: 'This is a floor',
          },
        ],
        devices: [
          {
            id: 1,
            name: 'Device 1',
            description: 'This is a device',
          },
          {
            id: 2,
            name: 'Device 2',
            description: 'This is a device',
          },
          {
            id: 3,
            name: 'Device 3',
            description: 'This is a device',
          },
          {
            id: 4,
            name: 'Device 4',
            description: 'This is a device',
          }
        ],
      },
    ],
  },
});

export default building.reducer;
