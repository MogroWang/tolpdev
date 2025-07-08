
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918 = gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918 || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放 = class 为形状绘画设定对应缩放 extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.SharedData = class 为形状绘画设定对应缩放SharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._多平台屏幕适配_为形状绘画设定对应缩放SharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._多平台屏幕适配_为形状绘画设定对应缩放SharedData = new gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.SharedData(
      initialData
    );
  }
  return instanceContainer._多平台屏幕适配_为形状绘画设定对应缩放SharedData;
}

// Methods:
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context = {};
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects1= [];
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects2= [];


gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("缩放系数")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918 = function(_32553_25918_31995_25968, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "缩放系数") return _32553_25918_31995_25968;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects2.length = 0;

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype._20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918Context.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("多平台屏幕适配::为形状绘画设定对应缩放", gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___20026_24418_29366_32472_30011_35774_23450_23545_24212_32553_25918.为形状绘画设定对应缩放);
