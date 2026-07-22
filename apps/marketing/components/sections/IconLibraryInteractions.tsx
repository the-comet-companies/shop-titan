'use client';

import { useEffect } from 'react';

// Wires up the icon-library markup injected via dangerouslySetInnerHTML:
// click-to-copy with toast, name search, and the dark preview toggle.
// Ported from the inline <script> of lib/icon-library-source.html.
export default function IconLibraryInteractions() {
    useEffect(() => {
        const q = document.getElementById('q') as HTMLInputElement | null;
        const toast = document.getElementById('toast');
        const empty = document.getElementById('empty');
        const dark = document.getElementById('darkPrev') as HTMLInputElement | null;
        const cards = Array.from(document.querySelectorAll<HTMLElement>('.iconlib .card'));
        if (!q || !toast || !empty) return;

        let tt: ReturnType<typeof setTimeout> | undefined;

        const copy = (text: string, name: string) => {
            navigator.clipboard.writeText(text).then(() => {
                toast.innerHTML = 'Copied <code>' + name.replace(/</g, '&lt;') + '</code>';
                toast.classList.add('show');
                clearTimeout(tt);
                tt = setTimeout(() => toast.classList.remove('show'), 1500);
            });
        };

        const cardHandlers = cards.map((c) => {
            const handler = () => copy(c.dataset.copy || '', c.dataset.name || '');
            c.addEventListener('click', handler);
            return handler;
        });

        const onDark = () => {
            document.documentElement.setAttribute('data-prev', dark?.checked ? 'dark' : 'light');
        };
        dark?.addEventListener('change', onDark);

        const onInput = () => {
            const t = q.value.trim().toLowerCase();
            let shown = 0;
            cards.forEach((c) => {
                const m = !t || (c.dataset.name || '').toLowerCase().includes(t);
                c.style.display = m ? '' : 'none';
                if (m) shown++;
            });
            document.querySelectorAll<HTMLElement>('.iconlib div[id^=sec-]').forEach((s) => {
                const any = Array.from(s.querySelectorAll<HTMLElement>('.card')).some(
                    (c) => c.style.display !== 'none',
                );
                s.style.display = any ? '' : 'none';
            });
            empty.style.display = shown ? 'none' : 'block';
        };
        q.addEventListener('input', onInput);

        return () => {
            clearTimeout(tt);
            q.removeEventListener('input', onInput);
            dark?.removeEventListener('change', onDark);
            cards.forEach((c, i) => c.removeEventListener('click', cardHandlers[i]));
            document.documentElement.removeAttribute('data-prev');
        };
    }, []);

    return null;
}
