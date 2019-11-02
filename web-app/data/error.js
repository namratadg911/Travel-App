class MandatoryParamError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
class InvalidFormatError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

module.exports = {
    MandatoryParamError,
    InvalidFormatError
}