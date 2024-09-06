   const express = require('express');
   const app = express();
   app.use(express.static('public'));
   app.get('/', (req, res) => {
     res.send(`
       <html>
         <head>
           <title>CETA 主页</title>
           <link rel="stylesheet" href="/styles.css">
         </head>
         <body>
           <h1>欢迎来到 CETA 组织的网站</h1>
           <p>qwq</p>
         </body>
       </html>
     `);
   });
