import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';

window.osuny = window.osuny || {};

document.addEventListener('DOMContentLoaded', function () {
    const animated = false,
        options = {
            animationSelector: false,
            containers: ['#main'],
            ignoreVisit: (url, { el } = {}) => (
                el?.matches('a[lang]')
            ),
            plugins: [
                new SwupBodyClassPlugin(),
                new SwupA11yPlugin()
            ]
        };

    const swup = new Swup(options);

    swup.hooks.replace('animation:out:await', async () => {
        await new Promise((resolve) => {
            document.body.classList.add('is-updating');
            setTimeout(resolve, 500);
        });
    });


    swup.hooks.on('page:view', () => {
        window.osuny.page.init();

        setTimeout(() => {
            document.body.classList.remove('is-updating');
        }, 500)

        window.scrollTo(0, 0);
    });
});

