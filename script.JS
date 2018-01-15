var weapon = prompt('you search around franticly for a weapon. What do you choose? A crossbow, an axe, or a rubber chicken?');
var randomNumber = Math.round(Math.random());

alert('It is the zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door!');
alert('You attack the zombie with your' + ' ' + weapon);

if (randomNumber === 0) {
  alert('You fail pittifuly. The zombie bites your face, you slowly turn into the rambling hell you were allways affraid of!');
} 

else if (randomNumber === 1) {
  alert('You defeat the zombie with your' + ' ' + weapon + ' ' + 'causing the zombie to slump to the floor. You survive to live another fraught, PTSD enducing day!');
}
