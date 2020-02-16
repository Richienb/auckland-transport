import camelcaseKeys from "camelcase-keys"

export = (array: object[]): any => array.map(object => camelcaseKeys(object))
