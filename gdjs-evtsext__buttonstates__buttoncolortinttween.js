
gdjs.evtsExt__ButtonStates__ButtonColorTintTween = gdjs.evtsExt__ButtonStates__ButtonColorTintTween || {};

/**
 * Behavior generated from Button color tint tween
 */
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween = class ButtonColorTintTween extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ButtonFSM = behaviorData.ButtonFSM !== undefined ? behaviorData.ButtonFSM : "";
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
    this._behaviorData.IdleColorTint = behaviorData.IdleColorTint !== undefined ? behaviorData.IdleColorTint : "255;255;255";
    this._behaviorData.FocusedColorTint = behaviorData.FocusedColorTint !== undefined ? behaviorData.FocusedColorTint : "192;192;192";
    this._behaviorData.PressedColorTint = behaviorData.PressedColorTint !== undefined ? behaviorData.PressedColorTint : "64;64;64";
    this._behaviorData.FadeInDuration = behaviorData.FadeInDuration !== undefined ? behaviorData.FadeInDuration : Number("0.1") || 0;
    this._behaviorData.FadeOutDuration = behaviorData.FadeOutDuration !== undefined ? behaviorData.FadeOutDuration : Number("0.2") || 0;
    this._behaviorData.FadeInEasing = behaviorData.FadeInEasing !== undefined ? behaviorData.FadeInEasing : "easeInOutQuad";
    this._behaviorData.FadeOutEasing = behaviorData.FadeOutEasing !== undefined ? behaviorData.FadeOutEasing : "easeInOutQuad";
    this._behaviorData.PreviousState = "Idle";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ButtonFSM !== newBehaviorData.ButtonFSM)
      this._behaviorData.ButtonFSM = newBehaviorData.ButtonFSM;
    if (oldBehaviorData.Tween !== newBehaviorData.Tween)
      this._behaviorData.Tween = newBehaviorData.Tween;
    if (oldBehaviorData.IdleColorTint !== newBehaviorData.IdleColorTint)
      this._behaviorData.IdleColorTint = newBehaviorData.IdleColorTint;
    if (oldBehaviorData.FocusedColorTint !== newBehaviorData.FocusedColorTint)
      this._behaviorData.FocusedColorTint = newBehaviorData.FocusedColorTint;
    if (oldBehaviorData.PressedColorTint !== newBehaviorData.PressedColorTint)
      this._behaviorData.PressedColorTint = newBehaviorData.PressedColorTint;
    if (oldBehaviorData.FadeInDuration !== newBehaviorData.FadeInDuration)
      this._behaviorData.FadeInDuration = newBehaviorData.FadeInDuration;
    if (oldBehaviorData.FadeOutDuration !== newBehaviorData.FadeOutDuration)
      this._behaviorData.FadeOutDuration = newBehaviorData.FadeOutDuration;
    if (oldBehaviorData.FadeInEasing !== newBehaviorData.FadeInEasing)
      this._behaviorData.FadeInEasing = newBehaviorData.FadeInEasing;
    if (oldBehaviorData.FadeOutEasing !== newBehaviorData.FadeOutEasing)
      this._behaviorData.FadeOutEasing = newBehaviorData.FadeOutEasing;
    if (oldBehaviorData.PreviousState !== newBehaviorData.PreviousState)
      this._behaviorData.PreviousState = newBehaviorData.PreviousState;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    ButtonFSM: this._behaviorData.ButtonFSM,
    Tween: this._behaviorData.Tween,
    IdleColorTint: this._behaviorData.IdleColorTint,
    FocusedColorTint: this._behaviorData.FocusedColorTint,
    PressedColorTint: this._behaviorData.PressedColorTint,
    FadeInDuration: this._behaviorData.FadeInDuration,
    FadeOutDuration: this._behaviorData.FadeOutDuration,
    FadeInEasing: this._behaviorData.FadeInEasing,
    FadeOutEasing: this._behaviorData.FadeOutEasing,
    PreviousState: this._behaviorData.PreviousState,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.ButtonFSM !== undefined)
      this._behaviorData.ButtonFSM = networkSyncData.props.ButtonFSM;
    if (networkSyncData.props.Tween !== undefined)
      this._behaviorData.Tween = networkSyncData.props.Tween;
    if (networkSyncData.props.IdleColorTint !== undefined)
      this._behaviorData.IdleColorTint = networkSyncData.props.IdleColorTint;
    if (networkSyncData.props.FocusedColorTint !== undefined)
      this._behaviorData.FocusedColorTint = networkSyncData.props.FocusedColorTint;
    if (networkSyncData.props.PressedColorTint !== undefined)
      this._behaviorData.PressedColorTint = networkSyncData.props.PressedColorTint;
    if (networkSyncData.props.FadeInDuration !== undefined)
      this._behaviorData.FadeInDuration = networkSyncData.props.FadeInDuration;
    if (networkSyncData.props.FadeOutDuration !== undefined)
      this._behaviorData.FadeOutDuration = networkSyncData.props.FadeOutDuration;
    if (networkSyncData.props.FadeInEasing !== undefined)
      this._behaviorData.FadeInEasing = networkSyncData.props.FadeInEasing;
    if (networkSyncData.props.FadeOutEasing !== undefined)
      this._behaviorData.FadeOutEasing = networkSyncData.props.FadeOutEasing;
    if (networkSyncData.props.PreviousState !== undefined)
      this._behaviorData.PreviousState = networkSyncData.props.PreviousState;
  }

  // Properties:
  
  _getButtonFSM() {
    return this._behaviorData.ButtonFSM !== undefined ? this._behaviorData.ButtonFSM : "";
  }
  _setButtonFSM(newValue) {
    this._behaviorData.ButtonFSM = newValue;
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
  _getIdleColorTint() {
    return this._behaviorData.IdleColorTint !== undefined ? this._behaviorData.IdleColorTint : "255;255;255";
  }
  _setIdleColorTint(newValue) {
    this._behaviorData.IdleColorTint = newValue;
  }
  _getFocusedColorTint() {
    return this._behaviorData.FocusedColorTint !== undefined ? this._behaviorData.FocusedColorTint : "192;192;192";
  }
  _setFocusedColorTint(newValue) {
    this._behaviorData.FocusedColorTint = newValue;
  }
  _getPressedColorTint() {
    return this._behaviorData.PressedColorTint !== undefined ? this._behaviorData.PressedColorTint : "64;64;64";
  }
  _setPressedColorTint(newValue) {
    this._behaviorData.PressedColorTint = newValue;
  }
  _getFadeInDuration() {
    return this._behaviorData.FadeInDuration !== undefined ? this._behaviorData.FadeInDuration : Number("0.1") || 0;
  }
  _setFadeInDuration(newValue) {
    this._behaviorData.FadeInDuration = newValue;
  }
  _getFadeOutDuration() {
    return this._behaviorData.FadeOutDuration !== undefined ? this._behaviorData.FadeOutDuration : Number("0.2") || 0;
  }
  _setFadeOutDuration(newValue) {
    this._behaviorData.FadeOutDuration = newValue;
  }
  _getFadeInEasing() {
    return this._behaviorData.FadeInEasing !== undefined ? this._behaviorData.FadeInEasing : "easeInOutQuad";
  }
  _setFadeInEasing(newValue) {
    this._behaviorData.FadeInEasing = newValue;
  }
  _getFadeOutEasing() {
    return this._behaviorData.FadeOutEasing !== undefined ? this._behaviorData.FadeOutEasing : "easeInOutQuad";
  }
  _setFadeOutEasing(newValue) {
    this._behaviorData.FadeOutEasing = newValue;
  }
  _getPreviousState() {
    return this._behaviorData.PreviousState !== undefined ? this._behaviorData.PreviousState : "Idle";
  }
  _setPreviousState(newValue) {
    this._behaviorData.PreviousState = newValue;
  }
}

/**
 * Shared data generated from Button color tint tween
 */
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.SharedData = class ButtonColorTintTweenSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ButtonStates_ButtonColorTintTweenSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ButtonStates_ButtonColorTintTweenSharedData = new gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.SharedData(
      initialData
    );
  }
  return instanceContainer._ButtonStates_ButtonColorTintTweenSharedData;
}

// Methods:
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects1[i].setColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleColorTint());
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() == "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState("Focused");
}
}{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FadeIn(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedColorTint(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState("Focused");
}
}{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FadeOut(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedColorTint(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() != "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState("Idle");
}
}{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FadeOut(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleColorTint(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsFocused((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() != "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState("Pressed");
}
}{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FadeIn(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedColorTint(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectColorTween("__ButtonColorTintTween.Fade", eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeInEasing(), 1000 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeInDuration(), false, true);
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeIn = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectColorTween("__ButtonColorTintTween.Fade", eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeOutEasing(), 1000 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeOutDuration(), false, true);
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOut = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleColorTint(); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTint = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.IdleColorTintContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdleColorTint(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTint = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetIdleColorTintContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedColorTint(); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTint = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FocusedColorTintContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFocusedColorTint(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTint = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFocusedColorTintContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedColorTint(); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTint = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.PressedColorTintContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPressedColorTint(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTint = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetPressedColorTintContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeInDuration(); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDuration = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFadeInDuration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDuration = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeOutDuration(); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDuration = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFadeOutDuration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDuration = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeInEasing(); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasing = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeInEasingContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFadeInEasing(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasing = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeInEasingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeOutEasing(); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasing = function(parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.FadeOutEasingContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext = {};
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFadeOutEasing(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasing = function(Value, parentEventsFunctionContext) {

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
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween.prototype.SetFadeOutEasingContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("ButtonStates::ButtonColorTintTween", gdjs.evtsExt__ButtonStates__ButtonColorTintTween.ButtonColorTintTween);
