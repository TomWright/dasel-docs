(function() {
    'use strict';

    // Version configuration - add new versions here
    var versions = [
        'v1',
        'v2',
        'v3',
    ];
    var defaultVersion = 'v3';
    var versionLabels = {
        'v1': 'v1',
        'v2': 'v2',
        'v3': 'v3 (latest)',
    };

    var _IS_LOCAL = window.location.protocol === 'file:';
    var _SERVER_ROOT = window.location.origin;

    // Get current version from path or default
    function getCurrentVersion() {
        var path = window.location.pathname;

        // Check each configured version
        for (var i = 0; i < versions.length; i++) {
            if (path.includes('/' + versions[i] + '/')) {
                return versions[i];
            }
        }

        return defaultVersion;
    }

    // Get target URL based on selected version
    async function getTargetUrl(selectedVersion) {
        var currentVersion = getCurrentVersion();
        var currentPath = window.location.pathname;

        // Replace current version with selected version in path
        var targetPath = currentPath.replace('/' + currentVersion + '/', '/' + selectedVersion + '/');

        // Construct the full target URL
        var targetUrl = _IS_LOCAL
            ? 'file://' + targetPath
            : _SERVER_ROOT + targetPath;

        // If running locally, return immediately
        if (_IS_LOCAL) {
            return targetUrl;
        }

        // For remote URLs, check if target exists
        try {
            console.log('[Version Switcher] Checking:', targetUrl);
            var response = await fetch(targetUrl, { method: 'HEAD' });

            if (response.ok) {
                console.log('[Version Switcher] Page exists, status:', response.status);
                return targetUrl;
            } else {
                console.warn('[Version Switcher] Page not found, status:', response.status);
            }
        } catch (error) {
            console.error('[Version Switcher] Error checking target URL:', error);
        }

        // Fallback to index.html
        var fallbackPath = currentPath.replace(
            '/' + currentVersion + '/',
            '/' + selectedVersion + '/'
        );
        // Extract base path up to version directory
        var versionIndex = fallbackPath.indexOf('/' + selectedVersion + '/');
        if (versionIndex !== -1) {
            fallbackPath = fallbackPath.substring(0, versionIndex + selectedVersion.length + 2) + 'index.html';
        }

        var fallbackUrl = _SERVER_ROOT + fallbackPath;
        console.log('[Version Switcher] Using fallback:', fallbackUrl);
        return fallbackUrl;
    }

    // Create version switcher UI
    function createVersionSwitcher() {
        var currentVersion = getCurrentVersion();

        var container = document.createElement('div');
        container.className = 'version-switcher';

        // Create button
        var button = document.createElement('button');
        button.className = 'icon-button version-switcher-button';
        button.setAttribute('type', 'button');
        button.setAttribute('title', 'Switch Version');
        button.setAttribute('aria-label', 'Switch Version');
        button.setAttribute('aria-haspopup', 'true');
        button.setAttribute('aria-expanded', 'false');

        var iconSpan = document.createElement('span');
        iconSpan.className = 'fa-svg';
        iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 --><path d="M80 104c13.3 0 24-10.7 24-24s-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zM248 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z"/></svg>';
        button.appendChild(iconSpan);

        // Create dropdown menu
        var menu = document.createElement('div');
        menu.className = 'version-menu';
        menu.setAttribute('role', 'menu');

        // Add version options (reverse order to show latest first)
        for (var i = versions.length - 1; i >= 0; i--) {
            var ver = versions[i];
            var item = document.createElement('button');
            item.className = 'version-menu-item';
            item.setAttribute('type', 'button');
            item.setAttribute('role', 'menuitem');
            item.textContent = versionLabels[ver] || ver;
            item.dataset.version = ver;

            if (ver === currentVersion) {
                item.classList.add('active');
            }

            // Add click handler
            (function(version) {
                item.addEventListener('click', async function() {
                    var targetUrl = await getTargetUrl(version);
                    window.location.href = targetUrl;
                });
            })(ver);

            menu.appendChild(item);
        }

        // Toggle menu on button click
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            var isExpanded = menu.classList.contains('show');
            menu.classList.toggle('show');
            button.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!container.contains(e.target)) {
                menu.classList.remove('show');
                button.setAttribute('aria-expanded', 'false');
            }
        });

        container.appendChild(button);
        container.appendChild(menu);

        return container;
    }

    // Initialize version switcher
    function initVersionSwitcher() {
        var rightButtons = document.querySelector('.right-buttons');
        if (!rightButtons) {
            console.warn('Version switcher: Could not find .right-buttons element');
            return;
        }

        var switcher = createVersionSwitcher();

        // Insert before first child (before print button)
        rightButtons.insertBefore(switcher, rightButtons.firstChild);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVersionSwitcher);
    } else {
        initVersionSwitcher();
    }
})();
