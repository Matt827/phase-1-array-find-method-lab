function superbowlWin(arrayOfObjects) {
    const win = arrayOfObjects.find(game => game.result === "W");
    return win ? win.year : undefined;
  }