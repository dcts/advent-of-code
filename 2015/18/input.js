const ROWS = [
    '####.#.##.###.#.#.##.#..###.#..#.#.#..##....#.###...##..###.##.#.#.#.##...##..#..#....#.#.##..#...##',
    '.##...##.##.######.#.#.##...#.#.#.#.#...#.##.#..#.#.####...#....#....###.#.#.#####....#.#.##.#.#.##.',
    '###.##..#..#####.......#.########...#.####.###....###.###...#...####.######.#..#####.#.###....####..',
    '....#..#..#....###.##.#.....##...#.###.#.#.#..#.#..##...#....#.##.###.#...######......#..#.#..####.#',
    '..###.####..#.#.#..##.#.#....#......#.##.##..##.#.....##.###.#..###...###.#.##..#.#..###....####.#.#',
    '#.#...#......####.#..##.####.#.#.#...##..###.##.#...#..#..###....#.#....#..##..#....##.....##.#...#.',
    '....##.#.#.#.##..##...##..##..#....#....###...####.###...##.#...#..#....##.....#..#.#####.###.###.##',
    '#...##..#.#..#....#..########.##....##..##.###..#.#..#..#.##.##.#..##..######....####..#####.#.###..',
    '.####...######.#..#.##.#.#..####...####.##.#.#......#...##....##..#...###..#.####......###......#.##',
    '.####.###..#..#####.##...###......#...###..#..##..#.#....##.##.#.##.###..#..#..###.#..#.#....####.##',
    '#..#..##.##.##.###.#.##.##.#.#.#....#....#.####.#.##...#####...###.#####.#.#.#....####..###..###..##',
    '#.##....#...########..##...#.#.##.......#.#..##...####...#.####.####..##...##.#....###.#.####...#.##',
    '#.#...##..#.##.##..##....#.....##.##.....#...###...#..#...####.##.####..#...##..##.##.##.##..##...##',
    '.#..###...#.#.....#######..##.###....##..#.##.#......###.##....#......###...#.##....#.....##......##',
    '..##....#.###...###..####.##..#..##.##......##.#.....#...#..#..##...###..#.####...#...#..##.#..##..#',
    '...#.#.#...#.#..#.##....##..#...#.##..#......#.#.....#####.##.#...#######.#.#..#.####..###.....###.#',
    '.#....#.#.##..####.#####..#.#######..#.##.###...##.##....##..###..#.##.###.......#....#..######.####',
    '#..#.##.##..#..#..##.####.#.#.#.#..#.##...#..######....#.##.#..##.##.######.###.###.###...#.....#.#.',
    '.#.......#...#.####.##...#####..##..#.#....##..#.#.#.####.#.##....#..##.##..#.###.....#.##.##.#.##.#',
    '#..##..##...#....#.##.#...#.#....#......####...##..#...##.##.#..#########..#..#.##.##..#.#.#######..',
    '#.......#####..###..######.#..##.#.#####..##...###...#.####.##...###..#.#.#####....#...#.##...#.#..#',
    '.##..#...#####.##.##......#...#.#.#.###.#.#.#...##.#..#....###.....#..#.#.###......#####.###.#..##.#',
    '.....###.#.#.#..##...#...###..#...#.#.##..###.##.#####.##..#.#.#.#.#####....#.#.#####...##.#..#.#.#.',
    '###...##.#..#.####..##.#..##.#.#.#...#.#..#..##..##..#.#.#.#.##...##..#..#.....#....#####.#.#.####.#',
    '....##....#.#.....#...###.#...##..##.##..#..###..##.###..#####..#...#####.##.#..#.#.#.###...####.###',
    '##.##.##.#...#..#...........##.##.###.#...###.####.#..#..#...#..#..####.#.###########..#.###.###.#.#',
    '##.##..##.####..###...##...#....###.###.#..##..#..#.###.#..####.#..##.#.#...#..#.#.##.##...#...#....',
    '..##...#.#.##....##...#.#.#......##.##.#.#.####.####....####.#.###.##.#.#..####..#..######..#..#.#..',
    '####.#.##.......##.###....##.#..####.#.#######..#...###..##.##..#...#...####........#.#..##...#....#',
    '#..#.#.....#..#.###..#.#...###..##...#.#..#.#.##..#...##.##.##.#.#.#..#.####.########....########..#',
    '#...#..##.##..#.#.#.##.##.##.#..#..#.##....#....###.#.###.#.#..#....#...##..#.....####...##.#..#...#',
    '.###...##...####....###.##.#..####...##.#.##.#..##..##....#....##.#...#..#..##..##..##.#...#...###..',
    '.#..##.#..##..####..#.#.##..###.#...#....##.###...#.###....#.#.#........#..#.#.#..##..#####..#..#.#.',
    '.#.##.....#..#...#.##.....#.##..#..#....#..#..#....#.##..##...#.##.##..##..#.#.#.##..####.##..#.#..#',
    '...###.#.....#...#.##.#.###.#...##..#.###..#..#..#.#..#...###.#.##.##.##.#.##.#####.#..#.#..#.#...##',
    '#.#.#.#.##.#.....##..#.###......##.#.##..#...#.########.##.###..#..#..##..##.#..##..###.#.###...#.#.',
    '..##...##...#...###.#..##..#..#..#.#.##..##......##..##.....##.....####..#.##......#..####...###..##',
    '##.......#..##....###...###......#.##.##....######..###.##...##.#...#...#.....#.###.#.#..#.##..#..#.',
    '#.#..#..#.#####.##.##.###..#...###.....#..##..####...#.#.###....#..#.#.###.####..#.#........##.#....',
    '..###.#...##.#.####.#.##.##.....##...#.##.#.###.#.#..##.#..##..#..##.##....#.#####.##..#######.....#',
    '###.###..##.#..##...#####..##.####....#.##......##......#.#....##.####.#.#.#.###...#..####..#.######',
    '#..###...#.#.......#..####.####...#....###.###...#.##..##..#..##.##.......####.##...#.#.#.##.#.#..#.',
    '..#...#..###.##..#.#.#.##..#..#.#.......###..###..#####.#.#.#.#.#..#.#.#.#..###....#.####..###...#..',
    '...######.###....#..####.####......#...#.###.#....#...####.##........##...##.#..##.###.#..#..##..###',
    '.#..###.####.###.#.#..#..#..#.##.#.#.###.##..####.#####..##....##.#.##...###.####.#.#######.#..#..#.',
    '.#..##.#..##..#...##...#..#..##.#.#....##.##...###.#.#...##..##..#.###.#.#.#.#...#....#.#..#.#.###.#',
    '.###..#.#..####.#########...####....####.#.##...##.##..#.##.#........#.....###.###.######.##.....###',
    '..##.##..##..#.####.#..#####.#....##.##.#####.....#.#......##...#####..####....###..#.#...#..####..#',
    '.#..##..##.##.##.##.#.###.###.#..#..#...###.#.##..##...##...###...##.###..#.#.#####.#.#.##....#.##..',
    '...#.#....##.#.....###.##...#..##....#...###....#..#.###...##.#...###.#....#...##..###.#.....##....#',
    '.#######..#...##.#.###.##.#.###...##......#.###.#...#.###.#.#.#..#..#####..#########...##..##...#..#',
    '.#..#.##...#.#..#.##..#.#.#.##.....####.#..#.###..##.#.#.#...#....#.#..##.######...#.#..##.##...#..#',
    '#.#######.#####..#####.##.##.#.#.##.###..#....####.#..##.##.######..###...#.#..#.####.##.##....####.',
    '...##..#...##..#..#.....#.##...#.....##.#####.###.########.######..#...###..#.##.#.#.##..#.#.##..##.',
    '#..#..#.#....###.#...##..####.#.##..#.####.###..##.#...#.###.#..#.##..#######.#...#..#.#..##.#....##',
    '..#.##.#.####..##.###.###..#.##.#.####..##....##.###.#..##.#.###.###.##.##.#####..#.#...########....',
    '.#.#.###..###...#...#..##.##......#..#...#.#.#.######.#.#...##..##........#....###..##...#..##.##...',
    '##..#....##.###...##.#.##.##.##..#....#.#.#..#..####.##..#...#...#..#..#####.###...#..###..#...#.#..',
    '##.#.#.##.###.....######.#.....#...#.##....###.#.##.#.#.##..##.######.#####....#.#####...##.#..###.#',
    '######.#...####..###..##..#..##...#.#....##.#...##...#.....#...##....#.##..###..###...###..#..######',
    '.....##.........#####.#.##..#..#.#.#.#.##...#....#.....###.########...#..####..#...#...##..#.##.##.#',
    '#..###...#.##.##.#.#..####.#.....##..###....##..#...#.#...##.##..###..####...#.####..##..#..##..#...',
    '#.####.#..##.#..#.....#..#.#..###...######.#.........####....###..#.#.#.##.#..#...#..####.....##..#.',
    '..##....#.###.......##.#...#.####..##....##.#..#....#######...####.##..#####.#.#.#.#.##..##..#.#.#..',
    '#.#.#.###..#..#.#..#.#.###....#...#####.###...........#.#....#####...#..####....#...###.#..#..####..',
    '.......#.####.##...#..#.##..###..#..#.#.#.#.###....#....#.#.#..#.#..##.#####.#.....#.##.#.###.###.##',
    '..###...#..#...####.#..##..##.#.#..#...#.#..#....###.#..####..######...####.#.##..#.#..###...##.####',
    '..#.###..#.#...##...#.#....#..#...#.#..##.######.######.#.##.....#..##.#..###..#..#.##.###...#..#.##',
    '####..##.####.....#...#.#.###..#...####.###.#.#.#.......##...#....#..#....#.#......###...#####.#.##.',
    '#..##..#..#.####...#####.#.###.##.#.##.....#.#..#.##........######.#.#.###....##.##..##..########.##',
    '#.#....###.##....#######.#...#.#.#.#..##.#.##...#.###...#.#.#..#.#..####.#.#..#..#.##.####....#..##.',
    '####.##....#.......###..#..##.#.#.##..#...#...##.###....##..###.#.#...#..#.....##.###.##...###....##',
    '..##.#..#....######..#.##.#.#...##..####.#####...##.#..###.##...#..####..###.##..##.##.#####.#..#.#.',
    '.#.##..#..##.#.###.###....#.#..#....#...###.##.#.#.####.....#....#...#.....#....#.#.###.#..#.##..###',
    '..###.#.#.##...##.##.##.#...#####.#..##.#....##..####...###..#....#.##...#........#####.#.###.#..#..',
    '....#..##..##....#.#....#.#..##...##.#...##.###.#.#..###..##.##.##..#.#.#..#.#.##.......#.##.###..#.',
    '.#..##.##.####.##....##.##.....###..##.#.##...#..###....###.###....#.#....#....#.##.#.##.#.##.....##',
    '#.#..#.##.###.#.######.....###.#..#...#.#.....##.###.#...#.#..###.#.....##.###.#.###.####..#####.#..',
    '#.#.##......#.##.#.#..##....#..###.#.###...##...###.#..#.##...#..#.##..##.#...######.##.....#####.##',
    '#.#..#####....###.###...#.......#....###.##...#..#.##..#...#####..#..#.##......###...#...###..#.#..#',
    '#.##..##.##.#..#.##.##..#.###.##.........###.#.#..#.#.....#.#...#.#.##.#.##.#...#...####.#.......##.',
    '.#...####.##..#..##....####..######...#.#..##.##.....#####.#...#..#.####.#######...#.#####..#.###...',
    '.#..######.#.##..##...##.....###.#..##..#...####..###...###.###..#..######.#....########..#####...#.',
    '#..##.......#####...###..#.#.##.#..###.#...##.#..#.##.###...###...##.#..##..########..#.#..##..#.###',
    '.#.#..#...#.#..#..##...#.#.##...###..#..#....###.#....#.##....###.###..##..#.#.####..####.#######.##',
    '...##..##.##.###.##.###...##.#.#.....##.####..#..##.#..#.####...##..#..#.##...##...###.##.#.......##',
    '.#.....#.##..#.#.....#.##.##..###..#....###...#.#....##########.##.###.#...#.####..####.#..#.#..###.',
    '.##.#.#.##..#..###.###.##.#########.#.#.#.#.##.###..##..#.##.####......#####...#..####.#.##..#####.#',
    '..#....###...##....#.###..##..#..####.##..####.#..####.###.#....####.....#.###..##...##..####...##.#',
    '.###.....###.##.##..###.###.....##..#.######.#.#..##..#.##.#..#.#.#....#...#.#.#...#...##....#..##.#',
    '..##....#..#####....#..####.#.#...##.#....##..##.###.###....###......#...#.#####.......#...#.....###',
    '###.#..#.#.##..#..#...#.#....###.##.#.###.#...#.##.#..#.#.......#.#.#.###.####.###....#..##..#####..',
    '.#..#######.#..###.#.##.#####.#####...##..#.####.#.#.##..###...#..##.##..#.#.###..#....#..#...###.#.',
    '..#####..#.##.....###..##.#...#.#.#..#######.#..#...#.##.##.#.#....####...###..##...#....####.#..#.#',
    '.####..#.#.##.###.#.##.....#..##.#.....###.....#..##...#....###.###..#......###.#.#.#.##.#.##..#...#',
    '##.#..##.#..##...#.#....##..######..#.....#..#...#####....##......####.##..#...##..#.##.#.#######..#',
    '##..####.#...##...#.#####.#.#..#....#.#..##.####.#..######.#..#..#.......#####..#..#..###.##...##.##',
    '#.####......#.###...#..####.#..##.##..#.#...##.###.#...#####..####.#..#.#.....#.##...###...#.#....##',
    '###.#.#.##.######......#.#.#.#.#........#..#..###.#.#.#..#.........#..#....#.#..#..#..###.##......##',
    '##.#########...#...###..#.###.....#.#.##.........###....#.####.#...###.#..##..#.###..#..##......#.##',
];

const GRID = ROWS.map(row => row.split(''));

module.exports = GRID;
