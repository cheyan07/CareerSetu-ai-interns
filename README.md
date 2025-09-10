# CareerSetu: Your Personal AI Internship Guide

[![SIH 2025](https://img.shields.io/badge/SIH-2025-blue.svg)](https://sih.gov.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An AI-powered internship recommendation engine designed for the PM Internship Scheme, specifically tailored for the youth of India from diverse backgrounds. CareerSetu aims to bridge the information gap and provide personalized, accessible career guidance.

---

## 🎯 The Problem

Youth across India, especially from **rural areas, tribal districts, and urban slums**, face a significant challenge when applying for internships. As first-generation learners with limited digital exposure, they are often overwhelmed by hundreds of listings. This leads to:
* **Information Overload:** Inability to identify relevant opportunities.
* **Misaligned Applications:** Applying for internships that don't match their skills or aspirations.
* **Missed Opportunities:** Overlooking ideal internships due to a complex discovery process.

---

## ✨ Our Solution: CareerSetu

CareerSetu is a simple, lightweight, and intelligent platform that acts as a personal career guide. It provides **3-5 highly relevant internship suggestions**, making the choice clear and informed.

### Key Features

* **🤖 Conversational AI ("Sarathi"):** A friendly guide that helps users build their profile through simple questions, breaking down digital literacy barriers.
* **🧠 Smart Hybrid Recommendations:** Combines **Content-Based Filtering** (matching your skills) and **Collaborative Filtering** (what similar students liked) to give you the best of both worlds and solve the "cold-start" problem.
* **📱 Mobile-First & Accessible:** A clean, intuitive UI with minimal text and visual cues, designed to work flawlessly on low-end smartphones.
* **🌐 Multilingual Support:** Built to be adapted for regional languages, ensuring inclusivity for all users.

---

## 🛠️ Technology Stack

We use a modern, lightweight, and scalable tech stack for rapid development and deployment.

### Frontend
* **Vite:** High-performance build tool for a blazing-fast development experience.
* **React:** A declarative, efficient, and flexible JavaScript library for building user interfaces.
* **TypeScript:** Strong typing for robust and maintainable code.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **shadcn-ui:** Re-usable components built using Radix UI and Tailwind CSS.

### Backend
* **Node.js:** A lightweight and efficient JavaScript runtime.
* **Express.js:** A fast, unopinionated, minimalist web framework for Node.js APIs.
* **TensorFlow.js (for AI Model):** Enables running machine learning models directly in Node.js, keeping the stack unified.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your machine.
* [Node.js (LTS version recommended)](https://nodejs.org/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/careersetu.git](https://github.com/your-username/careersetu.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd careersetu
    ```
3.  **Install Frontend Dependencies (assuming a `client` folder):**
    ```bash
    cd client
    npm install
    ```
4.  **Install Backend Dependencies (assuming a `server` folder):**
    ```bash
    cd ../server
    npm install
    ```

### Running the Application

1.  **Start the Backend Server:**
    (In the `/server` directory)
    ```bash
    npm run dev
    ```
2.  **Start the Frontend Development Server:**
    (In a new terminal, in the `/client` directory)
    ```bash
    npm run dev
    ```
The application should now be running on `http://localhost:5173` (or another port if specified).

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
