
/**
 * @param {string} value
 */
function verificationemail(value) {
  let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  return (regex.test(value));
}


/**
 * @param {string} mdp1
 */
function verificationmdp(mdp1) {
  let strongregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&_*])(?=.{8,16})")
  return (strongregex.test(mdp1))
}

/**
 * @param {string} mdp1
 * @param {string} mdp2
 */
function mdp1equalmdp2(mdp1, mdp2) {
  return (mdp1 == mdp2)
}

/**
 * @param {string} pseudo
 */
function verificationpseudo(pseudo) {
  let regex = new RegExp("[A-Za-z]+[A-Za-z0-9_]+")
  if (pseudo.length > 2 && pseudo.length < 24) {
    return (regex.test(pseudo))
  }
  else {
    return (false)
  }
}



export { verificationemail, verificationmdp, mdp1equalmdp2, verificationpseudo }