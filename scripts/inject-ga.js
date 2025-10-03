const fs = require('fs');
const path = require('path');

// Google Analytics script to inject
const gaScript = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VS7D4ZET79"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VS7D4ZET79');
</script>`;

// Function to inject GA script into HTML files
function injectGA(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if GA script is already injected
    if (content.includes('gtag/js?id=G-VS7D4ZET79')) {
      console.log(`GA script already present in ${filePath}`);
      return;
    }
    
    // Inject GA script before closing </head> tag
    if (content.includes('</head>')) {
      content = content.replace('</head>', `${gaScript}</head>`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`GA script injected into ${filePath}`);
    } else {
      console.log(`No </head> tag found in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to walk through directory and process HTML files
function processDirectory(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (stat.isFile() && path.extname(file) === '.html') {
        injectGA(filePath);
      }
    });
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

// Process the out directory
const outDir = path.join(__dirname, '..', 'out');

if (fs.existsSync(outDir)) {
  console.log('Injecting Google Analytics script into HTML files...');
  processDirectory(outDir);
  console.log('Google Analytics injection completed!');
} else {
  console.error('Out directory not found. Please run the build first.');
}