const park = ['OSO', 'OOO', 'OXO', 'OOO'];
const routes = ['E 2', 'S 3', 'W 1'];

const currentPos = {};
const maxRow = park.length - 1;
const maxColumn = park.at(0).length - 1;

park.forEach((row, i) => {
  if (row.includes('S')) {
    currentPos.row = i;
    currentPos.col = row.search(/S/);
  }
});

routes.forEach(route => {
  const [op, n] = route.split(' ');

  for (let i = 0; i < +n; i++) {
    const nextPos = { ...currentPos };

    switch (op) {
      case 'N':
        nextPos.row -= 1;
        break;
      case 'S':
        nextPos.row += 1;
        break;
      case 'W':
        nextPos.col -= 1;
        break;
      case 'E':
        nextPos.col += 1;
        break;
      default:
        break;
    }
  }

  // 검사
});

console.log(currentPos);
