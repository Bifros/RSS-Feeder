function _normalize(dbResponse) {
  var normalized = dbResponse.value;
  normalized.id = dbResponse.id;
  return normalized;
}

module.exports = {

  normalizeDbReponse: function(dbResponse) {
    return dbResponse.map(function(item) {
      return _normalize(item);
    });
  }

};