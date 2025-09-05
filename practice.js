const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/home') {
    res.write('<h1>Welcome to Home</h1>');
    return res.end();
  } else if (req.url === '/men') {
    res.write('<h1>Welcome to Men</h1>');
    return res.end();
  } else if (req.url === '/women') {
    res.write('<h1>Welcome to Women</h1>');
    return res.end();
  } else if (req.url === '/kids') {
    res.write('<h1>Welcome to Kids</h1>');
    return res.end();
  } else if (req.url === '/cart') {
    res.write('<h1>Welcome to Cart</h1>');
    return res.end();
  }

  if (req.url === '/submit-details' && req.method === 'POST') {
    fs.writeFileSync('output.txt', 'hello from hitesh this is my first fs command');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body>');
    res.write(`
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
      <h1>Enter Your Details:</h1>
      <form action="/submit-details" method="POST">
        <input type="text" name="username" placeholder="Enter your name"><br>
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" />
        <br><input type="submit" value="Submit">
      </form>
    `);
    res.write('</body></html>');
    return res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
