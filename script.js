/* =========================
   ELEMENTS
   ========================= */

let addItemBtn =
    document.getElementById("addItemBtn");

let itemsContainer =
    document.getElementById("itemsContainer");

let previewItemsContainer =
    document.getElementById("previewItemsContainer");

let quantity =
    document.getElementById("quantity");

let price =
    document.getElementById("price");

let generateBtn =
    document.getElementById("generateBtn");

let currency =
    document.getElementById("currency");

let discount =
    document.getElementById("discount");

let tax =
    document.getElementById("tax");


/* =========================
   BUSINESS DETAILS
   ========================= */

let businessName =
    document.getElementById("businessName");

let businessPhone =
    document.getElementById("businessPhone");

let businessEmail =
    document.getElementById("businessEmail");

let logoInput =
    document.getElementById("logoInput");

let previewLogo =
    document.getElementById("previewLogo");


/* =========================
   PAYMENT DETAILS
   ========================= */

let bankName =
    document.getElementById("bankName");

let accountName =
    document.getElementById("accountName");

let accountNumber =
    document.getElementById("accountNumber");

let paymentInstructions =
    document.getElementById("paymentInstructions");


/* =========================
   BRANDING
   ========================= */

let accentColor =
    document.getElementById("accentColor");


/* =========================
   CUSTOMER DETAILS
   ========================= */

let customerName =
    document.getElementById("customerName");

let customerPhone =
    document.getElementById("customerPhone");


/* =========================
   INVOICE DETAILS
   ========================= */

let invoiceNumber =
    document.getElementById("invoiceNumber");

let invoiceDate =
    document.getElementById("invoiceDate");

let invoiceStatus =
    document.getElementById("invoiceStatus");


/* =========================
   MAIN ITEM
   ========================= */

let itemName =
    document.getElementById("itemName");


/* =========================
   PREVIEW ELEMENTS
   ========================= */

let previewBusinessName =
    document.getElementById("previewBusinessName");

let previewBusinessPhone =
    document.getElementById("previewBusinessPhone");

let previewBusinessEmail =
    document.getElementById("previewBusinessEmail");

let previewCustomerName =
    document.getElementById("previewCustomerName");

let previewCustomerPhone =
    document.getElementById("previewCustomerPhone");

let previewInvoiceNumber =
    document.getElementById("previewInvoiceNumber");

let previewInvoiceDate =
    document.getElementById("previewInvoiceDate");

let previewStatus =
    document.getElementById("previewStatus");

let previewItemName =
    document.getElementById("previewItemName");

let previewQuantity =
    document.getElementById("previewQuantity");

let previewPrice =
    document.getElementById("previewPrice");

let previewItemTotal =
    document.getElementById("previewItemTotal");


/* =========================
   PREVIEW TOTALS
   ========================= */

let previewSubtotal =
    document.getElementById("previewSubtotal");

let previewDiscount =
    document.getElementById("previewDiscount");

let previewTax =
    document.getElementById("previewTax");

let previewTotal =
    document.getElementById("previewTotal");


/* =========================
   PREVIEW PAYMENT DETAILS
   ========================= */

let previewBankName =
    document.getElementById("previewBankName");

let previewAccountName =
    document.getElementById("previewAccountName");

let previewAccountNumber =
    document.getElementById("previewAccountNumber");

let previewPaymentInstructions =
    document.getElementById(
        "previewPaymentInstructions"
    );


/* =========================
   ACTION BUTTONS
   ========================= */

let downloadBtn =
    document.getElementById("downloadBtn");

let newInvoiceBtn =
    document.getElementById("newInvoiceBtn");

let historyContainer =
    document.getElementById("historyContainer");


/* =========================
   VARIABLES
   ========================= */

let savedLogo = "";

let editingHistoryIndex = null;


/* =========================
   CURRENCY SYMBOL
   ========================= */

function getCurrencySymbol() {

    if (currency.value === "NGN")
        return "₦";

    if (currency.value === "USD")
        return "$";

    if (currency.value === "GBP")
        return "£";

    if (currency.value === "EUR")
        return "€";

    if (currency.value === "CAD")
        return "CA$";

    if (currency.value === "AUD")
        return "A$";

    if (currency.value === "ZAR")
        return "R";

    if (currency.value === "GHS")
        return "₵";

    if (currency.value === "KES")
        return "KSh";

    return "₦";
}


/* =========================
   CURRENCY SYMBOL FOR HISTORY
   ========================= */

function getSymbolForCurrency(
    currencyCode
) {

    if (currencyCode === "NGN")
        return "₦";

    if (currencyCode === "USD")
        return "$";

    if (currencyCode === "GBP")
        return "£";

    if (currencyCode === "EUR")
        return "€";

    if (currencyCode === "CAD")
        return "CA$";

    if (currencyCode === "AUD")
        return "A$";

    if (currencyCode === "ZAR")
        return "R";

    if (currencyCode === "GHS")
        return "₵";

    if (currencyCode === "KES")
        return "KSh";

    return "₦";
}


/* =========================
   TODAY'S DATE
   ========================= */

function setTodayDate() {

    let today =
        new Date();

    let year =
        today.getFullYear();

    let month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    let day =
        String(
            today.getDate()
        ).padStart(2, "0");

    invoiceDate.value =
        year + "-" +
        month + "-" +
        day;
}


/* =========================
   INVOICE NUMBER
   ========================= */

function createInvoiceNumber() {

    let currentNumber =
        Number(
            localStorage.getItem(
                "invoiceNumber"
            )
        ) || 0;

    currentNumber++;

    localStorage.setItem(
        "invoiceNumber",
        currentNumber
    );

    let newNumber =
        "INV-" +
        String(currentNumber)
            .padStart(4, "0");

    invoiceNumber.value =
        newNumber;

    previewInvoiceNumber.textContent =
        "Invoice #: " +
        newNumber;
}


/* =========================
   LOAD INVOICE NUMBER
   ========================= */

function loadInvoiceNumber() {

    let currentNumber =
        Number(
            localStorage.getItem(
                "invoiceNumber"
            )
        ) || 0;

    if (currentNumber === 0) {

        createInvoiceNumber();

        return;
    }

    let existingNumber =
        "INV-" +
        String(currentNumber)
            .padStart(4, "0");

    invoiceNumber.value =
        existingNumber;

    previewInvoiceNumber.textContent =
        "Invoice #: " +
        existingNumber;
}

/* =========================
   BUSINESS DETAILS
   ========================= */

function saveBusinessDetails() {

    localStorage.setItem(
        "businessName",
        businessName.value
    );

    localStorage.setItem(
        "businessPhone",
        businessPhone.value
    );

    localStorage.setItem(
        "businessEmail",
        businessEmail.value
    );

    localStorage.setItem(
        "bankName",
        bankName.value
    );

    localStorage.setItem(
        "accountName",
        accountName.value
    );

    localStorage.setItem(
        "accountNumber",
        accountNumber.value
    );

    localStorage.setItem(
        "paymentInstructions",
        paymentInstructions.value
    );

    localStorage.setItem(
        "accentColor",
        accentColor.value
    );
}


/* =========================
   LOAD BUSINESS DETAILS
   ========================= */

function loadBusinessDetails() {

    let savedName =
        localStorage.getItem(
            "businessName"
        );

    let savedPhone =
        localStorage.getItem(
            "businessPhone"
        );

    let savedEmail =
        localStorage.getItem(
            "businessEmail"
        );

    let savedBank =
        localStorage.getItem(
            "bankName"
        );

    let savedAccountName =
        localStorage.getItem(
            "accountName"
        );

    let savedAccountNumber =
        localStorage.getItem(
            "accountNumber"
        );

    let savedInstructions =
        localStorage.getItem(
            "paymentInstructions"
        );

    let savedAccent =
        localStorage.getItem(
            "accentColor"
        );


    if (savedName) {
        businessName.value =
            savedName;
    }

    if (savedPhone) {
        businessPhone.value =
            savedPhone;
    }

    if (savedEmail) {
        businessEmail.value =
            savedEmail;
    }

    if (savedBank) {
        bankName.value =
            savedBank;
    }

    if (savedAccountName) {
        accountName.value =
            savedAccountName;
    }

    if (savedAccountNumber) {
        accountNumber.value =
            savedAccountNumber;
    }

    if (savedInstructions) {
        paymentInstructions.value =
            savedInstructions;
    }

    if (savedAccent) {
        accentColor.value =
            savedAccent;
    }

    applyAccentColor();
}


/* =========================
   APPLY ACCENT COLOR
   ========================= */

function applyAccentColor() {

    let selectedColor =
        accentColor.value ||
        "#b85c38";

    document.documentElement.style.setProperty(
        "--accent-color",
        selectedColor
    );
}


/* =========================
   ACCENT COLOR CHANGE
   ========================= */

accentColor.addEventListener(
    "input",
    function() {

        applyAccentColor();

        localStorage.setItem(
            "accentColor",
            accentColor.value
        );
    }
);


/* =========================
   LOGO
   ========================= */

function saveLogo() {

    if (savedLogo !== "") {

        localStorage.setItem(
            "businessLogo",
            savedLogo
        );
    }
}


function loadLogo() {

    let logo =
        localStorage.getItem(
            "businessLogo"
        );

    if (logo) {

        savedLogo =
            logo;

        previewLogo.src =
            savedLogo;

        previewLogo.style.display =
            "block";
    }
}


/* =========================
   LOGO UPLOAD
   ========================= */

logoInput.addEventListener(
    "change",
    function() {

        let file =
            logoInput.files[0];

        if (!file) {
            return;
        }

        if (
            !file.type.startsWith(
                "image/"
            )
        ) {

            alert(
                "Please select an image file."
            );

            logoInput.value =
                "";

            return;
        }

        let reader =
            new FileReader();

        reader.onload =
            function(event) {

                savedLogo =
                    event.target.result;

                previewLogo.src =
                    savedLogo;

                previewLogo.style.display =
                    "block";

                saveLogo();
            };

        reader.readAsDataURL(file);
    }
);


/* =========================
   STATUS
   ========================= */

function updatePreviewStatus() {

    let status =
        invoiceStatus.value;

    previewStatus.textContent =
        status;

    previewStatus.className =
        "invoiceStatus";

    if (status === "Paid") {

        previewStatus.classList.add(
            "status-paid"
        );

    } else if (
        status === "Pending"
    ) {

        previewStatus.classList.add(
            "status-pending"
        );

    } else {

        previewStatus.classList.add(
            "status-unpaid"
        );
    }
}


invoiceStatus.addEventListener(
    "change",
    function() {

        updatePreviewStatus();
    }
);


/* =========================
   COLLECT ALL ITEMS
   ========================= */

function getAllItems() {

    let invoiceItems = [];

    invoiceItems.push({

        name:
            itemName.value,

        quantity:
            Number(quantity.value),

        price:
            Number(price.value)
    });


    let addedItems =
        itemsContainer.children;


    for (
        let i = 0;
        i < addedItems.length;
        i++
    ) {

        let inputs =
            addedItems[i]
                .querySelectorAll(
                    "input"
                );

        invoiceItems.push({

            name:
                inputs[0].value,

            quantity:
                Number(inputs[1].value),

            price:
                Number(inputs[2].value)
        });
    }


    return invoiceItems;
}


/* =========================
   CALCULATE TOTALS
   ========================= */

function calculateTotals() {

    let items =
        getAllItems();

    let subtotal = 0;


    for (
        let i = 0;
        i < items.length;
        i++
    ) {

        subtotal +=
            items[i].quantity *
            items[i].price;
    }


    let discountValue =
        Number(
            discount.value
        ) || 0;

    let taxPercentage =
        Number(
            tax.value
        ) || 0;


    let amountAfterDiscount =
        subtotal -
        discountValue;


    let taxAmount =
        amountAfterDiscount *
        (taxPercentage / 100);


    let finalTotal =
        amountAfterDiscount +
        taxAmount;


    return {

        subtotal:
            subtotal,

        discount:
            discountValue,

        tax:
            taxAmount,

        total:
            finalTotal
    };
}

/* =========================
   UPDATE BUSINESS PREVIEW
   ========================= */

function updateBusinessPreview() {

    previewBusinessName.textContent =
        businessName.value ||
        "Business Name";

    previewBusinessPhone.textContent =
        businessPhone.value
            ? "Phone: " +
              businessPhone.value
            : "Phone: —";

    previewBusinessEmail.textContent =
        businessEmail.value
            ? "Email: " +
              businessEmail.value
            : "Email: —";
}


/* =========================
   UPDATE CUSTOMER PREVIEW
   ========================= */

function updateCustomerPreview() {

    previewCustomerName.textContent =
        customerName.value ||
        "Customer Name";

    previewCustomerPhone.textContent =
        customerPhone.value
            ? "Phone: " +
              customerPhone.value
            : "Phone: —";
}


/* =========================
   UPDATE PAYMENT PREVIEW
   ========================= */

function updatePaymentPreview() {

    previewBankName.textContent =
        bankName.value
            ? "Bank: " +
              bankName.value
            : "Bank: —";

    previewAccountName.textContent =
        accountName.value
            ? "Account Name: " +
              accountName.value
            : "Account Name: —";

    previewAccountNumber.textContent =
        accountNumber.value
            ? "Account Number: " +
              accountNumber.value
            : "Account Number: —";

    previewPaymentInstructions.textContent =
        paymentInstructions.value
            ? paymentInstructions.value
            : "Payment instructions: —";
}


/* =========================
   UPDATE MAIN ITEM PREVIEW
   ========================= */

function updateMainItemPreview(
    symbol
) {

    let mainQuantity =
        Number(quantity.value) || 0;

    let mainPrice =
        Number(price.value) || 0;

    let mainTotal =
        mainQuantity *
        mainPrice;


    previewItemName.textContent =
        itemName.value ||
        "Item or Service";

    previewQuantity.textContent =
        mainQuantity;

    previewPrice.textContent =
        symbol +
        mainPrice.toLocaleString(
            "en-US"
        );

    previewItemTotal.textContent =
        symbol +
        mainTotal.toLocaleString(
            "en-US"
        );
}


/* =========================
   UPDATE ADDITIONAL ITEMS
   ========================= */

function updateAdditionalItemsPreview(
    symbol
) {

    previewItemsContainer.innerHTML =
        "";

    let addedItems =
        itemsContainer.children;


    for (
        let i = 0;
        i < addedItems.length;
        i++
    ) {

        let inputs =
            addedItems[i]
                .querySelectorAll(
                    "input"
                );

        let name =
            inputs[0].value;

        let itemQuantity =
            Number(
                inputs[1].value
            );

        let itemPrice =
            Number(
                inputs[2].value
            );

        let itemTotal =
            itemQuantity *
            itemPrice;


        let row =
            document.createElement(
                "div"
            );

        row.className =
            "previewItemRow";


        let nameCell =
            document.createElement(
                "span"
            );

        nameCell.textContent =
            name;


        let quantityCell =
            document.createElement(
                "span"
            );

        quantityCell.textContent =
            itemQuantity;


        let priceCell =
            document.createElement(
                "span"
            );

        priceCell.textContent =
            symbol +
            itemPrice.toLocaleString(
                "en-US"
            );


        let totalCell =
            document.createElement(
                "span"
            );

        totalCell.textContent =
            symbol +
            itemTotal.toLocaleString(
                "en-US"
            );


        row.appendChild(
            nameCell
        );

        row.appendChild(
            quantityCell
        );

        row.appendChild(
            priceCell
        );

        row.appendChild(
            totalCell
        );


        previewItemsContainer.appendChild(
            row
        );
    }
}


/* =========================
   UPDATE TOTAL PREVIEW
   ========================= */

function updateTotalsPreview(
    totals,
    symbol
) {

    previewSubtotal.textContent =
        "Subtotal: " +
        symbol +
        totals.subtotal.toLocaleString(
            "en-US"
        );

    previewDiscount.textContent =
        "Discount: -" +
        symbol +
        totals.discount.toLocaleString(
            "en-US"
        );

    previewTax.textContent =
        "Tax: " +
        symbol +
        totals.tax.toLocaleString(
            "en-US"
        );

    previewTotal.textContent =
        "Total: " +
        symbol +
        totals.total.toLocaleString(
            "en-US"
        );


    let totalElement =
        document.getElementById(
            "total"
        );


    if (totalElement) {

        totalElement.textContent =
            "Total: " +
            symbol +
            totals.total.toLocaleString(
                "en-US"
            );
    }
}


/* =========================
   UPDATE INVOICE HEADER
   ========================= */

function updateInvoiceHeader() {

    previewInvoiceNumber.textContent =
        "Invoice #: " +
        invoiceNumber.value;

    previewInvoiceDate.textContent =
        "Date: " +
        invoiceDate.value;

    updatePreviewStatus();
}


/* =========================
   RENDER COMPLETE PREVIEW
   ========================= */

function renderInvoicePreview() {

    let symbol =
        getCurrencySymbol();

    let totals =
        calculateTotals();


    updateBusinessPreview();

    updateCustomerPreview();

    updatePaymentPreview();

    updateInvoiceHeader();

    updateMainItemPreview(
        symbol
    );

    updateAdditionalItemsPreview(
        symbol
    );

    updateTotalsPreview(
        totals,
        symbol
    );


    if (savedLogo !== "") {

        previewLogo.src =
            savedLogo;

        previewLogo.style.display =
            "block";

    } else {

        previewLogo.style.display =
            "none";
    }


    applyAccentColor();
}


/* =========================
   ADD ITEM
   ========================= */

addItemBtn.addEventListener(
    "click",
    function() {

        let itemRow =
            document.createElement(
                "div"
            );


        let newItem =
            document.createElement(
                "input"
            );

        newItem.type =
            "text";

        newItem.placeholder =
            "Enter item or service";


        let newQuantity =
            document.createElement(
                "input"
            );

        newQuantity.type =
            "number";

        newQuantity.placeholder =
            "Quantity";

        newQuantity.min =
            "1";


        let newPrice =
            document.createElement(
                "input"
            );

        newPrice.type =
            "number";

        newPrice.placeholder =
            "Price";

        newPrice.min =
            "0";


        let removeBtn =
            document.createElement(
                "button"
            );

        removeBtn.type =
            "button";

        removeBtn.textContent =
            "Remove Item";


        removeBtn.addEventListener(
            "click",
            function() {

                itemRow.remove();

                renderInvoicePreview();
            }
        );


        itemRow.appendChild(
            newItem
        );

        itemRow.appendChild(
            newQuantity
        );

        itemRow.appendChild(
            newPrice
        );

        itemRow.appendChild(
            removeBtn
        );


        itemsContainer.appendChild(
            itemRow
        );
    }
);


/* =========================
   LIVE FORM PREVIEW
   ========================= */

let liveFields = [

    businessName,

    businessPhone,

    businessEmail,

    bankName,

    accountName,

    accountNumber,

    paymentInstructions,

    customerName,

    customerPhone,

    itemName,

    quantity,

    price,

    discount,

    tax
];


for (
    let i = 0;
    i < liveFields.length;
    i++
) {

    liveFields[i].addEventListener(
        "input",
        function() {

            renderInvoicePreview();
        }
    );
}


currency.addEventListener(
    "change",
    function() {

        renderInvoicePreview();
    }
);


invoiceDate.addEventListener(
    "change",
    function() {

        renderInvoicePreview();
    }
);

/* =========================
   CREATE INVOICE DATA
   ========================= */

function createInvoiceData(
    totalAmount
) {

    return {

        number:
            invoiceNumber.value,

        date:
            invoiceDate.value,

        status:
            invoiceStatus.value,

        customer:
            customerName.value,

        customerPhone:
            customerPhone.value,

        currency:
            currency.value,

        discount:
            Number(discount.value) || 0,

        tax:
            Number(tax.value) || 0,

        total:
            totalAmount,

        items:
            getAllItems(),

        businessName:
            businessName.value,

        businessPhone:
            businessPhone.value,

        businessEmail:
            businessEmail.value,

        logo:
            savedLogo,

        bankName:
            bankName.value,

        accountName:
            accountName.value,

        accountNumber:
            accountNumber.value,

        paymentInstructions:
            paymentInstructions.value,

        accentColor:
            accentColor.value
    };
}


/* =========================
   SAVE / UPDATE HISTORY
   ========================= */

function saveInvoiceToHistory(
    totalAmount
) {

    let savedInvoices =
        JSON.parse(
            localStorage.getItem(
                "invoiceHistory"
            )
        ) || [];


    let invoice =
        createInvoiceData(
            totalAmount
        );


    if (
        editingHistoryIndex !== null
    ) {

        savedInvoices[
            editingHistoryIndex
        ] = invoice;

    } else {

        savedInvoices.unshift(
            invoice
        );
    }


    localStorage.setItem(
        "invoiceHistory",
        JSON.stringify(
            savedInvoices
        )
    );


    displayInvoiceHistory();


    editingHistoryIndex =
        null;

    generateBtn.textContent =
        "Generate Invoice";
}


/* =========================
   DISPLAY HISTORY
   ========================= */

function displayInvoiceHistory() {

    let savedInvoices =
        JSON.parse(
            localStorage.getItem(
                "invoiceHistory"
            )
        ) || [];


    historyContainer.innerHTML =
        "";


    if (
        savedInvoices.length === 0
    ) {

        historyContainer.innerHTML =
            `
            <p class="emptyHistory">
                No saved invoices yet.
            </p>
            `;

        return;
    }


    for (
        let i = 0;
        i < savedInvoices.length;
        i++
    ) {

        let invoice =
            savedInvoices[i];


        let symbol =
            getSymbolForCurrency(
                invoice.currency
            );


        let status =
            invoice.status ||
            "Unpaid";


        let card =
            document.createElement(
                "div"
            );


        card.className =
            "historyCard";


        card.innerHTML =
            `

            <div class="historyTop">

                <p class="historyInvoiceNumber">
                    ${invoice.number}
                </p>

                <p class="historyTotal">
                    ${symbol}${Number(
                        invoice.total
                    ).toLocaleString(
                        "en-US"
                    )}
                </p>

            </div>


            <p class="historyCustomer">
                ${invoice.customer || "Customer"}
            </p>


            <p class="historyDate">
                ${invoice.date || "No date"}
            </p>


            <p class="historyStatus">
                ${status}
            </p>


            <div class="historyButtons">

                <button
                    type="button"
                    class="viewInvoiceBtn"
                >
                    Edit Invoice
                </button>


                <button
                    type="button"
                    class="deleteInvoiceBtn"
                >
                    Delete
                </button>

            </div>

            `;


        let viewButton =
            card.querySelector(
                ".viewInvoiceBtn"
            );


        viewButton.addEventListener(
            "click",
            function() {

                loadInvoiceFromHistory(
                    invoice,
                    i
                );
            }
        );


        let deleteButton =
            card.querySelector(
                ".deleteInvoiceBtn"
            );


        deleteButton.addEventListener(
            "click",
            function() {

                deleteInvoiceFromHistory(
                    i
                );
            }
        );


        historyContainer.appendChild(
            card
        );
    }
}


/* =========================
   LOAD SAVED INVOICE
   ========================= */

function loadInvoiceFromHistory(
    invoice,
    index
) {

    editingHistoryIndex =
        index;


    businessName.value =
        invoice.businessName || "";


    businessPhone.value =
        invoice.businessPhone || "";


    businessEmail.value =
        invoice.businessEmail || "";


    bankName.value =
        invoice.bankName || "";


    accountName.value =
        invoice.accountName || "";


    accountNumber.value =
        invoice.accountNumber || "";


    paymentInstructions.value =
        invoice.paymentInstructions || "";


    if (
        invoice.accentColor
    ) {

        accentColor.value =
            invoice.accentColor;
    }


    savedLogo =
        invoice.logo || "";


    if (savedLogo !== "") {

        previewLogo.src =
            savedLogo;

        previewLogo.style.display =
            "block";

    } else {

        previewLogo.style.display =
            "none";
    }


    customerName.value =
        invoice.customer || "";


    customerPhone.value =
        invoice.customerPhone || "";


    invoiceNumber.value =
        invoice.number || "";


    invoiceDate.value =
        invoice.date || "";


    invoiceStatus.value =
        invoice.status || "Unpaid";


    currency.value =
        invoice.currency || "NGN";


    discount.value =
        invoice.discount || "";


    tax.value =
        invoice.tax || "";


    let items =
        invoice.items || [];


    itemsContainer.innerHTML =
        "";


    if (
        items.length > 0
    ) {

        itemName.value =
            items[0].name || "";

        quantity.value =
            items[0].quantity || "";

        price.value =
            items[0].price || "";

    } else {

        itemName.value =
            "";

        quantity.value =
            "";

        price.value =
            "";
    }


    for (
        let i = 1;
        i < items.length;
        i++
    ) {

        createSavedItemRow(
            items[i]
        );
    }


    generateBtn.textContent =
        "Update Invoice";


    renderInvoicePreview();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   CREATE SAVED ITEM ROW
   ========================= */

function createSavedItemRow(
    item
) {

    let itemRow =
        document.createElement(
            "div"
        );


    let newItem =
        document.createElement(
            "input"
        );

    newItem.type =
        "text";

    newItem.placeholder =
        "Enter item or service";

    newItem.value =
        item.name || "";


    let newQuantity =
        document.createElement(
            "input"
        );

    newQuantity.type =
        "number";

    newQuantity.placeholder =
        "Quantity";

    newQuantity.min =
        "1";

    newQuantity.value =
        item.quantity || "";


    let newPrice =
        document.createElement(
            "input"
        );

    newPrice.type =
        "number";

    newPrice.placeholder =
        "Price";

    newPrice.min =
        "0";

    newPrice.value =
        item.price || "";


    let removeBtn =
        document.createElement(
            "button"
        );

    removeBtn.type =
        "button";

    removeBtn.textContent =
        "Remove Item";


    removeBtn.addEventListener(
        "click",
        function() {

            itemRow.remove();

            renderInvoicePreview();
        }
    );


    itemRow.appendChild(
        newItem
    );

    itemRow.appendChild(
        newQuantity
    );

    itemRow.appendChild(
        newPrice
    );

    itemRow.appendChild(
        removeBtn
    );


    itemsContainer.appendChild(
        itemRow
    );


    newItem.addEventListener(
        "input",
        renderInvoicePreview
    );

    newQuantity.addEventListener(
        "input",
        renderInvoicePreview
    );

    newPrice.addEventListener(
        "input",
        renderInvoicePreview
    );
}


/* =========================
   DELETE SAVED INVOICE
   ========================= */

function deleteInvoiceFromHistory(
    index
) {

    let savedInvoices =
        JSON.parse(
            localStorage.getItem(
                "invoiceHistory"
            )
        ) || [];


    savedInvoices.splice(
        index,
        1
    );


    localStorage.setItem(
        "invoiceHistory",
        JSON.stringify(
            savedInvoices
        )
    );


    displayInvoiceHistory();
}

/* =========================
   GENERATE / UPDATE INVOICE
   ========================= */

generateBtn.addEventListener(
    "click",
    function() {

        /* =========================
           VALIDATION
           ========================= */

        if (
            businessName.value.trim() === ""
        ) {

            alert(
                "Please enter your business name."
            );

            return;
        }


        if (
            businessPhone.value.trim() === ""
        ) {

            alert(
                "Please enter your business phone."
            );

            return;
        }


        if (
            businessEmail.value.trim() === ""
        ) {

            alert(
                "Please enter your business email."
            );

            return;
        }


        if (
            customerName.value.trim() === ""
        ) {

            alert(
                "Please enter the customer name."
            );

            return;
        }


        if (
            customerPhone.value.trim() === ""
        ) {

            alert(
                "Please enter the customer phone number."
            );

            return;
        }


        if (
            invoiceNumber.value.trim() === ""
        ) {

            alert(
                "Please enter an invoice number."
            );

            return;
        }


        if (
            invoiceDate.value === ""
        ) {

            alert(
                "Please select an invoice date."
            );

            return;
        }


        if (
            itemName.value.trim() === ""
        ) {

            alert(
                "Please enter an item or service."
            );

            return;
        }


        if (
            quantity.value === "" ||
            Number(quantity.value) < 1
        ) {

            alert(
                "Please enter a quantity of at least 1."
            );

            return;
        }


        if (
            price.value === "" ||
            Number(price.value) < 0
        ) {

            alert(
                "Please enter a valid price."
            );

            return;
        }


        if (
            discount.value !== "" &&
            Number(discount.value) < 0
        ) {

            alert(
                "Discount cannot be negative."
            );

            return;
        }


        if (
            tax.value !== "" &&
            Number(tax.value) < 0
        ) {

            alert(
                "Tax cannot be negative."
            );

            return;
        }


        if (
            Number(tax.value) > 100
        ) {

            alert(
                "Tax cannot be more than 100%."
            );

            return;
        }


        /* =========================
           VALIDATE ADDITIONAL ITEMS
           ========================= */

        let addedItems =
            itemsContainer.children;


        for (
            let i = 0;
            i < addedItems.length;
            i++
        ) {

            let inputs =
                addedItems[i]
                    .querySelectorAll(
                        "input"
                    );


            if (
                inputs[0].value.trim() === ""
            ) {

                alert(
                    "Please enter the name of every added item."
                );

                return;
            }


            if (
                inputs[1].value === "" ||
                Number(inputs[1].value) < 1
            ) {

                alert(
                    "Every item must have a quantity of at least 1."
                );

                return;
            }


            if (
                inputs[2].value === "" ||
                Number(inputs[2].value) < 0
            ) {

                alert(
                    "Every item must have a valid price."
                );

                return;
            }
        }


        /* =========================
           CALCULATE
           ========================= */

        let totals =
            calculateTotals();


        if (
            totals.discount >
            totals.subtotal
        ) {

            alert(
                "Discount cannot be greater than the subtotal."
            );

            return;
        }


        /* =========================
           SAVE BUSINESS DETAILS
           ========================= */

        saveBusinessDetails();


        /* =========================
           RENDER PREVIEW
           ========================= */

        renderInvoicePreview();


        /* =========================
           SAVE OR UPDATE
           ========================= */

        saveInvoiceToHistory(
            totals.total
        );


        alert(
            editingHistoryIndex === null
                ? "Invoice saved successfully!"
                : "Invoice updated successfully!"
        );
    }
);


/* =========================
   NEW INVOICE
   ========================= */

newInvoiceBtn.addEventListener(
    "click",
    function() {

        saveBusinessDetails();


        editingHistoryIndex =
            null;


        generateBtn.textContent =
            "Generate Invoice";


        createInvoiceNumber();

        setTodayDate();


        customerName.value =
            "";

        customerPhone.value =
            "";


        itemName.value =
            "";

        quantity.value =
            "";

        price.value =
            "";


        discount.value =
            "";

        tax.value =
            "";


        invoiceStatus.value =
            "Unpaid";


        itemsContainer.innerHTML =
            "";


        renderInvoicePreview();
    }
);


/* =========================
   DOWNLOAD / PRINT
   ========================= */

downloadBtn.addEventListener(
    "click",
    function() {

        window.print();
    }
);


/* =========================
   STARTUP
   ========================= */

loadBusinessDetails();

loadLogo();

setTodayDate();

loadInvoiceNumber();

updatePreviewStatus();

renderInvoicePreview();

displayInvoiceHistory();