import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

// components
import PrivateRoute from './PrivateRoute';
import Root from './Root';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/authNew/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const SignInSignUp = React.lazy(() => import('../pages/auth/SignInSignUp'));
const LockScreen = React.lazy(() => import('../pages/auth/LockScreen'));

// auth2
const Login2 = React.lazy(() => import('../pages/auth2/Login2'));
const Logout2 = React.lazy(() => import('../pages/auth2/Logout2'));
const Register2 = React.lazy(() => import('../pages/auth2/Register2'));
const Confirm2 = React.lazy(() => import('../pages/auth2/Confirm2'));
const ForgetPassword2 = React.lazy(() => import('../pages/auth2/ForgetPassword2'));
const LockScreen2 = React.lazy(() => import('../pages/auth2/LockScreen2'));
const SignInSignUp2 = React.lazy(() => import('../pages/auth2/SignInSignUp2'));

// landing
const Landing = React.lazy(() => import('../pages/landing/'));
const About = React.lazy(() => import('../pages/landing/pages/AboutUs'));
const Blog = React.lazy(() => import('../pages/landing/pages/Blog/'));
const BlogDetails = React.lazy(() => import('../pages/landing/pages/BlogDetails/'));
const Contact = React.lazy(() => import('../pages/landing/pages/Contact/'));

// dashboards
const ChannelPartner = React.lazy(() => import('../pages/dashboard/ChannelPartner/'));
const SalesDashboard = React.lazy(() => import('../pages/dashboard/Sales/'));
const CRMDashboard = React.lazy(() => import('../pages/dashboard/CRM/'));
const AnalyticsDashboard = React.lazy(() => import('../pages/dashboard/Analytics/'));

//ChannelPartner dashboard pages 
const ChannelPartners = React.lazy(() => import('../pages/channel-partner/users/ChannelPartners'));
const Allusers = React.lazy(() => import('../pages/channel-partner/dashboard/Allusers'));
const Garages = React.lazy(() => import('../pages/channel-partner/users/Garages'));
const Students = React.lazy(() => import('../pages/channel-partner/users/Students'));
const Classes = React.lazy(() => import('../pages/channel-partner/users/Classes'));
const Teachers = React.lazy(() => import('../pages/channel-partner/users/Teachers'));
const CareerExperts = React.lazy(() => import('../pages/channel-partner/users/CareerExperts'));
const Schools = React.lazy(() => import('../pages/channel-partner/users/Schools'));
// Profile Pages
const GarageProfile = React.lazy(() => import('../pages/channel-partner/profiles/garage/index'));
const StudentProfile = React.lazy(() => import('../pages/channel-partner/profiles/student/index'));
const ClassProfile = React.lazy(() => import('../pages/channel-partner/profiles/class/index'));
const TeacherProfile = React.lazy(() => import('../pages/channel-partner/profiles/teacher/index'));
const CareerExpert = React.lazy(() => import('../pages/channel-partner/profiles/career-expert/index'));
const ChannelPartnerProfile = React.lazy(() => import('../pages/channel-partner/channel-partner/index'));

// Resgisteration Pages
const ChannelPartnerReg = React.lazy(() => import('../pages/channel-partner/registrations/channel-partner-reg'));
const StudentReg = React.lazy(() => import('../pages/channel-partner/registrations/student-reg'));
const ClassReg = React.lazy(() => import('../pages/channel-partner/registrations/class-reg'));
const TeacherReg = React.lazy(() => import('../pages/channel-partner/registrations/teacher-reg'));
const CareerExpertReg = React.lazy(() => import('../pages/channel-partner/registrations/career-expert-reg'));
const SchoolReg = React.lazy(() => import('../pages/channel-partner/registrations/school-reg'));
const GarageReg = React.lazy(() => import('../pages/channel-partner/registrations/garage-reg'));

//Other pages 
const AutohubPackageRequest = React.lazy(() => import('../pages/channel-partner/autohub-package-request/index'));
const AddService = React.lazy(() => import('../pages/channel-partner/autohub-package-request/addservice'));
const MyProfile = React.lazy(() => import('../pages/channel-partner/my-profile/index'));
const Allnotifications = React.lazy(() => import('../pages/channel-partner/dashboard/Allnotifications'));


//Miscellaneous pages 

const Myincome = React.lazy(() => import('../pages/channel-partner/miscellaneous/myincome/index'));
const MyStatus = React.lazy(() => import('../pages/channel-partner/miscellaneous/mystatus/index'));
const MyWallet = React.lazy(() => import('../pages/channel-partner/miscellaneous/wallet/index'));

//Payments pages 

const MyEarning = React.lazy(() => import('../pages/channel-partner/payments/earning/index'));
const Payouts = React.lazy(() => import('../pages/channel-partner/payments/payouts/index'));

//Setting pages 

const QRCode = React.lazy(() => import('../pages/channel-partner/settings/qrcode'));
const ChangePassword = React.lazy(() => import('../pages/channel-partner/settings/changepassword'));
const AboutUs = React.lazy(() => import('../pages/channel-partner/settings/about'));
const ContactUs = React.lazy(() => import('../pages/channel-partner/settings/contact'));
const FAQs = React.lazy(() => import('../pages/channel-partner/settings/faq'));

//Calendar pages 

const DafaultCalendar = React.lazy(() => import('../pages/channel-partner/Calendar'));


//farmer dashboard pages 
const TotalInvoice = React.lazy(() => import('../pages/channel-partner/dashboard/TotalInvoice'));
const TotalInvoiceAmount = React.lazy(() => import('../pages/channel-partner/dashboard/TotalInvoiceAmount'));
const TotalReveivedAmount = React.lazy(() => import('../pages/channel-partner/dashboard/TotalReveivedAmount'));
const TotalSalesDue = React.lazy(() => import('../pages/channel-partner/dashboard/TotalSalesDue'));
const TotalSales = React.lazy(() => import('../pages/channel-partner/dashboard/TotalSales'));
const Revenue = React.lazy(() => import('../pages/channel-partner/dashboard/Revenue'));
const TotalCustomers = React.lazy(() => import('../pages/channel-partner/dashboard/TotalCustomers'));
const TotalExpenses = React.lazy(() => import('../pages/channel-partner/dashboard/TotalExpenses'));
const QuotationReceived = React.lazy(() => import('../pages/channel-partner/dashboard/QuotationReceived'));
const AcceptedOrders = React.lazy(() => import('../pages/channel-partner/dashboard/AcceptedOrders'));
const RejectedOrders = React.lazy(() => import('../pages/channel-partner/dashboard/RejectedOrders'));
const OngoingCrops = React.lazy(() => import('../pages/channel-partner/dashboard/OngoingCrops'));
const TotalCropOrders = React.lazy(
  () => import("../pages/channel-partner/dashboard/TotalCropOrders")
);
const TotalTopCrops = React.lazy(
  () => import("../pages/channel-partner/dashboard/TotalTopCrops")
);
const TotalOrderSummary = React.lazy(
  () => import("../pages/channel-partner/dashboard/TotalOrderSummary")
);
const TotalTransactionHistory = React.lazy(
  () => import("../pages/channel-partner/dashboard/TotalTransactionHistory")
);
// const Allnotifications = React.lazy(
//   () => import("../pages/channel-partner/dashboard/Allnotifications")
// );
const Mywallet = React.lazy(
  () => import("../pages/channel-partner/dashboard/Mywallet")
);
const AboutCompany = React.lazy(() => import("../pages/channel-partner/dashboard/AboutCompany"));
const Services = React.lazy(() => import("../pages/channel-partner/dashboard/Services"));
const RequestAdvisory = React.lazy(() => import("../pages/channel-partner/dashboard/RequestAdvisory"));
const ServiceDetails = React.lazy(() => import("../pages/channel-partner/dashboard/ServiceDetails"));
const ServicesAndFees = React.lazy(() => import("../pages/channel-partner/dashboard/ServicesAndFees"));
const TermsAndConditions = React.lazy(() => import("../pages/channel-partner/dashboard/TermsAndConditions"));

const FarmRegistration = React.lazy(() => import('../pages/channel-partner/myfarms/FarmRegistration'));
const FarmList = React.lazy(() => import('../pages/channel-partner/myfarms/Farmlist'));
const FarmDetails = React.lazy(() => import('../pages/channel-partner/myfarms/FarmDetails'));
const FarmEdit = React.lazy(() => import('../pages/channel-partner/myfarms/EditFarm'));
const NewSchedule = React.lazy(() => import('../pages/channel-partner/myfarms/schedules/NewSchedule'));
const ScheduleHistory = React.lazy(() => import('../pages/channel-partner/myfarms/schedules/ScheduleHistory'));
const BiologicalAnalysis = React.lazy(() => import('../pages/channel-partner/myfarms/schedules/BiologicalAnalysis'));
const PlantAnalysis = React.lazy(() => import('../pages/channel-partner/myfarms/schedules/PlantAnalysis'));
const WaterAnalysis = React.lazy(() => import('../pages/channel-partner/myfarms/schedules/WaterAnalysis'));
const SoilAnalysis = React.lazy(() => import('../pages/channel-partner/myfarms/schedules/SoilAnalysis'));
const ScheduleDetails = React.lazy(() => import('../pages/channel-partner/myfarms/schedules/ScheduleDetails'));
const ScheduleStageExpenses = React.lazy(
  () =>
    import("../pages/channel-partner/myfarms/schedules/ScheduleStageExpenses")
);
const AddExpense = React.lazy(() => import("../pages/channel-partner/myfarms/schedules/AddExpense"));
const CropVarieties = React.lazy(() => import("../pages/channel-partner/myfarms/schedules/CropVarieties"));
const RequiredMaterial = React.lazy(() => import("../pages/channel-partner/myfarms/schedules/RequiredMaterial"));
const DamageCrop = React.lazy(() => import("../pages/channel-partner/myfarms/schedules/DamageCrop"));
const ScheduleTimeline = React.lazy(() => import("../pages/channel-partner/myfarms/schedules/Timeline"));

const FarmTips = React.lazy(() => import('../pages/channel-partner/myfarms/TipsforFarming'));
const MandiPrices = React.lazy(() => import('../pages/channel-partner/myfarms/MandiPrices'));
const PreventiveCropCare = React.lazy(() => import('../pages/channel-partner/myfarms/CropCare'));
const FarmGuidance = React.lazy(() => import('../pages/channel-partner/myfarms/FarmGuidance'));
const FarmInsurance = React.lazy(() => import('../pages/channel-partner/myfarms/FarmInsurance'));
const WeatherForCast = React.lazy(() => import('../pages/channel-partner/myfarms/WeatherForCast'));

const AgroAdvisory = React.lazy(() => import('../pages/channel-partner/agro-advisors/AgroAdvisory'));
const Advisors = React.lazy(() => import('../pages/channel-partner/agro-advisors/Advisors'));
const AdvisorDetail = React.lazy(() => import('../pages/channel-partner/agro-advisors/AdvisorDetails'));
const AdvisoryProducts = React.lazy(() => import('../pages/channel-partner/agro-advisors/Products'));

const Laboratory = React.lazy(() => import('../pages/channel-partner/laboratory/Laboratory'));
const LaboratoryDetail = React.lazy(() => import('../pages/channel-partner/laboratory/LaboratoryDetails'));

const FarmerBuyProducts = React.lazy(() => import('../pages/channel-partner/products/BuyProducts'));
const ProductDetails = React.lazy(() => import('../pages/channel-partner/products/ProductDetails'));
const FarmerSellProducts = React.lazy(() => import('../pages/channel-partner/products/SellProducts'));
const FarmerBuyProductsHistory = React.lazy(() => import('../pages/channel-partner/products/BuyProductHistory'));
const FarmerSellProductsHistory = React.lazy(() => import('../pages/channel-partner/products/SellProductHistory'));


const ContractFarmingOverview = React.lazy(() => import('../pages/channel-partner/contract-farming/Overview'));
const ContractDetails = React.lazy(() => import('../pages/channel-partner/contract-farming/ContractDetails'));
const NewContracts = React.lazy(() => import('../pages/channel-partner/contract-farming/SearchBuyer'));
const NewContractDetails = React.lazy(() => import('../pages/channel-partner/contract-farming/new-contract-details'));
const ContractsList = React.lazy(() => import('../pages/channel-partner/contract-farming/ContractList'));

const CropSchedule = React.lazy(() => import('../pages/channel-partner/crop-schedule/CropSchedule'));

const CropDoctor = React.lazy(() => import('../pages/channel-partner/crop-doctor/CropDoctor'));
const CropListDetails = React.lazy(() => import('../pages/channel-partner/crop-doctor/CropListDetails'));

const GovScheme = React.lazy(() => import('../pages/channel-partner/extras/GovermentScheme'));
const FinancialServices = React.lazy(() => import('../pages/channel-partner/extras/FinancialServices'));
const TipOfDay = React.lazy(() => import('../pages/channel-partner/extras/TipOfDay'));
const NewsAndJobs = React.lazy(() => import('../pages/channel-partner/extras/NewAndJobs'));
const FarmerFAQ = React.lazy(() => import('../pages/channel-partner/extras/FAQ'));
const FarmerVideos = React.lazy(() => import('../pages/channel-partner/extras/Videos'));
const FarmDoctorHelpline = React.lazy(() => import('../pages/channel-partner/extras/FarmDoctorHelpline'));
const FarmDoctorBuzz = React.lazy(() => import('../pages/channel-partner/extras/Chat/index'));
const CropInsurance = React.lazy(() => import('../pages/channel-partner/extras/CropInsurance'));
const Poll = React.lazy(() => import('../pages/channel-partner/extras/Poll'));
const Campaign = React.lazy(() => import('../pages/channel-partner/extras/Campaign'));
const MyAstro = React.lazy(() => import('../pages/channel-partner/extras/MyAstro'));
const FarmVastu = React.lazy(() => import('../pages/channel-partner/extras/FarmVastu'));
const Covid19 = React.lazy(() => import('../pages/channel-partner/extras/Covid19'));


// apps
const CalendarApp = React.lazy(() => import('../pages/apps/Calendar/'));
// - chat
const ChatApp = React.lazy(() => import('../pages/apps/Chat/'));
// - ecommece pages
const EcommerceProducts = React.lazy(() => import('../pages/apps/Ecommerce/Products'));
const EcommerceProductsGrid = React.lazy(() => import('../pages/apps/Ecommerce/ProductsGrid'));
const ProductDetail = React.lazy(() => import('../pages/apps/Ecommerce/ProductDetail'));
const CreateProduct = React.lazy(() => import('../pages/apps/Ecommerce/CreateProduct'));
const Customers = React.lazy(() => import('../pages/apps/Ecommerce/Customers'));
const Orders = React.lazy(() => import('../pages/apps/Ecommerce/Orders'));
const OrderDetail = React.lazy(() => import('../pages/apps/Ecommerce/OrderDetail'));
const Sellers = React.lazy(() => import('../pages/apps/Ecommerce/Sellers'));
const Cart = React.lazy(() => import('../pages/apps/Ecommerce/Cart'));
const Checkout = React.lazy(() => import('../pages/apps/Ecommerce/Checkout'));
// - email
const Inbox = React.lazy(() => import('../pages/apps/Email/Inbox'));
const EmailDetail = React.lazy(() => import('../pages/apps/Email/Detail'));
// - companies
const Companies = React.lazy(() => import('../pages/apps/Companies/'));
// - tasks
const TaskList = React.lazy(() => import('../pages/apps/Tasks/List/'));
const TaskDetails = React.lazy(() => import('../pages/apps/Tasks/Details'));
const Kanban = React.lazy(() => import('../pages/apps/Tasks/Board/'));
// - contacts
const ContactsList = React.lazy(() => import('../pages/apps/Contacts/List/'));
const ContactsProfile = React.lazy(() => import('../pages/apps/Contacts/Profile/'));
// - ticktes
const Tickets = React.lazy(() => import('../pages/apps/Tickets/'));
// - file
const FileManager = React.lazy(() => import('../pages/apps/FileManager'));

// extra pages
const Starter = React.lazy(() => import('../pages/other/Starter'));
const Timeline = React.lazy(() => import('../pages/other/Timeline'));

const Sitemap = React.lazy(() => import('../pages/other/Sitemap/'));
const Error404 = React.lazy(() => import('../pages/error/Error404'));
const Error404Alt = React.lazy(() => import('../pages/error/Error404Alt'));
const Error500 = React.lazy(() => import('../pages/error/Error500'));
// - other
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const FAQ = React.lazy(() => import('../pages/other/FAQ'));
const SearchResults = React.lazy(() => import('../pages/other/SearchResults/'));
const CommingSoon = React.lazy(() => import('../pages/other/CommingSoon'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));
const Gallery = React.lazy(() => import('../pages/other/Gallery/'));
const Maintenance = React.lazy(() => import('../pages/other/Maintenance'));

// uikit
// -base ui
const Avatars = React.lazy(() => import('../pages/uikit/Avatars'));
const Buttons = React.lazy(() => import('../pages/uikit/Buttons'));
const Cards = React.lazy(() => import('../pages/uikit/Cards'));
const Carousels = React.lazy(() => import('../pages/uikit/Carousel'));
const Dropdowns = React.lazy(() => import('../pages/uikit/Dropdowns'));
const EmbedVideo = React.lazy(() => import('../pages/uikit/EmbedVideo'));
const GeneralUI = React.lazy(() => import('../pages/uikit/GeneralUI'));
const Grid = React.lazy(() => import('../pages/uikit/Grid'));
const Images = React.lazy(() => import('../pages/uikit/Images'));
const ListGroup = React.lazy(() => import('../pages/uikit/ListGroup'));
const Modals = React.lazy(() => import('../pages/uikit/Modals'));
const Notifications = React.lazy(() => import('../pages/uikit/Notifications'));
const Offcanvases = React.lazy(() => import('../pages/uikit/Offcanvas'));
const Placeholders = React.lazy(() => import('../pages/uikit/Placeholders'));
const Portlets = React.lazy(() => import('../pages/uikit/Portlets'));
const Progress = React.lazy(() => import('../pages/uikit/Progress'));
const Ribbons = React.lazy(() => import('../pages/uikit/Ribbons'));
const Spinners = React.lazy(() => import('../pages/uikit/Spinners'));
const TabsAccordions = React.lazy(() => import('../pages/uikit/TabsAccordions'));
const TooltipsPopovers = React.lazy(() => import('../pages/uikit/TooltipsPopovers'));
const Typography = React.lazy(() => import('../pages/uikit/Typography'));
// - extended ui
const NestableList = React.lazy(() => import('../pages/uikit/NestableList'));
const RangeSliders = React.lazy(() => import('../pages/uikit/RangeSliders'));
const TourPage = React.lazy(() => import('../pages/uikit/TourPage'));
const SweetAlerts = React.lazy(() => import('../pages/uikit/SweetAlerts'));

// widgets
const Widgets = React.lazy(() => import('../pages/widgets/'));

// icons
const FeatherIcons = React.lazy(() => import('../pages/icons/FeatherIcons/'));
const RemixIcons = React.lazy(() => import('../pages/icons/RemixIcons/'));
const BoxIcons = React.lazy(() => import('../pages/icons/BoxIcons/'));
const WeatherIcons = React.lazy(() => import('../pages/icons/WeatherIcons/'));
const MDIIcons = React.lazy(() => import('../pages/icons/MDIIcons/'));
const FontAwesomeIcons = React.lazy(() => import('../pages/icons/FontAwesomeIcons/'));

// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editors = React.lazy(() => import('../pages/forms/Editors'));

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

// charts
const ApexChart = React.lazy(() => import('../pages/charts/Apex'));
const ChartJs = React.lazy(() => import('../pages/charts/ChartJs'));

// maps
const GoogleMaps = React.lazy(() => import('../pages/maps/GoogleMaps'));
const VectorMaps = React.lazy(() => import('../pages/maps/VectorMaps'));

export interface RoutesProps {
    path: RouteProps['path'];
    name?: string;
    component?: RouteProps['component'];
    route?: any;
    exact?: RouteProps['exact'];
    icon?: string;
    header?: string;
    roles?: string[];
    children?: RoutesProps[];
}

// root routes
const rootRoute: RoutesProps = {
    path: '/',
    exact: true,
    component: () => <Root />,
    route: Route,
};

// dashboards
const dashboardRoutes: RoutesProps = {
    path: '/dashboard',
    name: 'Dashboards',
    icon: 'airplay',
    header: 'Navigation',
    children: [
        {
            path: '/channel-partner',
            name: 'Channel Partner',
            component: ChannelPartner,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/sales',
            name: 'Sales',
            component: SalesDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/crm',
            name: 'CRM',
            component: CRMDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/analytics',
            name: 'Analytics',
            component: AnalyticsDashboard,
            route: PrivateRoute,
        },
    ],
};
// farmer dashboard routes
const ChannelPartnerRoutes = {
    path: "/channel-partner",
    name: "ChannelPartner",
    route: PrivateRoute,
    roles: ["Admin"],
    icon: "shopping-cart",
    children: [
       {
            path: "/channel/all-users",
            name: "All Users",
            component: Allusers,
            route: PrivateRoute,
      },
      {
        path: "/channel/channel-partners",
        name: "Channel Partners",
        component: ChannelPartners,
        route: PrivateRoute,
      },
      {
        path: "/channel/garages",
        name: "Garages",
        component: Garages,
        route: PrivateRoute,
      },
      {
        path: "/channel/students",
        name: "Students",
        component: Students,
        route: PrivateRoute,
      },
      {
        path: "/channel/classes",
        name: "Classes",
        component: Classes,
        route: PrivateRoute,
      },
      {
        path: "/channel/teachers",
        name: "Teachers",
        component: Teachers,
        route: PrivateRoute,
      },
      {
        path: "/channel/career-experts",
        name: "Career Experts",
        component: CareerExperts,
        route: PrivateRoute,
      },
      {
        path: "/channel/schools",
        name: "Schools",
        component: Schools,
        route: PrivateRoute,
      },

        // profile pages 

      {
        path: "/channel/garage-profile",
        name: "Garage Profile",
        component: GarageProfile,
        route: PrivateRoute,
      },
      {
        path: "/channel/student-profile",
        name: "Student Profile",
        component: StudentProfile,
        route: PrivateRoute,
      },
      {
        path: "/channel/class-profile",
        name: "Class Profile",
        component: ClassProfile,
        route: PrivateRoute,
      },
      {
        path: "/channel/teacher-profile",
        name: "Teacher Profile",
        component: TeacherProfile,
        route: PrivateRoute,
      },
      {
        path: "/channel/career-expert",
        name: "Career Expert",
        component: CareerExpert,
        route: PrivateRoute,
      },
      {
        path: "/channel/channel-partner-profile",
        name: "Channel Partner Profile",
        component: ChannelPartnerProfile,
        route: PrivateRoute,
      },

      // Registration pages 

      {
        path: "/channel/channel-partner-reg",
        name: "Career Partner Registration",
        component: ChannelPartnerReg,
        route: PrivateRoute,
      },
      {
        path: "/channel/student-reg",
        name: "Student Registration",
        component: StudentReg,
        route: PrivateRoute,
      },
      {
        path: "/channel/class-reg",
        name: "Class Registration",
        component: ClassReg,
        route: PrivateRoute,
      },
      {
        path: "/channel/teacher-reg",
        name: "Teacher Registration",
        component: TeacherReg,
        route: PrivateRoute,
      },
      {
        path: "/channel/career-exp-reg",
        name: "Career Expert Registration",
        component: CareerExpertReg,
        route: PrivateRoute,
      },
      {
        path: "/channel/school-reg",
        name: "School Registration",
        component: SchoolReg,
        route: PrivateRoute,
      },
      {
        path: "/channel/garage-reg",
        name: "Garage Registration",
        component: GarageReg,
        route: PrivateRoute,
      },

      // Other pages 

      {
        path: "/channel/autohub-package-request",
        name: "Autohub Package Request",
        component: AutohubPackageRequest,
        route: PrivateRoute,
      },
      {
        path: "/channel/add-service",
        name: "Add Service",
        component: AddService,
        route: PrivateRoute,
      },
      {
        path: "/channel/my-profile",
        name: "My Profile",
        component: MyProfile,
        route: PrivateRoute,
      },
      {
        path: "/channel/my-income",
        name: "My Income",
        component: Myincome,
        route: PrivateRoute,
      },
      {
        path: "/channel/my-status",
        name: "My Status",
        component: MyStatus,
        route: PrivateRoute,
      },
      {
        path: "/channel/wallet",
        name: "Wallet",
        component: MyWallet,
        route: PrivateRoute,
      },
      {
        path: "/channel/earning",
        name: "Earning",
        component: MyEarning,
        route: PrivateRoute,
      },
      {
        path: "/channel/payouts",
        name: "Payouts",
        component: Payouts,
        route: PrivateRoute,
      },
        //  setting routes 
        {
            path: "/channel/qrcode",
            name: "QR Code",
            component: QRCode,
            route: PrivateRoute,
        },
        {
            path: "/channel/change-password",
            name: "Change Password",
            component: ChangePassword,
            route: PrivateRoute,
        },
        {
            path: "/channel/about-us",
            name: "About Us",
            component: AboutUs,
            route: PrivateRoute,
        },
        {
            path: "/channel/contact-us",
            name: "Contact Us",
            component: ContactUs,
            route: PrivateRoute,
        },
        {
            path: "/channel/faq",
            name: "Faqs",
            component: FAQs,
            route: PrivateRoute,
        },

        //  setting routes 
        {
            path: "/channel/default-calendar",
            name: "Default Calendar",
            component: DafaultCalendar,
            route: PrivateRoute,
        },
    ],
  };
// farmer dashboard routes
const FarmerDashbaordRoutes = {
  path: "/farmer",
  name: "Farmer",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "shopping-cart",
  children: [
    {
      path: "/farmer/total-invoices",
      name: "Total Invoices",
      component: TotalInvoice,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-invoices-amount",
      name: "Total Invoices Amount",
      component: TotalInvoiceAmount,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-received-amount",
      name: "Total Received Amount",
      component: TotalReveivedAmount,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-sales-due",
      name: "Total Sales Due",
      component: TotalSalesDue,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-sales",
      name: "Total Sales",
      component: TotalSales,
      route: PrivateRoute,
    },
    {
      path: "/farmer/revenue",
      name: "Revenue",
      component: Revenue,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-customers",
      name: "Total Customers",
      component: TotalCustomers,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-expenses",
      name: "Total Expenses",
      component: TotalExpenses,
      route: PrivateRoute,
    },
    {
      path: "/farmer/quotation-received",
      name: "Quotation Received",
      component: QuotationReceived,
      route: PrivateRoute,
    },
    {
      path: "/farmer/accepted-orders",
      name: "Accepted Orders",
      component: AcceptedOrders,
      route: PrivateRoute,
    },
    {
      path: "/farmer/rejected-orders",
      name: "Rejected Orders",
      component: RejectedOrders,
      route: PrivateRoute,
    },
    {
      path: "/farmer/ongoing-crops",
      name: "Ongoing Crops",
      component: OngoingCrops,
      route: PrivateRoute,
    },
    {
      path: "/farmer/crop-orders",
      name: "Crop Orders",
      component: TotalCropOrders,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-top-crops",
      name: "Total Top Crops",
      component: TotalTopCrops,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-order-summary",
      name: "Total Order Summary",
      component: TotalOrderSummary,
      route: PrivateRoute,
    },
    {
      path: "/farmer/total-transactions-history",
      name: "Total Trasactions History",
      component: TotalTransactionHistory,
      route: PrivateRoute,
    },
    {
      path: "/channel/notifications",
      name: "Notifications",
      component: Allnotifications,
      route: PrivateRoute,
    },
    {
      path: "/farmer/wallet",
      name: "Wallet",
      component: Mywallet,
      route: PrivateRoute,
    },
    {
        path: "/farmer/about",
        name: "About Company",
        component: AboutCompany,
        route: PrivateRoute,
      },
      {
        path: "/farmer/services",
        name: "Services",
        component: Services,
        route: PrivateRoute,
      },
      {
        path: "/farmer/request-advisory",
        name: "Request Advisory",
        component: RequestAdvisory,
        route: PrivateRoute,
      },
      {
        path: "/farmer/service-details",
        name: "Service Details",
        component: ServiceDetails,
        route: PrivateRoute,
      },
      {
        path: "/farmer/service-and-fees",
        name: "Service And Fees",
        component: ServicesAndFees,
        route: PrivateRoute,
      },
      {
        path: "/farmer/term-and-conditions",
        name: "Terms And Conditions",
        component: TermsAndConditions,
        route: PrivateRoute,
      },
  ],
};
const myFarmsRoutes = {
  path: "/farmer/myfarms",
  name: "My Farms",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "shopping-cart",
  children: [
    {
      path: "/farmer/farm-register",
      name: "Farms Registration",
      component: FarmRegistration,
      route: PrivateRoute,
    },
    {
      path: "/farmer/farm-list",
      name: "Farms List",
      component: FarmList,
      route: PrivateRoute,
    },
    {
      path: "/farmer/farm-details",
      name: "Farms Details",
      component: FarmDetails,
      route: PrivateRoute,
    },
    {
      path: "/farmer/edit-farm",
      name: "Edit Farms",
      component: FarmEdit,
      route: PrivateRoute,
    },
    {
      path: "/farmer/new-schedule",
      name: "New Schedule",
      component: NewSchedule,
      route: PrivateRoute,
    },
    {
      path: "/farmer/schedule-history",
      name: "New Schedule",
      component: ScheduleHistory,
      route: PrivateRoute,
    },
    {
      path: "/farmer/biological-analysis",
      name: "Biological Analysis",
      component: BiologicalAnalysis,
      route: PrivateRoute,
    },
    {
      path: "/farmer/plant-analysis",
      name: "Plant Analysis",
      component: PlantAnalysis,
      route: PrivateRoute,
    },
    {
      path: "/farmer/water-analysis",
      name: "Water Analysis",
      component: WaterAnalysis,
      route: PrivateRoute,
    },
    {
      path: "/farmer/soil-analysis",
      name: "Soil Analysis",
      component: SoilAnalysis,
      route: PrivateRoute,
    },
    {
      path: "/farmer/schedule-details",
      name: "Schedule Details",
      component: ScheduleDetails,
      route: PrivateRoute,
    },
    {
      path: "/farmer/schedule-stage-expenses",
      name: "Schedule Stage Expenses",
      component: ScheduleStageExpenses,
      route: PrivateRoute,
    },
    {
        path: "/farmer/add-expense",
        name: "Add Expense",
        component: AddExpense,
        route: PrivateRoute,
    },
    {
        path: "/farmer/crop-varieties",
        name: "Crop Varieties",
        component: CropVarieties,
        route: PrivateRoute,
    },
    {
        path: "/farmer/required-material",
        name: "Required Material",
        component: RequiredMaterial,
        route: PrivateRoute,
    },
    {
        path: "/farmer/damage-crop",
        name: "Damage Crop",
        component: DamageCrop,
        route: PrivateRoute,
    },
    {
      path: "/farmer/schedule-timeline",
      name: "Schedule Timeline",
      component: ScheduleTimeline,
      route: PrivateRoute,
    },
    {
      path: "/farmer/farm-tips",
      name: "Farm Tips",
      component: FarmTips,
      route: PrivateRoute,
    },
    {
      path: "/farmer/mandi-prices",
      name: "Mandi Prices",
      component: MandiPrices,
      route: PrivateRoute,
    },
    {
      path: "/farmer/preventive-crop-care",
      name: "Crop Care",
      component: PreventiveCropCare,
      route: PrivateRoute,
    },
    {
      path: "/farmer/farm-guidance",
      name: "Farm Guidance",
      component: FarmGuidance,
      route: PrivateRoute,
    },
    {
      path: "/farmer/farm-insurance",
      name: "Farm Insurance",
      component: FarmInsurance,
      route: PrivateRoute,
    },
    {
      path: "/farmer/weather-forcast",
      name: "Weather Forcast",
      component: WeatherForCast,
      route: PrivateRoute,
    },
  ],
};

const agroAdvisoryRoutes = {
    path: '/farmer/agro-advisory',
    name: 'Agro Advisory',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'shopping-cart',
    children: [
        {
            path: '/farmer/agro-advisory',
            name: 'Agro Advisory',
            component: AgroAdvisory,
            route: PrivateRoute,
        },
        {
            path: '/farmer/advisors',
            name: 'Advisors',
            component: Advisors,
            route: PrivateRoute,
        },
        {
            path: '/farmer/advisor-detail',
            name: 'AdvisorDetail',
            component: AdvisorDetail,
            route: PrivateRoute,
        },
        {
            path: '/farmer/advisory-products',
            name: 'Advisory Products',
            component: AdvisoryProducts,
            route: PrivateRoute,
        },
    ],
};

const laboratoryRoutes = {
    path: '/farmer/laboratory',
    name: 'Laboratory',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'shopping-cart',
    children: [
        {
            path: '/farmer/laboratory',
            name: 'Laboratory',
            component: Laboratory,
            route: PrivateRoute,
        },
        {
            path: '/farmer/laboratory-detail',
            name: 'Laboratory Detail',
            component: LaboratoryDetail,
            route: PrivateRoute,
        },
    ],
};

const ProductsRoutes = {
    path: '/farmer/buy-products',
    name: 'Products',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'shopping-cart',
    children: [
        {
            path: '/farmer/buy-products',
            name: 'Buy Products',
            component: FarmerBuyProducts,
            route: PrivateRoute,
        },
        {
            path: '/farmer/product-details',
            name: 'Product Details',
            component: ProductDetails,
            route: PrivateRoute,
        },
        {
            path: '/farmer/sell-products',
            name: 'Sell Products',
            component: FarmerSellProducts,
            route: PrivateRoute,
        },
        {
            path: '/farmer/buy-products-history',
            name: 'Buy Products History',
            component: FarmerBuyProductsHistory,
            route: PrivateRoute,
        },
        {
            path: '/farmer/sell-products-history',
            name: 'Sell Products History',
            component: FarmerSellProductsHistory,
            route: PrivateRoute,
        },
    ],
};

const ContractFarmingRoutes = {
    path: '/farmer/contract-farming',
    name: 'Contract Farming',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'shopping-cart',
    children: [
        {
            path: '/farmer/contract-farming',
            name: 'Overview',
            component: ContractFarmingOverview,
            route: PrivateRoute,
        },
        {
            path: '/farmer/contract-details',
            name: 'Contract Details',
            component: ContractDetails,
            route: PrivateRoute,
        },
        {
            path: '/farmer/new-contracts',
            name: 'New Contracts',
            component: NewContracts,
            route: PrivateRoute,
        },
        {
            path: '/farmer/new-contract-details',
            name: 'New Contracts Details',
            component: NewContractDetails,
            route: PrivateRoute,
        },
        {
            path: '/farmer/contracts-list',
            name: 'Contracts List',
            component: ContractsList,
            route: PrivateRoute,
        }
    ],
};
const CropDoctorRoutes = {
    path: '/farmer/cropdoctor',
    name: 'Crop Doctor',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'shopping-cart',
    children: [
        {
            path: '/farmer/crop-doctor',
            name: 'Crop Doctor',
            component: CropDoctor,
            route: PrivateRoute,
        },
        {
            path: '/farmer/crop-list-details',
            name: 'Crop List Details',
            component: CropListDetails,
            route: PrivateRoute,
        },
        {
            path: '/farmer/crop-schedule',
            name: 'Crop Doctor',
            component: CropSchedule,
            route: PrivateRoute,
        },
    ],
};

const extrasRoutes = {
    path: '/farmer/gov-scheme',
    name: 'eCommerce',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'shopping-cart',
    children: [
        {
            path: '/farmer/gov-scheme',
            name: 'Goverment Scheme',
            component: GovScheme,
            route: PrivateRoute,
        },
        {
            path: '/farmer/financial-services',
            name: 'Financial Services',
            component: FinancialServices,
            route: PrivateRoute,
        },
        {
            path: '/farmer/tip-of-the-day',
            name: 'Tip of the day',
            component: TipOfDay,
            route: PrivateRoute,
        },
        {
            path: '/farmer/news-jobs',
            name: 'News And Jobs',
            component: NewsAndJobs,
            route: PrivateRoute,
        },
        {
            path: '/farmer/faq',
            name: 'FAQ',
            component: FarmerFAQ,
            route: PrivateRoute,
        },
        {
            path: '/farmer/videos',
            name: 'Videos',
            component: FarmerVideos,
            route: PrivateRoute,
        },
        {
            path: '/farmer/farm-doctor-helpline',
            name: 'Farm Doctor Helpline',
            component: FarmDoctorHelpline,
            route: PrivateRoute,
        },
        {
            path: '/farmer/farm-doctor-buzz',
            name: 'Farm Doctor Buzz',
            component: FarmDoctorBuzz,
            route: PrivateRoute,
        },
        {
            path: '/farmer/crop-insurance',
            name: 'Crop Insurance',
            component: CropInsurance,
            route: PrivateRoute,
        },
        {
            path: '/farmer/poll',
            name: 'Crop Insurance',
            component: Poll,
            route: PrivateRoute,
        },
        {
            path: '/farmer/campaign',
            name: 'Campaign',
            component: Campaign,
            route: PrivateRoute,
        },
        {
            path: '/farmer/my-astro',
            name: 'MyAstro',
            component: MyAstro,
            route: PrivateRoute,
        },
        {
            path: '/farmer/farm-vastu',
            name: 'FarmVastu',
            component: FarmVastu,
            route: PrivateRoute,
        },
        {
            path: '/farmer/covid19',
            name: 'Covid19',
            component: Covid19,
            route: PrivateRoute,
        },
    ],
};

// apps

const chatAppRoutes: RoutesProps = {
    path: '/apps/chat',
    name: 'Chat',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-message-2-line',
    component: ChatApp,
};

const ecommerceAppRoutes = {
    path: '/apps/ecommerce',
    name: 'eCommerce',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'shopping-cart',
    children: [
        {
            path: '/apps/ecommerce/products',
            name: 'Products',
            component: EcommerceProducts,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/products-grid',
            name: 'Products',
            component: EcommerceProductsGrid,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/product-detail',
            name: 'Product Detail',
            component: ProductDetail,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/product-create',
            name: 'Product Edit',
            component: CreateProduct,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/customers',
            name: 'Customers',
            component: Customers,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/orders',
            name: 'Orders',
            component: Orders,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/order/detail',
            name: 'Order Detail',
            component: OrderDetail,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/sellers',
            name: 'Sellers',
            component: Sellers,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/shopping-cart',
            name: 'Shopping Cart',
            component: Cart,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/checkout',
            name: 'Checkout',
            component: Checkout,
            route: PrivateRoute,
        },
    ],
};

const calendarAppRoutes: RoutesProps = {
    path: '/apps/calendar',
    name: 'Calendar',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-calendar-2-line',
    component: CalendarApp,
    header: 'Apps',
};

const emailAppRoutes: RoutesProps = {
    path: '/apps/email',
    name: 'Email',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-mail-line',
    children: [
        {
            path: '/apps/email/inbox',
            name: 'Inbox',
            component: Inbox,
            route: PrivateRoute,
        },
        {
            path: '/apps/email/details',
            name: 'Email Details',
            component: EmailDetail,
            route: PrivateRoute,
        },
    ],
};

const companiesAppRoutes = {
    path: '/apps/companies',
    name: 'Companies',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-building-4-line',
    component: Companies,
};

const taskAppRoutes = {
    path: '/apps/tasks',
    name: 'Tasks',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-task-line',
    children: [
        {
            path: '/apps/tasks/list',
            name: 'Task List',
            component: TaskList,
            route: PrivateRoute,
        },
        {
            path: '/apps/tasks/details',
            name: 'Task List',
            component: TaskDetails,
            route: PrivateRoute,
        },
        {
            path: '/apps/tasks/kanban',
            name: 'Kanban',
            component: Kanban,
            route: PrivateRoute,
        },
    ],
};

const ticketsRoutes: RoutesProps = {
    path: '/apps/tickets',
    name: 'Tickets',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-customer-service-2-line',
    component: Tickets,
    header: 'Apps',
};

const contactsRoutes = {
    path: '/apps/contacts',
    name: 'Contacts',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'ri-profile-line',
    children: [
        {
            path: '/apps/contacts/list',
            name: 'Task List',
            component: ContactsList,
            route: PrivateRoute,
        },
        {
            path: '/apps/contacts/profile',
            name: 'Profile',
            component: ContactsProfile,
            route: PrivateRoute,
        },
    ],
};

const fileAppRoutes = {
    path: '/apps/file-manager',
    name: 'File Manager',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'folder-plus',
    component: FileManager,
};

const appRoutes = [
    ChannelPartnerRoutes,
    FarmerDashbaordRoutes,
    myFarmsRoutes,
    agroAdvisoryRoutes,
    laboratoryRoutes,
    CropDoctorRoutes,
    ContractFarmingRoutes,
    ProductsRoutes,
    extrasRoutes,
    chatAppRoutes,
    ecommerceAppRoutes,
    calendarAppRoutes,
    emailAppRoutes,
    companiesAppRoutes,
    taskAppRoutes,
    ticketsRoutes,
    contactsRoutes,
    fileAppRoutes,
];

// pages
const extrapagesRoutes = {
    path: '/pages',
    name: 'Pages',
    icon: 'ri-pages-line',
    header: 'Custom',
    children: [
        {
            path: '/pages/starter',
            name: 'Starter',
            component: Starter,
            route: PrivateRoute,
        },
        {
            path: '/pages/timeline',
            name: 'Timeline',
            component: Timeline,
            route: PrivateRoute,
        },
        {
            path: '/pages/sitemap',
            name: 'Sitemap',
            component: Sitemap,
            route: PrivateRoute,
        },
        {
            path: '/pages/invoice',
            name: 'Invoice',
            component: Invoice,
            route: PrivateRoute,
        },
        {
            path: '/pages/faq',
            name: 'FAQ',
            component: FAQ,
            route: PrivateRoute,
        },
        {
            path: '/pages/serach-results',
            name: 'Search Results',
            component: SearchResults,
            route: PrivateRoute,
        },
        {
            path: '/pages/pricing',
            name: 'Pricing',
            component: Pricing,
            route: PrivateRoute,
        },
        {
            path: '/pages/gallery',
            name: 'Gallery',
            component: Gallery,
            route: PrivateRoute,
        },
        {
            path: '/pages/error-404-alt',
            name: 'Error - 404-alt',
            component: Error404Alt,
            route: PrivateRoute,
        },
    ],
};

// ui
const uiRoutes: RoutesProps = {
    path: '/ui',
    name: 'Components',
    icon: 'ri-pencil-ruler-2-line',
    header: 'UI Elements',
    children: [
        {
            path: '/ui/base',
            name: 'Base UI',
            children: [
                {
                    path: '/ui/avatars',
                    name: 'Avatars',
                    component: Avatars,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/buttons',
                    name: 'Buttons',
                    component: Buttons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/cards',
                    name: 'Cards',
                    component: Cards,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/carousel',
                    name: 'Carousel',
                    component: Carousels,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/dropdowns',
                    name: 'Dropdowns',
                    component: Dropdowns,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/embedvideo',
                    name: 'EmbedVideo',
                    component: EmbedVideo,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/general',
                    name: 'General UI',
                    component: GeneralUI,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/grid',
                    name: 'Grid',
                    component: Grid,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/images',
                    name: 'Images',
                    component: Images,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/listgroup',
                    name: 'List Group',
                    component: ListGroup,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/modals',
                    name: 'Modals',
                    component: Modals,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/notifications',
                    name: 'Notifications',
                    component: Notifications,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/offcanvas',
                    name: 'Offcanvas',
                    component: Offcanvases,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/placeholders',
                    name: 'Placeholders',
                    component: Placeholders,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/portlets',
                    name: 'Portlets',
                    component: Portlets,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/progress',
                    name: 'Progress',
                    component: Progress,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/ribbons',
                    name: 'Ribbons',
                    component: Ribbons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/spinners',
                    name: 'Spinners',
                    component: Spinners,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tabs-accordions',
                    name: 'Tabs & Accordions',
                    component: TabsAccordions,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tooltips-popovers',
                    name: 'Tooltips & Popovers',
                    component: TooltipsPopovers,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/typography',
                    name: 'Typography',
                    component: Typography,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/extended',
            name: 'Extended UI',
            children: [
                {
                    path: '/extended-ui/nestable',
                    name: 'Nestable List',
                    component: NestableList,
                    route: PrivateRoute,
                },
                {
                    path: '/extended-ui/rangesliders',
                    name: 'Range Sliders',
                    component: RangeSliders,
                    route: PrivateRoute,
                },
                {
                    path: '/extended-ui/sweet-alert',
                    name: 'Sweet Alert',
                    component: SweetAlerts,
                    route: PrivateRoute,
                },
                {
                    path: '/extended-ui/tour',
                    name: 'Tour Page',
                    component: TourPage,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/widgets',
            name: 'Widgets',
            component: Widgets,
            route: PrivateRoute,
        },
        {
            path: '/ui/icons',
            name: 'Icons',
            children: [
                {
                    path: '/ui/icons/feather',
                    name: 'Feather Icons',
                    component: FeatherIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/mdi',
                    name: 'Material Design',
                    component: MDIIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/font-awesome',
                    name: 'Font Awesome 5',
                    component: FontAwesomeIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/remix',
                    name: 'Remix',
                    component: RemixIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/boxicons',
                    name: 'Box Icons',
                    component: BoxIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/weather',
                    name: 'Weather Icons',
                    component: WeatherIcons,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/forms',
            name: 'Forms',
            children: [
                {
                    path: '/ui/forms/basic',
                    name: 'Basic Elements',
                    component: BasicForms,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/advanced',
                    name: 'Form Advanced',
                    component: FormAdvanced,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/validation',
                    name: 'Form Validation',
                    component: FormValidation,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/wizard',
                    name: 'Form Wizard',
                    component: FormWizard,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/upload',
                    name: 'File Upload',
                    component: FileUpload,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/editors',
                    name: 'Editors',
                    component: Editors,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/tables',
            name: 'Tables',
            children: [
                {
                    path: '/ui/tables/basic',
                    name: 'Basic',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tables/advanced',
                    name: 'Advanced',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/charts',
            name: 'Charts',
            children: [
                {
                    path: '/ui/charts/apex',
                    name: 'Apex',
                    component: ApexChart,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/charts/chartjs',
                    name: 'Chartjs',
                    component: ChartJs,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/maps',
            name: 'Maps',
            children: [
                {
                    path: '/ui/googlemaps',
                    name: 'Google Maps',
                    component: GoogleMaps,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/vectorMaps',
                    name: 'Google Maps',
                    component: VectorMaps,
                    route: PrivateRoute,
                },
            ],
        },
    ],
};

// auth
const authRoutes: RoutesProps[] = [
    {
        path: '/auth/login',
        name: 'Login',
        component: Login,
        route: Route,
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register,
        route: Route,
    },
    {
        path: '/auth/confirm',
        name: 'Confirm',
        component: Confirm,
        route: Route,
    },
    {
        path: '/auth/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        route: Route,
    },
    {
        path: '/auth/signin-signup',
        name: 'SignIn-SignUp',
        component: SignInSignUp,
        route: Route,
    },
    {
        path: '/auth/lock-screen',
        name: 'Lock Screen',
        component: LockScreen,
        route: Route,
    },
    {
        path: '/auth/logout',
        name: 'Logout',
        component: Logout,
        route: Route,
    },
    {
        path: '/auth/login2',
        name: 'Login2',
        component: Login2,
        route: Route,
    },
    {
        path: '/auth/logout2',
        name: 'Logout2',
        component: Logout2,
        route: Route,
    },
    {
        path: '/auth/register2',
        name: 'Register2',
        component: Register2,
        route: Route,
    },
    {
        path: '/auth/confirm2',
        name: 'Confirm2',
        component: Confirm2,
        route: Route,
    },
    {
        path: '/auth/forget-password2',
        name: 'Forget Password2',
        component: ForgetPassword2,
        route: Route,
    },
    {
        path: '/auth/signin-signup2',
        name: 'SignIn-SignUp2',
        component: SignInSignUp2,
        route: Route,
    },
    {
        path: '/auth/lock-screen2',
        name: 'Lock Screen2',
        component: LockScreen2,
        route: Route,
    },
];

// public routes
const otherPublicRoutes = [
    {
        path: '/landing',
        name: 'landing',
        component: Landing,
        route: Route,
    },
    {
        path: '/landing-about',
        name: 'About',
        component: About,
        route: Route,
    },
    {
        path: '/landing-blog',
        name: 'Blog',
        component: Blog,
        route: Route,
    },
    {
        path: '/landing-blog-detail',
        name: 'Blog Detail',
        component: BlogDetails,
        route: Route,
    },
    {
        path: '/landing-contact',
        name: 'Contact',
        component: Contact,
        route: Route,
    },
    {
        path: '/maintenance',
        name: 'Maintenance',
        component: Maintenance,
        route: Route,
    },
    {
        path: '/error-404',
        name: 'Error - 404',
        component: Error404,
        route: Route,
    },
    {
        path: '/error-500',
        name: 'Error - 500',
        component: Error500,
        route: Route,
    },
    {
        path: '/comming-soon',
        name: 'Coming Soon',
        component: CommingSoon,
        route: Route,
    },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
    let flatRoutes: RoutesProps[] = [];

    routes = routes || [];
    routes.forEach((item: RoutesProps) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// // All routes
const authProtectedRoutes = [rootRoute, dashboardRoutes, ...appRoutes, extrapagesRoutes, uiRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export { publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes, publicProtectedFlattenRoutes };
