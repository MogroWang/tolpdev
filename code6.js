gdjs._26242_20572Code = {};
gdjs._26242_20572Code.localVariables = [];
gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects1= [];
gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects2= [];
gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects3= [];
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1= [];
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2= [];
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects3= [];
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1= [];
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2= [];
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects3= [];
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects1= [];
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2= [];
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects3= [];
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects1= [];
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects2= [];
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects3= [];
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects1= [];
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects2= [];
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects3= [];
gdjs._26242_20572Code.GDDEVObjects1= [];
gdjs._26242_20572Code.GDDEVObjects2= [];
gdjs._26242_20572Code.GDDEVObjects3= [];
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects1= [];
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects2= [];
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects3= [];
gdjs._26242_20572Code.GD_9520809_9526631Objects1= [];
gdjs._26242_20572Code.GD_9520809_9526631Objects2= [];
gdjs._26242_20572Code.GD_9520809_9526631Objects3= [];


gdjs._26242_20572Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._26242_20572Code.asyncCallback24829196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._26242_20572Code.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}gdjs._26242_20572Code.localVariables.length = 0;
}
gdjs._26242_20572Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._26242_20572Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._26242_20572Code.asyncCallback24829196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._26242_20572Code.asyncCallback24829988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._26242_20572Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主菜单", false);
}gdjs._26242_20572Code.localVariables.length = 0;
}
gdjs._26242_20572Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._26242_20572Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._26242_20572Code.asyncCallback24829988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._26242_20572Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("位置锚点")._20013_24515_38170_28857(0, 0, "中心位置", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("按钮_继续"), gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2.length;i<l;++i) {
    if ( gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2[k] = gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2[i];
        ++k;
    }
}
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("Tween").addObjectOpacityTween2("z", 255, "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs._26242_20572Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("按钮_退出"), gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2.length;i<l;++i) {
    if ( gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2[k] = gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2[i];
        ++k;
    }
}
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("Tween").addObjectOpacityTween2("z", 255, "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs._26242_20572Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24832060);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("Tween").addObjectOpacityTween2("z", 0, "easeOutQuad", 0.2, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("按钮_继续"), gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1);
gdjs.copyArray(runtimeScene.getObjects("按钮_退出"), gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1);
gdjs.copyArray(runtimeScene.getObjects("文字_继续"), gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects1);
gdjs.copyArray(runtimeScene.getObjects("文字_退出至主菜单"), gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects1);
gdjs.copyArray(runtimeScene.getObjects("标题_暂停"), gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects1);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects1[i].getBehavior("位置锚点")._36793_20013_24515_38170_28857(0, 150 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")), "中心位置", "上边", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects1[i].getBehavior("为文本对象设定对应缩放")._20026_25991_26412_23545_35937_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1[i].getBehavior("位置锚点")._20013_24515_38170_28857(-(260) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")), 0, "中心位置", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1[i].getBehavior("位置锚点")._20013_24515_38170_28857(260 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")), 0, "中心位置", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects1[i].setCenterPositionInScene((( gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length === 0 ) ? 0 :gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1[0].getCenterXInScene()),(( gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length === 0 ) ? 0 :gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1[0].getCenterYInScene()) + 200 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects1[i].setCenterPositionInScene((( gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1.length === 0 ) ? 0 :gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1[0].getCenterXInScene()),(( gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1.length === 0 ) ? 0 :gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1[0].getCenterYInScene()) + 200 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects1[i].getBehavior("为文本对象设定对应缩放")._20026_25991_26412_23545_35937_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects1[i].getBehavior("为文本对象设定对应缩放")._20026_25991_26412_23545_35937_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs._26242_20572Code.mapOfGDgdjs_9546_959526242_959520572Code_9546GDDEVObjects2Objects = Hashtable.newFrom({"DEV": gdjs._26242_20572Code.GDDEVObjects2});
gdjs._26242_20572Code.eventsList4 = function(runtimeScene) {

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
gdjs._26242_20572Code.GDDEVObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._26242_20572Code.mapOfGDgdjs_9546_959526242_959520572Code_9546GDDEVObjects2Objects, 0, 0, "DEV");
}{for(var i = 0, len = gdjs._26242_20572Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEVObjects2[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs._26242_20572Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEVObjects2[i].setWrappingWidth(500);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._26242_20572Code.GDDEVObjects2);
{for(var i = 0, len = gdjs._26242_20572Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEVObjects2[i].getBehavior("位置锚点")._35282_33853_38170_28857(0, 0, "默认位置", "↖ 左上", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._26242_20572Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEVObjects2[i].getBehavior("Text").setText("开发者调试模式已开启" + gdjs.evtTools.string.newLine() + "光点之旅 / TOLP" + gdjs.evtTools.string.newLine() + "版本号" + ":" + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " DEV" + gdjs.evtTools.string.newLine() + "FPS" + ":" + gdjs.evtTools.common.toString(Math.round(gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + gdjs.evtTools.string.newLine() + "分辨率" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + "x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) + gdjs.evtTools.string.newLine() + "设备像素比" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("pxr"))) + gdjs.evtTools.string.newLine() + "计算过的缩放值" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.common.floorTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")), 4)) + gdjs.evtTools.string.newLine() + "光标显示：" + runtimeScene.getGame().getVariables().getFromIndex(10).getAsString() + gdjs.evtTools.string.newLine() + "UA：" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + gdjs.evtTools.string.newLine() + "全屏模式：" + runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
}
}{for(var i = 0, len = gdjs._26242_20572Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEVObjects2[i].getBehavior("Opacity").setOpacity(180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._26242_20572Code.GDDEVObjects2);
{for(var i = 0, len = gdjs._26242_20572Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEVObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 100 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._26242_20572Code.GDDEVObjects2);
{for(var i = 0, len = gdjs._26242_20572Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEVObjects2[i].setX(0);
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
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._26242_20572Code.GDDEVObjects2);
{for(var i = 0, len = gdjs._26242_20572Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEVObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._26242_20572Code.GDDEVObjects2);
gdjs.copyArray(runtimeScene.getObjects("DEV场景"), gdjs._26242_20572Code.GDDEV_9522330_9526223Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GDDEV_9522330_9526223Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEV_9522330_9526223Objects2[i].setX((( gdjs._26242_20572Code.GDDEVObjects2.length === 0 ) ? 0 :gdjs._26242_20572Code.GDDEVObjects2[0].getX()) + 180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._26242_20572Code.GDDEVObjects1);
gdjs.copyArray(runtimeScene.getObjects("DEV场景"), gdjs._26242_20572Code.GDDEV_9522330_9526223Objects1);
{for(var i = 0, len = gdjs._26242_20572Code.GDDEV_9522330_9526223Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GDDEV_9522330_9526223Objects1[i].setX((( gdjs._26242_20572Code.GDDEVObjects1.length === 0 ) ? 0 :gdjs._26242_20572Code.GDDEVObjects1[0].getX()) + 180);
}
}}

}


};gdjs._26242_20572Code.mapOfGDgdjs_9546_959526242_959520572Code_9546GD_95959520809_95959526631Objects2Objects = Hashtable.newFrom({"光标": gdjs._26242_20572Code.GD_9520809_9526631Objects2});
gdjs._26242_20572Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._26242_20572Code.GD_9520809_9526631Objects2);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs._26242_20572Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9520809_9526631Objects2[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(0.35, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
gdjs._26242_20572Code.GD_9520809_9526631Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._26242_20572Code.mapOfGDgdjs_9546_959526242_959520572Code_9546GD_95959520809_95959526631Objects2Objects, -(500), -(500), "Cursor");
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
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._26242_20572Code.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9520809_9526631Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._26242_20572Code.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 255, "easeOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._26242_20572Code.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 0, "easeOutQuad", 0.3, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CursorMovement__CursorIsMoving.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._26242_20572Code.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 255, "easeOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CursorMovement__CursorStayStill.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._26242_20572Code.GD_9520809_9526631Objects1);
{for(var i = 0, len = gdjs._26242_20572Code.GD_9520809_9526631Objects1.length ;i < len;++i) {
    gdjs._26242_20572Code.GD_9520809_9526631Objects1[i].getBehavior("Tween").addObjectOpacityTween2("cur", 0, "easeOutQuad", 0.3, false);
}
}}

}


};gdjs._26242_20572Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "竖屏屏蔽");
}}

}


};gdjs._26242_20572Code.eventsList7 = function(runtimeScene) {

{


gdjs._26242_20572Code.eventsList0(runtimeScene);
}


{


gdjs._26242_20572Code.eventsList3(runtimeScene);
}


{



}


{


gdjs._26242_20572Code.eventsList4(runtimeScene);
}


{


gdjs._26242_20572Code.eventsList5(runtimeScene);
}


{


gdjs._26242_20572Code.eventsList6(runtimeScene);
}


};

gdjs._26242_20572Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length = 0;
gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects2.length = 0;
gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects3.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects3.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects3.length = 0;
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects1.length = 0;
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2.length = 0;
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects3.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects1.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects2.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects3.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects1.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects2.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects3.length = 0;
gdjs._26242_20572Code.GDDEVObjects1.length = 0;
gdjs._26242_20572Code.GDDEVObjects2.length = 0;
gdjs._26242_20572Code.GDDEVObjects3.length = 0;
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects1.length = 0;
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects2.length = 0;
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects3.length = 0;
gdjs._26242_20572Code.GD_9520809_9526631Objects1.length = 0;
gdjs._26242_20572Code.GD_9520809_9526631Objects2.length = 0;
gdjs._26242_20572Code.GD_9520809_9526631Objects3.length = 0;

gdjs._26242_20572Code.eventsList7(runtimeScene);
gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length = 0;
gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects2.length = 0;
gdjs._26242_20572Code.GD_9526631_9539064_9595_9526242_9520572Objects3.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects2.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9532487_9532493Objects3.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects1.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects2.length = 0;
gdjs._26242_20572Code.GD_9525353_9538062_9595_9536864_9520986Objects3.length = 0;
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects1.length = 0;
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects2.length = 0;
gdjs._26242_20572Code.GD_9536716_9522330_9524149_9524067Objects3.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects1.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects2.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9532487_9532493Objects3.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects1.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects2.length = 0;
gdjs._26242_20572Code.GD_9525991_9523383_9595_9536864_9520986_9533267_9520027_9533756_9521333Objects3.length = 0;
gdjs._26242_20572Code.GDDEVObjects1.length = 0;
gdjs._26242_20572Code.GDDEVObjects2.length = 0;
gdjs._26242_20572Code.GDDEVObjects3.length = 0;
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects1.length = 0;
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects2.length = 0;
gdjs._26242_20572Code.GDDEV_9522330_9526223Objects3.length = 0;
gdjs._26242_20572Code.GD_9520809_9526631Objects1.length = 0;
gdjs._26242_20572Code.GD_9520809_9526631Objects2.length = 0;
gdjs._26242_20572Code.GD_9520809_9526631Objects3.length = 0;


return;

}

gdjs['_26242_20572Code'] = gdjs._26242_20572Code;
