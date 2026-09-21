/* =====================================================
   ESSAR PNEUMATICS
   FUNCTIONAL JAVASCRIPT
===================================================== */


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,
        name: "Industrial Air Compressor",
        category: "Compressors",
        description:
            "High-performance compressed air solution for industrial applications.",
        specifications: [
            "Industrial grade construction",
            "High efficiency",
            "Low maintenance",
            "Suitable for continuous operation"
        ]
    },

    {
        id: 2,
        name: "Screw Air Compressor",
        category: "Compressors",
        description:
            "Reliable screw compressor designed for continuous industrial compressed-air requirements.",
        specifications: [
            "Rotary screw technology",
            "Energy efficient",
            "Continuous operation",
            "Industrial applications"
        ]
    },

    {
        id: 3,
        name: "Pneumatic Cylinder",
        category: "Pneumatics",
        description:
            "Pneumatic cylinder for linear motion and industrial automation systems.",
        specifications: [
            "Compact design",
            "Reliable operation",
            "Easy installation",
            "Automation applications"
        ]
    },

    {
        id: 4,
        name: "FRL Unit",
        category: "Pneumatics",
        description:
            "Filter, regulator and lubricator unit for pneumatic air preparation.",
        specifications: [
            "Air filtration",
            "Pressure regulation",
            "Lubrication",
            "Pneumatic systems"
        ]
    },

    {
        id: 5,
        name: "Air Receiver Tank",
        category: "Industrial Equipment",
        description:
            "Industrial air receiver designed for compressed air storage and pressure stabilization.",
        specifications: [
            "Industrial construction",
            "Compressed air storage",
            "Pressure stabilization",
            "Multiple capacities"
        ]
    },

    {
        id: 6,
        name: "Industrial Dryer",
        category: "Industrial Equipment",
        description:
            "Compressed air drying equipment designed to remove moisture from pneumatic systems.",
        specifications: [
            "Moisture removal",
            "Compressed air treatment",
            "Industrial applications",
            "Reliable performance"
        ]
    }

];


/* =====================================================
   PRE-OWNED DATA
===================================================== */

const preOwnedProducts = [

    {
        id: 101,
        name: "Used Screw Compressor",
        category: "Pre-Owned",
        description:
            "Pre-owned industrial screw compressor available for enquiry.",
        specifications: [
            "Used equipment",
            "Industrial application",
            "Inspection available",
            "Enquiry based pricing"
        ]
    },

    {
        id: 102,
        name: "Used Air Receiver",
        category: "Pre-Owned",
        description:
            "Pre-owned air receiver suitable for industrial compressed-air applications.",
        specifications: [
            "Used equipment",
            "Industrial construction",
            "Subject to inspection",
            "Enquiry based pricing"
        ]
    },

    {
        id: 103,
        name: "Used Industrial Compressor",
        category: "Pre-Owned",
        description:
            "Quality pre-owned compressor for industrial applications.",
        specifications: [
            "Pre-owned equipment",
            "Industrial use",
            "Inspection available",
            "Contact for details"
        ]
    }

];


/* =====================================================
   ARTICLES DATA
===================================================== */

const articles = [

    {
        id: 1,
        title: "How to Select the Right Air Compressor",
        category: "Compressed Air",
        description:
            "Important factors to consider when selecting an industrial compressor."
    },

    {
        id: 2,
        title: "Importance of Pneumatic Air Treatment",
        category: "Pneumatics",
        description:
            "Understand why filtration, regulation and lubrication are important."
    },

    {
        id: 3,
        title: "Compressed Air System Maintenance",
        category: "Maintenance",
        description:
            "Practical maintenance considerations for industrial compressed-air systems."
    }

];


/* =====================================================
   MEDIA DATA
===================================================== */

const media = [

    {
        id: 1,
        title: "Industrial Compressor Working Guide",
        description:
            "Learn the basic operating principle of industrial compressors.",
        video:
            "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },

    {
        id: 2,
        title: "Pneumatic System Guide",
        description:
            "Introduction to pneumatic system components.",
        video:
            "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },

    {
        id: 3,
        title: "Air Treatment Guide",
        description:
            "Understanding compressed air filtration and treatment.",
        video:
            "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }

];


/* =====================================================
   JOB DATA
===================================================== */

const jobs = [

    {
        id: 1,
        title: "Field Technical Sales – Industrial Piping Systems",
        location: "India",
        type: "Full Time",
        description:
            "Responsible for technical sales, customer interaction and industrial piping solution development.",
        responsibilities: [
            "Customer requirement analysis",
            "Technical product presentation",
            "Industrial client visits",
            "Quotation coordination",
            "Sales follow-up"
        ]
    },

    {
        id: 2,
        title: "Sales Engineer – Pneumatic Products",
        location: "India",
        type: "Full Time",
        description:
            "Technical sales role involving pneumatic products and industrial automation solutions.",
        responsibilities: [
            "Lead generation",
            "Customer meetings",
            "Product demonstrations",
            "Technical support",
            "Sales coordination"
        ]
    }

];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const preownedGrid =
    document.getElementById("preownedGrid");

const articlesGrid =
    document.getElementById("articlesGrid");

const mediaGrid =
    document.getElementById("mediaGrid");

const jobsGrid =
    document.getElementById("jobsGrid");

const productSearch =
    document.getElementById("productSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const emptyProducts =
    document.getElementById("emptyProducts");

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts(data = products) {

    productsGrid.innerHTML = "";

    if (data.length === 0) {

        emptyProducts.style.display = "block";

        return;
    }

    emptyProducts.style.display = "none";

    data.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">
                ${product.category}
            </div>

            <div class="product-body">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="product-actions">

                    <button
                        class="btn btn-dark"
                        onclick="openProductModal(${product.id})">
                        View Details
                    </button>

                    <button
                        class="btn btn-primary"
                        onclick="requestQuote('${escapeHtml(product.name)}')">
                        Request Quote
                    </button>

                </div>

            </div>
        `;

        productsGrid.appendChild(card);

    });

}


/* =====================================================
   RENDER PRE-OWNED
===================================================== */

function renderPreOwned() {

    preownedGrid.innerHTML = "";

    preOwnedProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">
                PRE-OWNED
            </div>

            <div class="product-body">

                <span class="product-category">
                    Pre-Owned Equipment
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="product-actions">

                    <button
                        class="btn btn-dark"
                        onclick="openPreOwnedModal(${product.id})">
                        View Details
                    </button>

                    <button
                        class="btn btn-primary"
                        onclick="requestQuote('${escapeHtml(product.name)}')">
                        Enquire
                    </button>

                </div>

            </div>
        `;

        preownedGrid.appendChild(card);

    });

}


/* =====================================================
   PRODUCT SEARCH
===================================================== */

function filterProducts() {

    const search =
        productSearch.value
            .trim()
            .toLowerCase();

    const category =
        categoryFilter.value;

    const filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.description
                    .toLowerCase()
                    .includes(search);

            const matchesCategory =
                category === "All" ||
                product.category === category;

            return matchesSearch && matchesCategory;

        });

    renderProducts(filtered);

}


productSearch.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);


/* =====================================================
   PRODUCT MODAL
===================================================== */

function openProductModal(id) {

    const product =
        products.find(item => item.id === id);

    if (!product) return;

    const modal =
        document.getElementById("productModal");

    const content =
        document.getElementById("productModalContent");

    content.innerHTML = `

        <div class="modal-product">

            <div class="modal-product-image">
                ${product.category}
            </div>

            <div>

                <span class="product-category">
                    ${product.category}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <p>
                    ${product.description}
                </p>

                <h3>
                    Key Specifications
                </h3>

                <ul>
                    ${product.specifications
                        .map(item => `<li>${item}</li>`)
                        .join("")}
                </ul>

                <button
                    class="btn btn-primary"
                    onclick="requestQuote('${escapeHtml(product.name)}')">
                    Request Quote
                </button>

            </div>

        </div>
    `;

    openModal("productModal");

}


/* =====================================================
   PRE-OWNED MODAL
===================================================== */

function openPreOwnedModal(id) {

    const product =
        preOwnedProducts.find(item => item.id === id);

    if (!product) return;

    const modal =
        document.getElementById("productModal");

    const content =
        document.getElementById("productModalContent");

    content.innerHTML = `

        <div class="modal-product">

            <div class="modal-product-image">
                PRE-OWNED
            </div>

            <div>

                <span class="product-category">
                    Pre-Owned Equipment
                </span>

                <h2>
                    ${product.name}
                </h2>

                <p>
                    ${product.description}
                </p>

                <h3>
                    Equipment Details
                </h3>

                <ul>
                    ${product.specifications
                        .map(item => `<li>${item}</li>`)
                        .join("")}
                </ul>

                <button
                    class="btn btn-primary"
                    onclick="requestQuote('${escapeHtml(product.name)}')">
                    Send Enquiry
                </button>

            </div>

        </div>
    `;

    openModal("productModal");

}


/* =====================================================
   REQUEST QUOTE
===================================================== */

function requestQuote(productName) {

    closeAllModals();

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

    const subject =
        document.querySelector(
            '#contactForm input[name="subject"]'
        );

    if (subject) {

        subject.value =
            `Quotation Request - ${productName}`;

    }

    showToast(
        "Product selected. Please submit your enquiry."
    );

}


/* =====================================================
   ARTICLES
===================================================== */

function renderArticles() {

    articlesGrid.innerHTML = "";

    articles.forEach(article => {

        const card =
            document.createElement("article");

        card.className =
            "article-card";

        card.innerHTML = `

            <div class="article-image">
                ${article.category}
            </div>

            <div class="article-body">

                <span class="product-category">
                    ${article.category}
                </span>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.description}
                </p>

                <button
                    class="btn btn-dark"
                    onclick="openArticleModal(${article.id})">
                    Read Article
                </button>

            </div>

        `;

        articlesGrid.appendChild(card);

    });

}


/* =====================================================
   ARTICLE MODAL
===================================================== */

function openArticleModal(id) {

    const article =
        articles.find(item => item.id === id);

    if (!article) return;

    const content =
        document.getElementById(
            "articleModalContent"
        );

    content.innerHTML = `

        <span class="product-category">
            ${article.category}
        </span>

        <h2>
            ${article.title}
        </h2>

        <p>
            ${article.description}
        </p>

        <p>
            This article provides useful information for
            industrial users looking to understand
            compressed air and pneumatic equipment.
        </p>

        <p>
            For product-specific technical information,
            contact the ESSAR Pneumatics team.
        </p>

        <button
            class="btn btn-primary"
            onclick="location.hash='contact'; closeAllModals();">
            Contact Us
        </button>

    `;

    openModal("articleModal");

}


/* =====================================================
   MEDIA
===================================================== */

function renderMedia() {

    mediaGrid.innerHTML = "";

    media.forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "media-card";

        card.innerHTML = `

            <div class="media-thumbnail">

                <button
                    class="play-button"
                    onclick="openVideoModal(${item.id})">
                    ▶
                </button>

            </div>

            <div class="media-body">

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

            </div>

        `;

        mediaGrid.appendChild(card);

    });

}


/* =====================================================
   VIDEO MODAL
===================================================== */

function openVideoModal(id) {

    const item =
        media.find(video => video.id === id);

    if (!item) return;

    const content =
        document.getElementById(
            "videoModalContent"
        );

    content.innerHTML = `

        <h2>
            ${item.title}
        </h2>

        <p>
            ${item.description}
        </p>

        <div
            style="
                position:relative;
                padding-bottom:56.25%;
                height:0;
                overflow:hidden;
            ">

            <iframe
                src="${item.video}"
                style="
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    border:0;
                "
                allowfullscreen>
            </iframe>

        </div>
    `;

    openModal("videoModal");

}


/* =====================================================
   CAREERS
===================================================== */

function renderJobs() {

    jobsGrid.innerHTML = "";

    jobs.forEach(job => {

        const card =
            document.createElement("article");

        card.className =
            "job-card";

        card.innerHTML = `

            <h3>
                ${job.title}
            </h3>

            <div class="job-meta">
                ${job.location}
                &nbsp; • &nbsp;
                ${job.type}
            </div>

            <p>
                ${job.description}
            </p>

            <button
                class="btn btn-dark"
                onclick="openJobModal(${job.id})">
                View Job
            </button>

        `;

        jobsGrid.appendChild(card);

    });

}


/* =====================================================
   JOB MODAL
===================================================== */

function openJobModal(id) {

    const job =
        jobs.find(item => item.id === id);

    if (!job) return;

    const content =
        document.getElementById(
            "jobModalContent"
        );

    content.innerHTML = `

        <span class="product-category">
            ${job.type}
        </span>

        <h2>
            ${job.title}
        </h2>

        <p>
            <strong>Location:</strong>
            ${job.location}
        </p>

        <p>
            ${job.description}
        </p>

        <h3>
            Responsibilities
        </h3>

        <ul>
            ${job.responsibilities
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>

        <button
            class="btn btn-primary"
            onclick="openApplicationForm('${escapeHtml(job.title)}')">
            Apply Now
        </button>

    `;

    openModal("jobModal");

}


/* =====================================================
   APPLICATION FORM
===================================================== */

function openApplicationForm(jobTitle) {

    closeAllModals();

    const modal =
        document.getElementById("jobModal");

    const content =
        document.getElementById(
            "jobModalContent"
        );

    content.innerHTML = `

        <h2>
            Apply Now
        </h2>

        <p>
            Position:
            <strong>
                ${jobTitle}
            </strong>
        </p>

        <form
            id="applicationForm"
            class="main-form">

            <input
                type="hidden"
                name="jobTitle"
                value="${jobTitle}">

            <div class="form-group">
                <label>Full Name *</label>
                <input
                    type="text"
                    name="name"
                    required>
            </div>

            <br>

            <div class="form-group">
                <label>Email *</label>
                <input
                    type="email"
                    name="email"
                    required>
            </div>

            <br>

            <div class="form-group">
                <label>Phone *</label>
                <input
                    type="tel"
                    name="phone"
                    required>
            </div>

            <br>

            <div class="form-group">
                <label>Resume *</label>
                <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required>
            </div>

            <br>

            <button
                type="submit"
                class="btn btn-primary">
                Submit Application
            </button>

        </form>
    `;

    openModal("jobModal");

    document
        .getElementById("applicationForm")
        .addEventListener(
            "submit",
            handleApplicationSubmit
        );

}


/* =====================================================
   APPLICATION SUBMISSION
===================================================== */

function handleApplicationSubmit(event) {

    event.preventDefault();

    const form =
        event.target;

    const data =
        new FormData(form);

    const application = {

        jobTitle:
            data.get("jobTitle"),

        name:
            data.get("name"),

        email:
            data.get("email"),

        phone:
            data.get("phone"),

        submittedAt:
            new Date().toISOString()

    };

    saveToStorage(
        "essarApplications",
        application
    );

    closeAllModals();

    showToast(
        "Application submitted successfully."
    );

}


/* =====================================================
   LIST PRODUCT FORM
===================================================== */

const listProductForm =
    document.getElementById(
        "listProductForm"
    );

listProductForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const formData =
            new FormData(this);

        const product = {

            name:
                formData.get("name"),

            company:
                formData.get("company"),

            mobile:
                formData.get("mobile"),

            email:
                formData.get("email"),

            city:
                formData.get("city"),

            state:
                formData.get("state"),

            productName:
                formData.get("productName"),

            brand:
                formData.get("brand"),

            year:
                formData.get("year"),

            youtube:
                formData.get("youtube"),

            details:
                formData.get("details"),

            submittedAt:
                new Date().toISOString()

        };

        saveToStorage(
            "essarListedProducts",
            product
        );

        this.reset();

        showToast(
            "Product submitted successfully."
        );

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const formData =
            new FormData(this);

        const enquiry = {

            name:
                formData.get("name"),

            email:
                formData.get("email"),

            phone:
                formData.get("phone"),

            subject:
                formData.get("subject"),

            message:
                formData.get("message"),

            submittedAt:
                new Date().toISOString()

        };

        saveToStorage(
            "essarEnquiries",
            enquiry
        );

        this.reset();

        showToast(
            "Your enquiry has been submitted successfully."
        );

    }
);


/* =====================================================
   LOCAL STORAGE
===================================================== */

function saveToStorage(key, data) {

    const existing =
        JSON.parse(
            localStorage.getItem(key) || "[]"
        );

    existing.push(data);

    localStorage.setItem(
        key,
        JSON.stringify(existing)
    );

}


/* =====================================================
   MODAL FUNCTIONS
===================================================== */

function openModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {

        modal.classList.add("active");

        document.body.style.overflow =
            "hidden";
    }

}


function closeModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {

        modal.classList.remove("active");

    }

    document.body.style.overflow =
        "";

}


function closeAllModals() {

    document
        .querySelectorAll(".modal")
        .forEach(modal => {

            modal.classList.remove("active");

        });

    document.body.style.overflow =
        "";

}


/* =====================================================
   MODAL CLOSE BUTTONS
===================================================== */

document
    .querySelectorAll("[data-close]")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                closeModal(
                    this.dataset.close
                );

            }
        );

    });


/* =====================================================
   CLOSE MODAL BY CLICKING OUTSIDE
===================================================== */

document
    .querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            function(event) {

                if (
                    event.target === modal
                ) {

                    closeModal(
                        modal.id
                    );

                }

            }
        );

    });


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeAllModals();

        }

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

menuToggle.addEventListener(
    "click",
    function() {

        navbar.classList.toggle(
            "active"
        );

    }
);


/* =====================================================
   CLOSE MOBILE MENU AFTER LINK CLICK
===================================================== */

document
    .querySelectorAll(
        ".navbar a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                navbar.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   PRODUCT CATEGORY LINKS
===================================================== */

document
    .querySelectorAll(
        "[data-category]"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                const category =
                    this.dataset.category;

                categoryFilter.value =
                    category;

                filterProducts();

            }
        );

    });


/* =====================================================
   TOAST
===================================================== */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            3500
        );

}


/* =====================================================
   HTML ESCAPE
===================================================== */

function escapeHtml(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderProducts();

        renderPreOwned();

        renderArticles();

        renderMedia();

        renderJobs();

    }
);