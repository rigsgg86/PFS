export function formatCurrency(value: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value); }
export function formatNumber(value: number): string { return new Intl.NumberFormat('en-US').format(value); }
export function formatPortalDate(date = new Date()): string { return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }).format(date); }
