FakeStore Website
Author
Mary Fobbs‑Guillory

Table of Contents
Introduction

Features

Prerequisites

Installation

Usage

Screenshots

Collaborators

Credits

Introduction
This project is a React-based website styled with Bootstrap and powered by the FakeStore API. The goal was to practice breaking a larger interface into smaller, reusable components and connecting them through React Router. Each component was built and tested individually, then integrated into the full site.

A notable challenge involved the product details page. Even though the route path appeared correct, the “View Details” button wouldn’t open the component. After several rounds of debugging and renaming components with CoPilot’s help, the issue resolved and the details view rendered properly.

Features
React component architecture with modular structure

Bootstrap styling for layout, cards, buttons, and responsive design

API integration with FakeStore API for real-time product data

Product listing and product detail views

Navigation built with React Router

Clean, organized folder structure for scalability

Prerequisites
Before running this project, ensure you have:

Node.js and npm installed

A code editor such as VS Code

Internet connection for API calls

Installation
To access and run the project locally:

bash
1. git clone https://github.com/mfobbsie/FakeStoreWebsiteBootstrapBasics
2. cd FakeStoreWebsite
3. npm install
4. npm start
The site will open in your browser at http://localhost:3000/.

Usage
Browse the product listing page to view all items from the FakeStore API.

Click View Details on any product card to open the product detail page.

Explore the layout and styling built with Bootstrap components.

Screenshots
Add screenshots to visually showcase your project. Suggested placeholders below:

Homepage Screenshot  
<img width="1152" height="555" alt="Screenshot 2026-02-26 at 10 05 34 PM" src="https://github.com/user-attachments/assets/a98cb684-4dc0-4652-8d32-91bcce0d56ec" />
<img width="531" height="260" alt="Screenshot 2026-02-26 at 10 06 25 PM" src="https://github.com/user-attachments/assets/0ec6a7a8-deba-4eb7-9950-b4f9d1729cda" />

Product Listing Screenshot  
<img width="1039" height="847" alt="Screenshot 2026-02-26 at 10 07 12 PM" src="https://github.com/user-attachments/assets/4490f5c5-9686-40e6-adc8-5ad70e5bfe92" />


Product Details Screenshot  
<img width="1058" height="897" alt="Screenshot 2026-02-26 at 10 07 37 PM" src="https://github.com/user-attachments/assets/e26cb5cf-e5b8-46ce-91fb-a05cae8f1c3c" />

Add Product Form
<img width="1051" height="696" alt="Screenshot 2026-02-26 at 10 08 37 PM" src="https://github.com/user-attachments/assets/d0271652-9c17-4168-a984-cf858afda909" />

Edit Product Form
<img width="1060" height="731" alt="Screenshot 2026-02-26 at 10 08 21 PM" src="https://github.com/user-attachments/assets/d77e06ef-0369-497b-baa4-6a320435fb37" />

Collaborators
Coding Temple Bootcamp

CoPilot (VS Code)

Credits
Bootstrap

FakeStore API

React
