var manywho = {
    cdnUrl: 'https://assets.manywho.com',
    customResources: [
        'https://files-manywho-com.s3.amazonaws.com/80242998-66d4-44a0-9eba-fd5bc5644932/ga104.ci-components.js',
        'https://files-manywho-com.s3.amazonaws.com/80242998-66d4-44a0-9eba-fd5bc5644932/ga104.ci-components.css'
    ],
    requires: ['core', 'bootstrap3'],
    initialize: function () {

        var queryParameters = manywho.utils.parseQueryString(window.location.search.substring(1));

        manywho.theming.custom('https://files-manywho-com.s3.amazonaws.com/80242998-66d4-44a0-9eba-fd5bc5644932/ga104.customstyles.css');
        
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
            replaceUrl: false,
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

        var tenantId = '80242998-66d4-44a0-9eba-fd5bc5644932';
        flowId = '5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62'; 

        manywho.engine.initialize(
            tenantId,
            flowId, // queryParameters['flow-id'],
            queryParameters['flow-version-id'],
            'main',
            queryParameters['join'],
            queryParameters['authorization'],
            options,
            queryParameters['initialization']
        );

    }
};