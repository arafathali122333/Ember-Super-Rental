import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    namespace = 'api';
    buildURL(...args) {
        console.log(`${super.buildURL(...args)}.json`);
        return `${super.buildURL(...args)}.json`;
    }
}