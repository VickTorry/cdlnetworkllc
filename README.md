CDLNetworkLLC Backend (Pixelfreight)

Production backend for a recruiting platform built for CDLNetworkLLC, a U.S.-based trucking business.
This service processes all driver and carrier applications submitted through a multi-step quiz on the frontend and delivers structured lead data into HubSpot.

🔧 Purpose

This backend acts as the integration layer between:

Frontend (Lovable) → Backend API (Node.js + Express) → HubSpot CRM

Its job is to:

Validate quiz submissions

Normalize and structure field values

Map data into HubSpot (custom properties, pipelines)

Log results and handle errors cleanly

Deploy reliably on Vercel using environment variables

🛠️ Tech Stack

Node.js

Express

Joi

Vercel

HubSpot API

dotenv

📌 Features

API endpoints for driver and carrier intake

Field validation and normalization

Payload-to-CRM mapping

Environment-based configuration

Error and success logging

Production deployment on Vercel

🧱 Architecture Overview
Frontend (Lovable quiz)
        ↓ POST /api/application
Backend (Node.js + Express)
        ↓
Validation → Normalization → Mapping
        ↓
HubSpot CRM (custom properties + pipelines)


This backend remains independent from the Lovable frontend.
Only structured JSON payloads are exchanged.

📥 Example Request Payload
{
  "name": "John Doe",
  "phone": "+1 555 123 4567",
  "email": "john@example.com",
  "cdlClass": "CDL-A",
  "experience": "2+ years",
  "preferredTruck": "Dry Van",
  "additionalInfo": "Looking for regional routes"
}


(Shape varies depending on quiz version — validation is updated per redesign.)

📤 Example Response
{
  "success": true,
  "message": "Lead submitted to HubSpot"
}

🔐 Environment Variables
HUBSPOT_API_KEY=
HUBSPOT_PORTAL_ID=
HUBSPOT_DRIVER_PIPELINE=
HUBSPOT_CARRIER_PIPELINE=
HUBSPOT_FORM_ID=


Never commit real keys.

🚀 Deployment (Vercel)

Push repo to GitHub

Import project into Vercel

Add required environment variables

Deploy

API endpoint will be available at:

https://your-vercel-project-url.vercel.app/api/application

🧩 Post-Launch Iterations

Updated multiple times to match new:

quiz flows

data structures

HubSpot property changes

client requirements

This repo reflects the maintained production version.

🔗 Live Product

Frontend (Lovable) is deployed separately:

https://cdlnetworkllc.com

vercel-deployment.png

© Pixelfreight – Full-stack product delivery and integration.
