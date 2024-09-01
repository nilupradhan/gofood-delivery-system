# GoFood Delivery System

GoFood is a dynamic and user-friendly food delivery system built using the MERN stack (MongoDB, Express, React, Node.js). The platform enables users to browse through a variety of restaurants, select meals, customize their orders, and have their favorite food delivered to their doorstep.

## Features

- **User Authentication:** Secure login and registration using JWT for authentication.
- **Cart Functionality:** Users can add or remove items from the cart. Duplicate items are combined, updating the quantity in the cart.
- **Real-Time Order Updates:** Track the order status from preparation to delivery with real-time updates.
- **Customizable Orders:** Users can customize their food orders (e.g., toppings, add-ons) before placing them.
- **Order History:** Keeps a history of past orders for easy reordering.
- **Responsive Design:** Optimized for all screen sizes, providing a seamless experience on both desktop and mobile devices.

## Technologies Used

- **Frontend:** React, Redux for state management, CSS3, HTML5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB for storing user data, orders, and restaurant details
- **Authentication:** JWT (JSON Web Token)
- **Real-Time Updates:** WebSockets or polling for live order tracking

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/username/gofood-delivery-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gofood-delivery-system
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables for the database and JWT secret.

5. Run the app:
   ```bash
   npm start
   ```

## Future Improvements

- **Restaurant Management Dashboard:** Allowing restaurants to manage their menus, orders, and delivery status.
- **Delivery Tracking:** Implementing live GPS tracking for delivery partners.
