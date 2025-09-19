const fs = require('fs');

// Read the file with explicit encoding
try {
  const content = fs.readFileSync('out/index.html', 'utf8');
  console.log('File read successfully with UTF-8 encoding');
  console.log('File length:', content.length);
  
  // Try to parse as JSON to see if there are any encoding issues
  // This might reveal hidden encoding problems
  try {
    JSON.parse(JSON.stringify(content));
    console.log('File content can be processed without encoding issues');
  } catch (parseError) {
    console.log('Error parsing file content:', parseError.message);
    // Try to find the position of the error
    const errorMessage = parseError.message;
    const positionMatch = errorMessage.match(/position (\d+)/);
    if (positionMatch) {
      const position = parseInt(positionMatch[1]);
      console.log('Error at position:', position);
      const start = Math.max(0, position - 50);
      const end = Math.min(content.length, position + 50);
      console.log('Context:', content.substring(start, end));
    }
  }
} catch (readError) {
  console.log('Error reading file:', readError.message);
}