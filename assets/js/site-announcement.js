(function () {
  const config = window.siteAnnouncementConfig || {};
  if (!config.id || !config.message || !config.url) return;

  const storageKey = `site-announcement-dismissed-${config.id}`;

  const hasDismissed = () => {
    try {
      return window.localStorage.getItem(storageKey) === 'true';
    } catch (error) {
      return false;
    }
  };

  const setDismissed = () => {
    try {
      window.localStorage.setItem(storageKey, 'true');
    } catch (error) {}
  };

  const trackAnnouncement = (action) => {
    if (!window.siteAnalytics || typeof window.siteAnalytics.trackEvent !== 'function') return;
    window.siteAnalytics.trackEvent('site_announcement', {
      announcement_id: config.id,
      announcement_action: action
    });
  };

  const removeAnnouncement = (announcement) => {
    if (!announcement) return;
    announcement.setAttribute('hidden', '');
    announcement.remove();
  };

  const showAnnouncement = () => {
    if (hasDismissed()) return;
    if (document.querySelector('[data-site-announcement]')) return;

    const announcement = document.createElement('section');
    announcement.className = 'site-announcement';
    announcement.dataset.siteAnnouncement = '';
    announcement.setAttribute('role', 'dialog');
    announcement.setAttribute('aria-label', config.title || 'Latest update');

    const copy = document.createElement('div');
    copy.className = 'site-announcement__copy';

    const title = document.createElement('h2');
    title.textContent = config.title || 'Latest update';

    const message = document.createElement('p');
    message.textContent = config.message;

    const actions = document.createElement('div');
    actions.className = 'site-announcement__actions';

    const detailsLink = document.createElement('a');
    detailsLink.className = 'button site-announcement__button';
    detailsLink.href = config.url;
    detailsLink.dataset.announcementLink = '';
    detailsLink.textContent = config.linkLabel || 'More details';

    const dismissButton = document.createElement('button');
    dismissButton.className = 'button secondary site-announcement__button';
    dismissButton.type = 'button';
    dismissButton.dataset.announcementDismiss = '';
    dismissButton.textContent = 'Dismiss';

    copy.append(title, message);
    actions.append(detailsLink, dismissButton);
    announcement.append(copy, actions);

    document.body.appendChild(announcement);

    detailsLink.addEventListener('click', () => {
      setDismissed();
      trackAnnouncement('open');
    });

    dismissButton.addEventListener('click', () => {
      setDismissed();
      trackAnnouncement('dismiss');
      removeAnnouncement(announcement);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showAnnouncement, { once: true });
  } else {
    showAnnouncement();
  }
})();
