# **Bike Servicing Management System Api**

## **Summary**

The **Bike Servicing Management System** is a backend API that allows bike servicing centers to manage customer data, bike records, service records, and track the status of bike servicing jobs. This system is designed to manage various aspects of bike services, including service creation, status tracking, and overdue services.

This project allows you to perform CRUD operations for **bikes** and **service records**, as well as track **pending** and **overdue** services based on certain conditions.

## **Live Backend**

- [Backend API ](https://bike-api-liard.vercel.app)

## **Tech Stack**

- **Node.js** - JavaScript runtime for building scalable network applications.
- **Express.js** - Web framework for Node.js to handle API requests.
- **TypeScript** - Typed superset of JavaScript for better development experience.
- **Prisma ORM** - Database toolkit to interact with PostgreSQL in a type-safe manner.
- **PostgreSQL** - Relational database for storing customer, bike, and service data.
- **HTTP Status Codes** - For standardized API responses.
- **Express Router** - For routing API requests to respective controllers.

## **Setup Guide**

### 1. Clone the Repository

First, clone the project to your local machine:

```bash
git clone https://github.com/altaj1/bike-servicing-api
cd bike-servicing-api
```

### 2. Install Dependencies

Install the required dependencies using `npm`:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following configuration:

```bash
NODE_ENV=development
PORT=6000
DATABASE_URL="postgresql://you-name:your-password@localhost:5432/bike_servicing_api?schema=public"
```

### 4. Set Up PostgreSQL Database

Ensure you have PostgreSQL installed on your system. Then create the database:

```bash
psql -U postgres
CREATE DATABASE bike_servicing_api;
```

### 5. Run Prisma Migrations

Once your PostgreSQL database is set up, run the following command to apply the schema to the database:

```bash
npx prisma migrate dev
```

This will create the necessary tables in your database.

### 6. Generate Prisma Client

Generate the Prisma client after the migration:

```bash
npx prisma generate
```

### 7. Start the Server

Run the server:

```bash
npm run start:dev
```

Your backend should now be running on [http://localhost:6000](http://localhost:6000).

---

## **Key Features**

1. **Customer Management**
   - Add, update, delete, and retrieve customer details.
2. **Bike Management**

   - Add, update, delete, and retrieve bikes linked to customers.

3. **Service Management**

   - Create new service records for bikes.
   - Track the status of services (pending, in-progress, completed).

4. **Pending & Overdue Services**

   - Fetch services that are pending or overdue (older than 7 days).

5. **Status Updates**

   - Mark services as completed with the option to specify the completion date.

6. **API Responses**
   - Standardized response format with success status, messages, and relevant data.

---

## **Project Structure**

```bash
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   ├── Customer/
│   │   │   ├── Bike/
│   │   │   └── Service/
│   │   ├── shared/
│   ├── prisma/
│   └── server.ts
├── .env
├── package.json
└── README.md
```

---

## **Contributing**

If you'd like to contribute to this project, feel free to fork the repository and create a pull request. Please make sure to follow the **commit guidelines** and include a clear description of your changes.

---
