# Weather Widget

A responsive and user-friendly weather widget application built using **React** and **Vite**. It provides real-time weather updates for any city using the **OpenWeatherMap API**.

---

## Features

- Real-time weather information
- City-based search functionality
- Clean and responsive design
- API error handling and user feedback

---

## Technology Stack

- **Frontend:** React, Vite
- **API:** OpenWeatherMap
- **Styling:** CSS

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**  
    ```bash
    git clone https://github.com/lavanyamahalle/weather-widget.git
    cd weather-widget
    ```

2. **Install Dependencies**  
    ```bash
    npm install
    ```

3. **Configure API Key**  
    - Get your API key from [OpenWeatherMap](https://openweathermap.org/api).
    - Create a `.env` file in the root directory:
      ```bash
      VITE_API_KEY=your_api_key_here
      ```
    - The API key will be used as:
      ```javascript
      const apiKey = import.meta.env.VITE_API_KEY;
      ```

4. **Run the Application**  
    ```bash
    npm run dev
    ```
    Access the application at: [http://localhost:5173](http://localhost:5173)

---

## Scripts

- `npm run dev` → Start development server  
- `npm run build` → Build for production  
- `npm run preview` → Preview production build  
- `npm run lint` → Lint the code using ESLint  

---

## Contribution

Contributions are welcome! If you'd like to report a bug, suggest a feature, or contribute to the codebase, follow these steps:  
1. Fork the repository  
2. Create a branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add your message here'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a pull request  

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any queries or collaboration opportunities, please reach out via:  
- **Email:** lavanyamahalle@example.com  
- **GitHub:** [lavanyamahalle](https://github.com/lavanyamahalle)

---

**© 2025 Lavanya Mahalle. All Rights Reserved.**
