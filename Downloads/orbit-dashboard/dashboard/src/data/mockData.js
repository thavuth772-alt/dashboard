export const pulseData = [
  4, 6, 5, 8, 7, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 22, 20, 24, 23,
  27, 25, 29, 28, 32,
];

export const revenueSeries = [
  { month: "Jan", revenue: 42000, target: 40000 },
  { month: "Feb", revenue: 45500, target: 42000 },
  { month: "Mar", revenue: 41000, target: 44000 },
  { month: "Apr", revenue: 49800, target: 46000 },
  { month: "May", revenue: 53200, target: 48000 },
  { month: "Jun", revenue: 51000, target: 50000 },
  { month: "Jul", revenue: 58900, target: 52000 },
  { month: "Aug", revenue: 61200, target: 54000 },
  { month: "Sep", revenue: 59500, target: 56000 },
  { month: "Oct", revenue: 65800, target: 58000 },
  { month: "Nov", revenue: 70100, target: 60000 },
  { month: "Dec", revenue: 74300, target: 62000 },
];

export const trafficBySource = [
  { name: "Organic", value: 4200, color: "#F2B84B" },
  { name: "Referral", value: 2100, color: "#4FD1C5" },
  { name: "Direct", value: 1850, color: "#8B92A3" },
  { name: "Social", value: 1400, color: "#F2686C" },
  { name: "Email", value: 980, color: "#7C9BFF" },
];

export const weeklyActive = [
  { day: "Mon", users: 2380 },
  { day: "Tue", users: 2510 },
  { day: "Wed", users: 2290 },
  { day: "Thu", users: 2670 },
  { day: "Fri", users: 2940 },
  { day: "Sat", users: 1980 },
  { day: "Sun", users: 1720 },
];

export const stats = [
  {
    id: "revenue",
    label: "Monthly revenue",
    value: "$74,300",
    delta: "+12.4%",
    trend: "up",
  },
  {
    id: "users",
    label: "Active users",
    value: "18,204",
    delta: "+6.1%",
    trend: "up",
  },
  {
    id: "churn",
    label: "Churn rate",
    value: "2.3%",
    delta: "-0.4%",
    trend: "down-good",
  },
  {
    id: "latency",
    label: "Avg. response time",
    value: "182ms",
    delta: "+9ms",
    trend: "up-bad",
  },
];

export const recentOrders = [
  { id: "ORB-8841", customer: "Priya Nair", amount: "$1,240.00", status: "Paid" },
  { id: "ORB-8840", customer: "Lucas Meyer", amount: "$389.50", status: "Paid" },
  { id: "ORB-8839", customer: "Aiko Tanaka", amount: "$92.00", status: "Pending" },
  { id: "ORB-8838", customer: "Samuel Osei", amount: "$2,015.00", status: "Paid" },
  { id: "ORB-8837", customer: "Elena Popescu", amount: "$150.75", status: "Refunded" },
  { id: "ORB-8836", customer: "Rahul Verma", amount: "$610.20", status: "Pending" },
];
