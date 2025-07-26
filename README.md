# SatyaPortfolio
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tanavarapu Satya Priya | Portfolio</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>
  <header>
    <h1>Tanavarapu Satya Priya</h1>
    <p>Computer Science Student | Full Stack Developer</p>
  </header>

  <nav>
    <ul>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#certifications">Certifications</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
  </nav>

  <section id="skills">
    <h2>My Skills</h2>
    <ul class="skill-list">
      <li>HTML, CSS, JavaScript</li>
      <li>React.js, Node.js, MongoDB</li>
      <li>Java, OOP, Data Structures</li>
      <li>MySQL</li>
      <li>Git, GitHub</li>
    </ul>
  </section>

  <section id="certifications">
    <h2>Certifications</h2>
    <ul class="cert-list" id="certList">
      <!-- Will be injected via JavaScript -->
    </ul>
    <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li><strong>Online Quiz System</strong> – Java-based GUI quiz application</li>
      <li><strong>Expense Tracker Web App</strong> – Tracker with Graphs</li>
    </ul>
  </section>


  <footer>
    <p>Contact: satyapriya0024@gmail.com | © 2025 Tanavarapu Satya Priya</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>


{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

header {
  text-align: center;
  padding: 40px 0;
  background: #333;
  color: #fff;
}

nav ul {
  list-style: none;
  background: #444;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

section {
  margin: 40px auto;
  max-width: 800px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.skill-list, .cert-list {
  list-style-type: square;
  padding-left: 20px;
}

footer {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background: #333;
  color: white;
}
