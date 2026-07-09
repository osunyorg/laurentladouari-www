import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';
import { canvasBackground } from './animations/CanvasBackground';

window.osuny = window.osuny || {};

document.addEventListener('DOMContentLoaded', function () {
    const options = {
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
            canvasBackground.updatePageTransitionTransform();
            setTimeout(resolve, 500);
        });
    });

    swup.hooks.on('page:view', () => {
        window.osuny.page.init();
        canvasBackground.reinit();
        window.scrollTo(0, 0);
    });

    canvasBackground.setup();
});

