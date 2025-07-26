const certifications = [
  "Cisco CCNA: Introduction to Networks",
  "Salesforce Administrator Superbadge",
  "Google Digital Marketing",
  "AWS Cloud Practitioner Essentials",
  "Java Programming – HackerRank"
];

const certList = document.getElementById("certList");

certifications.forEach(cert => {
  const li = document.createElement("li");
  li.textContent = cert;
  certList.appendChild(li);
});
