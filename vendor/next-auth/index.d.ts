export interface NextAuthOptions { session?: { strategy?: 'jwt' }; providers: unknown[]; }
declare function NextAuth(options: NextAuthOptions): unknown;
export default NextAuth;
