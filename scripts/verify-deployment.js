const fs = require('fs');
const path = require('path');

// Function to check if required files exist
function checkRequiredFiles() {
  const requiredFiles = [
    'index.html',
    '_next/static/css/',
    '_next/static/chunks/',
    '.htaccess'
  ];

  console.log('Checking required files for cPanel deployment...\n');

  let allFilesExist = true;

  requiredFiles.forEach(file => {
    const filePath = path.join('out', file);
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${file} - Found`);
    } else {
      console.log(`✗ ${file} - Missing`);
      allFilesExist = false;
    }
  });

  console.log('\n' + '='.repeat(50));

  if (allFilesExist) {
    console.log('✅ All required files are present for deployment!');
    console.log('You can now upload the contents of the "out" directory to your cPanel.');
  } else {
    console.log('❌ Some required files are missing.');
    console.log('Please run "npm run build:static" again to regenerate the build.');
  }

  return allFilesExist;
}

// Function to check file encoding
function checkFileEncoding() {
  const indexPath = path.join('out', 'index.html');
  
  try {
    const content = fs.readFileSync(indexPath, 'utf8');
    console.log('\nChecking file encoding...\n');
    
    // Check for any encoding issues
    try {
      JSON.parse(JSON.stringify(content));
      console.log('✓ index.html - No encoding issues detected');
      return true;
    } catch (parseError) {
      console.log('✗ index.html - Encoding issues detected');
      console.log('Error:', parseError.message);
      return false;
    }
  } catch (readError) {
    console.log('✗ index.html - Could not read file');
    console.log('Error:', readError.message);
    return false;
  }
}

// Run checks
const filesOk = checkRequiredFiles();
const encodingOk = checkFileEncoding();

console.log('\n' + '='.repeat(50));
if (filesOk && encodingOk) {
  console.log('🎉 Deployment readiness check: PASSED');
  console.log('Your project is ready to be deployed to cPanel!');
} else {
  console.log('⚠️  Deployment readiness check: FAILED');
  console.log('Please fix the issues above before deploying.');
}