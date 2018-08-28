//Create an array of adjectives or adverbs
var quotes = [
	"PKP",
  "Colt M1911A2",
  "FGM-148 Javelin",
  "LSAT LMG",
  "Nerf Gun(Non-Lethal)",
  "Barrett M82",
  "M249 SAW",
  "M4 Grenadier, Customized",
  "Rsh 12.7, Customized",
  "IMI Desert Eagle",
  "Dillon Aero M134D, Customized",
  "M60E4 Grenadier, Customized",
  "Mk14 EBR",
  "M1911 Operator",
  "MP5K, Customized",
  "MP7, Customized",
  "Target Designator/Rangefinder",
  "M9 Berreta",
  "Mauser C96",
  "Luger P08",
  "Saiga-12, Customized",
  "SPAS-12",
  "Barrett M98 Bravo",
  "XR-9 Vaporizer",
  "M134D Blood Dragon",
  "HK-41",
  "G36, Customized",
  "M2 Flamethrower(RESTRICTED USE)",
  "L86 LMG",
  "MG3/MG42",
  "Thumper Grenade Launcher",
  "M82 MGL",
  "Browning M1919A1 .30 cal",
  "VSS Vintorez, Customized",
  "FIM-92 Stinger",
  "Operative-class Exo, Customized",
  "Toolgun(Gmod)",
  "McMillan Tac-50",
  "SCAR-H Grenadier, Customized",
  "Taser(Non-Lethal)"
];
//Ask user for his or her name
var login = prompt("Enter a Callsign");
//Generate random number
var x = Math.floor(Math.random() * quotes.length);
//Let user know what kind of person they are. For example, username followed or preceded by the array item
window.alert(login + " has aquired " + quotes[x]);
