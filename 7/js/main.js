import './data.js';
import './template.js';
import './form.js';
import './condition.js';
import './UiSlider.js';
import './map.js';
import {createAnnouncement} from './data.js';
import {renderPopup} from './map.js';

const createAnnouncements = () => Array.from({length: 10}, createAnnouncement);
const announcements = createAnnouncements();
renderPopup(announcements);
