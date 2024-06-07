// #region SERVER CODE
/***************************** SERVER CODE STARTS HERE *****************************/
const express = require('express');

const app = express();
const port = 8000;

// Start express server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
/***************************** SERVER CODE ENDS HERE *****************************/
// #endregion SERVER CODE