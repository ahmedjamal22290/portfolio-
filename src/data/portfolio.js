// ============================================================
//  EDIT YOUR PORTFOLIO HERE
//  Update these values whenever you want to change something.
//  For images: drop files into /public and reference as "/name.png"
// ============================================================

export const profile = {
  name: "Ahmed Jamal",
  firstName: "Ahmed",
  role: "Flutter Developer",
  headline: "Flutter",
  headlineAccent: "Developer",
  typingWords: ["Flutter Developer", "Cross-Platform Developer", "Mobile App Developer"],
  summary:
    "Flutter Developer with 1 year of production experience designing and shipping cross-platform mobile applications for Android and iOS. Proficient in Flutter, Dart, Firebase, and RESTful API integration with strong command of scalable state management solutions (Provider, GetX, Bloc). Shipped live marketplace, e-commerce, and booking applications featuring real-time messaging, Stripe payment integration, and responsive RTL/LTR UI/UX. Solid foundation in Clean Architecture, MVVM, and MVC patterns. Experienced with Agile workflows, code reviews, and CI/CD pipelines.",
  quote: "Clean architecture and delightful UX - built once, shipped everywhere.",
  email: "ahmedjamal22290@gmail.com",
  phone: "+20 1004995172",
  location: "Egypt",
  resume: "/Ahmed_Jamal_Flutter_Developer_CV2.pdf",
  website: "https://github.com/ahmedjamal22290",
  linkedin: "https://linkedin.com/in/ahmedbenjamal",
  github: "https://github.com/ahmedjamal22290",
  instagram: "",
  youtube: "",
  tiktok: "",
  heroTech: ["Flutter", "Dart", "Firebase", "REST API"],
  experienceStartYear: "2025-01-01",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    url: "https://linkedin.com/in/ahmedbenjamal",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@ahmedjamal22290",
    url: "https://github.com/ahmedjamal22290",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

export const skills = [
  { label: "Mobile Platforms", value: "Android, iOS, Cross-Platform Mobile Development (Flutter & Dart)" },
  { label: "State Management", value: "Provider, GetX, Bloc (BLoC pattern)" },
  { label: "Backend & APIs", value: "Firebase (Auth, Firestore, FCM), RESTful APIs, WooCommerce APIs, Supabase" },
  { label: "Payments & Integrations", value: "Stripe, Pusher Channels (real-time), Google Maps API, Deep Linking, WooCommerce" },
  { label: "Architecture & Patterns", value: "Clean Architecture, MVVM, MVC, Dependency Injection, SOLID Principles" },
  { label: "Testing", value: "flutter_test, Unit Testing, Widget Testing, TDD" },
  { label: "Storage", value: "SQLite, Hive, Firebase Firestore" },
  { label: "Dev Tools", value: "Git, GitHub, GitHub Copilot, Cursor IDE, Postman, Dio, CI/CD (GitHub Actions)" },
  { label: "UI/UX", value: "Responsive Mobile UI/UX, RTL/LTR Localization, Dark Mode, Accessibility (a11y)" },
  { label: "Deployment", value: "Google Play Console, App Store Connect" },
];

export const projects = [
  {
    id: 1,
    Title: "Cura24h",
    Description:
      "Production marketplace app connecting buyers & service providers. Features a multi-role architecture (Buyer, Seller, Admin), streamlined onboarding with social authentication, OTP verification and secure JWT-based auth. Complete booking workflow including scheduling, Stripe payments, refunds, cancellations and live order tracking, plus real-time buyer–seller chat.",
    Img: "/Coding.gif",
    Logo: "/cura24h/logo.webp",
    Play: "https://play.google.com/store/apps/details?id=com.cura.cura24h",
    AppStore: "https://apps.apple.com/eg/app/cura24h/id6759921818",
    Github: "Private",
    TechStack: ["Flutter", "Provider", "Firebase", "REST APIs", "Pusher Channels", "Stripe", "Google Maps"],
    Features: [
      "Multi-role architecture (Buyer, Seller, Admin)",
      "Streamlined onboarding with social authentication",
      "OTP verification & secure JWT authentication",
      "Booking workflow: scheduling, Stripe payments, refunds & cancellations",
      "Live order tracking & real-time buyer–seller chat (Pusher Channels)",
      "RTL/LTR localization, deep linking, SQLite offline storage",
    ],
  },
  {
    id: 2,
    Title: "Cura24h Seller",
    Description:
      "Companion vendor-management platform enabling sellers to manage services, orders, subscriptions, payouts, and business analytics. Includes advanced service management with media uploads, dynamic pricing, scheduling, availability control and category management.",
    Img: "/Coding.gif",
    Logo: "/cura24h_seller/logo.webp",
    Play: "https://play.google.com/store/apps/details?id=com.cara.cura24h_seller",
    AppStore: "https://apps.apple.com/eg/app/cura24h-seller/id6759921987",
    Github: "Private",
    TechStack: ["Flutter", "Provider", "Firebase", "REST APIs", "Pusher Channels", "Dio", "Stripe"],
    Features: [
      "Service management with media uploads & dynamic pricing",
      "Scheduling, availability control & category management",
      "Seller dashboards for order tracking, payments & analytics",
      "Payment management, withdrawal requests & payouts",
      "Real-time messaging, FCM push notifications & job proposal workflows",
      "Multilingual localization",
    ],
  },
  {
    id: 3,
    Title: "Isco App",
    Description:
      "Production e-commerce & QR-based asset management app. Combines full shopping workflows — product browsing, filtering, cart, secure checkout, order tracking and wishlists — using WooCommerce REST APIs, with QR-based asset maintenance management.",
    Img: "/Animation1.gif",
    Logo: "/isco/logo.webp",
    Play: "https://play.google.com/store/apps/details?id=com.mmj.iscoksa",
    AppStore: "https://apps.apple.com/app/iscoksa/id6775752920",
    Github: "Private",
    TechStack: ["Flutter", "GetX", "Firebase Firestore", "WooCommerce APIs", "SQLite", "Dio"],
    Features: [
      "Product browsing, filtering, cart & wishlist",
      "Secure checkout and order tracking",
      "QR-based asset maintenance management",
      "Multilingual RTL/LTR support with GetX",
      "Firebase Firestore for user data & favorites",
      "SQLite for offline local storage",
    ],
  },
  {
    id: 4,
    Title: "Booking App",
    Description:
      "Cross-platform hotel booking app (Android & iOS) with Firebase authentication, real-time Firestore search, favorites management and dark mode via GetStorage persistent preferences. Dynamic hotel browsing workflows with responsive mobile UI/UX.",
    Img: "/Animation1.gif",
    Play: "",
    AppStore: "",
    Github: "https://github.com/ahmedjamal22290/Booking_App",
    TechStack: ["Flutter", "GetX", "Firebase", "GetStorage", "Dio", "SQLite"],
    Features: [
      "Firebase authentication & real-time Firestore search",
      "Dynamic hotel browsing and favorites management",
      "Dark mode with GetStorage persistent preferences",
      "Responsive mobile UI/UX",
    ],
  },
  {
    id: 5,
    Title: "Bookly App",
    Description:
      "Book-browsing app using the Google Books API with MVVM architecture, dependency injection via get_it, and go_router navigation. Featured books carousel, full-text search, star ratings and reading preview with robust error handling.",
    Img: "/Coding.gif",
    Play: "",
    AppStore: "",
    Github: "https://github.com/ahmedjamal22290/bookly_app",
    TechStack: ["Flutter", "Dart", "MVVM", "get_it", "go_router", "REST APIs", "Supabase"],
    Features: [
      "Featured books carousel & full-text search",
      "Star ratings and reading preview",
      "MVVM architecture with get_it & go_router",
      "Robust error handling",
    ],
  },
];

export const certificates = [
  { id: 1, Title: "Complete Flutter & Dart Development Course.", Img: "/cert/Complete-Flutter-Dart-Development-Course.jpg" },
  { id: 2, Title: "MVVM Course Cirtification", Img: "/cert/mvvm-course.jpg" },
];

export const techStack = [
  { icon: "flutter.svg", language: "Flutter" },
  { icon: "dart.svg", language: "Dart" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "restapi.svg", language: "REST API" },
  { icon: "provider.svg", language: "Provider" },
  { icon: "getx.svg", language: "GetX" },
  { icon: "bloc.svg", language: "Bloc" },
  { icon: "sqlite.svg", language: "SQLite" },
  { icon: "stripe.svg", language: "Stripe" },
  { icon: "dio.svg", language: "Dio" },
  { icon: "git.svg", language: "Git" },
  { icon: "github.svg", language: "GitHub" },
];
