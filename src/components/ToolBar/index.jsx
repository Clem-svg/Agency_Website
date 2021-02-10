/* eslint-disable no-unused-vars */
import React from 'react';
import ThemeChoice from '../ThemeChoice';

// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
const ToolBar = (props) => (
  <div>
    <ThemeChoice />
  </div>
);

export default ToolBar;
