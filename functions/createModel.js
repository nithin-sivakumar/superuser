const fs = require("fs");
const mongoose = require("mongoose");
const { removeDoubleQuotes } = require("./quoteRemover");

/**
 * Checks if a given string is a valid JavaScript identifier.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - True if the string is a valid JavaScript identifier, false otherwise.
 */
const isValidIdentifier = (str) => {
  return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(str);
};

/**
 * Creates a Mongoose model based on user-defined fields and writes the model to a file.
 * @param {Object} fields - The user-defined fields for the Mongoose schema.
 * @param {string} modelName - The name for the Mongoose model and the file.
 * @throws {Error} - Throws an error if modelName is not a valid JavaScript identifier.
 * @returns {Model} - The Mongoose model.
 */
const createModel = (fields, modelName) => {
  if (!isValidIdentifier(modelName)) {
    throw new Error(
      `Invalid modelName: "${modelName}" is not a valid JavaScript identifier.`
    );
  }

  // Check if the model already exists
  if (mongoose.models[modelName]) {
    console.log(`Model "${modelName}" already exists. Skipping creation.`);
    return mongoose.models[modelName];
  }

  const path = `./model/${modelName}.js`;

  const schemaDefinition = {};

  for (const fieldName in fields) {
    const fieldOptions = fields[fieldName];
    // Handle the case where the field options are the type directly (e.g., String)
    if (typeof fieldOptions === "function") {
      schemaDefinition[fieldName] = { type: fieldOptions };
    } else {
      schemaDefinition[fieldName] =
        typeof fieldOptions === "object"
          ? fieldOptions
          : { type: fieldOptions };
    }
  }

  const schema = new mongoose.Schema(schemaDefinition);
  const model = mongoose.model(modelName, schema);

  console.log(`Model "${modelName}" schema created successfully.`);

  const fileContent = `const mongoose = require('mongoose');
/**
 * Mongoose schema definition for the ${modelName} model.
 */
const ${modelName}Schema = new mongoose.Schema(${JSON.stringify(
    schemaDefinition,
    null,
    2
  )});
/**
 * Mongoose model for the ${modelName} schema.
 */
const ${modelName} = mongoose.model('${modelName}', ${modelName}Schema);

module.exports = ${modelName};`;

  try {
    fs.writeFileSync(path, fileContent);
    console.log(`Model "${modelName}" file created successfully.`);
  } catch (error) {
    console.error(`Error creating file for model "${modelName}":`, error);
  }

  removeDoubleQuotes(path);

  return model;
};

module.exports = createModel;
