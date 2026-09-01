# FleetBoss MVP

## Product
FleetBoss is a simple fleet-management platform for small businesses with 1–25 vehicles.

## MVP users
- Owner/Admin: manages the company, vehicles, drivers, inspections, maintenance, and documents.
- Driver: completes assigned daily inspections and reports vehicle problems.

## MVP features
1. Authentication and role-based access
2. Company onboarding
3. Vehicle management
4. Driver management
5. Daily pre-trip inspection checklist
6. Required inspection photos
7. Pass/fail and issue reporting
8. Admin dashboard with inspection and maintenance alerts
9. Mileage tracking
10. Maintenance schedules and service history
11. Vehicle document storage
12. Search and filters

## Core navigation
- Dashboard
- Vehicles
- Inspections
- Maintenance
- Drivers
- Documents
- Settings

## Inspection flow
Driver selects vehicle → confirms mileage → completes checklist → captures required photos → marks defects → submits inspection.

If a safety-critical defect is reported, the vehicle is flagged for admin review.

## Initial data for dogfooding
The existing Prime Fleet Portal prototype contains:
- 2022 Mercedes-Benz Sprinter 2500
- 2021 Mercedes-Benz Sprinter 2500

These can be used as the first test fleet while FleetBoss is generalized for other businesses.

## Monetization target
- Starter: $29/month
- Pro: $79/month
- Business: $149/month

Keep billing out of the first functional prototype; validate the workflow first.

## Technical direction
Use the existing Next.js 15 + TypeScript + Tailwind + NextAuth + Supabase foundation in this repository for the first web/mobile-responsive MVP. Keep the backend API-oriented so a native iOS/Android client can be added without redesigning the data model.

## Phase 2 candidates
- Push notifications
- Recurring maintenance reminders
- PDF inspection reports
- Expense/fuel tracking
- Geofenced inspection prompts
- Team permissions
- Stripe subscriptions
- White-label company branding
