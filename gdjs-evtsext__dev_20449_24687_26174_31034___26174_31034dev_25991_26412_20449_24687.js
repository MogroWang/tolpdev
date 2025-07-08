
gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687 = gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687 || {};

/**
 * Behavior generated from 显示DEV文本信息
 */
gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687.显示DEV文本信息 = class 显示DEV文本信息 extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687.显示DEV文本信息.getSharedData(
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
 * Shared data generated from 显示DEV文本信息
 */
gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687.显示DEV文本信息.SharedData = class 显示DEV文本信息SharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687.显示DEV文本信息.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DEV信息显示_显示DEV文本信息SharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DEV信息显示_显示DEV文本信息SharedData = new gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687.显示DEV文本信息.SharedData(
      initialData
    );
  }
  return instanceContainer._DEV信息显示_显示DEV文本信息SharedData;
}

// Methods:

gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687.显示DEV文本信息.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("DEV信息显示::显示DEV文本信息", gdjs.evtsExt__DEV_20449_24687_26174_31034___26174_31034DEV_25991_26412_20449_24687.显示DEV文本信息);
