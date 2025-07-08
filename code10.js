gdjs._24863_35874_27979_35797Code = {};
gdjs._24863_35874_27979_35797Code.localVariables = [];
gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1= [];
gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects2= [];
gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects3= [];
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1= [];
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2= [];
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects3= [];
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects1= [];
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2= [];
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects3= [];
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects1= [];
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects2= [];
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects3= [];
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects1= [];
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects2= [];
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects3= [];
gdjs._24863_35874_27979_35797Code.GDDEVObjects1= [];
gdjs._24863_35874_27979_35797Code.GDDEVObjects2= [];
gdjs._24863_35874_27979_35797Code.GDDEVObjects3= [];
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects1= [];
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects2= [];
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects3= [];
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects1= [];
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2= [];
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects3= [];


gdjs._24863_35874_27979_35797Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___35745_31639_38236_22836_32553_25918_20540.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___33719_21462_35774_22791_23631_24149_20998_36776_29575.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt___22810_24179_21488_23631_24149_36866_37197___21516_27493_28216_25103_20998_36776_29575.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._24863_35874_27979_35797Code.asyncCallback25260228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._24863_35874_27979_35797Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主菜单", true);
}gdjs._24863_35874_27979_35797Code.localVariables.length = 0;
}
gdjs._24863_35874_27979_35797Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._24863_35874_27979_35797Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._24863_35874_27979_35797Code.asyncCallback25260228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._24863_35874_27979_35797Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("位置锚点")._20013_24515_38170_28857(0, 0, "中心位置", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("按钮_继续"), gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2.length;i<l;++i) {
    if ( gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2[k] = gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2[i];
        ++k;
    }
}
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("Tween").addObjectOpacityTween2("z", 255, "easeOutQuad", 0.2, false);
}
}
{ //Subevents
gdjs._24863_35874_27979_35797Code.eventsList1(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25261956);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("Opacity").setOpacity(255);
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
gdjs.copyArray(runtimeScene.getObjects("转场幕布"), gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2[i].getBehavior("Tween").addObjectOpacityTween2("z", 0, "easeOutQuad", 1, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("按钮_继续"), gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1);
gdjs.copyArray(runtimeScene.getObjects("文字_测试结束"), gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects1);
gdjs.copyArray(runtimeScene.getObjects("文字_返回"), gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects1);
gdjs.copyArray(runtimeScene.getObjects("标题_暂停"), gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1[i].getBehavior("位置锚点")._36793_20013_24515_38170_28857(0, 150 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")), "中心位置", "上边", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1[i].getBehavior("为文本对象设定对应缩放")._20026_25991_26412_23545_35937_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1[i].getBehavior("位置锚点")._20013_24515_38170_28857(0, 60 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")), "中心位置", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects1[i].setCenterPositionInScene((( gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length === 0 ) ? 0 :gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1[0].getCenterXInScene()),(( gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length === 0 ) ? 0 :gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1[0].getCenterYInScene()) + 200 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects1[i].setCenterPositionInScene((( gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length === 0 ) ? 0 :gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1[0].getCenterXInScene()),(( gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length === 0 ) ? 0 :gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1[0].getAABBBottom()) + 40 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects1[i].getBehavior("为文本对象设定对应缩放")._20026_25991_26412_23545_35937_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects1[i].getBehavior("为文本对象设定对应缩放")._20026_25991_26412_23545_35937_35774_23450_23545_24212_32553_25918(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs._24863_35874_27979_35797Code.mapOfGDgdjs_9546_959524863_959535874_959527979_959535797Code_9546GDDEVObjects2Objects = Hashtable.newFrom({"DEV": gdjs._24863_35874_27979_35797Code.GDDEVObjects2});
gdjs._24863_35874_27979_35797Code.eventsList3 = function(runtimeScene) {

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
gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._24863_35874_27979_35797Code.mapOfGDgdjs_9546_959524863_959535874_959527979_959535797Code_9546GDDEVObjects2Objects, 0, 0, "DEV");
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEVObjects2[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEVObjects2[i].setWrappingWidth(500);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._24863_35874_27979_35797Code.GDDEVObjects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEVObjects2[i].getBehavior("位置锚点")._35282_33853_38170_28857(0, 0, "默认位置", "↖ 左上", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEVObjects2[i].getBehavior("Text").setText("开发者调试模式已开启" + gdjs.evtTools.string.newLine() + "光点之旅 / TOLP" + gdjs.evtTools.string.newLine() + "版本号" + ":" + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " DEV" + gdjs.evtTools.string.newLine() + "FPS" + ":" + gdjs.evtTools.common.toString(Math.round(gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + gdjs.evtTools.string.newLine() + "分辨率" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + "x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) + gdjs.evtTools.string.newLine() + "设备像素比" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("pxr"))) + gdjs.evtTools.string.newLine() + "计算过的缩放值" + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.common.floorTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")), 4)) + gdjs.evtTools.string.newLine() + "光标显示：" + runtimeScene.getGame().getVariables().getFromIndex(10).getAsString() + gdjs.evtTools.string.newLine() + "UA：" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + gdjs.evtTools.string.newLine() + "全屏模式：" + runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
}
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEVObjects2[i].getBehavior("Opacity").setOpacity(180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._24863_35874_27979_35797Code.GDDEVObjects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEVObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 100 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ZoomScale")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._24863_35874_27979_35797Code.GDDEVObjects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEVObjects2[i].setX(0);
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
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._24863_35874_27979_35797Code.GDDEVObjects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEVObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._24863_35874_27979_35797Code.GDDEVObjects2);
gdjs.copyArray(runtimeScene.getObjects("DEV场景"), gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects2[i].setX((( gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length === 0 ) ? 0 :gdjs._24863_35874_27979_35797Code.GDDEVObjects2[0].getX()) + 180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DEV"), gdjs._24863_35874_27979_35797Code.GDDEVObjects1);
gdjs.copyArray(runtimeScene.getObjects("DEV场景"), gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects1);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects1[i].setX((( gdjs._24863_35874_27979_35797Code.GDDEVObjects1.length === 0 ) ? 0 :gdjs._24863_35874_27979_35797Code.GDDEVObjects1[0].getX()) + 180);
}
}}

}


};gdjs._24863_35874_27979_35797Code.mapOfGDgdjs_9546_959524863_959535874_959527979_959535797Code_9546GD_95959520809_95959526631Objects2Objects = Hashtable.newFrom({"光标": gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2});
gdjs._24863_35874_27979_35797Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2[i].getBehavior("为精灵设定对应缩放")._20026_31934_28789_35774_23450_23545_24212_32553_25918(0.35, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._24863_35874_27979_35797Code.mapOfGDgdjs_9546_959524863_959535874_959527979_959535797Code_9546GD_95959520809_95959526631Objects2Objects, -(500), -(500), "Cursor");
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
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 255, "easeOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 0, "easeOutQuad", 0.3, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CursorMovement__CursorIsMoving.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2[i].getBehavior("Tween").addObjectOpacityTween2("cur", 255, "easeOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CursorMovement__CursorStayStill.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("光标"), gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects1);
{for(var i = 0, len = gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects1.length ;i < len;++i) {
    gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects1[i].getBehavior("Tween").addObjectOpacityTween2("cur", 0, "easeOutQuad", 0.3, false);
}
}}

}


};gdjs._24863_35874_27979_35797Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "竖屏屏蔽");
}}

}


};gdjs._24863_35874_27979_35797Code.eventsList6 = function(runtimeScene) {

{


gdjs._24863_35874_27979_35797Code.eventsList0(runtimeScene);
}


{


gdjs._24863_35874_27979_35797Code.eventsList2(runtimeScene);
}


{



}


{


gdjs._24863_35874_27979_35797Code.eventsList3(runtimeScene);
}


{


gdjs._24863_35874_27979_35797Code.eventsList4(runtimeScene);
}


{


gdjs._24863_35874_27979_35797Code.eventsList5(runtimeScene);
}


};

gdjs._24863_35874_27979_35797Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEVObjects1.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEVObjects3.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects3.length = 0;

gdjs._24863_35874_27979_35797Code.eventsList6(runtimeScene);
gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9526631_9539064_9595_9526242_9520572Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525353_9538062_9595_9532487_9532493Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9536716_9522330_9524149_9524067Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9536820_9522238Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9525991_9523383_9595_9527979_9535797_9532467_9526463Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEVObjects1.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEVObjects2.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEVObjects3.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GDDEV_9522330_9526223Objects3.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects1.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects2.length = 0;
gdjs._24863_35874_27979_35797Code.GD_9520809_9526631Objects3.length = 0;


return;

}

gdjs['_24863_35874_27979_35797Code'] = gdjs._24863_35874_27979_35797Code;
