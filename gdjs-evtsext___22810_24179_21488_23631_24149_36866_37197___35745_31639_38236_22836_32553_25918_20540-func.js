
if (typeof gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540 !== "undefined") {
  gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540 = {};


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.userFunc0xd9fee0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const pxRatio = window.devicePixelRatio;
let width, height;
width = window.innerWidth*pxRatio;
height = window.innerHeight*pxRatio;

const BASE_SCALE_RATIO = 1;
const LENGTH_BASELINE = 1080;

/**
 * 根据场景分辨率获取动态镜头缩放倍率值
 * @param {int} w 场景高度
 * @param {int} h 场景宽度
 * @param {float} s 渲染分辨率缩放倍率
 * @returns {float} 动态场景缩放值
 */
function getDynamicScale(w, h, s, lb = LENGTH_BASELINE, sr = BASE_SCALE_RATIO) {
   let lShorterSide = w <= h ? w : h;
   return (lShorterSide / s) / (lb / sr);
}
let zsn = getDynamicScale(width,height,1,1080,1);
const zs = runtimeScene.getVariables().get("ZoomScale");
zs.setNumber(zsn);
};
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.userFunc0xd9fee0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.registeredGdjsCallbacks = [];