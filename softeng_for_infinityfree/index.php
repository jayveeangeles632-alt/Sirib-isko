<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sirib i-Sko | PGIN Scholarship Management System</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- External Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
  
  <!-- Chart.js -->
  <script src="js/chart.umd.min.js"></script>
  <script>window.Chart || document.write('<script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>')</script>
</head>
<body>
  <!-- Main Application Containers -->
  <div id="app"></div>
  <div id="modalRoot"></div>
  <div id="toastRoot"></div>

  <!-- Firebase SDK (Compat Version for Vanilla JS) -->
  <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
  <script src="js/firebase-config.js"></script>

  <!-- Application Logic -->
  <script src="js/app.js"></script>
</body>
</html>
