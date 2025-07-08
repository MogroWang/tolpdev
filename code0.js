gdjs.LOGO_95MWSCode = {};
gdjs.LOGO_95MWSCode.localVariables = [];
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects1= [];
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2= [];
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects3= [];
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects4= [];
gdjs.LOGO_95MWSCode.GDCopyrightObjects1= [];
gdjs.LOGO_95MWSCode.GDCopyrightObjects2= [];
gdjs.LOGO_95MWSCode.GDCopyrightObjects3= [];
gdjs.LOGO_95MWSCode.GDCopyrightObjects4= [];
gdjs.LOGO_95MWSCode.GDDEVObjects1= [];
gdjs.LOGO_95MWSCode.GDDEVObjects2= [];
gdjs.LOGO_95MWSCode.GDDEVObjects3= [];
gdjs.LOGO_95MWSCode.GDDEVObjects4= [];
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects1= [];
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects2= [];
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects3= [];
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects4= [];
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects1= [];
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2= [];
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects3= [];
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects4= [];


gdjs.LOGO_95MWSCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}}

}


};gdjs.LOGO_95MWSCode.asyncCallback23838020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LOGO_95MWSCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主菜单", false);
}gdjs.LOGO_95MWSCode.localVariables.length = 0;
}
gdjs.LOGO_95MWSCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LOGO_95MWSCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.LOGO_95MWSCode.asyncCallback23838020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LOGO_95MWSCode.asyncCallback23836612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LOGO_95MWSCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Copyright"), gdjs.LOGO_95MWSCode.GDCopyrightObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("MWSLOGO"), gdjs.LOGO_95MWSCode.GDMWSLOGOObjects3);

{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDMWSLOGOObjects3.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDMWSLOGOObjects3[i].getBehavior("Tween").addNumberEffectPropertyTween("Effect", "4", 0, "Effect", "alpha", "easeOutQuad", 0.8, false);
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDMWSLOGOObjects3.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDMWSLOGOObjects3[i].getBehavior("Tween").addNumberEffectPropertyTween("Effect", "5", 25, "Effect2", "blur", "easeOutQuad", 0.8, false);
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDCopyrightObjects3.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDCopyrightObjects3[i].getBehavior("Tween").addObjectOpacityTween2("2", 0, "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.LOGO_95MWSCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LOGO_95MWSCode.localVariables.length = 0;
}
gdjs.LOGO_95MWSCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LOGO_95MWSCode.localVariables);
for (const obj of gdjs.LOGO_95MWSCode.GDCopyrightObjects2) asyncObjectsList.addObject("Copyright", obj);
for (const obj of gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2) asyncObjectsList.addObject("MWSLOGO", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.LOGO_95MWSCode.asyncCallback23836612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LOGO_95MWSCode.asyncCallback23835548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LOGO_95MWSCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Copyright"), gdjs.LOGO_95MWSCode.GDCopyrightObjects2);

gdjs.copyArray(runtimeScene.getObjects("MWSLOGO"), gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2[i].getBehavior("Tween").addNumberEffectPropertyTween("Effect", "", 1, "Effect", "alpha", "easeOutQuad", 0.5, false);
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2[i].getBehavior("Tween").addNumberEffectPropertyTween("Effect", "2", 0, "Effect2", "blur", "easeOutQuad", 1.5, false);
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2[i].getBehavior("Tween").addObjectScaleTween3("3", 0.8 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), "easeOutCubic", 4, false, true);
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDCopyrightObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDCopyrightObjects2[i].getBehavior("Tween").addObjectOpacityTween2("", 120, "easeOutQuad", 1, false);
}
}
{ //Subevents
gdjs.LOGO_95MWSCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LOGO_95MWSCode.localVariables.length = 0;
}
gdjs.LOGO_95MWSCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LOGO_95MWSCode.localVariables);
for (const obj of gdjs.LOGO_95MWSCode.GDCopyrightObjects1) asyncObjectsList.addObject("Copyright", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LOGO_95MWSCode.asyncCallback23835548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LOGO_95MWSCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Copyright"), gdjs.LOGO_95MWSCode.GDCopyrightObjects2);
gdjs.copyArray(runtimeScene.getObjects("MWSLOGO"), gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2[i].getBehavior("位置锚点")._20013_24515_38170_28857(0, 0, "中心位置", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDCopyrightObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDCopyrightObjects2[i].getBehavior("位置锚点")._36793_20013_24515_38170_28857(0, -(50) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), "中心位置", "下边", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDCopyrightObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDCopyrightObjects2[i].getBehavior("为文本对象设定对应缩放")._20026_25991_26412_23545_35937_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23835108);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Copyright"), gdjs.LOGO_95MWSCode.GDCopyrightObjects1);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDCopyrightObjects1.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDCopyrightObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{ //Subevents
gdjs.LOGO_95MWSCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.LOGO_95MWSCode.mapOfGDgdjs_9546LOGO_959595MWSCode_9546GDDEVObjects2Objects = Hashtable.newFrom({"DEV": gdjs.LOGO_95MWSCode.GDDEVObjects2});
gdjs.LOGO_95MWSCode.eventsList5 = function(runtimeScene) {

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
gdjs.LOGO_95MWSCode.GDDEVObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LOGO_95MWSCode.mapOfGDgdjs_9546LOGO_959595MWSCode_9546GDDEVObjects2Objects, 0, 0, "DEV");
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEVObjects2[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEVObjects2[i].setWrappingWidth(500);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95MWSCode.GDDEVObjects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEVObjects2[i].getBehavior("位置锚点")._35282_33853_38170_28857(0, 0, "默认位置", "↖ 左上", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEVObjects2[i].getBehavior("Text").setText("开发者调试模式已开启" + gdjs.evtTools.string.newLine() + "光点之旅 / TOLP" + gdjs.evtTools.string.newLine() + "版本号" + ":" + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " DEV" + gdjs.evtTools.string.newLine() + "FPS" + ":" + gdjs.evtTools.common.toString(Math.round(gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + gdjs.evtTools.string.newLine() + "分辨率" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + "x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) + gdjs.evtTools.string.newLine() + "设备像素比" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) + gdjs.evtTools.string.newLine() + "计算过的缩放值" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.common.floorTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), 4)) + gdjs.evtTools.string.newLine() + "光标显示：" + runtimeScene.getGame().getVariables().getFromIndex(10).getAsString() + gdjs.evtTools.string.newLine() + "UA：" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + gdjs.evtTools.string.newLine() + "全屏模式：" + runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
}
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEVObjects2[i].getBehavior("Opacity").setOpacity(180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95MWSCode.GDDEVObjects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEVObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 100 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95MWSCode.GDDEVObjects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEVObjects2[i].setX(0);
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
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95MWSCode.GDDEVObjects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEVObjects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEVObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95MWSCode.GDDEVObjects2);
gdjs.copyArray(runtimeScene.getObjects("DEV场景"), gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects2[i].setX((( gdjs.LOGO_95MWSCode.GDDEVObjects2.length === 0 ) ? 0 :gdjs.LOGO_95MWSCode.GDDEVObjects2[0].getX()) + 180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs.LOGO_95MWSCode.GDDEVObjects1);
gdjs.copyArray(runtimeScene.getObjects("DEV场景"), gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects1);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects1.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects1[i].setX((( gdjs.LOGO_95MWSCode.GDDEVObjects1.length === 0 ) ? 0 :gdjs.LOGO_95MWSCode.GDDEVObjects1[0].getX()) + 180);
}
}}

}


};gdjs.LOGO_95MWSCode.mapOfGDgdjs_9546LOGO_959595MWSCode_9546GD_95959520809_95959526631Objects2Objects = Hashtable.newFrom({"光标": gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2});
gdjs.LOGO_95MWSCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(0.35, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LOGO_95MWSCode.mapOfGDgdjs_9546LOGO_959595MWSCode_9546GD_95959520809_95959526631Objects2Objects, -(500), -(500), "Cursor");
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
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 255, "easeOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 0, "easeOutQuad", 0.3, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CursorMovement__CursorIsMoving.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 255, "easeOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CursorMovement__CursorStayStill.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects1);
{for(var i = 0, len = gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects1.length ;i < len;++i) {
    gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects1[i].getBehavior("Tween").addObjectOpacityTween2("cur", 0, "easeOutQuad", 0.3, false);
}
}}

}


};gdjs.LOGO_95MWSCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "竖屏屏蔽");
}}

}


};gdjs.LOGO_95MWSCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23826620);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__DEV_20449_24687_26174_31034___33719_21462_35774_22791_23631_24149_20998_36776_29575_19982UA_20449_24687_24182_23384_20648_20110_20840_23616_21464_37327_20013.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}}

}


{


gdjs.LOGO_95MWSCode.eventsList0(runtimeScene);
}


{


gdjs.LOGO_95MWSCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.LOGO_95MWSCode.eventsList5(runtimeScene);
}


{


gdjs.LOGO_95MWSCode.eventsList6(runtimeScene);
}


{


gdjs.LOGO_95MWSCode.eventsList7(runtimeScene);
}


};

gdjs.LOGO_95MWSCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LOGO_95MWSCode.GDMWSLOGOObjects1.length = 0;
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2.length = 0;
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects3.length = 0;
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects4.length = 0;
gdjs.LOGO_95MWSCode.GDCopyrightObjects1.length = 0;
gdjs.LOGO_95MWSCode.GDCopyrightObjects2.length = 0;
gdjs.LOGO_95MWSCode.GDCopyrightObjects3.length = 0;
gdjs.LOGO_95MWSCode.GDCopyrightObjects4.length = 0;
gdjs.LOGO_95MWSCode.GDDEVObjects1.length = 0;
gdjs.LOGO_95MWSCode.GDDEVObjects2.length = 0;
gdjs.LOGO_95MWSCode.GDDEVObjects3.length = 0;
gdjs.LOGO_95MWSCode.GDDEVObjects4.length = 0;
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects1.length = 0;
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects2.length = 0;
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects3.length = 0;
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects4.length = 0;
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects1.length = 0;
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2.length = 0;
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects3.length = 0;
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects4.length = 0;

gdjs.LOGO_95MWSCode.eventsList8(runtimeScene);
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects1.length = 0;
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects2.length = 0;
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects3.length = 0;
gdjs.LOGO_95MWSCode.GDMWSLOGOObjects4.length = 0;
gdjs.LOGO_95MWSCode.GDCopyrightObjects1.length = 0;
gdjs.LOGO_95MWSCode.GDCopyrightObjects2.length = 0;
gdjs.LOGO_95MWSCode.GDCopyrightObjects3.length = 0;
gdjs.LOGO_95MWSCode.GDCopyrightObjects4.length = 0;
gdjs.LOGO_95MWSCode.GDDEVObjects1.length = 0;
gdjs.LOGO_95MWSCode.GDDEVObjects2.length = 0;
gdjs.LOGO_95MWSCode.GDDEVObjects3.length = 0;
gdjs.LOGO_95MWSCode.GDDEVObjects4.length = 0;
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects1.length = 0;
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects2.length = 0;
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects3.length = 0;
gdjs.LOGO_95MWSCode.GDDEV_9522330_9526223Objects4.length = 0;
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects1.length = 0;
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects2.length = 0;
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects3.length = 0;
gdjs.LOGO_95MWSCode.GD_9520809_9526631Objects4.length = 0;


return;

}

gdjs['LOGO_95MWSCode'] = gdjs.LOGO_95MWSCode;
