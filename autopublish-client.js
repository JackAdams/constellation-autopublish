// Hook in to constellation UI

var Constellation = Package["constellation:console"].API;
    
Constellation.addTab({
  name: 'Autopublish',
  headerContentTemplate: 'Constellation_autopublish',
  noOpen:true,
  onClick: "toggleAutopublish"
});

Constellation.registerCallbacks({
  toggleAutopublish : function () {
    AutopublishDict.set('Constellation_autopublish', !AutopublishDict.get('Constellation_autopublish'));
    // If we're switching off autopublish, we need to reset the current collection index number to 0
    if (!AutopublishDict.get('Constellation_autopublish')) {
      var currentTab = Constellation.getCurrentTab();
       if (currentTab && currentTab.type === 'collection') {
        var C = Package["constellation:console"].Constellation;
        C.ConstellationDict.set(C.sessKey(currentTab.id), 0);
      }
    }
  }
});

var AutopublishDict = new ReactiveDict('constellation-autopublish');

Tracker.autorun(function () {
  if (AutopublishDict.get('Constellation_autopublish')) {
    Meteor.subscribe('Constellation_autopublish', Package["constellation:console"].Constellation.ConstellationDict.get('Constellation').collections); 
  }
});

Template.Constellation_autopublish.helpers({
  autopublish: function () {
    return AutopublishDict.get('Constellation_autopublish');  
  }
});
	