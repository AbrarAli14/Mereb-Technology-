# Mereb Technology Test - Ping App

A full-stack application built by **Abrar Ali** for Mereb Technology, featuring a React frontend and PHP REST backend, deployed with Docker.

## Overview
This app allows users to send a custom string via a "Ping" button, which is processed by a PHP backend and displayed on the frontend. It includes a resume section showcasing my experience as a Full-Stack Web Developer at Sebez System Technology.

## Features
- **Ping Test**: Input a string, click "Ping To Me 😜", and see the response (e.g., "hello" → "Response: hello").
- **Resume Section**: Highlights my skills (Laravel, React, Next.js, Tailwind CSS, Docker) and links to GitHub, Portfolio, and LinkedIn.
- **Design**: Modern UI with Outfit font, Tailwind CSS, and animations (fade-in, hover effects, slide-in).
- **Testing**: Backend tested with PHPUnit.
- **Dockerized**: Portable setup with `docker-compose`.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/AbrarAli14/Mereb-Technology-.git
   cd Mereb-Technology-




2. Navigate to: `cd project`
3. Run: `docker-compose up --build`
4. Open `http://localhost:3000`.

## Usage
- Enter a string in the "Ping Test" input and click "Ping" to see the response.
- Explore the "About Me" section with links to GitHub, Portfolio, and LinkedIn.

## Testing
- Backend: `docker-compose exec backend ./vendor/bin/phpunit tests`

