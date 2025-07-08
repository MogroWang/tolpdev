
if (typeof gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013 !== "undefined") {
  gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013 = {};


gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.userFunc0xd9b440 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const pxRatio = window.devicePixelRatio || 1;
let width, height;
width = window.innerWidth * pxRatio;
height = window.innerHeight * pxRatio;
/*
let isAppleMobileDevice = false;
if (
	navigator.userAgent.indexOf('iPhone OS') > -1 ||
	navigator.userAgent.indexOf('iPad OS') > -1 ||
	navigator.userAgent.indexOf('Mac OS X') > -1
) {
  isAppleMobileDevice = true;
}
if (!isAppleMobileDevice) {
  width = window.innerWidth * pxRatio;
  height = window.innerHeight * pxRatio;
} else {
  width = window.innerHeight * pxRatio;
  height = window.innerWidth * pxRatio;
}
*/
const gameWidth = width;
const gameHeight = height;
const screenwidth = runtimeScene.getVariables().get("screenwidth");
screenwidth.setNumber(gameWidth);
const screenheight = runtimeScene.getVariables().get("screenheight");
screenheight.setNumber(gameHeight);
const pxr = runtimeScene.getVariables().get("pxr");
pxr.setNumber(pxRatio);
const ua = runtimeScene.getVariables().get("UA");
ua.setString(navigator.userAgent);

};
gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.userFunc0xd9b440(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DEV信息显示"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DEV信息显示"),
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


gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.registeredGdjsCallbacks = [];