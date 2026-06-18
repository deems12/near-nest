import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet } from
'react-router-dom';
import { ResourceProvider } from './context/ResourceContext';
import { PhoneFrame } from './components/layout/PhoneFrame';
import { UserBottomNav } from './components/layout/UserBottomNav';
import { ScreenPlaceholder } from './components/common/ScreenPlaceholder';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Auth Pages
import { Splash } from './pages/auth/Splash';
import { Welcome } from './pages/auth/Welcome';
import { Onboarding } from './pages/auth/Onboarding';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';
import { Terms } from './pages/auth/Terms';
import { AdminLogin } from './pages/auth/AdminLogin';
import { ModeratorLogin } from './pages/auth/ModeratorLogin';
// User Pages
import { HomeMap } from './pages/user/HomeMap';
import { HomeList } from './pages/user/HomeList';
import { Search } from './pages/user/Search';
import { CategoryScreen } from './pages/user/CategoryScreen';
import { PlaceDetail } from './pages/user/PlaceDetail';
import { AddPlace } from './pages/user/AddPlace';
import { Profile } from './pages/user/Profile';
import { Settings } from './pages/user/Settings';
import { ReportPlace } from './pages/user/ReportPlace';
import { NavigateConfirm } from './pages/user/NavigateConfirm';
import { RouteGuidance } from './pages/user/RouteGuidance';
import { EditPlace } from './pages/user/EditPlace';
import { DeletePlaceConfirm } from './pages/user/DeletePlaceConfirm';
import { Feedback } from './pages/user/Feedback';
import { EditProfile } from './pages/user/EditProfile';
import { About } from './pages/user/About';
import { Help } from './pages/user/Help';
import { FAQ } from './pages/user/FAQ';
import { Contact } from './pages/user/Contact';
import { LogoutConfirm } from './pages/user/LogoutConfirm';
import { Sort } from './pages/user/Sort';
import { MyAddedPlaces } from './pages/user/MyAddedPlaces';
import { Reviews } from './pages/user/Reviews';
import { AddReview } from './pages/user/AddReview';
import { PlacePhotos } from './pages/user/PlacePhotos';
import { Filter } from './pages/user/Filter';
import { Favorites } from './pages/user/Favorites';
import { Notifications } from './pages/user/Notifications';
import { ChangePassword } from './pages/user/ChangePassword';
import { PrivacySettings } from './pages/user/PrivacySettings';
import { NotificationSettings } from './pages/user/NotificationSettings';
import { LocationPermission } from './pages/user/LocationPermission';
// Emergency Pages
import { EmergencyDashboard } from './pages/emergency/EmergencyDashboard';
import { EmergencyRoute } from './pages/emergency/EmergencyRoute';
import { EmergencyCall } from './pages/emergency/EmergencyCall';
import { EmergencySuccess } from './pages/emergency/EmergencySuccess';
// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminPlaces } from './pages/admin/AdminPlaces';
import { AdminCategories } from './pages/admin/AdminCategories';
import { AdminPlaceDetail } from './pages/admin/AdminPlaceDetail';
import { ManageUsers } from './pages/admin/ManageUsers';
import { ReportsDashboard } from './pages/admin/ReportsDashboard';
import { VerifyPlace } from './pages/admin/VerifyPlace';
import { RejectionReason } from './pages/admin/RejectionReason';
import { UserDetail } from './pages/admin/UserDetail';
import { ManageModerators } from './pages/admin/ManageModerators';
import { ModeratorDetail } from './pages/admin/ModeratorDetail';
// Moderator Pages
import { ModeratorDashboard } from './pages/moderator/ModeratorDashboard';
import { ModeratorTasks } from './pages/moderator/ModeratorTasks';
import { TaskDetail } from './pages/moderator/TaskDetail';
import { ApprovePlace } from './pages/moderator/ApprovePlace';
import { RejectPlace } from './pages/moderator/RejectPlace';
// System Pages
import { NoInternet } from './pages/system/NoInternet';
import { GpsDisabled } from './pages/system/GpsDisabled';
import { ErrorPopup } from './pages/system/ErrorPopup';
import { NotFound } from './pages/system/NotFound';
import { LocationPermissionDenied } from './pages/system/LocationPermissionDenied';
import { Loading } from './pages/system/Loading';
import { SuccessPopup } from './pages/system/SuccessPopup';
import { LandingPage } from './pages/LandingPage';
// Layouts
function UserLayout() {
  return (
    <div className="flex flex-col h-full w-full relative">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Outlet />
      </div>
      <UserBottomNav />
    </div>);

}
function AdminLayout() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full w-full bg-slate-50">
      <div className="h-14 bg-slate-900 text-white flex items-center px-4 justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="p-1.5 -ml-1.5 text-white hover:bg-slate-700 rounded-lg transition-colors"
            title="Logout to Login">
            
            <LogOut className="w-5 h-5" />
          </button>
          <span className="font-bold tracking-wide">
            NEAR NEST <span className="text-blue-400 font-normal">Admin</span>
          </span>
        </div>
        <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Outlet />
      </div>
    </div>);

}
function ModeratorLayout() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full w-full bg-slate-50">
      <div className="h-14 bg-indigo-900 text-white flex items-center px-4 justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="p-1.5 -ml-1.5 text-white hover:bg-indigo-700 rounded-lg transition-colors"
            title="Logout to Login">
            
            <LogOut className="w-5 h-5" />
          </button>
          <span className="font-bold tracking-wide">
            NEAR NEST <span className="text-indigo-300 font-normal">Mod</span>
          </span>
        </div>
        <div className="w-8 h-8 bg-indigo-700 rounded-full"></div>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Outlet />
      </div>
    </div>);

}
export function App() {
  return (
    <ResourceProvider>
      <BrowserRouter>
        <div className="min-h-screen w-full bg-gray-100">
          <Routes>
            <Route path="/website" element={<LandingPage />} />
            <Route path="/" element={<Navigate to="/welcome" replace />} />

            {/* AUTH MODULE */}
            <Route path="/splash" element={<Splash />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/onboarding/1" element={<Onboarding />} />
            <Route path="/onboarding/2" element={<Onboarding />} />
            <Route path="/onboarding/3" element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/moderator-login" element={<ModeratorLogin />} />

            {/* USER MODULE */}
            <Route path="/user" element={<UserLayout />}>
              <Route path="home" element={<HomeMap />} />
              <Route path="home/list" element={<HomeList />} />
              <Route path="search" element={<Search />} />
              <Route path="search/suggestions" element={<Search />} />
              <Route path="search/results" element={<Search />} />
              <Route path="filter" element={<Filter />} />
              <Route path="sort" element={<Sort />} />
              <Route path="category/:id" element={<CategoryScreen />} />
              <Route path="nearby/map" element={<HomeMap />} />
              <Route path="nearby/list" element={<HomeList />} />
              <Route path="place/:id" element={<PlaceDetail />} />
              <Route path="place/:id/photos" element={<PlacePhotos />} />
              <Route path="place/:id/reviews" element={<Reviews />} />
              <Route path="place/:id/add-review" element={<AddReview />} />
              <Route
                path="navigate/confirm/:id"
                element={<NavigateConfirm />} />
              
              <Route path="navigate/route/:id" element={<RouteGuidance />} />
              <Route path="add-place" element={<AddPlace />} />
              <Route path="add-place/category" element={<AddPlace />} />
              <Route path="add-place/location" element={<AddPlace />} />
              <Route path="add-place/hours" element={<AddPlace />} />
              <Route path="add-place/photo" element={<AddPlace />} />
              <Route path="add-place/preview" element={<AddPlace />} />
              <Route path="add-place/success" element={<AddPlace />} />
              <Route path="my-places" element={<MyAddedPlaces />} />
              <Route path="edit-place/:id" element={<EditPlace />} />
              <Route path="delete-place/:id" element={<DeletePlaceConfirm />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="saved" element={<Favorites />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="report/:id" element={<ReportPlace />} />
              <Route path="report/:id/type" element={<ReportPlace />} />
              <Route path="report/:id/details" element={<ReportPlace />} />
              <Route path="report/success" element={<ReportPlace />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profile/edit" element={<EditProfile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="settings/password" element={<ChangePassword />} />
              <Route path="settings/privacy" element={<PrivacySettings />} />
              <Route
                path="settings/location"
                element={<LocationPermission />} />
              
              <Route
                path="settings/notifications"
                element={<NotificationSettings />} />
              
              <Route path="about" element={<About />} />
              <Route path="help" element={<Help />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="contact" element={<Contact />} />
              <Route path="logout" element={<LogoutConfirm />} />
            </Route>

            {/* EMERGENCY MODULE */}
            <Route path="/emergency" element={<UserLayout />}>
              <Route index element={<EmergencyDashboard />} />
              <Route path="category" element={<EmergencyDashboard />} />
              <Route path="hospital" element={<EmergencyDashboard />} />
              <Route path="police" element={<EmergencyDashboard />} />
              <Route path="fire" element={<EmergencyDashboard />} />
              <Route path="shelter" element={<EmergencyDashboard />} />
              <Route path="pharmacy" element={<EmergencyDashboard />} />
              <Route path="route/:id" element={<EmergencyRoute />} />
              <Route path="call/:id" element={<EmergencyCall />} />
              <Route path="success" element={<EmergencySuccess />} />
            </Route>

            {/* ADMIN MODULE */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="places" element={<AdminPlaces />} />
              <Route path="places/pending" element={<AdminPlaces />} />
              <Route path="places/verified" element={<AdminPlaces />} />
              <Route path="places/reported" element={<AdminPlaces />} />
              <Route path="places/removed" element={<AdminPlaces />} />
              <Route path="place/:id" element={<AdminPlaceDetail />} />
              <Route path="verify/:id" element={<VerifyPlace />} />
              <Route path="verify/:id/reject" element={<RejectionReason />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="user/:id" element={<UserDetail />} />
              <Route path="moderators" element={<ManageModerators />} />
              <Route path="moderator/:id" element={<ModeratorDetail />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="reports" element={<ReportsDashboard />} />
              <Route path="reports/category" element={<ScreenPlaceholder />} />
              <Route
                path="reports/verified-vs-pending"
                element={<ScreenPlaceholder />} />
              
              <Route
                path="reports/most-reported"
                element={<ScreenPlaceholder />} />
              
              <Route
                path="reports/most-searched"
                element={<ScreenPlaceholder />} />
              
              <Route path="reviews" element={<ScreenPlaceholder />} />
              <Route path="announcements" element={<ScreenPlaceholder />} />
              <Route
                path="push-notifications"
                element={<ScreenPlaceholder />} />
              
              <Route path="settings" element={<ScreenPlaceholder />} />
            </Route>

            {/* MODERATOR MODULE */}
            <Route path="/moderator" element={<ModeratorLayout />}>
              <Route path="dashboard" element={<ModeratorDashboard />} />
              <Route path="tasks" element={<ModeratorTasks />} />
              <Route path="task/:id" element={<TaskDetail />} />
              <Route path="approve/:id" element={<ApprovePlace />} />
              <Route path="reject/:id" element={<RejectPlace />} />
              <Route path="comments/:id" element={<ScreenPlaceholder />} />
              <Route path="history" element={<ScreenPlaceholder />} />
              <Route path="reports" element={<ScreenPlaceholder />} />
              <Route path="notifications" element={<ScreenPlaceholder />} />
              <Route path="profile" element={<ScreenPlaceholder />} />
              <Route path="settings" element={<ScreenPlaceholder />} />
            </Route>

            {/* SYSTEM MODULE */}
            <Route path="/system/no-internet" element={<NoInternet />} />
            <Route path="/system/no-gps" element={<GpsDisabled />} />
            <Route
              path="/system/no-permission"
              element={<LocationPermissionDenied />} />
            
            <Route path="/system/loading" element={<Loading />} />
            <Route path="/system/error" element={<ErrorPopup />} />
            <Route path="/system/success" element={<SuccessPopup />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ResourceProvider>);

}