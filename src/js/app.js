export default class Validator {
    validateUserName(nickname) {
        if ((/^[a-z][0-9a-z_-]+[a-z]$/i.test(nickname)) && (!/[\d]{4}/.test(nickname))) {
           return 'ok';
        } else {
            return 'error';
        }
    }
}