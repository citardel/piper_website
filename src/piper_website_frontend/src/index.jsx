import * as React from "react";
import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";


// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component insteads
const root = createRoot(document.getElementById('app'));
root.render(<h1><App/></h1>);


