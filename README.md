<p align="center">
  <img src="JWU_FULL_LOGO.png" alt="Jason Wang University Full Logo" width="300"/>
</p>

<h1 align="center">Jason Wang University - JWU Interactive Portal</h1>

<p align="center">
  <em>"Studium auto-summa vis est."</em><br/>
  (Self-study is your greatest strength.)
</p>

<p align="center">
  <img alt="Build" src="https://img.shields.io/badge/build-passing-brightgreen"/>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-Ambiguously-orange"/>
  <img alt="Rank" src="https://img.shields.io/badge/World%20Rank-%2323,625-red"/>
</p>

---

## 🏛️ Overview

Welcome to the official repository for the Jason Wang University (JWU) Interactive Portal. This project represents the digital forefront of JWU, an institution ambiguously founded on April 1, 2025, dedicated to the principles of extreme self-reliance and the masterful avoidance of conventional academic rigor.

This web application serves as the primary interface for prospective and current students, embodying the university's unique philosophy through interactive features and carefully curated information. Built with foundational web technologies, it offers a glimpse into the unparalleled experience of self-directed "learning" at JWU.

## ✨ Key Features

This initial release (v0.1 - Genesis) showcases the core functionalities reflecting JWU's distinct educational paradigm:

* **Dynamic Single-Page Application (SPA) Interface:** Seamless navigation between key university sections (Home, Academics, Admissions, About) without page reloads, providing a fluid user experience.
* **Adaptive Theming:** Features both Light and Dark Mode themes, respecting user system preferences or allowing manual toggling for optimal viewing comfort. The theme persists across sessions using `localStorage`.
* **Interactive Particle Background:** A visually engaging, animated particle system rendered on an HTML Canvas, adding a layer of sophisticated ambiance. The particle color adapts dynamically to the selected theme.
* **Glassmorphism UI:** Modern user interface design employing frosted glass effects (`backdrop-filter`) for cards and containers, enhancing aesthetic appeal.
* **Responsive Design:** Adapts layout and styling for various screen sizes, ensuring accessibility across desktops, tablets, and mobile devices.
* **🚨 Admission Letter Generator:** A flagship feature allowing users to instantly generate their *own* personalized (and binding?) JWU admission letter in PDF format. Utilizes the `jsPDF` library for client-side PDF creation.
    * Customizable fields: Student Name, Program Type (Undergraduate, Master's, PhD, 3+2), Major, College/School.
    * Optional fields: Partner University (for 3+2), Scholarship Details, Admission to the prestigious "Commonshit Honors College".
* **Satirical Content Delivery:** Presents information about JWU's unique approach to:
    * <span style="color: #4f4758;">■</span> **Customizable Academics:** Flexible, self-tailored programs leading to "unprofessional results".
    * <span style="color: #4f4758;">■</span> **Self-Mentorship:** Mastery achieved with no materials or peer support.
    * <span style="color: #4f4758;">■</span> **No Community:** Encouraging creativity in isolation.
    * <span style="color: #4f4758;">■</span> **Forget Research:** Interest-based exploration over innovation.
    * <span style="color: #4f4758;">■</span> **Non-existing Environment:** Leveraging third-party cafes and home environments.
    * <span style="color: #4f4758;">■</span> **Fucked-up Skills:** Developing resilience against criticism and PUA.

### 📜 Changelog
* **v1 (General Update) - 2025-03-31**
    * Fixed tons of bugs.
* **v0.2 (Bilingual Update) - 2025-03-30**
    * Added bilingual support (EN-US/简体中文).
    * Implemented language switching links.
    * Added Changelog section.
    * Updated version badge to v0.2.
* **v0.1 (Genesis) - Initial Release**
    * Initial release of the JWU Interactive Portal.
    * Includes core Single-Page Application (SPA) functionality.
    * Adaptive Light/Dark theming with `localStorage` persistence.
    * Interactive particle background adapting to theme.
    * Glassmorphism UI elements.
    * Responsive design for various screen sizes.
    * Flagship Admission Letter Generator (PDF) using `jsPDF`.
    * Foundational satirical content outlining JWU's unique approach.

## 💻 Technology Stack

JWUOSv0.1 is meticulously crafted (or perhaps hastily assembled) using fundamental, yet powerful, web technologies:

* **Frontend:** HTML5, CSS3 (including CSS Variables & Media Queries)
* **Interactivity:** Vanilla JavaScript (ES6+)
* **PDF Generation:** jsPDF Library (v2.5.1 via CDN)
* **Styling Philosophy:** Glassmorphism, Responsive Design, Adaptive Theming
* **Fonts:** Google Sans, Roboto (via Google Fonts)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jason Wang University - JWUOSv0.1</title>
    <script src="[https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)"></script>
    <style>/* ... CSS Rules ... */</style>
  </head>
  <body>
    <canvas id="particle-canvas"></canvas>
    <div class="container">
      </div>
    <script>/* ... JavaScript Logic ... */</script>
  </body>
</html>
```

## 🚀 Getting Started

To explore the Jason Wang University portal locally:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/jason-wang-university.git](https://www.google.com/search?q=https://github.com/your-username/jason-wang-university.git)
    cd jason-wang-university
    ```
2.  **Obtain Assets:** Ensure you have the necessary image assets in the root directory:
    * `JWU_BLK_LOGO.png`
    * `JWU_FULL_LOGO.png`
    * `signature.png` (Note: This is referenced for the PDF generator)
3.  **Open the Portal:** Simply open the `index.html` file in your preferred web browser.
    * On macOS: `open index.html`
    * On Windows: `start index.html`
    * On Linux: `xdg-open index.html`

No complex build steps or dependencies are required, reflecting JWU's commitment to minimalist overhead.

## 🧭 Usage

* **Navigation:** Use the header links (Home, Academics, Admissions, About) or click the University Logo to switch between sections.
* **Theme Toggle:** Click the "Toggle Theme" button in the header to switch between light and dark modes.
* **Admission Letter Generator:**
    1.  Navigate to the "Admissions" section.
    2.  Locate the "Admission Letter Generator" card.
    3.  Fill in the required fields (Student Name, Major, College/School).
    4.  Select the appropriate Program Type. If "3+2 Program" is chosen, specify the Partner University.
    5.  Optionally, enter Scholarship details and check the box for Honors College admission.
    6.  Click the "Generate PDF" button.
    7.  Your personalized admission letter PDF will be generated and downloaded by your browser.

## 🎓 Academics at JWU (Abridged)

JWU offers a unique, self-directed academic experience ranked #23,625 globally.

* **Degree Programs:** Bachelor of Science (curiosity-driven), Master's (unspecialized self-study), PhD (formulaic research at own expense), 3+2 Programs (with select partners like Wild Chicken University).
* **Major Fields:** Utilize the renowned "Build Your Major" program for true academic autonomy, perfectly suited to your unique temperament.
* **Recommended AI Minors:** While not formally offered, JWU *recommends* exploring minors such as Applied ChatGPT Writing, Advanced Gemini Imagen 3 Art History, Creative Claude Chatting, and 100 Percent AI Generated Code.
* **The JWU Commonshit Honors College:** For those demonstrating exceptional talent in self-indulgence or academic folly, offering the exact same nonexistent privileges but with a uselessly powerful title.

## 📜 About & Mission

Founded amidst midterm meltdowns and failed social connections, JWU steadfastly avoids innovation, catering to the extremely self-reliant and socially confused. It thrives as an immaterial entity centered around the student's immediate environment (dorm table goo, coffee shop detritus, park benches). This spirit of "shitism" defines JWU as a proudly wild-listed institution technically accepting anyone.

**Mission Statement:**

> Jason Wang University's name and spirit are derived from one man's valiant efforts to minimize external obligations. The university exists entirely within the student's radius of hardware and instant caffeine (or marijuana high if you are in California and Canada), all of which are magnets for shunning talented, ambitious individuals.
>
> Thriving within strict personal boundaries and spanning zero verifiable disciplines, JWU has become the world's most minimalist platform for circumventing the challenges of learning, teaching, researching, building knowledge, and inventing new ways to ignore the human condition. Its students draw strength from the stimulating power of unfiltered internet access by mastering procrastination, barely expressing themselves online, and excelling at avoiding demanding careers. Jason Wang University's mission is to be a cozy, bottom-tier international hub. This includes not retaining any faculty, encouraging students to create projects that attract no funding, and providing an environment of intellectual void. Jason Wang University seeks to leverage the academic disadvantage of its completely inconvenient location and embrace uniformity to ensure a single, unwavering point of view in the educational void.

## 🤝 Contributing

While JWU champions self-reliance, contributions that enhance the portal's satirical reflection of the university's ethos *might* be considered. Please adhere to standard GitHub flow (fork, branch, pull request). Ensure contributions maintain the project's high standards of academic parody and technical simplicity.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` (if one existed) for more information. In the spirit of JWU, consider all code public domain, but use it at your own peril.

## 🙏 Acknowledgements

* **jsPDF:** For enabling the crucial Admission Letter Generator functionality.
* **The Concept of Higher Education:** For providing such fertile ground for parody.
* **Jason Wang:** The inspirational figurehead.

---

<p align="center">
  <img src="JWU_BLK_LOGO.png" alt="Jason Wang University Block Logo" width="100"/>
</p>
<p align="center">
  &copy; 2025 Jason Wang University. All rights reserved.
</p>
