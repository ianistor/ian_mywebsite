(function () {
  const config = window.siteAnalyticsConfig || {};
  const measurementId = config.measurementId;
  if (!measurementId) return;

  const storageKey = 'site-analytics-consent';
  const grantedValue = 'granted';
  const deniedValue = 'denied';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    personalization_storage: 'denied',
    security_storage: 'granted'
  });

  const getStoredConsent = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  };

  const setStoredConsent = (value) => {
    try {
      window.localStorage.setItem(storageKey, value);
    } catch (error) {}
  };

  const getTrafficData = () => {
    const params = new URLSearchParams(window.location.search);
    const trafficData = {};
    const campaignKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term'
    ];

    campaignKeys.forEach((key) => {
      const value = params.get(key);
      if (value) trafficData[key] = value.slice(0, 100);
    });

    if (document.referrer) {
      try {
        trafficData.referrer_host = new URL(document.referrer).hostname.replace(/^www\./, '').slice(0, 100);
      } catch (error) {}
    }

    return trafficData;
  };

  const loadGoogleAnalytics = () => {
    if (window.siteAnalyticsLoaded) return;
    window.siteAnalyticsLoaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: false
    });
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      ...getTrafficData()
    });
  };

  const grantAnalyticsConsent = () => {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    });
    loadGoogleAnalytics();
  };

  const trackEvent = (eventName, eventParams) => {
    if (getStoredConsent() !== grantedValue || !window.gtag) return;
    window.gtag('event', eventName, eventParams || {});
  };

  window.siteAnalytics = {
    grantConsent: grantAnalyticsConsent,
    trackEvent
  };

  const removeBanner = (banner) => {
    if (!banner) return;
    banner.setAttribute('hidden', '');
    banner.remove();
  };

  const showConsentBanner = () => {
    if (document.querySelector('[data-cookie-consent]')) return;

    const banner = document.createElement('section');
    banner.className = 'cookie-consent';
    banner.dataset.cookieConsent = '';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Analytics consent');
    banner.innerHTML = `
      <div class="cookie-consent__copy">
        <h2>Analytics cookies</h2>
        <p>I use Google Analytics to understand where visits come from and which pages are useful. No analytics cookies are set unless you accept. <a href="/privacy/">Privacy details</a></p>
      </div>
      <div class="cookie-consent__actions">
        <button class="button secondary cookie-consent__button" type="button" data-cookie-decline>Decline</button>
        <button class="button cookie-consent__button" type="button" data-cookie-accept>Accept</button>
      </div>
    `;

    document.body.appendChild(banner);

    const acceptButton = banner.querySelector('[data-cookie-accept]');
    const declineButton = banner.querySelector('[data-cookie-decline]');

    acceptButton.addEventListener('click', () => {
      setStoredConsent(grantedValue);
      grantAnalyticsConsent();
      removeBanner(banner);
    });

    declineButton.addEventListener('click', () => {
      setStoredConsent(deniedValue);
      removeBanner(banner);
    });
  };

  const storedConsent = getStoredConsent();
  if (storedConsent === grantedValue) {
    grantAnalyticsConsent();
    return;
  }

  if (storedConsent !== deniedValue) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showConsentBanner, { once: true });
    } else {
      showConsentBanner();
    }
  }
})();
