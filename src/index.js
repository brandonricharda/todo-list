import domController from "./domController";
import objectCreationController from "./objectCreationController";

// activate the default DOM controls (i.e. New Project and New Task buttons)
let domControls = domController();
// activate the object creation controller
let objectCreationControls = objectCreationController();

export { objectCreationControls, domControls };