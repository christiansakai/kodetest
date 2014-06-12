var CustomSet = function(inputData) {
  this.set = inputData || [];
};

CustomSet.prototype.delete = function(element) {
  var index = this.set.indexOf(element);
  if (index !== -1) {
    this.set.splice(index, 1);
  }
  return this;
};

CustomSet.prototype.difference = function(other) {
  var thisData = this.set.sort();
  var thatData = other.set.sort();
  var result = [];
  for (var i=0; i < thisData.length; i++) {
    if (thatData.indexOf(thisData[i]) === -1) {
      result.push(thisData[i]);
    }
  }
  return new CustomSet(result);
};

CustomSet.prototype.disjoint = function(other) {
  if (this.set.length === 0) {
  	return false;
  }
  for (var i = 0; i < this.set.length; i++) {
    if (other.set.indexOf(this.set[i]) !== -1) {
      return false;
    }
  }
  return true;
};

CustomSet.prototype.empty = function() {
  return new CustomSet([]);
};

CustomSet.prototype.intersection = function(other) {
  var thisData = this.set.sort();
  var thatData = other.set.sort();
  var result = [];
  for (var i=0; i < thisData.length; i++) {
    if (thatData.indexOf(thisData[i]) !== -1) {
      result.push(thisData[i]);
    }
  }
  return new CustomSet(result);
};

CustomSet.prototype.member = function(datum) {
  return this.set.indexOf(datum) !== -1;
};

CustomSet.prototype.put = function(datum) {
  if (this.set.indexOf(datum) === -1) {
    this.set.push(datum);
  }
  return this;
};

CustomSet.prototype.size = function() {
  return arrayUnique(this.set).length;
};

CustomSet.prototype.subset = function(other) {
  for (var i=0; i < other.set.length; i++) {
    if (this.set.indexOf(other.set[i]) === -1) {
      return false;
    }
  }
  return true;
};

CustomSet.prototype.toList = function() {
  return arrayUnique(this.set);
};

CustomSet.prototype.union = function(other) {
  var result = [];

  for (var i=0; i < this.set.length; i++) {
    result.push(this.set[i]);
  }
  for (var j=0; j < other.set.length; j++) {
    result.push(other.set[j]);
  }

  return new CustomSet(arrayUnique(result));
};

CustomSet.prototype.eql = function(other) {
  var thisData = this.set.sort();
  var thatData = other.set.sort();

  if (!other || this.set.length !== other.set.length) {
    return false;
  }

  for (var i = 0; i < this.length; i++) {
    if (thisData[i] !== otherData[i]) {
      return false;
    }
  }
  return true;
};

var arrayUnique = function(a) {
  return a.reduce(function(p, c) {
      if (p.indexOf(c) < 0) p.push(c);
      return p;
  }, []);
};