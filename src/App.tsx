
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FeatureFlagProvider } from "./contexts/FeatureFlagContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { FeatureProtectedRoute } from "./components/feature-flags/FeatureProtectedRoute";
import { UpdatedResponsiveDSVIAdminLayout } from "./components/layouts/UpdatedResponsiveDSVIAdminLayout";
import { UpdatedResponsiveSchoolAdminLayout } from "./components/layouts/UpdatedResponsiveSchoolAdminLayout";
import { PublicSchoolLayout } from "./components/layouts/PublicSchoolLayout";
import { SchoolPageDisplay } from "./components/public/SchoolPageDisplay";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

// Public Pages
import AboutPage from "./pages/public/AboutPage";
import TeamPage from "./pages/public/TeamPage";
import HowItWorksPage from "./pages/public/HowItWorksPage";
import PackagesPage from "./pages/public/PackagesPage";
import TestimonialsPage from "./pages/public/TestimonialsPage";
import ContactPage from "./pages/public/ContactPage";
import ThankYouPage from "./pages/public/ThankYouPage";
import FAQPage from "./pages/public/FAQPage";
import RegisterPage from "./pages/public/RegisterPage";
import TodoTrackerPage from "./pages/public/TodoTrackerPage";
import ClientApprovalPage from "./pages/public/ClientApprovalPage";
import DebugSupabasePage from "./pages/public/DebugSupabasePage";
import DSVIAdminDashboard from "./pages/dsvi-admin/DSVIAdminDashboard";
import SchoolsPage from "./pages/dsvi-admin/SchoolsPage";
import SchoolRequestsPage from "./pages/dsvi-admin/SchoolRequestsPage";
import SchoolContentPage from "./pages/dsvi-admin/SchoolContentPage";
import EditPagePage from "./pages/dsvi-admin/EditPagePage";
import SchoolSettingsPage from "./pages/dsvi-admin/SchoolSettingsPage";
import SubscriptionTrackerPage from "./pages/dsvi-admin/SubscriptionTrackerPage";
import MessagingPanelPage from "./pages/dsvi-admin/MessagingPanelPage";
import SchoolAdminDashboard from "./pages/school-admin/SchoolAdminDashboard";
import EditSchoolPagePage from "./pages/school-admin/EditSchoolPagePage";
import SchoolBrandingPageAdmin from "./pages/school-admin/SchoolBrandingPageAdmin";
import SchoolAdminMessagingPage from "./pages/school-admin/SchoolAdminMessagingPage";
import DeploymentManagePage from "./pages/deploy/DeploymentManagePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <FeatureFlagProvider>
          <AuthProvider>
            <ThemeProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Public Website Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/todo-tracker" element={<TodoTrackerPage />} />
            <Route path="/client-approval" element={<ClientApprovalPage />} />
            <Route path="/debug-supabase" element={<DebugSupabasePage />} />
            
            {/* DSVI Admin Routes */}
            <Route 
              path="/dsvi-admin" 
              element={
                <ProtectedRoute roles={['DSVI_ADMIN']}>
                  <UpdatedResponsiveDSVIAdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={
                <FeatureProtectedRoute feature="dashboard">
                  <DSVIAdminDashboard />
                </FeatureProtectedRoute>
              } />
              <Route path="dashboard" element={
                <FeatureProtectedRoute feature="dashboard">
                  <DSVIAdminDashboard />
                </FeatureProtectedRoute>
              } />
              <Route path="schools" element={
                <FeatureProtectedRoute feature="schools">
                  <SchoolsPage />
                </FeatureProtectedRoute>
              } />
              <Route path="requests" element={
                <FeatureProtectedRoute feature="requests">
                  <SchoolRequestsPage />
                </FeatureProtectedRoute>
              } />
              <Route path="subscriptions" element={
                <FeatureProtectedRoute feature="subscriptions">
                  <SubscriptionTrackerPage />
                </FeatureProtectedRoute>
              } />
              <Route path="messaging" element={
                <FeatureProtectedRoute feature="messaging">
                  <MessagingPanelPage />
                </FeatureProtectedRoute>
              } />
              <Route path="schools/:schoolId/content" element={
                <FeatureProtectedRoute feature="schools">
                  <SchoolContentPage />
                </FeatureProtectedRoute>
              } />
              <Route path="schools/:schoolId/pages/:pageType/edit" element={
                <FeatureProtectedRoute feature="schools">
                  <EditPagePage />
                </FeatureProtectedRoute>
              } />
              <Route path="schools/:schoolId/settings" element={
                <FeatureProtectedRoute feature="schools">
                  <SchoolSettingsPage />
                </FeatureProtectedRoute>
              } />
            </Route>
            
            {/* Deployment Management Route - Feature Flag System */}
            <Route 
              path="/deploy" 
              element={
                <ProtectedRoute roles={['DSVI_ADMIN']}>
                  <DeploymentManagePage />
                </ProtectedRoute>
              } 
            />
            
            {/* School Admin Routes */}
            <Route 
              path="/school-admin" 
              element={
                <ProtectedRoute roles={['SCHOOL_ADMIN']}>
                  <UpdatedResponsiveSchoolAdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<SchoolAdminDashboard />} />
              <Route path="pages/:pageType/edit" element={<EditSchoolPagePage />} />
              <Route path="branding" element={<SchoolBrandingPageAdmin />} />
              <Route path="messaging" element={<SchoolAdminMessagingPage />} />
            </Route>
            
            {/* Public School Website Routes */}
            <Route path="/s/:schoolSlug" element={<PublicSchoolLayout />}>
              <Route index element={<SchoolPageDisplay />} />
              <Route path=":pageType" element={<SchoolPageDisplay />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </FeatureFlagProvider>
    </TooltipProvider>
  </HelmetProvider>
</QueryClientProvider>
);

export default App;
