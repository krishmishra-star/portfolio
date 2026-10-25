/**
 * Project Data Source
 * 
 * Adding a project only requires adding an object to this array.
 * Required fields:
 * - number: String (e.g. "01")
 * - title: String
 * - hook: String (one-line summary)
 * - description: String
 * - stack: String (dot-separated tech stack)
 * - note: String (context/dev log note)
 * - status: "live" | "code only"
 * - liveUrl: String | null
 * - repoUrl: String
 * - screenshot: String | null (path under public/, e.g. "/projects/public-issue.webp")
 */

export const projects = [
  {
    number: "01",
    title: "Public Issue",
    hook: "A complaint box for the street.",
    description:
      "Citizens sign up, report a pothole, a garbage pile or a dead street light with a category, address, GPS point and a photo, then watch it move through a 4-step timeline. Admins get their own login, stats by category and status, and can change status, leave remarks or delete duplicate reports.",
    stack: "Node.js · Express · MongoDB Atlas · JWT · Multer · Chart.js · plain HTML, CSS and JS",
    note: "Started as a college project. Front end on Netlify, API on Render. Still on my list: cloud storage for the photos and proper notifications.",
    status: "live",
    liveUrl: "https://publicissue.netlify.app/",
    repoUrl: "https://github.com/krishmishra-star/Public-Issue",
    screenshot: null
  },
  {
    number: "02",
    title: "ShopKart",
    hook: "A fashion store I built page by page.",
    description:
      "Home, explore, product pages, cart, checkout, order history and login, across menswear, girls wear, shoes, watches, purses and, because why not, keyboards. There's dark mode, a search module, and an Express and MongoDB backend sitting in the repo next to the front end.",
    stack: "Vanilla JavaScript · Tailwind CSS · Express · MongoDB",
    note: "I rebuilt the whole UI once because the first version felt generic. The second one is monochrome and sharp-edged, closer to how real shopping sites feel.",
    status: "live",
    liveUrl: "https://shop-kart-delta.vercel.app",
    repoUrl: "https://github.com/krishmishra-star/ShopKart",
    screenshot: null
  },
  {
    number: "03",
    title: "PulseMetrics",
    hook: "A dashboard for a business that doesn't exist.",
    description:
      "Leads, quotations, deals, orders, payments and team activity in one place, with charts and date filters. Change a deal's stage, an order's progress or a payment's status and it sticks after a refresh. There's a reset button for when you break it.",
    stack: "React · Vite · Tailwind CSS · Recharts",
    note: "No backend, on purpose. The data is seeded and the demo's \"today\" is frozen at 17 Oct 2026, so the date filters always line up.",
    status: "live",
    liveUrl: "https://business-analytics-dashboard-gules.vercel.app",
    repoUrl: "https://github.com/krishmishra-star/business-analytics-dashboard",
    screenshot: null
  },
  {
    number: "04",
    title: "DailyMood AI",
    hook: "A journal that notices how you look.",
    description:
      "A mood tracker and journaling app. It reads your expression from the webcam with MediaPipe, and keeps your entries behind a login using Supabase.",
    stack: "React · Vite · MediaPipe · Supabase · Zustand",
    note: "Hardest one so far. The webcam pipeline, WASM trouble in Vite and the database access rules all fought back. No live link yet, so it's code only.",
    status: "code only",
    liveUrl: null,
    repoUrl: "https://github.com/krishmishra-star/dailymood-ai",
    screenshot: null
  }
];
