import React, { useState, createContext, useContext } from 'react';
import { Place, User, Role, Report } from '../types';
const SEED_PLACES: Place[] = [
{
  id: 'p1',
  name: 'City Center Hospital',
  categoryId: 'hospital-medical',
  addedBy: 'Aarav S.',
  verifiedBy: 'Admin Sarah',
  verificationStatus: 'Verified',
  distance: '1.2 km',
  eta: '5 min drive',
  isOpen: true,
  rating: 4.8,
  reviewCount: 124,
  reportCount: 0,
  lat: 28.6139,
  lng: 77.209,
  address: '123 Main Medical Blvd, City Center',
  description: '24/7 Emergency and general hospital with trauma center.',
  timeline: [
  {
    status: 'Pending',
    date: '2023-10-01'
  },
  {
    status: 'Verified',
    date: '2023-10-02',
    note: 'Verified via official directory'
  }]

},
{
  id: 'p2',
  name: 'Fresh Water Kiosk',
  categoryId: 'drinking-water',
  addedBy: 'Priya M.',
  verifiedBy: null,
  verificationStatus: 'Pending',
  distance: '0.4 km',
  eta: '5 min walk',
  isOpen: true,
  rating: 0,
  reviewCount: 0,
  reportCount: 0,
  lat: 28.6145,
  lng: 77.21,
  address: 'Near Metro Station Gate 2',
  description: 'Free RO drinking water provided by NGO.',
  timeline: [
  {
    status: 'Pending',
    date: '2023-10-15'
  }]

},
{
  id: 'p3',
  name: 'Highway Fuel & EV',
  categoryId: 'fuel-station',
  addedBy: 'John D.',
  verifiedBy: 'Mod Mike',
  verificationStatus: 'Verified',
  distance: '3.5 km',
  eta: '10 min drive',
  isOpen: true,
  rating: 4.2,
  reviewCount: 45,
  reportCount: 1,
  lat: 28.62,
  lng: 77.22,
  address: 'NH-44 Highway Stop',
  description: 'Petrol, Diesel, and 2 Fast EV Charging stations available.',
  timeline: [
  {
    status: 'Pending',
    date: '2023-09-20'
  },
  {
    status: 'Verified',
    date: '2023-09-21'
  }]

}];

interface ResourceContextType {
  places: Place[];
  users: User[];
  reports: Report[];
  currentUser: User | null;
  currentRole: Role;
  setCurrentRole: (role: Role) => void;
}
const ResourceContext = createContext<ResourceContextType | undefined>(
  undefined
);
export function ResourceProvider({ children }: {children: React.ReactNode;}) {
  const [places, setPlaces] = useState<Place[]>(SEED_PLACES);
  const [users, setUsers] = useState<User[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const [currentRole, setCurrentRole] = useState<Role>('User');
  const currentUser: User = {
    id: 'u1',
    name: 'Demo User',
    role: currentRole
  };
  return (
    <ResourceContext.Provider
      value={{
        places,
        users,
        reports,
        currentUser,
        currentRole,
        setCurrentRole
      }}>
      
      {children}
    </ResourceContext.Provider>);

}
export function useResource() {
  const context = useContext(ResourceContext);
  if (context === undefined) {
    throw new Error('useResource must be used within a ResourceProvider');
  }
  return context;
}