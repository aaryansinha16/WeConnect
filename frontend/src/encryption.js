import {AES , enc} from 'crypto-js'

const key = "12345encryptKey54321"

export const encryptMessage = (message) => {
    let encryptMsg = AES.encrypt( message, key)
    return encryptMsg.toString()
}

export const decryptMessage = (cipher) => {
    let bytes = AES.decrypt(cipher, key)
    var decryptMsg = bytes.toString(enc.Utf8)
    return decryptMsg
}