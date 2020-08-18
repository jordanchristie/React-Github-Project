import React from "react";
import { render } from "react-dom";
import Routes from "./Routes/Routes";
import * as styles from "./Style/style.css";

render(<Routes style={styles} />, document.getElementById("root"));
