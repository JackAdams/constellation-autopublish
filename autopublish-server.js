Meteor.publish('Constellation_autopublish', function (collectionNames) {
  return _.reduce(collectionNames, function (memo, collectionName) {
    var collection = Package["babrahams:constellation"].Constellation.Collection(collectionName);
    if (collection) {
      memo.push(collection.find());
    }
    return memo;
  },[]);
});