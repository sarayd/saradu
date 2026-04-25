// =============================================================
// Things — Are.na-style inspiration page
// =============================================================
// Each channel has a title, updated date, and blocks (text items).
// Click a channel to see its blocks.
// =============================================================

const CHANNELS = [
    {
        slug: "art",
        title: "art",
        updated: "2026-04-24",
        noModal: true,
        blocks: [
            { type: "image", src: "media/things/hiroshi-surface-of-revolution-2006.png", alt: "Hiroshi Sugimoto", subtitle: "Surface of Revolution with Constant Negative Curvature, 2006 by Hiroshi Sugimoto", added: "2026-04-25" },
            { type: "image", src: "media/things/hiroshi-hypersphere-2012.png", alt: "Hiroshi Sugimoto", subtitle: "Constant Curvature Surface Revolution, 2012 by Hiroshi Sugimoto", added: "2026-04-25" },
            { type: "image", src: "media/things/hiroshi-silivli-1991.png", alt: "Hiroshi Sugimoto", subtitle: "Marmara Sea, Silivli, 1991 by Hiroshi Sugimoto", added: "2026-04-25" },
            { type: "image", src: "media/things/hiroshi-norwegian-sea-1990.png", alt: "Hiroshi Sugimoto", subtitle: "Norwegian Sea, 1990 by Hiroshi Sugimoto", added: "2026-04-25" },
            { type: "image", src: "media/things/hiroshi-ciotat.png", alt: "Hiroshi Sugimoto", subtitle: "Mediterranean Sea, La Ciotat, 1989 by Hiroshi Sugimoto", added: "2026-04-25" },
            { type: "image", src: "media/things/hiroshi-oki-1987.png", alt: "Hiroshi Sugimoto", subtitle: "Sea of Japan, Oki, 1987 by Hiroshi Sugimoto", added: "2026-04-25" },
            { type: "image", src: "media/things/masanobu-hiraoka.gif", alt: "Masanobu Hiraoka", subtitle: "Masanobu Hiraoka", added: "2026-04-22" },
            { type: "image", src: "media/things/madonna-child-recalled.png", alt: "Madonna & Child, Recalled 2025 by Alexander James", subtitle: "'Madonna & Child, Recalled 2025' by Alexander James", added: "2026-04-20" },
            { type: "image", src: "media/things/the-tree-park-jiyoung.png", alt: "The tree, 2023 by Park Jiyoung", subtitle: "'The tree, 2023' by Park Jiyoung", added: "2026-03-12" },
            { type: "image", src: "media/things/reminisce-park-jiyoung.png", alt: "Reminisce, 2023 by Park Jiyoung", subtitle: "'Reminisce, 2023' by Park Jiyoung", added: "2026-02-05" },
            { type: "image", src: "media/things/the-observer-alexander-james.png", alt: "The Observer, 2024 by Alexander James", subtitle: "'The Observer, 2024' by Alexander James", added: "2025-12-18" },
            { type: "image", src: "media/things/he-wired-the-shadows-esther-sibiude.png", alt: "He wired the shadows and played them up and down like scales, 2023 by Esther Sibiude", subtitle: "'He wired the shadows and played them up and down like scales, 2023' by Esther Sibiude", added: "2025-10-30" },
            { type: "image", src: "media/things/nighthawks-edward-hopper.jpg", alt: "Nighthawks, 1942 by Edward Hopper", subtitle: "'Nighthawks, 1942' by Edward Hopper", added: "2025-08-14" },
        ]
    },
    {
        slug: "words",
        title: "words",
        updated: "2026-04-24",
        blocks: [
            { type: "text", content: "koan", description: "A koan is a paradoxical anecdote, riddle, or dialogue used in Zen Buddhism to force students to abandon ultimate dependence on logic and reasoning, forcing them toward direct insight or sudden enlightenment", added: "2026-04-22" },
            { type: "text", content: "autotelic", description: "Autotelic describes an activity or personality driven by internal rewards rather than external goals, derived from Greek auto (self) and telos (goal). An autotelic person does things for their own sake—enjoying the process rather than just the outcome. This state is key to achieving \"flow,\" fostering autonomy, curiosity, and intrinsic motivation.", added: "2026-03-08" },
            { type: "text", content: "atavism", description: "Atavism is the reappearance of lost ancestral traits in an individual organism, acting as an evolutionary 'throwback'", added: "2026-01-14" },
            { type: "text", content: "insouciant", description: "A casual lack of concern; carefree indifference. From French insouciant — not troubling oneself.", added: "2025-12-03" },
            { type: "text", content: "solastalgia", description: "The distress caused by environmental change in a place you still live in — a form of homesickness you feel while still at home.", added: "2026-04-11" },
            { type: "text", content: "unalloyed", description: "Complete and unreserved. Unalloyed joy, unalloyed grief — emotions without dilution or qualification.", added: "2025-10-19" },
            { type: "text", content: "proustian", description: "A sensory experience — a taste, a smell — that involuntarily triggers a vivid, emotionally rich memory. After Marcel Proust's madeleine dipped in tea.", added: "2026-02-21" },
            { type: "text", content: "apophenia", description: "The tendency to perceive meaningful connections between unrelated things — seeing patterns where none exist.", added: "2025-11-07" },
            { type: "text", content: "yūgen (幽玄)", description: "A mysterious sense of the beauty of the universe — an awareness of things that triggers an emotional response too deep for words.", added: "2025-09-15" },
            { type: "text", content: "nominal determinism", description: "The concept that people are subconsciously drawn to careers or hobbies that match their names, like a Gardner becoming a gardener, explained by psychological ideas such as implicit egotism (preferring things similar to oneself).", added: "2026-03-29" },
            { type: "text", content: "Schnapsidee", description: "Ideas so ludicrous that they must have been conceived while drunk.", added: "2025-10-02" },
            { type: "text", content: "satori (悟り)", description: "Refers to a range of concepts, most notably the Buddhist term for spiritual enlightenment or awakening.", added: "2026-01-26" },
            { type: "text", content: "tsundoku (積ん読)", description: "Acquiring books and letting them pile up, often without reading them immediately.", added: "2025-11-22" },
            { type: "text", content: "atopy (ατοπία)", description: "The ineffability of things or emotions that are seldom experienced, that are outstanding and that are original in the strict sense. A certain quality of experience that can be observed within oneself or within others, differing from the ideal quality that is conceptualized, not experienced.", added: "2026-02-05" },
        ]
    },
    // {
    //     slug: "places",
    //     title: "places",
    //     updated: "2026-04-24",
    //     blocks: [
    //         { type: "image", src: "media/things/janeiro-hotel.jpg", alt: "Janeiro Hotel, Leblon, Rio de Janeiro" },
    //     ]
    // },
    // {
    //     slug: "books",
    //     title: "books",
    //     updated: "2025-04-24",
    //     blocks: []
    // },
    // {
    //     slug: "fish",
    //     title: "fish",
    //     updated: "2025-04-24",
    //     blocks: [
    //         { type: "text", content: "nodoguro" },
    //     ]
    // },
    {
        slug: "beliefs",
        title: "beliefs",
        updated: "2025-04-24",
        blocks: [
            { type: "text", content: "happiness is the delta between expectations and reality" },
        ]
    },
    {
        slug: "dishes",
        title: "dishes",
        updated: "2026-04-24",
        // pinned: "I mostly keep track of favorite dishes over favorite restaurants.",
        blocks: [
            { type: "text", content: "dakos in greece", noModal: true, added: "2025-06-15" },
            { type: "text", content: "pao de quiejo, anywhere", noModal: true, added: "2020-12-28" },
            { type: "text", content: "tiramisu, at many places", link: "tiramisu", added: "2026-04-25" },
            { type: "text", content: "octopus pizzaiolo and spicy rig from Carbone", noModal: true, added: "2023-01-11" },
            { type: "text", content: "duck carnitas from Damian (LA)", noModal: true, added: "2024-04-02" },
            { type: "text", content: "cold niku udon at Yume (cambridge)", noModal: true, added: "2019-10-23" },
            { type: "image", src: "media/things/ruleofthirds.avif", alt: "souffle pancakes from Rule of Thirds (brooklyn)",  subtitle: "souffle pancakes from Rule of Thirds (brooklyn)", noModal: true, added: "2021-02-14" },
            { type: "image", src: "media/things/lilia.webp", alt: "agnolotti filled w sheep's milk cheese & covered in honey from lilia (brooklyn)", subtitle: "agnolotti filled w sheep's milk cheese & covered in honey from lilia (brooklyn)", noModal: true, added: "2021-02-14" },
            { type: "text", content: "affogato from Caffe Panna (NYC)", noModal: true, added: "2025-11-30" },
            { type: "text", content: "crab noodles at 人和馆 (shanghai)", noModal: true, added: "2024-12-30" },
            { type: "image", src: "media/things/nakamura.png", alt: "matcha parfait at 茶寮都路里 (kyoto)", subtitle: "matcha parfait at 茶寮都路里 (kyoto)", noModal: true, added: "2025-12-30" },
            { type: "text", content: "warabimochi from 一幸庵 (tokyo)", noModal: true, added: "2022-12-30" },
            { type: "text", content: "soba from 雷庵 (tokyo)", noModal: true, added: "2022-12-30" },
            { type: "text", content: "octopus bone marrow fusilli from Marea (NYC)", noModal: true, added: "2020-03-03" },
            { type: "text", content: "amaebi at Sushi Ota (SD)", noModal: true, added: "2025-10-05" },
            { type: "image", src: "media/things/soft-serve-angler.png", alt: "Soft serve at Angler (SF)", subtitle: "soft serve at Angler (SF)", noModal: true, added: "2026-01-19" },
            { type: "text", content: "chocolate budino at Seven Hills (SF)", noModal: true, added: "2026-03-12" },
            { type: "text", content: "mochi with crab at Spectrum (Amsterdam)", noModal: true, added: "2025-05-18" },
            { type: "image", src: "media/things/pujol.jpg", alt: "mole at pujol (CDMX)", subtitle: "mole at pujol (CDMX)", noModal: true, added: "2024-08-17" },
        ]
    },
    // {
    //     slug: "buildings",
    //     title: "buildings",
    //     updated: "2025-04-24",
    //     blocks: [
    //         { type: "text", content: "temples" },
    //         { type: "text", content: "churches" },
    //         { type: "text", content: "lina bo bardi" },
    //     ]
    // },
    {
        slug: "products",
        title: "products",
        updated: "2025-04-24",
        blocks: [
            { type: "text", content: "dyson", added: "2025-09-03" },
            { type: "text", content: "nosemint", added: "2026-03-21" },
            { type: "text", content: "neurogum", added: "2026-01-07" },
            { type: "text", content: "fodzyme", added: "2025-11-15" },
            { type: "text", content: "zbiotics", added: "2026-04-10" },
            { type: "text", content: "zojirushi", added: "2025-10-28" },
            { type: "text", content: "reformer", added: "2026-02-19" },
        ]
    },
    // {
    //     slug: "uncategorizable",
    //     title: "uncategorizable",
    //     updated: "2025-04-24",
    //     blocks: [
    //         { type: "text", content: "massages" },
    //         { type: "text", content: "ppl watching" },
    //         { type: "text", content: "amateur surfing" },
    //         { type: "text", content: "driving range but not the course" },
    //         { type: "text", content: "driving in LA" },
    //         { type: "text", content: "fever dreams" },
    //         { type: "text", content: "nostalgia" },
    //     ]
    // },
];

// Sub-channels — accessible from within a parent channel block
const SUBCHANNELS = [
    {
        slug: "tiramisu",
        title: "tiramisu",
        parent: "dishes",
        updated: "2026-04-24",
        blocks: [
            { type: "image", src: "media/things/tiramisu-01.jpg", alt: "Tiramisu in cups and tray" },
            { type: "image", src: "media/things/tiramisu-02.jpg", alt: "Tiramisu bars on silver platters" },
            { type: "image", src: "media/things/tiramisu-03.jpg", alt: "Corn tiramisu" },
            { type: "image", src: "media/things/tiramisu-04.jpg", alt: "Tiramisu slice with coffee bean" },
            { type: "image", src: "media/things/tiramisu-05.jpg", alt: "Chocolate choux tiramisu" },
            { type: "image", src: "media/things/tiramisu-06.jpg", alt: "Tiramisu slice on ceramic plate" },
            { type: "image", src: "media/things/tiramisu-07.jpg", alt: "Tiramisu round on cooling rack" },
            { type: "image", src: "media/things/tiramisu-08.jpg", alt: "Pistachio tiramisu" },
            { type: "image", src: "media/things/tiramisu-09.jpg", alt: "TIRAMISU cake top-down" },
            { type: "image", src: "media/things/tiramisu-10.jpg", alt: "Tiramisu cross-section" },
            { type: "image", src: "media/things/tiramisu-11.jpg", alt: "Messy tiramisu on plate" },
            { type: "image", src: "media/things/tiramisu-12.jpg", alt: "Tiramisu with chocolate pearls" },
            { type: "image", src: "media/things/tiramisu-13.jpg", alt: "Trattoria tiramisu with spoon" },
            { type: "image", src: "media/things/tiramisu-14.jpg", alt: "Matcha tiramisu" },
            { type: "text", content: "tiramiso from Ama (SF)" },
        ]
    },
];

// =============================================================
// Helpers
// =============================================================

function timeAgo(dateStr) {
    const now = new Date();
    const then = new Date(dateStr);
    const days = Math.floor((now - then) / (1000 * 60 * 60 * 24));
    if (days === 0) return "today";
    if (days === 1) return "1 day ago";
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    if (months === 1) return "1 month ago";
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(months / 12);
    if (years === 1) return "1 year ago";
    return `${years} years ago`;
}

// =============================================================
// Rendering
// =============================================================

const $grid = document.getElementById("things-grid");
const $detail = document.getElementById("things-detail");
const $modalOverlay = document.getElementById("things-modal-overlay");
const $modal = document.getElementById("things-modal");

function renderGrid() {
    $detail.style.display = "none";
    $grid.style.display = "";

    $grid.innerHTML = CHANNELS.filter(ch => !ch.hidden).map(ch => `
        <a class="things-card" href="#${ch.slug}">
            <span class="things-card-title">${ch.title}</span>
            <div class="things-card-meta">
                <span>${ch.blocks.length} block${ch.blocks.length !== 1 ? "s" : ""}</span>
                <span>${timeAgo(ch.updated)}</span>
            </div>
        </a>
    `).join("");
}

function findChannel(slug) {
    return CHANNELS.find(ch => ch.slug === slug) || SUBCHANNELS.find(ch => ch.slug === slug);
}

function renderDetail(slug) {
    const channel = findChannel(slug);
    if (!channel) { renderGrid(); return; }

    $grid.style.display = "none";
    $detail.style.display = "";

    const isSubchannel = !!channel.parent;
    const backHref = isSubchannel ? `#${channel.parent}` : "#";
    const backLabel = isSubchannel ? `\u2190 ${channel.parent}` : "\u2190 All things";

    // Sort blocks by date (most recent first), preserving original indices for modal lookups
    const sorted = channel.blocks.map((block, i) => ({ block, i }))
        .sort((a, b) => new Date(b.block.added || channel.updated) - new Date(a.block.added || channel.updated));

    const blocksHTML = channel.blocks.length === 0
        ? '<p class="things-empty">No blocks yet.</p>'
        : sorted.map(({ block, i }) => {
            const noClick = channel.noModal || block.noModal;
            const noClickClass = noClick && !block.link ? ' things-block-static' : '';
            const timeHTML = `<div class="things-block-time">${timeAgo(block.added || channel.updated)}</div>`;
            if (block.type === "image") {
                const subtitleHTML = block.subtitle ? `<div class="things-block-subtitle">${block.subtitle}</div>` : '';
                return `<div class="things-block-wrap">
                    <div class="things-block things-block-image${noClickClass}" data-slug="${slug}" data-index="${i}">
                        <img src="${block.src}" alt="${block.alt || ''}" loading="lazy">
                    </div>
                    ${subtitleHTML}
                    ${timeHTML}
                </div>`;
            }
            const linkClass = block.link ? ' things-block-link' : '';
            return `<div class="things-block-wrap">
                <div class="things-block${linkClass}${noClickClass}" data-slug="${slug}" data-index="${i}"${block.link ? ` data-link="${block.link}"` : ''}>
                    <p>${block.content}</p>
                    ${block.description ? `<p class="things-block-desc">${block.description}</p>` : ''}
                    ${block.link ? '<span class="things-block-arrow">\u2192</span>' : ''}
                </div>
                ${timeHTML}
            </div>`;
        }).join("");

    const pinnedHTML = channel.pinned
        ? `<div class="things-pinned"><span class="things-pinned-icon">&#x1F4CC;</span> ${channel.pinned}</div>`
        : '';

    $detail.innerHTML = `
        <a href="${backHref}" class="things-back">${backLabel}</a>
        <h2 class="things-channel-title">${channel.title}</h2>
        ${pinnedHTML}
        <div class="things-blocks">${blocksHTML}</div>
    `;

}

// Modal — event delegation for block clicks
document.addEventListener("click", (e) => {
    const block = e.target.closest(".things-block");
    if (block && block.dataset.slug) {
        // If block links to a sub-channel, navigate there
        if (block.dataset.link) {
            location.hash = block.dataset.link;
            return;
        }
        const ch = findChannel(block.dataset.slug);
        const data = ch.blocks[parseInt(block.dataset.index)];
        if (ch.noModal || data.noModal) return;
        const closeBtn = `<button class="things-modal-close" aria-label="Close">\u00D7</button>`;
        if (data.type === "image") {
            $modal.innerHTML = `${closeBtn}<img src="${data.src}" alt="${data.alt || ''}">`;
            $modal.classList.add("things-modal-image");
        } else {
            $modal.innerHTML = `
                ${closeBtn}
                <p>${data.content}</p>
                ${data.description ? `<p class="things-block-desc">${data.description}</p>` : ''}
            `;
            $modal.classList.remove("things-modal-image");
        }
        $modalOverlay.classList.add("active");
    }
});

$modalOverlay.addEventListener("click", (e) => {
    if (e.target === $modalOverlay || e.target.classList.contains("things-modal-close")) {
        $modalOverlay.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") $modalOverlay.classList.remove("active");
});

// hash routing
function route() {
    const hash = location.hash.replace("#", "");
    if (hash) { renderDetail(hash); }
    else { renderGrid(); }
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);

// Loops email subscribe
const LOOPS_FORM_ID = "cmoepw5v203aa0hzwcnyt1kdi";

const $subscribeForm = document.getElementById("things-subscribe-form");
const $emailInput = document.getElementById("things-email");
const $subscribeMsg = document.getElementById("things-subscribe-msg");

$subscribeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = $emailInput.value.trim();
    if (!email) return;

    const $btn = $subscribeForm.querySelector(".things-subscribe-btn");
    $btn.disabled = true;
    $btn.textContent = "...";
    $subscribeMsg.textContent = "";
    $subscribeMsg.className = "things-subscribe-msg";

    try {
        const res = await fetch(`https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ email }),
        });
        const data = await res.json();
        if (res.ok && data.success !== false) {
            $subscribeMsg.textContent = "You're in — thanks for subscribing.";
            $subscribeMsg.className = "things-subscribe-msg success";
            $emailInput.value = "";
        } else {
            $subscribeMsg.textContent = data.message || "Something went wrong. Try again?";
            $subscribeMsg.className = "things-subscribe-msg error";
        }
    } catch {
        $subscribeMsg.textContent = "Something went wrong. Try again?";
        $subscribeMsg.className = "things-subscribe-msg error";
    }
    $btn.disabled = false;
    $btn.textContent = "Subscribe";
});
