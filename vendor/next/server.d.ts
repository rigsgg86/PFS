export interface NextRequest { headers: Headers; }
export class NextResponse { static next(init?: unknown): NextResponse; }
