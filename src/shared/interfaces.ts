export interface Speaker {
  name: string;
  nameEn: string;
  description: string;
  image: string;
  track: Track;
  company?: Company;
  sns: {
    github?: string;
    twitter?: string;
    facebook?: string;
    link?: string;
  },
}

export interface Company {
  name: string;
  link: string;
  sponsor?: Sponsor;
}

export interface Sponsor {
  grade: SponsorGrade;
}

export enum SponsorGrade {
  Diamond = 'Diamond',
  Platinum = 'Platinum',
  Gold = 'Gold',
  ETC = 'ETC',
}

export interface Track {
  type: TrackType;
  order: number;
  title: string;
  description: string;
}

export enum TrackType {
  A = 'A',
  B = 'B',
}
