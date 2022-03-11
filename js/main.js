import {createAnnouncement} from './data.js';
import {getAnnouncements} from './template.js';
const similarAnnouncements = Array.from({length: 10}, createAnnouncement);
// eslint-disable-next-line
console.log(similarAnnouncements);
// eslint-disable-next-line
getAnnouncements(createAnnouncement);
