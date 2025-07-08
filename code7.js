gdjs.LOGO_95TOLPCode = {};
gdjs.LOGO_95TOLPCode.localVariables = [];
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects1= [];
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects2= [];
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3= [];
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects4= [];
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects5= [];
gdjs.LOGO_95TOLPCode.GDDEVObjects1= [];
gdjs.LOGO_95TOLPCode.GDDEVObjects2= [];
gdjs.LOGO_95TOLPCode.GDDEVObjects3= [];
gdjs.LOGO_95TOLPCode.GDDEVObjects4= [];
gdjs.LOGO_95TOLPCode.GDDEVObjects5= [];
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects1= [];
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects2= [];
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects3= [];
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects4= [];
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects5= [];
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects1= [];
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2= [];
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects3= [];
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects4= [];
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects5= [];


gdjs.LOGO_95TOLPCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}}

}


};gdjs.LOGO_95TOLPCode.asyncCallback24894140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LOGO_95TOLPCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主线_开头", true);
}gdjs.LOGO_95TOLPCode.localVariables.length = 0;
}
gdjs.LOGO_95TOLPCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LOGO_95TOLPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LOGO_95TOLPCode.asyncCallback24894140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LOGO_95TOLPCode.asyncCallback24893212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LOGO_95TOLPCode.localVariables);
{gdjs.evtTools.tween.tweenNumberEffectPropertyTween(runtimeScene, "", 0, "", "Effect", "alpha", "easeOutQuad", 1);
}{gdjs.evtTools.tween.tweenNumberEffectPropertyTween(runtimeScene, "2", 0, "", "Effect", "gamma", "easeOutQuad", 1);
}{gdjs.evtTools.tween.tweenCameraZoom2(runtimeScene, "3", 0.5 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), "", "easeInQuad", 1);
}
{ //Subevents
gdjs.LOGO_95TOLPCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LOGO_95TOLPCode.localVariables.length = 0;
}
gdjs.LOGO_95TOLPCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LOGO_95TOLPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.LOGO_95TOLPCode.asyncCallback24893212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LOGO_95TOLPCode.asyncCallback24892844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LOGO_95TOLPCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("TOLP_LOGO"), gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3[i].getBehavior("Tween").addNumberEffectPropertyTween("Effect", "3", 0, "Effect2", "blur", "easeOutQuad", 2, false);
}
}{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3[i].getBehavior("Tween").addNumberEffectPropertyTween("Effect", "", 1, "Effect", "alpha", "easeOutQuad", 3, false);
}
}{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3[i].getBehavior("Tween").addNumberEffectPropertyTween("Effect", "2", 1, "Effect", "gamma", "easeOutQuad", 12, false);
}
}{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3[i].getBehavior("Tween").addObjectScaleTween3("6", 0.4 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), "easeOutQuad", 15, false, true);
}
}
{ //Subevents
gdjs.LOGO_95TOLPCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LOGO_95TOLPCode.localVariables.length = 0;
}
gdjs.LOGO_95TOLPCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LOGO_95TOLPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LOGO_95TOLPCode.asyncCallback24892844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LOGO_95TOLPCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24892476);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TOLP_LOGO"), gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects2[i].getBehavior("Scale").setScale(0.9 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.LOGO_95TOLPCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TOLP_LOGO"), gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects1);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects1.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects1[i].getBehavior("位置锚点")._20013_24515_38170_28857(0, 0, "中心位置", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.LOGO_95TOLPCode.mapOfGDgdjs_9546LOGO_959595TOLPCode_9546GDDEVObjects2Objects = Hashtable.newFrom({"DEV": gdjs.LOGO_95TOLPCode.GDDEVObjects2});
gdjs.LOGO_95TOLPCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26015692);
}
}
if (isConditionTrue_0) {
gdjs.LOGO_95TOLPCode.GDDEVObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LOGO_95TOLPCode.mapOfGDgdjs_9546LOGO_959595TOLPCode_9546GDDEVObjects2Objects, 0, 0, "DEV");
}{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEVObjects2[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEVObjects2[i].setWrappingWidth(500);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95TOLPCode.GDDEVObjects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEVObjects2[i].getBehavior("位置锚点")._35282_33853_38170_28857(0, 0, "默认位置", "↖ 左上", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEVObjects2[i].getBehavior("Text").setText("开发者调试模式已开启" + gdjs.evtTools.string.newLine() + "光点之旅 / TOLP" + gdjs.evtTools.string.newLine() + "版本号" + ":" + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " DEV" + gdjs.evtTools.string.newLine() + "FPS" + ":" + gdjs.evtTools.common.toString(Math.round(gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + gdjs.evtTools.string.newLine() + "分辨率" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + "x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) + gdjs.evtTools.string.newLine() + "设备像素比" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) + gdjs.evtTools.string.newLine() + "计算过的缩放值" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.common.floorTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), 4)) + gdjs.evtTools.string.newLine() + "光标显示：" + runtimeScene.getGame().getVariables().getFromIndex(10).getAsString() + gdjs.evtTools.string.newLine() + "UA：" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + gdjs.evtTools.string.newLine() + "全屏模式：" + runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
}
}{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEVObjects2[i].getBehavior("Opacity").setOpacity(180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95TOLPCode.GDDEVObjects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEVObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 100 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95TOLPCode.GDDEVObjects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEVObjects2[i].setX(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26020260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95TOLPCode.GDDEVObjects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEVObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95TOLPCode.GDDEVObjects2);
gdjs.copyArray(runtimeScene.getObjects("DEV场景"), gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects2[i].setX((( gdjs.LOGO_95TOLPCode.GDDEVObjects2.length === 0 ) ? 0 :gdjs.LOGO_95TOLPCode.GDDEVObjects2[0].getX()) + 180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95TOLPCode.GDDEVObjects1);
gdjs.copyArray(runtimeScene.getObjects("DEV场景"), gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects1);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects1.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects1[i].setX((( gdjs.LOGO_95TOLPCode.GDDEVObjects1.length === 0 ) ? 0 :gdjs.LOGO_95TOLPCode.GDDEVObjects1[0].getX()) + 180);
}
}}

}


};gdjs.LOGO_95TOLPCode.mapOfGDgdjs_9546LOGO_959595TOLPCode_9546GD_95959520809_95959526631Objects2Objects = Hashtable.newFrom({"光标": gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2});
gdjs.LOGO_95TOLPCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(0.35, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26022228);
}
}
if (isConditionTrue_0) {
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LOGO_95TOLPCode.mapOfGDgdjs_9546LOGO_959595TOLPCode_9546GD_95959520809_95959526631Objects2Objects, -(500), -(500), "Cursor");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26024068);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 255, "easeOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 0, "easeOutQuad", 0.3, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CursorMovement__CursorIsMoving.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 255, "easeOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CursorMovement__CursorStayStill.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects1);
{for(var i = 0, len = gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects1.length ;i < len;++i) {
    gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects1[i].getBehavior("Tween").addObjectOpacityTween2("cur", 0, "easeOutQuad", 0.3, false);
}
}}

}


};gdjs.LOGO_95TOLPCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "竖屏屏蔽");
}}

}


};gdjs.LOGO_95TOLPCode.eventsList8 = function(runtimeScene) {

{


gdjs.LOGO_95TOLPCode.eventsList0(runtimeScene);
}


{


gdjs.LOGO_95TOLPCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.LOGO_95TOLPCode.eventsList5(runtimeScene);
}


{


gdjs.LOGO_95TOLPCode.eventsList6(runtimeScene);
}


{


gdjs.LOGO_95TOLPCode.eventsList7(runtimeScene);
}


};

gdjs.LOGO_95TOLPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects1.length = 0;
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects2.length = 0;
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3.length = 0;
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects4.length = 0;
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects5.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects1.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects2.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects3.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects4.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects5.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects1.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects2.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects3.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects4.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects5.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects1.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects3.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects4.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects5.length = 0;

gdjs.LOGO_95TOLPCode.eventsList8(runtimeScene);
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects1.length = 0;
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects2.length = 0;
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects3.length = 0;
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects4.length = 0;
gdjs.LOGO_95TOLPCode.GDTOLP_9595LOGOObjects5.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects1.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects2.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects3.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects4.length = 0;
gdjs.LOGO_95TOLPCode.GDDEVObjects5.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects1.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects2.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects3.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects4.length = 0;
gdjs.LOGO_95TOLPCode.GDDEV_9522330_9526223Objects5.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects1.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects2.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects3.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects4.length = 0;
gdjs.LOGO_95TOLPCode.GD_9520809_9526631Objects5.length = 0;


return;

}

gdjs['LOGO_95TOLPCode'] = gdjs.LOGO_95TOLPCode;
