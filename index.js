import {globby} from 'globby';

const paths = await globby(['build' ]);

console.log(paths);
