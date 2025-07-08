
if (typeof gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575 !== "undefined") {
  gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575 = {};


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.userFunc0xd9b440 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const pxRatio = window.devicePixelRatio;
let width, height;
width = window.innerWidth*pxRatio;
height = window.innerHeight*pxRatio;
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

};
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.userFunc0xd9b440(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setNumber(gdjs.evtTools.window.getWindowInnerWidth());
}{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setNumber(gdjs.evtTools.window.getWindowInnerHeight());
}}

}


};

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.registeredGdjsCallbacks = [];