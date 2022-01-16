import ico from "./images/favicon.ico";
import "./sass/theme.scss";

import "./js/custom.js";

// Get all required images
require.context("./images", false, /\.(png|jpe?g|svg|ico)$/);
