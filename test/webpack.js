//following instructions from https://www.codementor.io/reactjs/tutorial/test-reactjs-components-karma-webpack
// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
var context = require.context('./src', true, /.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);