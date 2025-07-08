
if (typeof gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575 !== "undefined") {
  gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575 = {};


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("screenwidth")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("screenheight")));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("多平台屏幕适配"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("多平台屏幕适配"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.registeredGdjsCallbacks = [];