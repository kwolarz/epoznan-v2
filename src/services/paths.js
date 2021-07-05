export const API_URL = require('../../env.json').API_URL;
export const HOME = '/home';
export const ARTICLE = (url) => { return '/article/' + url };
export const NEWS = (tag, page) => { return '/news/' + tag + '/' + page };