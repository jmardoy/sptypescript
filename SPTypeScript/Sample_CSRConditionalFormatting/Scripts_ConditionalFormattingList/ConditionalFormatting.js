(function () {
    function init() {
        CSR.override(171, 1).onPostRender(function (ctx) {
            for(var i = 0; i < ctx.ListData.Row.length; i++) {
                var listItem = ctx.ListData.Row[i];
                var percentComplete = parseFloat(listItem['PercentComplete.']);
                var row = document.getElementById(GenerateIIDForListItem(ctx, listItem));
                if(row) {
                    if(percentComplete > 0.8) {
                        row.style.backgroundColor = '#f8502a';
                    } else if(percentComplete > 0.4) {
                        row.style.backgroundColor = '#52f82a';
                    }
                }
            }
        }).register();
    }
    ;
    var webUrl = window.localStorage['AppWebUrl'];
    var targetListUrl = webUrl + '/Lists/ConditionalFormattingTasksList';
    if(document.location.href.indexOf(targetListUrl) == 0) {
        SP.SOD.executeOrDelayUntilScriptLoaded(function () {
            SP.SOD.executeOrDelayUntilScriptLoaded(init, "typescripttemplates.ts");
            SP.SOD.executeOrDelayUntilScriptLoaded(function () {
                RegisterModuleInit(SPClientTemplates.Utility.ReplaceUrlTokens("~site/Scripts_ConditionalFormattingList/ConditionalFormatting.js"), init);
            }, "sp.js");
        }, "clienttemplates.js");
    }
})();
//@ sourceMappingURL=ConditionalFormatting.js.map