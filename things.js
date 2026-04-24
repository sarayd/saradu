// =============================================================
// Things — Are.na-style inspiration page
// =============================================================
// How to add content:
//
// 1. Add a new channel to the CHANNELS array below.
//    Each channel needs: slug, title, cover (image path), and blocks[].
//
// 2. Each block is either an image or text:
//    - Image: { type: "image", src: "media/things/your-image.jpg", alt: "description" }
//    - Text:  { type: "text", content: "Your note or quote here." }
//
// 3. Drop your images into the media/things/ folder.
//
// 4. The cover image for each channel can be any image path —
//    it shows as the square thumbnail on the grid view.
// =============================================================

const CHANNELS = [
    {
        slug: "interiors",
        title: "Interiors",
        cover: "media/things/japan-tatami.jpg",
        blocks: [
            { type: "image", src: "media/things/japan-tatami.jpg", alt: "Tatami room overlooking misty mountains" },
        ]
    },
    {
        slug: "dining",
        title: "Great Dining",
        cover: "media/things/dark-lobby.jpg",
        blocks: [
            { type: "image", src: "media/things/dark-lobby.jpg", alt: "Dark lobby with hanging pendant lights" },
        ]
    },
    {
        slug: "travel",
        title: "Travel & Spots",
        cover: "media/things/brick-facade.jpg",
        blocks: [
            { type: "image", src: "media/things/brick-facade.jpg", alt: "Brick storefront with marquee at dusk" },
        ]
    },
    {
        slug: "stories",
        title: "Stories",
        cover: "",
        blocks: []
    },
];

// =============================================================
// Rendering — you probably don't need to edit below this line
// =============================================================

const $grid = document.getElementById("things-grid");
const $detail = document.getElementById("things-detail");
const $lightbox = document.getElementById("things-lightbox");
const $lightboxImg = document.getElementById("lightbox-img");

function renderGrid() {
    $detail.style.display = "none";
    $grid.style.display = "";

    if (CHANNELS.length === 0) {
        $grid.innerHTML = '<p class="things-empty">No channels yet. Add some in things.js.</p>';
        return;
    }

    $grid.innerHTML = CHANNELS.map(ch => `
        <a class="things-card" href="#${ch.slug}">
            <div class="things-card-img-wrap">
                ${ch.cover
                    ? `<img src="${ch.cover}" alt="${ch.title}" class="things-card-img" loading="lazy">`
                    : `<div class="things-card-placeholder"></div>`
                }
            </div>
            <div class="things-card-info">
                <span class="things-card-title">${ch.title}</span>
                <span class="things-card-count">${ch.blocks.length} block${ch.blocks.length !== 1 ? "s" : ""}</span>
            </div>
        </a>
    `).join("");
}

function renderDetail(slug) {
    const channel = CHANNELS.find(ch => ch.slug === slug);
    if (!channel) {
        renderGrid();
        return;
    }

    $grid.style.display = "none";
    $detail.style.display = "";

    const blocksHTML = channel.blocks.length === 0
        ? '<p class="things-empty">No blocks yet.</p>'
        : channel.blocks.map((block, i) => {
            if (block.type === "image") {
                return `
                    <div class="things-block things-block-image" data-index="${i}">
                        <img src="${block.src}" alt="${block.alt || ""}" loading="lazy">
                    </div>`;
            }
            return `
                <div class="things-block things-block-text">
                    <p>${block.content}</p>
                </div>`;
        }).join("");

    $detail.innerHTML = `
        <a href="#" class="things-back">\u2190 All channels</a>
        <h2 class="things-channel-title">${channel.title}</h2>
        <div class="things-blocks">${blocksHTML}</div>
    `;

    // image click → lightbox
    $detail.querySelectorAll(".things-block-image img").forEach(img => {
        img.addEventListener("click", () => openLightbox(img.src));
    });
}

function openLightbox(src) {
    $lightboxImg.src = src;
    $lightbox.classList.add("active");
}

function closeLightbox() {
    $lightbox.classList.remove("active");
    $lightboxImg.src = "";
}

// lightbox close on click
$lightbox.addEventListener("click", closeLightbox);

// hash routing
function route() {
    const hash = location.hash.replace("#", "");
    if (hash) {
        renderDetail(hash);
    } else {
        renderGrid();
    }
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);

// close lightbox on Escape
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
});
