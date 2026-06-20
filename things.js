// =============================================================
// Things — Are.na-style inspiration page
// =============================================================
// Each channel has a title, updated date, and blocks (text items).
// Click a channel to see its blocks.
// =============================================================

const CHANNELS = [
    {
        slug: "dishes",
        title: "dishes",
        updated: "2026-06-13",
        // pinned: "I mostly keep track of favorite dishes over favorite restaurants.",
        blocks: [
            { type: "image", src: "media/things/turkish-pancakes-aziza.webp", alt: "turkish pancakes at aziza (sf)", subtitle: "turkish pancakes at aziza (sf)", noModal: true, added: "2026-06-06" },
            { type: "image", src: "media/things/crudite-bear.webp", alt: "crudite from bear (napa)", subtitle: "crudite from bear (napa)", noModal: true, added: "2026-06-13" },
            { type: "text", content: "wasabi pea soup at arquet (sf)", noModal: true, added: "2026-05-24" },
            { type: "text", content: "sweet potato basque cheesecake w caviar at sorrel (sf)", noModal: true, added: "2026-05-10" },
            { type: "text", content: "dakos in greece", noModal: true, added: "2025-06-15" },
            { type: "text", content: "pao de quiejo, anywhere", noModal: true, added: "2020-12-28" },
            { type: "text", content: "[click me] tiramisu, from many places", link: "tiramisu", added: "2026-04-25" },
            { type: "text", content: "octopus pizzaiolo and spicy rig at Carbone", noModal: true, added: "2023-01-11" },
            { type: "text", content: "duck carnitas from Damian (LA)", noModal: true, added: "2024-04-02" },
            { type: "text", content: "cold niku udon at Yume (cambridge)", noModal: true, added: "2019-10-23" },
            { type: "image", src: "media/things/ruleofthirds.avif", alt: "souffle pancakes from Rule of Thirds (brooklyn)",  subtitle: "souffle pancakes from Rule of Thirds (brooklyn)", noModal: true, added: "2021-02-14" },
            { type: "image", src: "media/things/lilia.webp", alt: "agnolotti filled w sheep's milk cheese & covered in honey from lilia (brooklyn)", subtitle: "agnolotti filled w sheep's milk cheese & covered in honey from lilia (brooklyn)", noModal: true, added: "2021-02-14" },
            { type: "text", content: "affogato from Caffe Panna (nyc)", noModal: true, added: "2025-11-30" },
            { type: "text", content: "crab noodles at 人和馆 (shanghai)", noModal: true, added: "2024-12-30" },
            { type: "image", src: "media/things/nakamura.png", alt: "matcha parfait at 茶寮都路里 (kyoto)", subtitle: "matcha parfait at 茶寮都路里 (kyoto)", noModal: true, added: "2025-12-30" },
            { type: "text", content: "warabimochi from 一幸庵 (tokyo)", noModal: true, added: "2022-12-30" },
            { type: "text", content: "soba from 雷庵 (tokyo)", noModal: true, added: "2022-12-30" },
            { type: "text", content: "octopus bone marrow fusilli from Marea (nyc)", noModal: true, added: "2020-03-03" },
            { type: "text", content: "amaebi at Sushi Ota (san diego)", noModal: true, added: "2025-10-05" },
            { type: "image", src: "media/things/soft-serve-angler.png", alt: "Soft serve at Angler (SF)", subtitle: "soft serve at Angler (SF)", noModal: true, added: "2026-01-19" },
            { type: "text", content: "chocolate budino at Seven Hills (sf)", noModal: true, added: "2026-03-12" },
            { type: "text", content: "mochi with crab at Spectrum (amsterdam)", noModal: true, added: "2025-05-18" },
            { type: "image", src: "media/things/pujol.jpg", alt: "mole at pujol (cdmx)", subtitle: "mole at pujol (CDMX)", noModal: true, added: "2024-08-17" },
        ]
    },
    {
        slug: "art",
        title: "art",
        updated: "2026-04-24",
        detailView: true,
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
            { type: "text", content: "happiness is the delta between expectations and reality", added: "2026-05-07" },
            { type: "text", content: "incentives are human physics", added: "2026-04-22" },
            { type: "text", content: "talk is cheap", added: "2026-04-03" },
            { type: "text", content: "Award-winning painter, Georgia O'Keefe, suggests optimizing for your interests rather than your happiness: \"I do not like the idea of happiness — it is too momentary. I would say that I was always busy and interested in something — interest has more meaning to me than the idea of happiness.\"", added: "2026-03-28" },
            { type: "text", content: "The point is, not to resist the flow. You go up when you're supposed to go up and down when you're supposed to go down. When you're supposed to go up, find the highest tower and climb to the top. When you're supposed to go down, find the deepest well and go down to the bottom. When there's no flow, stay still.", added: "2026-03-15" }
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
    {
        slug: "life-in-sf",
        title: "life in sf",
        updated: "2026-06-13",
        noModal: true,
        blocks: [
            { type: "image", src: "media/things/sf-img_8304.webp", alt: "wooden lodge in golden hills under a clear blue sky", added: "2026-06-13" },
            { type: "image", src: "media/things/sf-img_8273.webp", alt: "sunlight filtering through a redwood canopy", added: "2026-06-07" },
            { type: "video", src: "media/things/sf-img_8001.mov", alt: "video from sf", added: "2026-05-24" },
            { type: "image", src: "media/things/sf-img_7995.webp", alt: "view from a rooftop at dusk", added: "2026-05-24" },
            { type: "image", src: "media/things/sf-img_7953.webp", alt: "evening light through apartment windows", added: "2026-05-21" },
            { type: "image", src: "media/things/sf-img_7921.webp", alt: "sunset over trees and a driveway", added: "2026-05-19" },
            { type: "image", src: "media/things/sf-img_7868.webp", alt: "cozy bookstore café with warm lighting", added: "2026-05-15" },
            { type: "image", src: "media/things/sf-img_7420.webp", alt: "white flowers in a vase on a minimal desk", added: "2026-04-15" },
            { type: "image", src: "media/things/sf-img_7398.webp", alt: "brunch spread with flowers, green juice, and a salad plate", added: "2026-04-12" },
            { type: "image", src: "media/things/sf-img_7298.webp", alt: "kaiseki plate at a Japanese restaurant", added: "2026-04-05" },
            { type: "image", src: "media/things/sf-img_7061.webp", alt: "long dinner table set with orange flowers and wine glasses", added: "2026-03-18" },
            { type: "image", src: "media/things/sf-img_6902.webp", alt: "rooftop sunset dinner with city views", added: "2026-03-06" },
            { type: "image", src: "media/things/sf-img_6754.webp", alt: "Transamerica Pyramid from a courtyard", added: "2026-02-27" },
            { type: "image", src: "media/things/sf-img_6742.webp", alt: "apartment room mid-renovation with a ladder", added: "2026-02-23" },
            { type: "image", src: "media/things/sf-img_6725.webp", alt: "looking up at FiDi buildings against the sky", added: "2026-02-22" },
            { type: "image", src: "media/things/sf-img_6032.webp", alt: "garden pathway with greenery and a wall", added: "2025-12-27" },
            { type: "image", src: "media/things/sf-img_6031.webp", alt: "James Turrell skyspace in magenta and blue", added: "2025-12-27" },
            { type: "video", src: "media/things/sf-img_4955.mov", alt: "video from sf", added: "2025-11-21" },
            { type: "image", src: "media/things/sf-img_4802.webp", alt: "living room with floor-to-ceiling windows on a foggy day", added: "2025-11-16" },
            { type: "image", src: "media/things/sf-img_4723.webp", alt: "pink and orange sunset from a rooftop", added: "2025-11-11" },
            { type: "video", src: "media/things/sf-img_4668.mov", alt: "video from sf", added: "2025-11-08" },
            { type: "image", src: "media/things/sf-img_4353.webp", alt: "outdoor patio at golden hour with teak furniture", added: "2025-11-01" },
            { type: "image", src: "media/things/sf-img_3277.webp", alt: "sake bottles at an omakase counter", added: "2025-09-18" },
            { type: "image", src: "media/things/sf-img_2962.webp", alt: "navy kitchen with marble backsplash and brass fixtures", added: "2025-09-02" },
        ]
    },
    {
        slug: "linguistics",
        title: "thoughts on language",
        updated: "2026-04-24",
        blocks: [
            { type: "text", content: "\“All language is a set of symbols whose use among its speakers assumes a shared past. How, then, can I translate into words the limitless Aleph, which my floundering mind can scarcely encompass?\” — Jorge Luis Borges, El Aleph", added: "2026-04-22" },
            { type: "text", content: "We often think of language as a means to an end, but rarely take the time to consider whether language itself is influencing our thoughts.  Words and ideas matter. They shape how we see the world, the stories we tell, and how we relate to one another.  There are so many worlds that we do not have language for.  Interrogate the meaning of words like apartheid, genocide, or ethnic cleansing before you use them.  New conditions demand a new way of thinking. New thinking demands new forms of expression. Expand the lexicon. Force your brain to think in new ways.", added: "2026-04-01" },
            { type: "image", src: "media/things/words-1.png", added: "2026-04-01" },
            { type: "text", content: "Think of language as a mirror that reflects the structure of reality. The mirror can show the image (the structure), but it cannot describe itself as a mirror without reflecting the image of itself again.", added: "2026-04-01" },
            { type: "text", content: "In order to understand Mr Wittgenstein's book, it is necessary to realize what is the problem with which he is concerned. In the part of his theory which deals with Symbolism he is concerned with the conditions which would have to be fulfilled by a logically perfect language", added: "2026-04-01" },
            { type: "text", content: "There’s a corollary for each kind of work. For instance, writing is thinking made legible. Outsourcing it all outsources thinking itself. You get results without the cognitive muscle-building that creates them. The neural pathways you would have formed now belong to the large language models that helped you.", added: "2026-04-01" },
            { type: "text", content: "A more technical way of saying this is that our (non-verbal) thoughts seem to behave as vectors; when a cluster of neurons fire together, that pattern is like an address pointing toward a point in a high dimensional space. But when we convert our thoughts to words, we convert that vector into a scalar. I’m not sure if this is true, but here is a paper laying out the argument for why it might be.", added: "2026-04-01" },
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

    const channels = CHANNELS.filter(ch => !ch.hidden).map(ch => {
        const lastAdded = ch.blocks.reduce((latest, b) => {
            if (!b.added) return latest;
            return (!latest || b.added > latest) ? b.added : latest;
        }, null) || ch.updated;
        return { ch, lastAdded };
    }).sort((a, b) => new Date(b.lastAdded) - new Date(a.lastAdded));

    $grid.innerHTML = channels.map(({ ch, lastAdded }) => `
        <a class="things-card" href="#${ch.slug}">
            <span class="things-card-title">${ch.title}</span>
            <div class="things-card-meta">
                <span>${ch.blocks.length} block${ch.blocks.length !== 1 ? "s" : ""}</span>
                <span>${timeAgo(lastAdded)}</span>
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
            const noClick = (channel.noModal || block.noModal) && !channel.detailView;
            const noClickClass = noClick && !block.link ? ' things-block-static' : '';
            const timeHTML = `<div class="things-block-time">${timeAgo(block.added || channel.updated)}</div>`;
            if (block.type === "video") {
                const subtitleHTML = block.subtitle ? `<div class="things-block-subtitle">${block.subtitle}</div>` : '';
                return `<div class="things-block-wrap">
                    <div class="things-block things-block-image${noClickClass}" data-slug="${slug}" data-index="${i}">
                        <video src="${block.src}" autoplay loop muted playsinline></video>
                    </div>
                    ${subtitleHTML}
                    ${timeHTML}
                </div>`;
            }
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

// Art / detail view for individual blocks
function renderBlockDetail(slug, index) {
    const channel = findChannel(slug);
    if (!channel || !channel.detailView) { renderGrid(); return; }

    const block = channel.blocks[index];
    if (!block) { renderDetail(slug); return; }

    $grid.style.display = "none";
    $detail.style.display = "";

    // Sorted order for prev/next navigation
    const sorted = channel.blocks.map((b, i) => ({ block: b, i }))
        .sort((a, b) => new Date(b.block.added || channel.updated) - new Date(a.block.added || channel.updated));

    const sortedPos = sorted.findIndex(s => s.i === index);
    const prev = sortedPos > 0 ? sorted[sortedPos - 1].i : null;
    const next = sortedPos < sorted.length - 1 ? sorted[sortedPos + 1].i : null;

    const prevLink = prev !== null ? `<a href="#${slug}/${prev}" class="things-art-nav-link">\u2190 prev</a>` : '<span></span>';
    const nextLink = next !== null ? `<a href="#${slug}/${next}" class="things-art-nav-link">next \u2192</a>` : '<span></span>';

    const commentaryHTML = block.commentary
        ? `<div class="things-art-commentary">${block.commentary}</div>`
        : '';

    $detail.innerHTML = `
        <a href="#${slug}" class="things-back">\u2190 ${channel.title}</a>
        <div class="things-art-detail">
            <div class="things-art-image">
                <img src="${block.src}" alt="${block.alt || ''}">
            </div>
            <div class="things-art-info">
                <p class="things-art-subtitle">${block.subtitle || block.alt || ''}</p>
                ${commentaryHTML}
                ${block.added ? `<p class="things-art-date">${timeAgo(block.added)}</p>` : ''}
            </div>
        </div>
        <div class="things-art-nav">
            ${prevLink}
            ${nextLink}
        </div>
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

        // Detail view channels navigate to slug/index
        if (ch.detailView) {
            location.hash = `${block.dataset.slug}/${block.dataset.index}`;
            return;
        }

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
    if (!hash) { renderGrid(); return; }

    // Detail view: slug/index (e.g. art/3)
    const slash = hash.indexOf("/");
    if (slash !== -1) {
        const slug = hash.slice(0, slash);
        const idx = parseInt(hash.slice(slash + 1));
        if (!isNaN(idx)) { renderBlockDetail(slug, idx); return; }
    }

    renderDetail(hash);
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
