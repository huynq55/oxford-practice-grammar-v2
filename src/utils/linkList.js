import navBasic from '../content/basic/nav.yml';

const linkListBasic = navBasic.map((item) => ({
  ...item,
  directory: 'basic',
}));

export { linkListBasic };
