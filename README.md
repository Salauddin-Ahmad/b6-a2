# 🚗 Vehicle Rental Backend

**Live URL:** [https://vercel.com/md-saluddins-projects/b6-a2](https://vercel.com/md-saluddins-projects/b6-a2)  
**GitHub Repository:** [https://github.com/Salauddin-Ahmad/b6-a2](https://github.com/Salauddin-Ahmad/b6-a2)

---

## Features

- User authentication (signup, login, JWT-based)
- Vehicle management (CRUD operations)
- Booking management
- API versioning (`v1`) for future updates
- Health check endpoint with system info

---

## Technology Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** PostgreSQL
- **Authentication:** JWT, bcryptjs
- **Deployment:** Vercel
- **Other:** dotenv, nodemon (development), body-parser

---

## Setup & Usage

### Prerequisites

- Node.js (v18+)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Salauddin-Ahmad/b6-a2
cd b6-a2


```bash
git clone <YOUR_GITHUB_REPO_LINK>
cd <REPO_NAME>
npm install
# or
yarn
DATABASE_URL=your db URL 
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
npm run dev
# or
yarn dev
http://localhost:5000
```


##API Endpoints
- /api/v1/auth - Authentication routes
- /api/v1/vehicles - Vehicle CRUD routes
- /api/v1/users - User CRUD routes
- /api/v1/bookings - Booking routes
