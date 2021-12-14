function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!'
  }
  else if (ride <= 2499) {
    return 'I will gladly take your thirty bucks.'
  }
  if (ride >= 2501) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(Tip){
  switch (Tip) {
    case ('generous'):
        return 'Thank you so much.';
    case ('not as generous'):
        return 'Thank you.';
    default:
        return 'Bye.';
  }
}