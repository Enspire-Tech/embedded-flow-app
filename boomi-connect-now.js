var manywho = {
    cdnUrl: "https://assets.manywho.com",
    customResources: [
        "https://files-manywho-com.s3.amazonaws.com/b7493b27-2215-4de8-a0b5-17bbcd94a2e7/ci-components.js",
        "https://files-manywho-com.s3.amazonaws.com/b7493b27-2215-4de8-a0b5-17bbcd94a2e7/ci-components.css"
    ],
    requires: ["core", "bootstrap3"],
    initialize: function () {

        var queryParameters = manywho.utils.parseQueryString(window.location.search.substring(1));
        
        manywho.theming.custom("https://files-manywho-com.s3.amazonaws.com/b7493b27-2215-4de8-a0b5-17bbcd94a2e7/customstyles.css");
        
        manywho.settings.initialize({
            platform: {
                uri: "https://flow.manywho.com"
            },
            adminTenantId: "da497693-4d02-45db-bc08-8ea16d2ccbdf",
            playerUrl: [ location.protocol, "//", location.host, location.pathname ].join(""),
            joinUrl: [ location.protocol, "//", location.host, location.pathname ].join(""),
            ci: {
                stage: "prod",
                idp: queryParameters["idp"],
                bma: queryParameters["bma"]
            },
            outcomes: {
                // Change how outcomes are rendered: icon, iconandtext, iconnobackground
                display: null,
                // Fix outcomes to the bottom of screen
                isFixed: false,
            },
            validation: {
                isEnabled: true
            }
        });

        // querystring elements to FLow Values
        var flowInputs = null;
        var inputs = [];
        if(queryParameters["prt"]) {
            inputs.push({"prt": queryParameters["prt"]});
        }
        if(inputs.length > 0) {
            flowInputs = manywho.json.generateFlowInputs(inputs);
        }

        var options = {
            authentication: {
                sessionId: queryParameters["session-token"],
                sessionUrl: queryParameters["session-url"]
            },
            navigationElementId: queryParameters["navigation-element-id"],
            mode: queryParameters["mode"],
            reportingMode: queryParameters["reporting-mode"],
            replaceUrl: false,
            collaboration: {
                isEnabled: false
            },
            inputs: flowInputs,
            annotations: null,
            navigation: {
                isFixed: true,
                isWizard: false,
                hideNav: false,
                collapseable: false,
                collapsed: false
            },
            callbacks: [],
            theme: queryParameters["theme"]
        };

        var tenantId = "b7493b27-2215-4de8-a0b5-17bbcd94a2e7";
        var flowId = "5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62";

        manywho.engine.initialize(
            tenantId,
            flowId,
            queryParameters["flow-version-id"],
            "main",
            queryParameters["join"],
            queryParameters["authorization"],
            options,
            queryParameters["initialization"]
        );

    }
};