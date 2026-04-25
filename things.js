// =============================================================
// Things — Are.na-style inspiration page
// =============================================================
// Each channel has a title, updated date, and blocks (text items).
// Click a channel to see its blocks.
// =============================================================

const CHANNELS = [
    {
        slug: "words",
        title: "words",
        updated: "2026-04-24",
        blocks: [
            { type: "text", content: "koan", description: "A koan is a paradoxical anecdote, riddle, or dialogue used in Zen Buddhism to force students to abandon ultimate dependence on logic and reasoning, forcing them toward direct insight or sudden enlightenment" },
            { type: "text", content: "autotelic", description: "Autotelic describes an activity or personality driven by internal rewards rather than external goals, derived from Greek auto (self) and telos (goal). An autotelic person does things for their own sake—enjoying the process rather than just the outcome. This state is key to achieving \"flow,\" fostering autonomy, curiosity, and intrinsic motivation." },
            { type: "text", content: "atavism", description: "Atavism is the reappearance of lost ancestral traits in an individual organism, acting as an evolutionary 'throwback'" },
            { type: "text", content: "insouciant", description: "A casual lack of concern; carefree indifference. From French insouciant — not troubling oneself." },
            { type: "text", content: "solastalgia", description: "The distress caused by environmental change in a place you still live in — a form of homesickness you feel while still at home." },
            { type: "text", content: "unalloyed", description: "Complete and unreserved. Unalloyed joy, unalloyed grief — emotions without dilution or qualification." },
            { type: "text", content: "proustian", description: "A sensory experience — a taste, a smell — that involuntarily triggers a vivid, emotionally rich memory. After Marcel Proust's madeleine dipped in tea." },
            { type: "text", content: "apophenia", description: "The tendency to perceive meaningful connections between unrelated things — seeing patterns where none exist." },
            { type: "text", content: "yūgen (幽玄)", description: "A mysterious sense of the beauty of the universe — an awareness of things that triggers an emotional response too deep for words." },
            { type: "text", content: "nominal determinism", description: "The concept that people are subconsciously drawn to careers or hobbies that match their names, like a Gardner becoming a gardener, explained by psychological ideas such as implicit egotism (preferring things similar to oneself)." },
            { type: "text", content: "Schnapsidee", description: "Ideas so ludicrous that they must have been conceived while drunk." },
            { type: "text", content: "satori (悟り)", description: "Refers to a range of concepts, most notably the Buddhist term for spiritual enlightenment or awakening." },
            { type: "text", content: "tsundoku (積ん読)", description: "Acquiring books and letting them pile up, often without reading them immediately." },
            { type: "text", content: "atopy (ατοπία)", description: "The ineffability of things or emotions that are seldom experienced, that are outstanding and that are original in the strict sense. A certain quality of experience that can be observed within oneself or within others, differing from the ideal quality that is conceptualized, not experienced." },
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
            { type: "image", src: "media/things/dakos.jpg", alt: "Dakos", noModal: true },
            { type: "image", src: "media/things/pao-de-queijo.jpg", alt: "Pao de queijo", noModal: true },
            { type: "text", content: "tiramisu", link: "tiramisu" },
            { type: "text", content: "octopus pizzaiolo and spicy rig from Carbone", noModal: true },
            { type: "text", content: "duck carnitas from Damian (LA)", noModal: true },
            { type: "text", content: "cold niku udon at Yume (Cambridge)", noModal: true },
            { type: "text", content: "souffle pancakes from Rule of Thirds (Brooklyn)", noModal: true },
            { type: "text", content: "affogato from Caffe Panna (NYC)", noModal: true },
            { type: "text", content: "octopus bone marrow fusilli from Marea (NYC)", noModal: true },
            { type: "text", content: "amaebi at Sushi Ota (SD)", noModal: true },
            { type: "text", content: "soft serve at Angler (SF)", noModal: true },
            { type: "text", content: "chocolate budino at Seven Hills (SF)", noModal: true },
            { type: "text", content: "mochi with crab at Spectrum (Amsterdam)", noModal: true },
        ]
    },
    {
        slug: "art",
        title: "art",
        updated: "2026-04-24",
        noModal: true,
        blocks: [
            { type: "image", src: "media/things/madonna-child-recalled.png", alt: "Madonna & Child, Recalled 2025 by Alexander James", subtitle: "'Madonna & Child, Recalled 2025' by Alexander James" },
            { type: "image", src: "media/things/the-tree-park-jiyoung.png", alt: "The tree, 2023 by Park Jiyoung", subtitle: "'The tree, 2023' by Park Jiyoung" },
            { type: "image", src: "media/things/reminisce-park-jiyoung.png", alt: "Reminisce, 2023 by Park Jiyoung", subtitle: "'Reminisce, 2023' by Park Jiyoung" },
            { type: "image", src: "media/things/the-observer-alexander-james.png", alt: "The Observer, 2024 by Alexander James", subtitle: "'The Observer, 2024' by Alexander James" },
            { type: "image", src: "media/things/he-wired-the-shadows-esther-sibiude.png", alt: "He wired the shadows and played them up and down like scales, 2023 by Esther Sibiude", subtitle: "'He wired the shadows and played them up and down like scales, 2023' by Esther Sibiude" },
            { type: "image", src: "media/things/nighthawks-edward-hopper.jpg", alt: "Nighthawks, 1942 by Edward Hopper", subtitle: "'Nighthawks, 1942' by Edward Hopper" },
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
            { type: "text", content: "dyson" },
            { type: "text", content: "nosemint" },
            { type: "text", content: "neurogum" },
            { type: "text", content: "fodzyme" },
            { type: "text", content: "zbiotics" },
            { type: "text", content: "zojirushi" },
            { type: "text", content: "reformer" },
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

    const blocksHTML = channel.blocks.length === 0
        ? '<p class="things-empty">No blocks yet.</p>'
        : channel.blocks.map((block, i) => {
            const noClick = channel.noModal || block.noModal;
            const noClickClass = noClick && !block.link ? ' things-block-static' : '';
            if (block.type === "image") {
                const subtitleHTML = block.subtitle ? `<div class="things-block-subtitle">${block.subtitle}</div>` : '';
                const wrapperClass = block.subtitle ? ' things-block-wrap' : '';
                return block.subtitle
                    ? `<div class="${wrapperClass.trim()}">
                        <div class="things-block things-block-image${noClickClass}" data-slug="${slug}" data-index="${i}">
                            <img src="${block.src}" alt="${block.alt || ''}" loading="lazy">
                        </div>
                        ${subtitleHTML}
                    </div>`
                    : `<div class="things-block things-block-image${noClickClass}" data-slug="${slug}" data-index="${i}">
                        <img src="${block.src}" alt="${block.alt || ''}" loading="lazy">
                    </div>`;
            }
            const linkClass = block.link ? ' things-block-link' : '';
            return `
                <div class="things-block${linkClass}${noClickClass}" data-slug="${slug}" data-index="${i}"${block.link ? ` data-link="${block.link}"` : ''}>
                    <p>${block.content}</p>
                    ${block.description ? `<p class="things-block-desc">${block.description}</p>` : ''}
                    ${block.link ? '<span class="things-block-arrow">\u2192</span>' : ''}
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
