// @ts-check

/**
 * To get this ConfigFile type
 * `npm run relay-config-gen`
 */

/** @type {import("./src/relay/relay-config").ConfigFile}} */
const config = {
  src: "./src",
  schema: "./src/graphql/server/schema.graphql",
  language: "typescript",
  artifactDirectory: "./src/__generated__",
  useImportTypeSyntax: true,
  eagerEsModules: true,
};

module.exports = config;
