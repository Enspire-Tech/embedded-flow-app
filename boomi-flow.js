var manywho = {
    cdnUrl: 'https://assets.manywho.com',
    requires: ['core', 'bootstrap3'],
    initialize: function () {

        var queryParameters = manywho.utils.parseQueryString(window.location.search.substring(1));

        manywho.settings.initialize({
            adminTenantId: 'da497693-4d02-45db-bc08-8ea16d2ccbdf',
            playerUrl: [ location.protocol, '//', location.host, location.pathname ].join(''),
            joinUrl: [ location.protocol, '//', location.host, location.pathname ].join(''),
            platform: {
                uri: 'https://flow.manywho.com'
            }
        });

        var options = {
            authentication: {
                sessionId: queryParameters['session-token'],
                sessionUrl: queryParameters['session-url']
            },
            navigationElementId: queryParameters['navigation-element-id'],
            mode: queryParameters['mode'],
            reportingMode: queryParameters['reporting-mode'],
            trackLocation: false,
            replaceUrl: true,
            collaboration: {
                isEnabled: false
            },
            inputs: null,
            annotations: null,
            collapsible: true,
            navigation: {
                isFixed: true,
                isWizard: false
            },
            callbacks: [],
            theme: queryParameters['theme']
        };

        var tenantId = "f078f61d-bfa8-4129-98d9-c6e799022dda";
        if (!tenantId) {

            tenantId = window.location.pathname
                        .split('/')
                        .filter(function (path) {

                            return path && path.length > 0;

                        })[0];

        }

        manywho.engine.initialize(
          tenantId,
          "d27a2fbd-9829-42b6-87df-dcea2a266bf8",
          "a810d167-41e8-4aed-9f19-9074b51564eb",
          'main',
          queryParameters['join'],
          queryParameters['authorization'],
          options,
          queryParameters['initialization']
      );
    }
};