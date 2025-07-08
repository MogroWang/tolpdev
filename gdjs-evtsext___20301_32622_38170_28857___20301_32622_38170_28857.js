
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857 = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857 || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点 = class 位置锚点 extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.getSharedData(
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
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.SharedData = class 位置锚点SharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._位置锚点_位置锚点SharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._位置锚点_位置锚点SharedData = new gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.SharedData(
      initialData
    );
  }
  return instanceContainer._位置锚点_位置锚点SharedData;
}

// Methods:
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context = {};
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1= [];
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects2= [];


gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("被对齐的对象位置") : "") == "中心位置");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1[i].setCenterPositionInScene((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0)),(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("被对齐的对象位置") : "") == "默认位置");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857 = function(X_20559_31227, Y_20559_31227, _34987_23545_40784_30340_23545_35937_20301_32622, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("位置锚点"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("位置锚点"),
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
if (argName === "X偏移") return X_20559_31227;
if (argName === "Y偏移") return Y_20559_31227;
if (argName === "被对齐的对象位置") return _34987_23545_40784_30340_23545_35937_20301_32622;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects2.length = 0;

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._20013_24515_38170_28857Context.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context = {};
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1= [];
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2= [];
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects3= [];


gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("角落") : "") == "↖ 左上");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("角落") : "") == "↗ 右上");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("角落") : "") == "↙ 左下");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("角落") : "") == "↘ 右下");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


};gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("角落") : "") == "↖ 左上");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("角落") : "") == "↗ 右上");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("角落") : "") == "↙ 左下");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("角落") : "") == "↘ 右下");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


};gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("被对齐的对象位置") : "") == "中心位置");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("被对齐的对象位置") : "") == "默认位置");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857 = function(X_20559_31227, Y_20559_31227, _34987_23545_40784_30340_23545_35937_20301_32622, _35282_33853, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("位置锚点"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("位置锚点"),
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
if (argName === "X偏移") return X_20559_31227;
if (argName === "Y偏移") return Y_20559_31227;
if (argName === "被对齐的对象位置") return _34987_23545_40784_30340_23545_35937_20301_32622;
if (argName === "角落") return _35282_33853;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects3.length = 0;

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects2.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._35282_33853_38170_28857Context.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context = {};
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1= [];
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2= [];
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects3= [];


gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("边") : "") == "下边");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("边") : "") == "上边");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("边") : "") == "左边");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("边") : "") == "右边");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


};gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("边") : "") == "下边");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("边") : "") == "上边");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("边") : "") == "左边");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("边") : "") == "右边");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


};gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("被对齐的对象位置") : "") == "中心位置");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("被对齐的对象位置") : "") == "默认位置");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857 = function(X_20559_31227, Y_20559_31227, _34987_23545_40784_30340_23545_35937_20301_32622, _36793, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("位置锚点"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("位置锚点"),
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
if (argName === "X偏移") return X_20559_31227;
if (argName === "Y偏移") return Y_20559_31227;
if (argName === "被对齐的对象位置") return _34987_23545_40784_30340_23545_35937_20301_32622;
if (argName === "边") return _36793;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects3.length = 0;

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects2.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._36793_20013_24515_38170_28857Context.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context = {};
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1= [];
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects2= [];


gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("被对齐的对象位置") : "") == "中心位置");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1[i].setCenterPositionInScene((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("自定义锚点X")) || 0 : 0) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),(typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("自定义锚点Y")) || 0 : 0) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("被对齐的对象位置") : "") == "默认位置");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1[i].setPosition((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("自定义锚点X")) || 0 : 0) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X偏移")) || 0 : 0),(typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("自定义锚点Y")) || 0 : 0) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y偏移")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857 = function(X_20559_31227, Y_20559_31227, _34987_23545_40784_30340_23545_35937_20301_32622, _33258_23450_20041_38170_28857X, _33258_23450_20041_38170_28857Y, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("位置锚点"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("位置锚点"),
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
if (argName === "X偏移") return X_20559_31227;
if (argName === "Y偏移") return Y_20559_31227;
if (argName === "被对齐的对象位置") return _34987_23545_40784_30340_23545_35937_20301_32622;
if (argName === "自定义锚点X") return _33258_23450_20041_38170_28857X;
if (argName === "自定义锚点Y") return _33258_23450_20041_38170_28857Y;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects2.length = 0;

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects1.length = 0;
gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype._33258_23450_20041_38170_28857Context.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("位置锚点::位置锚点", gdjs.evtsExt___20301_32622_38170_28857___20301_32622_38170_28857.位置锚点);
