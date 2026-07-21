export { default } from "next-auth/middleware";
export const config = { matcher: ["/dashboard/:path*", "/vehicles/:path*", "/maintenance/:path*", "/mileage/:path*", "/fuel/:path*", "/documents/:path*", "/reminders/:path*"] };
