const fs = require("fs");

/**
 * Remove all double quotes inside a file.
 * @param {string} filePath - The path to the file.
 */
const removeDoubleQuotes = (filePath) => {
  try {
    // Read the content of the file
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Remove double quotes from the content
    const modifiedContent = fileContent.replace(/"/g, "");

    // Write the modified content back to the file
    fs.writeFileSync(filePath, modifiedContent);

    console.log(`Double quotes removed successfully from file: ${filePath}`);
  } catch (error) {
    // Throw an error for better handling
    throw new Error(
      `Error removing double quotes from file: ${filePath} - ${error.message}`
    );
  }
};

// Example usage
// const filePath = "./user.js";
// removeDoubleQuotes(filePath);

module.exports = {
  removeDoubleQuotes,
};
