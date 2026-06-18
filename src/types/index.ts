export type VerificationStatus = 'Pending' | 'Verified' | 'Removed';
export type Role = 'User' | 'Admin' | 'Moderator';

export interface Place {
  id: string;
  name: string;
  categoryId: string;
  addedBy: string;
  verifiedBy: string | null;
  verificationStatus: VerificationStatus;
  distance: string;
  eta: string;
  isOpen: boolean;
  rating: number;
  reviewCount: number;
  reportCount: number;
  lat: number;
  lng: number;
  address: string;
  description: string;
  timeline: {status: VerificationStatus;date: string;note?: string;}[];
}

export interface User {
  id: string;
  name: string;
  role: Role;
  avatar?: string;
}

export interface Report {
  id: string;
  placeId: string;
  reportedBy: string;
  type: 'Fake' | 'Wrong Location' | 'Closed' | 'Duplicate' | 'Other';
  details: string;
  date: string;
  status: 'Pending' | 'Resolved' | 'Dismissed';
}