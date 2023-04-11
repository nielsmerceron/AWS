
/**
 * @param {string} pseudo
 * @param {string} email
 * @param {string} mdp
 */
async function doSign(pseudo, email, mdp) {
    let result
    const res = await fetch('mongodb://aws:test@127.0.0.1:27017/testdb', {
        method: 'PHOST',
        body: JSON.stringify({
            username: pseudo,
            email: email,
            password: mdp,
            createdAt: Date.now()
        })
    })

    const json = await res.json()
    result = JSON.stringify(json)
    return result

}

export {doSign}