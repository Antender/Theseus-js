_ = require("lodash")
fs = require("fs")
theseus = require("./theseus.js")
var ast = theseus.parse(fs.readFileSync("./input").toString())
var level = 0

function pprint(l) {
  if (_.isArray(l)) {
	  var res = "("
	  for (let i = 0; i < l.length; i++) {
      res += pprint(l[i])
	  }
	  return res.trimRight() + ") "
  }
	if (_.isString(l)) {
		return "\"" + l + "\" "
	} 
  if (_.isPlainObject(l) && l.symbol == true) {
		return l.data + " "
	}  
	return l + " "
}

console.log(pprint(ast))
