export namespace StaticDataNamespace {
  export class MusicalStaticData {
    musicClassName: string = '';
    Instruments = [
      { isSelected: false, value: 'Singing' },
      { isSelected: false, value: 'Piano' },
      { isSelected: false, value: 'Guitar' },
      { isSelected: false, value: 'Drums' },
      { isSelected: false, value: 'Flute' },
      { isSelected: false, value: 'More +' },
    ];

    Experience = [
      { isSelected: false, value: '0-3' },
      { isSelected: false, value: '3-5' },
      { isSelected: false, value: '5-10' },
      { isSelected: false, value: '10-15' },
      { isSelected: false, value: '15+' },
    ];

    Students = [
      { isSelected: false, value: '0-10' },
      { isSelected: false, value: '10-25' },
      { isSelected: false, value: '25-50' },
      { isSelected: false, value: '50+' },
    ];

    ModeOfTeaching = [
      { isSelected: false, value: 'Online' },
      { isSelected: false, value: 'Offline' },
    ];
  }
  export enum MusicalDetailsKeys {
    INSTRUMENTS = 'Instruments',
    EXPERIENCE = 'Experience',
    STUDENTS = 'Students',
    MODE_OF_TEACHING = 'ModeOfTeaching',
  }
}

export const musicalDataInstance = new StaticDataNamespace.MusicalStaticData();
