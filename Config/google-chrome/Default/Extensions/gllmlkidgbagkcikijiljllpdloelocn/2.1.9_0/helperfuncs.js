var isdevuse=false;


if(!isdevuse){
    console.log=function(){}
}


var cssLocs = {

    fk: {
        title: 'div.mprod-summary-title h1, div.mprod-section div.fk-prod-title h1, div[itemtype*="schema.org/Product"] div.product-details h1.title',
        bracktitle: 'div.mprod-summary-title span.extra_text',
        price: 'div.product-exchange-wrap span.selling-price, div.prices span.selling-price',
        price_alt: 'div.mprod-summary span.final-price',
        price_shp:'div.pricing div.default-shipping-charge',
        pricealert: 'div.mprod-summary div.prices, div.product-details div.prices span.selling-price',
        category: '#fk-mainbody-id div.fk-lbreadbcrumb span:nth-child(3) a, div.breadcrumb-wrap ul li:eq(1) a',
        category_alt: '#fk-mainbody-id div.fk-lbreadbcrumb span:nth-child(2) a, div.breadcrumb-wrap ul li:eq(2) a',
        disc_prod: 'div[itemtype*="schema.org/Product"] div.shop-section span.listing-obsolete-status',
        pid: 'div.oos-value, div.add-to-cart-container form[name="buy-now-form"] input.btn-buy-now, #reco-module-wrapper',
        prod_img: 'div.productImages div.mainImage div.imgWrapper img:eq(0)',
        prod_thmb:'div.productImages li:eq(0) div.thumbContainer div.thumb',
        oos: 'div.out-of-stock,div.coming-soon',
        // graph: 'div.product-exchange-wrap span.selling-price, div.prices span.selling-price',
        graph:'.button_row',
        menu: '.top-menu.unit a,.goquickly-bar a',
        button: 'input[type=submit][value="Buy Now"],input[type=submit][value="Add to Cart"],input[type=submit][value="Search"],a[href="/viewcart"]',
        book_isbn10:"tr:contains('ISBN-10') td:nth-child(2)",
        book_isbn13:"tr:contains('ISBN-13') td:nth-child(2)"



    },
    az: {
        title: 'div.buying #btAsinTitle,#title #productTitle',
        bracktitle: '',
        price_alt: '#price_feature_div #priceblock_saleprice, #price_feature_div #priceblock_ourprice,#priceblock_dealprice',
        // price_alt:'#mbc .a-size-small .a-color-price, #unqualifiedBuyBox span.a-color-price, #buyNewSection span.a-color-price,'
        //price_alt: '#price_feature_div #priceblock_dealprice',
        //price_alt:'span#priceblock_ourprice',
        price:'span#priceblock_saleprice',
        pricealert: '#priceBlock #actualPriceValue, #price_feature_div',
        category: '#nav-subnav > li:eq(0) a',
        category_alt: '#nav-subnav > li:eq(2) a',
        prod_img: '#imageBlockThumbs div.thumb:eq(0) img, #altImages ul img, #main-image-container li.image img',
        prod_thmb:'#imageBlockThumbs div.thumb:eq(0) img, #altImages ul img, #main-image-container li.image img',
        oos:'#outOfStock',
        szcfu:'#partialStateBuybox',
        graph:'div.buying #btAsinTitle,#title #productTitle',
        menu: '#nav-flyout-anchor a,#shopAllLinks a',
        button:'input[type=submit][name="submit.buy-now"],input[type=submit][value="Add to Cart"],input[type=submit][value="Go"],a[href="/gp/cart/view.html/ref=nav_cart"]' ,
        book_isbn10:"li:contains('ISBN-10')",
        book_isbn13:"li:contains('ISBN-13')"
    },
    sd: {
        title: 'div.product-detail h1[itemprop="name"]',
        bracktitle: '',
        price: '#buyPriceBox span.payBlkBig',
        price_alt: '',
        pricealert: '#buyPriceBox',
        category: '#breadCrumbWrapper2 span[itemprop="title"]:eq(0)',
        category_alt: '#breadCrumbWrapper2 span[itemprop="title"]:eq(1)',
        prod_img: '#bx-slider-left-image-panel li:eq(0) img',
        prod_thmb: 'div.left-panel-carousel div.bx-viewport a img',
        disc_prod: '#rightBuyWrapper div.noLongerProduct',
        oos: 'div.buybutton-wrapper div.notifyMe-soldout',
        graph: '#buyPriceBox',
        book_isbn10:"li:Contains('ISBN'):eq(3)",
        book_isbn13:"li:Contains('ISBN'):eq(2)"

    },

    hs: {
        title: '#productInfoDes h1.product-name > span[itemprop="name"]',
        bracktitle: '',
        price: '#hs18Price',
        price_alt: '#hs18Price',
        pricealert: '#hs18Price',
        category: 'div.section ul.breadcrumb > li:eq(1)  > a > span[itemprop="title"]',
        category_alt: 'div.section ul.breadcrumb > li:eq(2) > a > span[itemprop="title"]',
        prod_img: '#productImageBox div.productMeduimImage #productDefaultImage',
        graph: '#hs18Price',
        menu: '.navigation-all a,.quickLinksBox a'
    },

    ip: {
        title: '#mainContainer div.product_details h1 #lblTitle, div.fdpSkuArea h1 > span[itemprop="name"]',
        bracktitle: '',
        price: 'div.price_details #lblOurPrice, div.fdpOurPrice span[itemprop="price"] span.blueFont',
        price_alt: 'div.price_details #lblOurPrice',
        pricealert: 'div.price_details, div.fdpOurPrice',
        category: '#virtualPath a:eq(1)',
        category_alt: '#virtualPath a:eq(2)'
    },

    ib: {
        title: '#ib_details h1.fn, #title >h1',
        bracktitle: '',
        price: '#ib_details span.infiPrice, div.pdp_hnypt div.inf #ibTitle, #pricing_summary #price-after-discount span.price',
        price_alt: '#price_table div.buy-value',
        pricealert: '#ib_details, #price_table',
        category: '#submenu span.active a',
        category_alt: '#product-overview span.breadcrumb > a:eq(2)',
        book_isbn10:'#product-overview tr:contains("ISBN") td:eq(1)',
        book_isbn13:'#product-overview tr:contains("EAN") td:eq(1)'
    },


    eb: {
        title: '#itemTitle',
        bracktitle: '',
        price: 'div.vi-price span[itemprop="price"]',
        price_alt: 'div.vi-price span[itemprop="price"]',
        pricealert: 'div.vi-price',
        category: '#bc #vi-VR-brumb-lnkLst li.bc-w:eq(0) a',
        category_alt: '#bc #vi-VR-brumb-lnkLst li.bc-w:eq(1) a',
        prod_img: '#mainImgHldr #icImg',
        pid:'#vi-desc-maincntr  div.iti-act-num'
    },

    tr: {
        title: '#product-title, div.dd_product_specs_container h1.dd_title1, #left-content-product-details-part1 h1[itemprop="name"]',
        bracktitle: '',
        price: 'div.product-info div.prod-detail div.product-price-box div.priceBox span.wsPrice span[itemprop="lowPrice"]',
        price_alt: '#seller-content-container div[id*="seller"]:eq(0)  div.priceDiv p.price-content span[itemprop="highPrice"]',
        pricealert: 'div.product-info div.prod-detail div.product-price-box div.priceBox, #price-and-save-details, div.dd_product_specs_container div.mrpDiv',
        category: '#breadcrumb li:eq(1) > a, #breadcrump div[itemtype*="Breadcrumb"]:eq(1) > a > span',
        category_alt: '#breadcrumb li:eq(2) > a, #breadcrump div[itemtype*="Breadcrumb"]:eq(2) > a > span'
    },

    it: {
        title: '#contentbody div.productdetailwrapper h1[itemprop="name"]',
        bracktitle: '',
        price: '#contentbody div.productdetailwrapper div.pricetab span[itemprop="price"]',
        price_alt: '#contentbody div.productdetailwrapper div.pricetab span[itemprop="price"]',
        price_shp: '#contentbody div.productdetailwrapper div.pdpshipping',
        pricealert: '#contentbody div.productdetailwrapper div.pricetab',
        category: '#pagenav div.navigation > a:eq(1)',
        category_alt: '#pagenav div.navigation > a:eq(2)'
    },

    sa: {
        title: '#productDetail div.product-main-title div.name',
        bracktitle: '#productDetail div.product-main-title div.desc',
        price: '#productDetail div.price-n-warranty div.price #sp',
        price_alt: '#productDetail div.price-n-warranty div.price span[class*="price"]',
        pricealert: '#productDetail div.price-n-warranty div.price',
        category: '#main div.main-top div.bread-crumbs a:eq(1)',
        category_alt: '#main div.main-top div.bread-crumbs a:eq(2)'
    },

    nt: {
        title: '#product_page div.productDetails h1',
        bracktitle: '',
        price: '#product_page div.productDetails div.pro_PriceInfo ul li strong',
        price_alt: '#product_page div.productDetails div.pro_PriceInfo ul li strong',
        pricalert: '#product_page div.productDetails div.pro_PriceInfo',
        category: '#bradCrumb div.bradCrumbDiv ul > li:eq(2) a',
        category_alt: '#bradCrumb div.bradCrumbDiv ul > li:eq(4) a'
    },
    ye: {
        title: 'div.pdnamedescrpt #productTitle',
        bracktitle: '',
        price: 'div.PDRightPriceMain div.your_price span[itemprop="price"]',
        price_alt: 'div.PDRightPriceMain div.your_price span[itemprop="price"]',
        pricealert: 'div.PDRightPriceMain div.your_price',
        category: 'div.pdmaingbg span[itemprop="breadcrumb"] > a:eq(0)',
        category_alt: 'div.pdmaingbg span[itemprop="breadcrumb"] > a:eq(1)'
    },

    my: {
        title: 'div.details div.summary div[data-styleid] h1',
        bracktitle: '',
        price: 'div.details div.summary div[data-styleid] div.price',
        price_alt: 'div.details div.summary div[data-styleid] div.price',
        pricealert: 'div.details div.summary div[data-styleid] div.price',
        category: 'div.details ul.breadcrumb li:eq(1) a',
        category_alt: 'div.details ul.breadcrumb li:eq(2) a',
        prod_img: 'div.images div.thumbs img:eq(0)',
        couponBox: 'input[placeholder="Type coupon code here"]',
        couponButton: 'button[name="btn-apply"]'
    },
    //old selectors
    /*ja: {
        title: '#qa-prd-brand',
        bracktitle: '#qa-title-product',
        price: '#price_container #price_div #before_price span',
        price_alt: '#before_price span:eq(1)',
        pricealert: '#qa-title-product',
        category: 'div.breadcrumbs > a:eq(1)',
        category_alt: 'div.breadcrumbs > a:eq(2)',
        prod_img: 'div.prd-imageview ul.imageview-slider li.selected img',
        prod_thmb:'#prdthumb div.thumb-slider span:eq(0)',
        couponBox: 'input#couponCode',
        couponButton: 'input#btn_apply_voucher',
        graph: '#price_container #price_div #before_price span',
        menu: '.main-topnav.fl a'
    },*/
    ja: {
        title_brand:"div.product-details span.brand",
        title_product:"div.product-details span.product-title",
        price:"div.product-details span.actual-price",
        category: "div.pdp-breadcrumb ol.breadcrumb li:eq(-1) a",
        category_alt: "div.pdp-breadcrumb ol.breadcrumb li:eq(-2) a",
        // prod_img: "div.product-image div.slick-active img"
        prod_img:'.slide.slick-slide[index=0]:eq(0) img'
        
    },

    sc: {
        title: 'div.product div.product-about h1[itemprop="name"]',
        bracktitle: '',
        price: 'div.product div.product-details div.product-pricing div.price, div.product div.product-details div.product-pricing span[id*="sec_discounted_price"], div.product-info table tbody p > span.price',
        price_alt: 'div.product div.product-details div.product-pricing span[id*="price_update"] span[id*="line_discounted_price"]',
        pricealert: 'div.product-info h1.mainbox-title',
        category: 'div.site-content > ul.breadcrumb-pages > li:eq(1) a',
        category_alt: 'div.site-content > ul.breadcrumb-pages > li:eq(2) a',
        pid: 'form[name*="product_form"] input[name*="product_data"]',
        prod_img: 'div.product-gallery div[id*="product_images"] img:eq(0)',
        prod_thmb:'meta[property="og:image"]',
        graph: 'div.product div.product-details div.product-pricing div.price, div.product div.product-details div.product-pricing span[id*="sec_discounted_price"], div.product-info table tbody p > span.price',
        menu: '.site-categories a, .category_menu a'
    },

    fc: {
        title: 'div[itemtype*="Product"] h1.p_heading',
        bracktitle: '',
        price: 'div[itemtype*="Product"] div.p_rgt span[itemprop="price"]',
        price_alt: 'div[itemtype*="Product"] div.p_rgt span[itemprop="price"]',
        pricealert: 'div[itemtype*="Product"] div.p_rgt span[itemprop="price"]',
        category: '#p_breadcrumb li:eq(2) a',
        category_alt: '#p_breadcrumb li:eq(4) a',
        prod_img: 'meta[property="og:image"]',
        prod_thmb:'div[itemtype*="Product"] div.details-thumb span:eq(0) img '
    },

    bo: {
        title: 'div.quickview-inner-rgt h1 span[itemprop="name"]',
        bracktitle: '',
        price: 'div.quickview-inner-rgt div.quickview-stock-lft #current_product_price',
        price_alt: 'div.quickview-inner-rgt div.quickview-stock-lft #current_product_price',
        pricealert: 'div.quickview-inner-rgt div.quickview-stock-lft #current_product_price',
        category: 'ul.breadcrums span[itemtype*="Breadcrumb"]:eq(1) span[itemprop="title"]',
        category_alt: 'ul.breadcrums span[itemtype*="Breadcrumb"]:eq(2) span[itemprop="title"]'
    },


    ba: {
        title: '#prdctdetl div.prdcol2 h1[itemprop="name"]',
        bracktitle: '',
        price: '#prdctdetl div.prdcol3 div.prcbox div.extrinr span[itemprop="offers"] span[itemprop="price"]',
        price_alt: '#prdctdetl div.prdcol3 div.prcbox div.exfringr span[itemprop="offers"] span[itemprop="price"]',
        pricealert: '#prdctdetl div.prdcol3 div.prcbox div.extrinr div.brdr',
        category: '#breadcrumbs ul > li:eq(1) a',
        category_alt: '#breadcrumbs ul > li:eq(2) a',
        book_isbn10:"tr:contains('ISBN:') td:eq(1)",
        book_isbn13:"tr:contains('ISBN-13:') td:eq(1)"

    },
    // pt: {
    //     title: 'div[ng-controller="productPreviewCtrl"] div.product-details h2[itemprop="name"]',
    //     bracktitle: '',
    //     price: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button span[itemprop="price"]',
    //     price_alt: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button span[itemprop="price"]',
    //     pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    //     category: 'div[ng-controller="productPreviewCtrl"] div.breadcrumbs-highlight ul.fl li:eq(2) span[itemprop="title"]',
    //     category_alt: 'div[ng-controller="productPreviewCtrl"] div.breadcrumbs-highlight ul.fl li:eq(3) span[itemprop="title"]',
    //     prod_img: 'div[ng-controller="productPreviewCtrl"] div.product-images div.slider_container li:eq(0) div.zoomPad img',
    //     pid: 'div[ng-controller="productPreviewCtrl"] div.product-details div.panel-group li[ng-bind-html*="Product Code"] span.ng-binding'
    // },
   tc: {
    title: 'div[ng-controller="productPreviewCtrl"] div.product-details h2[itemprop="name"]',
    bracktitle: '',
    price: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button span[itemprop="price"]',
    price_alt: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button span[itemprop="price"]',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div[ng-controller="productPreviewCtrl"] div.breadcrumbs-highlight ul.fl li:eq(2) span[itemprop="title"]',
    category_alt: 'div[ng-controller="productPreviewCtrl"] div.breadcrumbs-highlight ul.fl li:eq(3) span[itemprop="title"]',
    prod_img: "$('meta[itemProp=image]').attr('content')",
    pid: 'div[ng-controller="productPreviewCtrl"] div.product-details div.panel-group li[ng-bind-html*="Product Code"] span.ng-binding'
},

    vo:{

    title :'.main_prod_text h1',
    bracktitle: '',
    price: '.main_prod_text #buy_btn["data-price"]',
    price_alt: 'div.breadcumbs a',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",


    },

    ch:{

    title :'.main_prod_text h1',
    bracktitle: '',
    price: '.main_prod_text #buy_btn["data-price"]',
    price_alt: 'div.breadcumbs a',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",


    },


    fi:{

    title :".productdetailbucket h1",
    bracktitle: '',
    price: ".productdetailbucket span[itemprop='price'] span.sp_amt",
    price_alt: '',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",

    },

    aj:{

    title :".fnl-pdp-subtitle",
    bracktitle: '',
    price: ".productdetailbucket span[itemprop='price'] span.sp_amt",
    price_alt: '',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",


    },

   ab:{

    title :".product-detail__title",
    bracktitle: '',
    price: ".pdp-product-details div[itemprop='price']",
    price_alt: '',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",


    },

   cy:{

    title :'.product-details h1',
    bracktitle: '',
    price: '.price-details span.new-price"]',
    price_alt: 'div.breadcumbs a',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",


    },

   ci:{

    title :'.product_title h1',
    bracktitle: '',
    price: '#our_price_display',
    price_alt: 'div.breadcumbs a',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",


    },

     jp:{

    title :'.productName',
    bracktitle: '',
    price: '#dPrice',
    price_alt: '',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: '',
    category_alt: '',
    prod_img: "",


    },

    ki:{

    title :'.product-title',
    bracktitle: '',
    price: '.price-amount',
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: ".cloud-zoom-container img:eq(0)",


    },

    kv:{

    title :'.product-name',
    bracktitle: '',
    price: "span[itemprop='price']",
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: 'meta[property="og:image"]',


    },

    mi:{

    title :".design_title",
    bracktitle: '',
    price: ".discount_old_price h3",
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: 'meta[property="og:image"]',


    },

     bi:{

    title :'.productdetail_container h1',
    bracktitle: '',
    price: "span[itemprop='price'] span.sp_amt",
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: 'meta[property="og:image"]',


    },

     fl:{

    title :'.proDetailsSec h1',
    bracktitle: '',
    price: '.proDetailsSec h3 span',
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: '.proDetailsSec .ProductPopupbox img',


    },

    rn:{

    title :'product-title h2',
    bracktitle: '',
    price: '.price.on-sale',
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: 'meta[property="og:image"]',


    },

    sh:{

    title :'.product_detail .heading span',
    bracktitle: '',
    price: "[itemprop='price']",
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: 'meta[property="og:image"]',


    },

   vm:{

    title :'.product-shop .product-name h1:eq(0)',
    bracktitle: '',
    price: ".price-box .price[id^='product-price']",
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: 'meta[property="og:image"]',


    },

    sb:{

    title :'.product-shop .product-name h1:eq(0)',
    bracktitle: '',
    price: "[data-price]",
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: 'meta[property="og:image"]',


    },

    st:{

    title :'.product-info .sale-heading',
    bracktitle: '',
    price: '.product-info #product-price span.col-orange',
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: ".dashboard img",


    },

    bw:{

    title :'.prodboard h1',
    bracktitle: '',
    price: '.priceOffers .price',
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: ".sale-main-image img",


    },

  nn:{

    title :'.prodboard h1',
    bracktitle: '',
    price: '.priceOffers .price',
    price_alt: '',
    pricealert: '',
    category: '',
    category_alt: '',
    prod_img: ".sale-main-image img",


    },


    cv:{

    title :'h1[itemprop="name"]',
    bracktitle: '',
    price: '.main_prod_text #buy_btn["data-price"]',
    price_alt: 'div.breadcumbs a',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",
    },
        gn:{

    title :'h1[itemprop="name"]',
    bracktitle: '',
    price: '.main_prod_text #buy_btn["data-price"]',
    price_alt: 'div.breadcumbs a',
    pricealert: 'div[ng-controller="productPreviewCtrl"] div.product-details div.discraption button',
    category: 'div.breadcumbs a',
    category_alt: 'div.breadcumbs a',
    prod_img: ".prod_image_inner .zoomPad img",
    },

    // fabfurnish
    ff: {
        couponBox: '#couponCode',
        couponButton: 'div.couponFormEl .ui-button.ui-buttonCta'
    },
    // paytm
    pt: {
        couponBox: 'input.input-promo',
        couponButton: 'apply-promo-btn'
    },
    // pepperfry
    pf: {
        couponBox: 'input#coupon_code',
        couponButton: '#applyMe'
    },
    // urbanladder
    ul: {
        couponBox: '#order_coupon_code',
        couponButton: '#update-button'
    },
    // fashionara
    fa: {
        couponBox: '#promo_code',
        couponButton: '#cart_coupon_btn_label'
    },
    // lenscart
    lc: {
        couponBox: '#coupon_code',
        couponButton: 'a.back2saved-add.bold'
    },
    // foodpanda
    fp: {
        couponBox: '#shop_order_cart_type_vouchers',
        couponButton: '#shop_order_cart_type_voucher_button'
    },
    // justeat
    je: {
        couponBox: '#input_coupon_code',
        couponButton: 'button.btn.coupon-code-apply'
    },
    // dominos
    dm: {
        couponBox: '#coupon-code-field',
        couponButton: '#redeem-coupon-button'
    },
    // pizzahut
    ph: {
        couponBox: '#discounterCode',
        couponButton: '#btnApplyDiscountCode'
    },
    // makemytrip (horrible)
    mt: {
        couponBox: 'input[placeholder="Enter Coupon code"]',
        couponButton: 'a[ng-click="applyCoupon();"]'
    },
    // cleartrip
    ct: {
        couponBox: 'input#coupon',
        couponButton: '#check_saving'
    },
    // goibibo
    gb: {
        couponBox: '#gi_promocode',
        couponButton: '#gi_search_promo'
    },
    // coupondunia
    couponDunia: {
        hasCoupons: 'div.coupon-click',
        portalMap: {
            // todo: need to replace CAPITALIZED names by the right ones.
            'Myntra': 'my',
            'Jabong': 'ja',
            'eBay': 'eb',
            'Paytm': 'pt',
            'Indiatimes Shopping': 'it',
            'FabFurnish': 'ff',
            'Pepperfry': 'pf',
            'URBANLADDER': 'ul',
            'FASHIONARA': 'fa',
            'Lenskart.com': 'lc',
            'FoodPanda': 'fp',
            'Just Eat': 'je',
            'Dominos': 'dm',
            'PIZZAHTU': 'ph',
            'MakeMyTrip': 'mt',
            'Cleartrip': 'ct',
            'Goibibo': 'gb',
            'Naaptol': 'nt',
            'InfiBeam': 'ib',
            'ShopClues': 'sc',
            'HOMEOSHOP18': 'hs',
            'BOBBYOYE': 'bo',
            'FirstCry': 'fc',
        },
        portalMapReverse: {
            'my': 'Myntra',
            'ja': 'Jabong',
            'eb': 'eBay',
            'pt': 'Paytm',
            'it': 'Indiatimes Shopping',
            'ff': 'FabFurnish',
            'pf': 'Pepperfry',
            'ul': 'URBANLADDER',
            'fa': 'FAAAA',
            'lc': 'Lenskart.com',
            'fp': 'FoodPanda',
            'je': 'Just Eat',
            'dm': 'Dominos',
            'ph': 'PHOOOOO',
            'mt': 'MakeMyTrip',
            'ct': 'Cleartrip',
            'gb': 'Goibibo',
            'nt': 'Naaptol',
            'ib': 'InfiBeam',
            'sc': 'ShopClues',
            'hs': 'HSSHHUUUU',
            'bo': 'BOOOO',
            'fc': 'FirstCry',
            'az':'Amazon',
            'fk':'Flipkart',
            'sd':'Snapdeal',
            'emt':'EASEMYTRIP',
            'mmt':'MakeMyTrip',
            'mf':'Musafir',
            'tc':'TataCliq'
        }
    },

    couponRaja: {
        portalMap: {
            'Myntra': 'my',
            'Jabong': 'ja',
            'eBay India': 'eb',
            'Paytm': 'pt',
            'Indiatimes Shopping': 'it',
            'FabFurnish': 'ff',
            'Pepperfry': 'pf',
            'Urban Ladder': 'ul',
            'Fashionara': 'fa',
            'Lenskart': 'lc',
            'FoodPanda': 'fp',
            'JustEat': 'je',
            'Dominos Pizza': 'dm',
            'Pizzahut': 'ph',
            'MakeMyTrip': 'mt',
            'Cleartrip': 'ct',
            'Goibibo': 'gb',
            'Naaptol': 'nt',
            'Infibeam': 'ib',
            'Shopclues': 'sc',
            'HomeShop18': 'hs',
            'Babyoye': 'bo',
            'FirstCry': 'fc'
        },
        portalMapReverse: {
            'my': 'Myntra',
            'ja': 'Jabong',
            'eb': 'eBay India',
            'pt': 'Paytm',
            'it': 'Indiatimes Shopping',
            'ff': 'FabFurnish',
            'pf': 'Pepperfry',
            'ul': 'Urban Ladder',
            'fa': 'Fashionara',
            'lc': 'Lenskart',
            'fp': 'FoodPanda',
            'je': 'JustEat',
            'dm': 'Dominos Pizza',
            'ph': 'Pizzahut',
            'mt': 'MakeMyTrip',
            'ct': 'Cleartrip',
            'gb': 'Goibibo',
            'nt': 'Naaptol',
            'ib': 'InfiBeam',
            'sc': 'ShopClues',
            'hs': 'HomeShop18',
            'bo': 'Babyoye',
            'fc': 'FirstCry'
        }
    },

    couponRani: {
        portalMapReverse: {
            'my': 'myntra',
            'ja': 'jabong',
            'eb': 'ebay',
            'pt': 'paytm',
            'it': 'indiatimes',
            'ff': 'fabfurnish',
            'pf': 'pepperfry',
            'ul': 'Urban Ladder',
            'fa': 'fashionara',
            'lc': 'lenskart',
            'fp': 'foodpanda',
            'je': 'justeat',
            'dm': 'dominos',
            'ph': 'pizza hut',
            'mt': 'makemytrip',
            'ct': 'cleartrip',
            'gb': 'goibibo',
            'nt': 'naaptol',
            'ib': 'infibeam',
            'sc': 'shopclues',
            'hs': 'homeshop18',
            'bo': 'babyoye',
            'fc': 'firstcry'
        },
        portalMap: {
            'myntra-com': 'my',
            'jabong-com': 'ja',
            'ebay-in': 'eb',
            'paytm-bus-coupons': 'pt',
            'shopping-indiatimes-com': 'it',
            'fabfurnish-com': 'ff',
            'pepperfry-com': 'pf',
            'urbanladder-coupons': 'ul',
            'fashionara': 'fa',
            'lenskart-com': 'lc',
            'foodpanda': 'fp',
            'justeat-coupons': 'je',
            'dominos-co-in': 'dm',
            'pizzahut-co-in': 'ph',
            'makemytrip-com': 'mt',
            'cleartrip-com': 'ct',
            'goibibo-com': 'gb',
            'naaptol-com': 'nt',
            'infibeam-com': 'ib',
            'shopclues': 'sc',
            'homeshop18': 'hs',
            'babyoye-com': 'bo',
            'first-cry': 'fc',
        },
    }

}; // helperfuncs


var dittory_site_codes = {
  "az": "Amazon",
  "fk": "Flipkart",
  "ab": "Abof",
  "bw": "Bewakoof",
  "ch": "Chumbak",
  "ci": "Cilory",
  "cv": "Craftsvilla",
  "cy":"chemistryindia",
  "ja": "Jabong",
  "kv": "Koovs",
  "lr": "LimeRoad",
  "my": "Myntra",
  "pt": "Paytm",
  "sd": "Snapdeal",
  "sc": "ShopClues",
  "tc": "Tata Cliq",
  "rn": "Raymond Next",
  "fi": "Fabindia",
  "vo": "Voonik",
  "bi": "Biba",
  "fl": "Faballey",
  "so": "Soch",
  "vm": "Veromoda",
  "aj": "Ajio",
  "ba": "Bata",
  "bo": "Babyoye",
  "bs": "Bombay Shirt",
  "cm": "Coolmango",
  "do": "Daily Objects",
  "eb": "Ebay",
  "fy": "Fashion and You",
  "fa": "Fashionara",
  "fc": "Firstcry",
  "hs": "Homeshop",
  "ho": "Hopscotch",
  "ib": "Infibeam",
  "it": "Itokri",
  "jp": "Jaypore",
  "ki": "Kilol",
  "mi": "Mirraw",
  "nn": "Nnnow",
  "sh": "Shimply",
  "sj": "ShopCj",
  "sb": "StalkBuyLove",
  "st": "StyleTag",
  "zv": "Zovi"
};

var month_name_to_num_map={'jan':'01','feb':'02','mar':'03','apr':'04','may':'05','jun':'06','jul':'07','aug':'08','sep':'09','oct':'10','nov':'11','dec':'12'};
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var indian_cities_codes=["IXA","AGR","AMD","IXD","ATQ","IXU","IXB","BLR","BHU","BHO","BBI","BHJ","CCU","IXC","MAA","COK","CJB","NMB","DED","DIB","DMU","DIU","GAU","GOI","GWL","HBX","HYD","IMF","IDR","JAI","IXJ","JGA","IXW","JDH","JRH","KNU","HJR","CCJ","IXL","LKO","LUH","IXM","IXE","BOM","NAG","NDC","ISK","DEL","PAT","PNY","PNQ","PBD","IXZ","PUT","BEK","RAJ","IXR","SHL","IXS","SXR","STV","TEZ","TRZ","TIR","TRV","UDR","BDQ","VNS","VGA","VTZ"];
var site_domain_map={
  "amazon": "az",
  "flipkart": "fk",
  "abof": "ab",
  "bewakoof": "bw",
  "chumbak": "ch",
  "cilory": "ci",
  "craftsvilla": "cv",
  "chemistryindia": "cy",
  "jabong": "ja",
  "koovs": "kv",
  "limeroad": "lr",
  "myntra": "my",
  "paytm": "pt",
  "snapdeal": "sd",
  "shopclues": "sc",
  "tata cliq": "tc",
  "raymond next": "rn",
  "fabindia": "fi",
  "voonik": "vo",
  "biba": "bi",
  "faballey": "fl",
  "soch": "so",
  "veromoda": "vm",
  "ajio": "aj",
  "bata": "ba",
  "babyoye": "bo",
  "bombay shirt": "bs",
  "coolmango": "cm",
  "daily objects": "do",
  "ebay": "eb",
  "fashion and you": "fy",
  "fashionara": "fa",
  "firstcry": "fc",
  "homeshop": "hs",
  "hopscotch": "ho",
  "infibeam": "ib",
  "itokri": "it",
  "jaypore": "jp",
  "kilol": "ki",
  "mirraw": "mi",
  "nnnow": "nn",
  "shimply": "sh",
  "shopcj": "sj",
  "stalkbuylove": "sb",
  "styletag": "st",
  "zovi": "zv"
};

var site_type='';
var price_graph_hover=false;
var mouse_on_graph=false;
var mouse_on_whsper_box=false;

var postpidStartTime;
var fk_fail=false;
var fk_fail_search=false;
var elastic_match_scores=[];
var elastic_data_displayed=0;
var elastic_data_displayed_as_oos=0;
var no_data_from_elastic=0;
var id_deets={}; 
chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
    id_deets.gcm_id=response.status.gcm_id;
    id_deets.user_id=response.status.user_id;
    id_deets.emmy=response.status.emmy;
    id_deets.sd_id="";
    if(response.status.sd_id != undefined){
        id_deets.sd_id = response.status.sd_id;
    }
    console.log('id_deets')
    console.log(id_deets);
                     
 });
var disp_settings={};

var shadow_dom_support = "";

if( document.head.attachShadow){
    shadow_dom_support = "v1";
}else if(document.head.createShadowRoot){
    shadow_dom_support = "v0";
}else{
    shadow_dom_support = "not supported";
}


chrome.runtime.sendMessage({method: "disp_settings"}, function(response){
    var showDeals=response.status.showDeals;

    disp_settings['showDeals']=showDeals;
                     
 });


var affy_flags={};
var is_our_affys={};
var ga_low_price_displayed=false;

function get_affy_flags(){
chrome.runtime.sendMessage({method: "getaffy"}, function(response){
    affy_flags=response.status;
});
}


function get_is_our_affy(){
chrome.runtime.sendMessage({method: "get_is_our_affy"}, function(response){
    is_our_affys=response.status;
});
}


var fk_book_page=false;
get_affy_flags();
get_is_our_affy();
//delay in seconds
var delayUs = {my: 1800, 
			fk: 600, 
			az: 600, 
			ja: 1800, 
			sd: 600,
			hs: 3600,
			sc: 3600,
            tc:1800,
            aj:1800,
            ci:1800,
            jp:1800,
            lr:1800,
            mi:1800,
            so:1800,
            vo:1800,
            fi:1800,
            cy:1800,
            sb:1800,
            kv:1800,
            fl:1800,
            cv:1800,
            pt:1800,
            ch:1800,
            fy:1800,
            nn:1800,
            it:1800,
            vm:1800,
            rn:1800
        };
var emp_img=chrome.extension.getURL('empty.png');
var prod_deets = {
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_categ_alt:'',
	prod_price:'',
	prod_link:window.location.href,
	prod_srch:'',
	product_id:'',
	prod_site:'',
	ver:chrome.runtime.getManifest().version
};

var disp_analytics_send_flags={

    all_elastic_data_processed:'not yet',
};
var displayed_results=[];

var advtsites = ['www.irctc.co.in','www.indianrail.gov.in'];

var whisperbox, whisperboxtab, whisperboxalerttab, 
whisperboxcontent, allprice, simprice, 
nofound, pricespan, warnbox, 
hightlightm, mfpricealert, mfpricedesc, 
base_url_img, base_url_str, alert_url_img, 
az_url_img,spr_url_img,
alert_url_str, feedbackTab, bubs, cutemsg, mfhistory,oos;

//var all_sites=['fc','bo','az','eb','sd','fk','my','ja','sa','ye','ib','tr','hs','ba','nt','sc'];
//var highfreq_sites=['fk','az','sd'];
//var top_sites=['az','eb','sd','fk','my','ja','hs','sc'];
//var babylife_sites=['fk','az','sd','bo','fc','my','ja','ib','sc'];
//var baby_sites=['fk','az','sd','bo','fc','ib','sc'];
//var watch_sites=['az','eb','sd','fk','my','ja','ib','ye','tr','hs','sc','nt'];
//var life_sites=['eb','sd','fk','my','ja','ye','ib','tr','hs','sc','nt'];
//var elec_sites=['az','eb','sd','fk','sa','ye','ib','tr','hs','sc','nt'];
//var book_sites=['az','eb','sd','fk','sc','ib','hs','nt','ba'];


// var all_sites=['fc','bo','az','sd','fk','ja','sa','hs','ba','sc'];
// var highfreq_sites=['fk','az','sd'];
// var top_sites=['az','sd','fk','hs','sc'];
// var price_sites=['az','sd','fk','hs','sc','ja'];
// var babylife_sites=['fk','az','sd','bo','fc','ja','sc'];
// var baby_sites=['fk','az','sd','bo','fc','sc'];
// var watch_sites=['az','sd','fk','ja','hs','sc'];
// var life_sites=['az','eb','sd','fk','ja','hs','sc'];
// var elec_sites=['az','sd','fk','sa','hs','sc'];
// var book_sites=['az','fk','sd','ib','ba'];
// var sim_sites=['az','sd','fk','ja'];
// var mobi_sites=['az','sd','fk','hs','sc'];
// var foot_sites=['az','sd','fk','ja'];
// var laptop_sites=['az','sd','fk','hs','sc'];
// var watch_sites=['az','sd','fk','ja'];
// var apparel_sites=['ja','my'];

var all_sites=['az','sd','fk','ja','tc','ib','ba'];
var highfreq_sites=['fk','az','sd','tc'];
var top_sites=['az','sd','fk','tc'];
var price_sites=['az','sd','fk','tc','ja'];
var babylife_sites=['fk','az','sd','ja'];
var baby_sites=['fk','az','sd'];
var watch_sites=['az','sd','fk','ja'];
var life_sites=['az','eb','sd','fk','ja','tc'];
var elec_sites=['az','sd','fk','tc'];
var book_sites=['az','fk','sd','ib','ba'];
var sim_sites=['az','sd','fk','ja'];
var mobi_sites=['az','sd','fk','tc'];
var foot_sites=['az','sd','fk','ja','tc'];
var laptop_sites=['az','sd','fk','tc'];
var watch_sites=['az','sd','fk','ja','tc'];
var apparel_sites=['az','fk','sd','ja','my','tc'];


var mclgicon = chrome.extension.getURL('mc_lg64.png');
var base_mclgcon = 'url('+mclgicon+')';

var yogiicon = chrome.extension.getURL('yogi.png');
var base_yogiicon = 'url('+yogiicon+')';

var closebox = chrome.extension.getURL('close_box.png');
var closebox_url = 'url(' + closebox + ')';

var housefly = chrome.extension.getURL('logo_housefly_new.png');
var makkhi_droid_img = chrome.extension.getURL('makkhidroid_small.png');

var makkhi_min=chrome.extension.getURL('makkhichoose_shadow_full_green_bg.png');
var makkhi_min_green_bg=chrome.extension.getURL('makkhichoose_shadow_glowgreenbg.png');

// var makkhi_min=chrome.extension.getURL('makkhichoose_shadow_fullgreenbg_lowprice.png');
// var makkhi_min_green_bg=chrome.extension.getURL('makkhichoose_shadow_glowgreenbg_lowprice.png');

var mbox_img=chrome.extension.getURL('mbox.png');
var ga_whisperbox_hover_times=[];
var ga_graph_hover_times=[];

var gold_coin = chrome.extension.getURL('gold_chest_icon.png');

var wcboxclose_timer;
var whisperbox_close_timer;
var wcbox_page_start_hide_time=15*1000;
var ctabby_click='';
function insertHelpy(couponate) {
    helpybox = createRandString();
    helpyboxtab = createRandString();
    
    var helpy_linky = 'http://www.makkhichoose.com/r/findyogi'
    var alt_desc = 'MakkhiChoose has partnered with findyogi to help answer all your queries. For free. Just click here and ask away!'
    var box = '<div id="'+helpybox+'">\
                    <a class="'+helpyboxtab+'" perm-prompt="" style="display:inline !important; height:64px;width:154px" target="_blank" title="'+alt_desc+'" href="'+helpy_linky+'">Feedback</a>\
                </div>';

    $('body:first').prepend(box);


    $('#'+helpybox).css({
        'visibility':'hidden',
        // 'padding':'0 7px 0 7px',
        'width':'300px',
        'min-height': '350px',
        'background':'#F9F9F9',
        'border-color':'#29216d',
        'border-radius': '0px 2px 2px 0px',
        'border-width':'1px',
        'position':'fixed',
        'top':'200px',
        'left':'-291px',
        'z-index':'9999',
        'box-shadow': '0 0 7px 3px #CBCBCB',
        'padding': '4px',
        'padding-bottom': '30px'
    });

    
    //$('#'+whisperbox).css('height',$('#'+whisperbox).outerHeight() + 'px');
    $('#'+helpybox).css('left','-'+$('#'+helpybox).outerWidth() + 'px');
   

    $('.'+helpyboxtab).css({
        'background-image':base_url_str,
        'border-width':'1px',
        'left':'95px',
        'cursor':'pointer',
        'bottom':'21px',
        'position':'relative',
        'float':'right',
        'text-indent':'-9999px',
        'outline':'none',
        'z-index':'9999'
    });

    $('.'+helpyboxtab).each(function () {
        this.style.setProperty( 'display', 'inline', 'important' );
    });

    var cantHandleTruth = function(event) {

        // whisper gently into the night so do not disturb oh no no no
        if($(event.target).is('#'+helpybox+', #'+helpybox+' *')) {
            return;
        }

        // frisk it lets shut it down and go live
        if ($('#'+helpybox).hasClass('open')) {
            closeTabby(event);
        }
    }

    // $(document).on("click", cantHandleTruth); 
    

    console.log('mc:clappity the giggle is in');
    // Hover, and Click events on result-rows in makkhiBox;
    // keep status of attached or not in these
    hoverEventDocked = false;
    clickEventDocked = false;

} // endofinserthelpy
var az_sale_img = chrome.extension.getURL('az_sale.png');

function insertTag(couponate,tag_type) {
// 	whisperbox = createRandString();
// 	whisperboxtab = createRandString();
// 	whisperboxalerttab = 'a'+whisperboxtab ;
// 	whisperboxcontent = createRandString();
// 	allprice= 'ap' + createRandString();
// 	// simprice= 'sim'+allprice;
//     simprice = allprice;
// 	warnbox = createRandString();
// 	highlightm = 'hg'+warnbox; 
// 	mfpricealert = 'pr'+warnbox;
// 	mfpricedesc = 'dc'+warnbox;
// 	hoverimg='hvi'+warnbox;
// 	hoverdiv = 'hvd'+warnbox;
// 	cutemsg = 'cms'+warnbox;
  
//   	pricespan = 'spn'+allprice;
// 	simpricespan = 'spn'+simprice;
// 	nofound = 'nfd'+allprice;

// 	footer = 'foo' + createRandString();

// 	portalname = 'pn' + createRandString();
// 	portalmsg = 'pm' + createRandString();
// 	rupees = 'rp' + createRandString();

// 	pralurrt = 'alrr'+allprice;
// 	emspan = 'emspn'+allprice;
//     deal='deel'+allprice;
//     deals_header='deals_header'+createRandString();
//     oos=allprice+'oos';
//     top_tag = "";
     
//     // icons for the buttons
//     wishlist_img = chrome.extension.getURL('wishlist.png');
//     track_price_img = chrome.extension.getURL('track_price.png');
//     settings_img = chrome.extension.getURL('settings.png');
//     loading_img = chrome.extension.getURL('loading_gray.gif');
//     feedback_img=chrome.extension.getURL('makkhi_survey_bw.png');
//     // feedback_img=chrome.extension.getURL('dice.png');
//     gold_chest=chrome.extension.getURL('dice.png');
//     gq_ad_img=chrome.extension.getURL('dice.png');
//     useme_img=chrome.extension.getURL('makkhidroid_small.png');

//     spin_img_loader=chrome.extension.getURL('spin.gif');

//     var daily_deals_icon=chrome.extension.getURL('gift.png')
//     var feedback_link_text='';
//     if(Math.random()>=0.5){
//         feedback_link_text='Help us get better!';
//     }else{
//         feedback_link_text='We want to hear from you';
//     }

// //<span class="'+whisperboxtab+'" perm-prompt="" style="display: inline-block !important; position: absolute !important; top: 0; left: 0; height:64px;width:64px;">Feedback</span>
// //<div id="homebox">Please wait, while we are loading the results...</div>
// 	//uncomment the following box variable for deals to work

//  /*   
//     var box = '<div class="askemmy" style="visibility: hidden;">\
//                     <span class="closebox"></span>\
//                     <p id="msg">Set your email address to receive updates</p>\
//                     <div class="iemmybox">\
//                         <input type="text" name="emmy" id="emmy" />\
//                         <input type="submit" id="shave" value="Save" />\
//                     </div>\
//                 </div>\
//                 <div class="pop-up-report" id="report-poppup" style="visibility: hidden;">\
//                     <div id="reason-select-box">\
//                         <div><span>Please tell us what was wrong</span></div>\
//                         <select name="Reasons">\
//                                         <option value="Results are not relevant to the search">Results are not relevant to the search</option>\
//                                         <option value="Images do not match with product">Images do not match with product</option>\
//                                         <option value="Results are from wrong category">Results are from wrong category</option>\
//                                         <option value="I cannot find what I\'m looking for">I cannot find what I\'m looking for</option>\
//                                         <option value="Others">Others</option>\
//                           </select>\
//                      </div>\
//                      <div id="comment-box">\
//                         <div><span>Additional Comments</span></div>\
//                         <textarea name="comments" id="" cols="30" rows="10"></textarea>\
//                         <div>\
//                             <input id="submit_button" type="button" value="submit">\
//                             <input id="cancel_button" type="button" value="cancel">\
//                         </div>\
//                         <p> </p>\
//                      </div>\
//                 </div>\
//                 <div id="welcomebox" type="none"><img src="' + loading_img + '"></img></div>\
//                 <div id="'+whisperbox+'">\
//                     <!-- <span class="'+whisperboxtab+'" perm-prompt="" style="display: inline-block !important;height:64px;width:64px;">Feedback</span> -->\
//     				<div id="'+whisperboxcontent+'" style="display:inline !important;">\
//     					<div id="'+pralurrt+'" style="display:visible !important">\
//                              <a id="'+emspan+'" class="yes" style="display:inline-block !important">Track Price</a>\
//                              <a id="mcsettings" style="display:inline-block !important">Settings</a>\
//                              <a id="mcreport" style="display:inline-block !important">Report</a>\
//                         </div>\
//     					<div id="'+allprice+'" class="empty" style="line-height:12px; display:block !important"></div>\
//     					<div id="'+simprice+'" class="empty" style="line-height:12px; display:block !important"></div>\
//     					<div id="'+nofound+'" class="empty" style="line-height:12px; display:block !important"></div>\
//                         <div id="'+deals_header+'" class="empty" style="line-height:12px; display:block !important"><div style="padding-top:10px;padding-bottom:10px;color:#006700;background:white;text-align: center;vertical-align: middle;"><b>DEALS</b></div></div>\
//                         <div id="'+deal+'" class="empty" style="line-height:12px; display:block !important">\
//                         <div id="scroll_for_deals_msg"><span style="font-size:large;">scroll down for more deals<span></div>\
//                         </div>\
//     				</div>\
//                     </div>';*/
                    
      
//     //remove the box variable and uncommentthe above variable for deals towork
//     // add this tag <a id="cashback" title="cashback" style="display:inline-block !important">...</a> to the div pralurrt for cashback to work
//     //<a id="feedback" style="padding-left:30px; margin-left:40px;" title="Feedback" href="https://www.surveymonkey.com/r/makkhigotback" target="_blank">'+ feedback_link_text+'</a>\
//     // <a id="feedback" style="padding-left:30px; margin-left:40px; background-color:rgb(255, 225, 27);color:#2874f0; " title="MakkhiChoose is giving away gold this festive season. And you are one of the lucky few!" href="http://www.makkhichoose.com/goldquest" target="_blank">'+ 'Shop And Win Gold '+'</a>\
//     // <a id="gq_ad" class="open_gq_ad" style="position: fixed; box-shadow: 0px 0px 25px 1px rgba(133,133,133,1); top:175px; left:0px; z-index:9999; padding: 3px 7px 3px 7px; border-radius: 10px;font-size:small; color:#2874f0; background:rgb(255, 225, 27) ;" title="MakkhiChoose is giving away gold this festive season. And you are one of the lucky few!" href="http://www.makkhichoose.com/goldquest" target="_blank">'+'<div><img style=" text-align:center; vertical-align:middle; max-height:18px; max-width:18px;"  src="'+ gold_chest +'">'+ 'Shop And Win Gold '+'</div></a>\

//     //useme button
//    //  <a id="feedback" style="margin-left:40px; padding-left:30px;  background-color:rgb(255, 225, 27);color:#2874f0; " title="We are still feeling festive, and that means you can shop on Amazon and win Rs. 9999" href="http://www.makkhichoose.com/lucky9999" target="_blank">'+ 'Shop And Win  Rs. 9999'+'</a>\
//  //<a id="useme" style="display:none;padding-left:30px;  background-color:#b2ff59;color:black; " title="Click here to make sure you are using the Makkhi and are eligible to win Rs.9999" href="#">'+ 'Use me'+'</a>\  
//  // <a id="gq_ad" class="open_gq_ad" style="position: fixed; box-shadow: 0px 0px 25px 1px rgba(133,133,133,1); top:175px; left:0px; z-index:9999; padding: 3px 7px 3px 7px; border-radius: 10px;font-size:small; color:#2874f0; background:rgb(255, 225, 27) ;" title="We are still feeling festive, and that means you can shop on Amazon and win Rs. 9999" href="http://www.makkhichoose.com/lucky9999" target="_blank">'+'<div><img style=" text-align:center; vertical-align:middle; max-height:18px; max-width:18px;"  src="'+ gold_chest +'">'+ 'Shop And Win  Rs. 9999'+'</div></a>\
// // <div id="'+simprice+'" class="empty" style="line-height:12px; display:block !important"></div>\
//     var wbc_loading_img='';
//     var changing_div='';
//     if(prod_deets.prod_img==undefined||prod_deets.prod_img==''){

//         wbc_loading_img='<img src="' + loading_img + '"> </img>';

//         console.log('wbc image');
//         console.log(wbc_loading_img);
//     }
//     else{
//         // wbc_loading_img="<div style='background-color:white; border:1px; border-style:solid; border-color: rgb(204, 204, 204);'> <span style='color:#FF4B00;'></span> <img src='" + prod_deets.prod_img+"'> </div>";
//            wbc_loading_img =  '<a href="'+'#'+ '">\
//                 <div class="row-top">\
//                 </div>\
//                 <div class="row-btm">\
//                     <img' +' src="' + prod_deets.prod_img + '"/>\
//                     <div class="row-btm-title">' + ''+ '</div>\
//                     <div class="r-box"><span class="price-diffn ask-search"> </span></div>\
//                 </div>\
//               </a>';

//     }
//     var changing_div_selector=Math.random();
//     if(changing_div_selector<=0.4){
//         // display feedback
//         changing_div='<a id="feedback" class="changing_div" style="padding-left:30px; margin-left:40px; cursor: pointer;" title="Feedback" href="https://www.surveymonkey.com/r/makkhigotback" target="_blank">'+ feedback_link_text+'</a>';
//     }
//     // else if(changing_div_selector>0.1 && changing_div_selector <=0.7){
//     // 	// changing_div='<a id="feedback" class="changing_div" style="padding-left:30px; margin-left:40px; cursor: pointer;" title="Feedback" href="https://www.chillarchange.com/" target="_blank">'+' '+'</a>';
//     // 	changing_div='<a id="chillar_change" class="changing_div" style="margin-left:50px; padding-left:25px;  background-color:rgb(255, 225, 27);color:#2874f0; " title="Win Rs. 20,000 Tokens!" href="http://makkhichoose.com/greatindiansale" target="_blank">'+ 'Win Rs. 20,000 Tokens!'+'</a>'
//     // }	
//     else if(changing_div_selector>0.4){
//         //display deals link
//         changing_div='<a id="daily_deals" class="changing_div" style="margin-left:50px; padding-left:25px;  background-color:rgb(255, 225, 27);color:#2874f0; " title="The Best Deals, Daily" href="http://www.makkhichoose.com/dailydeals" target="_blank">'+ 'The Best Deals, Daily'+'</a>'
//     }



//     var box = '<div class="askemmy" style="visibility: hidden;">\
//                     <span class="closebox"></span>\
//                     <p id="msg">Set your email address to receive updates</p>\
//                     <div class="iemmybox">\
//                         <input type="text" name="emmy" id="emmy" />\
//                         <input type="submit" id="shave" value="Save" />\
//                     </div>\
//                 </div>\
//                 <div class="pop-up-report" id="report-poppup" style="visibility: hidden;">\
//                     <div id="reason-select-box">\
//                         <div><span>Please tell us what was wrong</span></div>\
//                         <select name="Reasons">\
//                                         <option value="Results are not relevant to the search">Results are not relevant to the search</option>\
//                                         <option value="Images do not match with product">Images do not match with product</option>\
//                                         <option value="Results are from wrong category">Results are from wrong category</option>\
//                                         <option value="I cannot find what I\'m looking for">I cannot find what I\'m looking for</option>\
//                                         <option value="Others">Others</option>\
//                           </select>\
//                      </div>\
//                      <div id="comment-box">\
//                         <div><span>Additional Comments</span></div>\
//                         <textarea name="comments" id="" cols="30" rows="10"></textarea>\
//                         <div>\
//                             <input id="submit_button" type="button" value="submit">\
//                             <input id="cancel_button" type="button" value="cancel">\
//                         </div>\
//                         <p> </p>\
//                      </div>\
//                 </div>\
//                 <div class="alert_message_mc" id="msg_box" style="visibility:hidden;">\
//                 <span class="closebox"></span>\
//                  <p id="msg">some message to display</p></div>\
//                 <div class="openwbox" id="welcomebox" type="none"><div id="wbimg" ">'+wbc_loading_img +'</div>\
//                     <div id="hbdiv"style="visibility:visible">\
//                     <a id="hide_button" title="Hide" style="display:inline-block !important ;cursor: pointer;"> Hide</a>\
//                     </div>\
//                 </div>\
//                 <div id="makkhi_min_box" title="Drag To Move Position" style="position:fixed;height:70px;width:70px; cursor: pointer;top:230px; left:-35px; right:-50px;z-index: 9999; display:none;"> <img  src="'+ makkhi_min_green_bg+'"> </img></div>\
//                 <div id="'+whisperbox+'">\
//                     <!-- <span class="'+whisperboxtab+'" perm-prompt="" style="display: inline-block !important;height:64px;width:64px;">Feedback</span> -->\
//                     <div id="'+whisperboxcontent+'" style="display:inline !important; text-align:center;">\
//                         <div id="'+pralurrt+'" style="display:visible !important">\
//                              <a id="'+emspan+'" class="yes" style="display:inline-block !important;cursor: pointer;">Track Price</a>\
//                              <a id="mcsettings" title="Settings" style="display:inline-block !important;cursor: pointer;">Settings</a>\
//                              <a id="mcreport" title="Report" style="display:inline-block !important;cursor: pointer;"> Report</a>\
//                              <span id="help_button" style="cursor:pointer;" title="Walkthrough of how to use" ">'+'?'+'</span>\
//                              \
//                         </div>\
//                          <div class="button_row"">'+ changing_div +'</div>\
//                          <div id="top_tag" class="empty" style="line-height:12px; display:block !important" title="Shop on Amazon on 20th, 21st , or 22nd and win a gold coin!">\
//                         </div>\
//                         <div id="'+allprice+'" class="empty" style="line-height:12px; display:block !important"></div>\
//                         <div id="'+oos+'" class="empty" style="line-height:12px; display:block !important"></div>\
//                         <div id="'+nofound+'" class="empty" style="line-height:12px; display:block !important"></div>\
//                         <div id="'+deals_header+'" class="empty" style="line-height:12px; display:block !important"><div style="padding-top:10px;padding-bottom:10px;color:#006700;background:white;text-align: center;vertical-align: middle;"><b>DEALS</b></div></div>\
//                         <div id="'+deal+'" class="empty" style="line-height:12px; display:block !important">\
//                         <div id="scroll_for_deals_msg"><span style="font-size:large;">scroll down for more deals<span></div>\
//                     </div>\
//                     </div>';
        
                   
//     // console.log(box);
// //<img src="'+settings_img+'" style="display:inline !important"></img>

// 	if(tag_type=="flights"){

// 		wbc_loading_img='<img src="' + spin_img_loader + '"> </img>';
// 	  // box = '<div class="askemmy" style="visibility: hidden;">\
//    //                  <span class="closebox"></span>\
//    //                  <p id="msg">Set your email address to receive updates</p>\
//    //                  <div class="iemmybox">\
//    //                      <input type="text" name="emmy" id="emmy" />\
//    //                      <input type="submit" id="shave" value="Save" />\
//    //                  </div>\
//    //              </div>\
//    //              <div class="pop-up-report" id="report-poppup" style="visibility: hidden;">\
//    //                  <div id="reason-select-box">\
//    //                      <div><span>Please tell us what was wrong</span></div>\
//    //                      <select name="Reasons">\
//    //                                      <option value="Results are not relevant to the search">Results are not relevant to the search</option>\
//    //                                      <option value="Images do not match with product">Images do not match with product</option>\
//    //                                      <option value="Results are from wrong category">Results are from wrong category</option>\
//    //                                      <option value="I cannot find what I\'m looking for">I cannot find what I\'m looking for</option>\
//    //                                      <option value="Others">Others</option>\
//    //                        </select>\
//    //                   </div>\
//    //                   <div id="comment-box">\
//    //                      <div><span>Additional Comments</span></div>\
//    //                      <textarea name="comments" id="" cols="30" rows="10"></textarea>\
//    //                      <div>\
//    //                          <input id="submit_button" type="button" value="submit">\
//    //                          <input id="cancel_button" type="button" value="cancel">\
//    //                      </div>\
//    //                      <p> </p>\
//    //                   </div>\
//    //              </div>\
//    //              <div class="alert_message_mc" id="msg_box" style="visibility:hidden;">\
//    //              <span class="closebox"></span>\
//    //               <p id="msg">some message to display</p></div>\
//    //              <div class="openwbox" id="welcomebox" type="none"><div id="wbimg">'+wbc_loading_img +'</div>\
//    //                  <div id="hbdiv"style="visibility:visible">\
//    //                  <a id="hide_button" title="Hide" style="display:inline-block !important ;cursor: pointer;"> Hide</a>\
//    //                  </div>\
//    //              </div>\
//    //              <div id="makkhi_min_box" title="Drag To Move Position" style="position:fixed;height:70px;width:70px; cursor: pointer;top:230px; left:-35px; right:-50px;z-index: 9999; display:none;"> <img  src="'+ makkhi_min_green_bg+'"> </img></div>\
//    //              <div id="'+whisperbox+'">\
//    //                  <!-- <span class="'+whisperboxtab+'" perm-prompt="" style="display: inline-block !important;height:64px;width:64px;">Feedback</span> -->\
//    //                  <div id="'+whisperboxcontent+'" style="display:inline !important; text-align:center;">\
//    //                      <div id="'+pralurrt+'" style="display:visible !important">\
//    //                           <a id="'+emspan+'" class="yes" style="display:inline-block !important;cursor: pointer;">Track Price</a>\
//    //                           <a id="mcsettings" title="Settings" style="display:inline-block !important;cursor: pointer;">Settings</a>\
//    //                           <a id="mcreport" title="Report" style="display:inline-block !important;cursor: pointer;"> Report</a>\
//    //                           <span id="help_button" style="cursor:pointer;" title="Walkthrough of how to use" ">'+'?'+'</span>\
//    //                           \
//    //                      </div>\
//    //                       <div class="button_row"">'+ changing_div +'</div>\
//    //                      <div style="background-color: #252525;  width: 300px; height: 48px; display:flex; justify-content: space-between;">\
//    //                          <span style=" margin-left:10px; margin-top: 5px; font-family: Montserrat; color:  #ffffff;font-size: 16px; font-weight: 400; line-height: 20px;" id="to_and_fro_deets">\
//    //                              BLR ⇄ SFO\
//    //                          </span>\
//    //                          <span id="mc_flights_filter">\
//    //                              <a href="#"> <img style="width: 20px; height: 20px; margin-right:10px; margin-top: 5px;" src="filter.png" alt=""> </a>\
//    //                          </span>\
//    //                      </div>\
//    //                      <div id="cheapest_flights_available" style="background-color:#cccccc; max-width:300px; padding-bottom:5px; ">\
//    //                          <span id="Cheapest_text" style="font-family: Montserrat; color:#777777; font-size: 14px; font-weight: 400; line-height: 20px; margin-left: 5px;">\
//    //                              Cheapest Available Flight\
//    //                          </span>\
//    //                      </div>\
//    //                      <ul class="mc_tab" id="mc_tab_links">\
//    //                        <li title="Make My Trip"><a href="javascript:void(0)" class="mc_tablinks mc_active" id="mmt_link" >MAKEMYTRIP<hr></a></li>\
//    //                        <li title="Clear Trip"><a href="javascript:void(0)" class="mc_tablinks" id="ct_link">CLEARTRIP<hr> </a></li>\
//    //                        <li title="Ease My Trip"><a href="javascript:void(0)" class="mc_tablinks" id="emt_link" >EASEMYTRIP<hr> </a></li>\
//    //                      <div style="max-width: 300px; background-color:#cccccc;">\
//    //                          <div id="mc_mmt_flights" class="mc_tabcontent">\
//    //                          </div>\
//    //                          <div id="mc_ct_flights" class="mc_tabcontent">\
//    //                          </div>\
//    //                          <div id="mc_emt_flights" class="mc_tabcontent">\
//    //                          </div>\
//    //                      </div>\
//    //                      <div id="'+deals_header+'" class="empty" style="line-height:12px; display:block !important"><div style="padding-top:10px;padding-bottom:10px;color:#006700;background:white;text-align: center;vertical-align: middle;"><b>DEALS</b></div></div>\
//    //                      <div id="'+deal+'" class="empty" style="line-height:12px; display:block !important">\
//    //                      <div id="scroll_for_deals_msg"><span style="font-size:large;">scroll down for more deals<span></div>\
//    //                  </div>\
//    //                  </div>';


//     box = '<div class="askemmy" style="visibility: hidden;">\
//                     <span class="closebox"></span>\
//                     <p id="msg">Set your email address to receive updates</p>\
//                     <div class="iemmybox">\
//                         <input type="text" name="emmy" id="emmy" />\
//                         <input type="submit" id="shave" value="Save" />\
//                     </div>\
//                 </div>\
//                 <div class="pop-up-report" id="report-poppup" style="visibility: hidden;">\
//                     <div id="reason-select-box">\
//                         <div><span>Please tell us what was wrong</span></div>\
//                         <select name="Reasons">\
//                                         <option value="Results are not relevant to the search">Results are not relevant to the search</option>\
//                                         <option value="Images do not match with product">Images do not match with product</option>\
//                                         <option value="Results are from wrong category">Results are from wrong category</option>\
//                                         <option value="I cannot find what I\'m looking for">I cannot find what I\'m looking for</option>\
//                                         <option value="Others">Others</option>\
//                           </select>\
//                      </div>\
//                      <div id="comment-box">\
//                         <div><span>Additional Comments</span></div>\
//                         <textarea name="comments" id="" cols="30" rows="10"></textarea>\
//                         <div>\
//                             <input id="submit_button" type="button" value="submit">\
//                             <input id="cancel_button" type="button" value="cancel">\
//                         </div>\
//                         <p> </p>\
//                      </div>\
//                 </div>\
//                 <div class="alert_message_mc" id="msg_box" style="visibility:hidden;">\
//                 <span class="closebox"></span>\
//                  <p id="msg">some message to display</p></div>\
//                 <div class="openwbox" id="welcomebox" type="none"><div id="wbimg">'+wbc_loading_img +'</div>\
//                     <div id="hbdiv"style="visibility:visible">\
//                     <a id="hide_button" title="Hide" style="display:inline-block !important ;cursor: pointer; font-size:medium;"> Hide</a>\
//                     </div>\
//                 </div>\
//                 <div id="makkhi_min_box" title="Drag To Move Position" style="position:fixed;height:70px;width:70px; cursor: pointer;top:230px; left:-35px; right:-50px;z-index: 9999; display:none;"> <img  src="'+ makkhi_min_green_bg+'"> </img></div>\
//                 <div id="'+whisperbox+'">\
//                     <!-- <span class="'+whisperboxtab+'" perm-prompt="" style="display: inline-block !important;height:64px;width:64px;">Feedback</span> -->\
//                     <div id="'+whisperboxcontent+'" style="display:inline !important; text-align:center; background-color:#cccccc;">\
//                         <div id="'+pralurrt+'" style="display:visible !important">\
//                              <a id="'+emspan+'" class="yes" style="display:inline-block !important;cursor: pointer;">Track Price</a>\
//                              <a id="mcsettings" title="Settings" style="display:inline-block !important;cursor: pointer;">Settings</a>\
//                              <a id="mcreport" title="Report" style="display:inline-block !important;cursor: pointer;"> Report</a>\
//                              <span id="help_button" style="cursor:pointer;" title="Walkthrough of how to use" ">'+'?'+'</span>\
//                              \
//                         </div>\
// 						<div class="button_row"">'+ changing_div +'</div>\
// 						<div style="background-color: #252525; margin-top:2px; margin-left:5px;  width: 305px; height: 48px; display:flex; justify-content: space-between;">\
// 						<span style=" margin-left:10px; margin-top: 5px; margin-bottom:3px; font-family: Montserrat; color:  #ffffff;font-size: 16px; font-weight: 400; line-height: 20px;" id="to_and_fro_deets">\
// 							BLR ⇄ SFO\
// 						</span>\
// 						</div>\
// 						<div id="'+allprice+'" class="empty" style="line-height:12px; display:block !important"> <br /> <br /> <br /> <br />  <br /> <br /> <br /> <br /> <img style="max-width:50px; max-height:50px; display:block; margin:auto;"src="'+spin_img_loader+'" alt="" />   </div>\
//                          <div id="mc_flights_load">\
//                            <div id="mc_mf_load" class="mc_loading"><br>Musafir</div>\
//                            <div id="mc_gb_load" class="mc_loading"><br>Goibibo</div>\
//                            <div id="mc_ct_load" class="mc_loading"><br>ClearTrip</div>\
//                            <div id="mc_mmt_load" class="mc_loading"><br>MakeMyTrip</div>\
//                            <div id="mc_emt_load" class="mc_loading"><br>EaseMyTrip</div>\
//                          </div>\
//                     </div>\
//                     </div>';
        
        

// 	}



// 	$('body:first').prepend(box);

//     updateWelcomeBox(wbc_loading_img,'eggjak');


//     if(tag_type=="flights"){
//     	// $('body').on('click','#mmt_link',function (e){
//     	// 	mc_display_flights_tab(e,'mc_mmt_flights');
//     	// });

//     	// $('body').on('click','#ct_link',function(e){
//     	// 	mc_display_flights_tab(e,'mc_ct_flights');
//     	// });

//     	// $('body').on('click','#emt_link',function(e){
//     	// 	mc_display_flights_tab(e,'mc_emt_flights');
//     	// });

//     }

// var deals_next_cursor='';
// var show_loading=true;
// var ga_scroll_sent_flag=false;
// var ga_scroll_till_end_sent_flag=false;
// var deals_req_in_process=false;


// if(! disp_settings.showDeals){
//     $('#'+deals_header).remove();
//     $('#scroll_for_deals_msg').remove();
// }


// //tracking deal clicks
// $('#'+deal).on('click','>div',function(e){

//     var row_number=$(e.currentTarget).index()+1;

//     chrome.runtime.sendMessage({'method':'user_clicked_deals','row_number':row_number});


// });

// $('#feedback').on('click',function(e){

//     chrome.runtime.sendMessage({'method':'feedback_click'});

// });

// $('#useme').on('click',function(e){
//     var url=window.location.href;
//     if(prod_deets.prod_site=='az'){
//         var new_url=updateURLParameter(url,'tag','makkhigold-21');
//         // $.toast({text:new_url,hideAfter:false});
//         // $(location).attr('href',new_url);
//         window.location.href = new_url;
//         // window.location.assign(new_url);
 
//         }
//      chrome.runtime.sendMessage({'method':'useme_click'});   
    
// });

// $("body").on("click","#daily_deals",function(){
// 	chrome.runtime.sendMessage({'method':'daily_deals',site:prod_deets.prod_site,uid:id_deets.user_id})
// });

// $("body").on("click","#chillar_change",function(){
// 	chrome.runtime.sendMessage({'method':'chillarchange_click',site:prod_deets.prod_site,uid:id_deets.user_id})
// });


// $('#makkhi_min_box').on('click',function(){
//     // ctabby_click='button_click';
//     unhidewhisperbox()});
// $('#makkhi_min_box').hover(function(){
// //hover in
// $('#makkhi_min_box img').attr('src',makkhi_min_green_bg);
// },function(){
//     //hover out
// $('#makkhi_min_box img').attr('src',makkhi_min);
// });

// $('#hide_button').on('click',function(){
//     //send Tracking
//     chrome.runtime.sendMessage({'method':'hide_button_clicked','site':prod_deets.prod_site});
//     // console.log('calling hidewbox');
//     hidewbox();
// });

// $('#help_button').click(function(){

//     console.log('help button clicked');
//     chrome.runtime.sendMessage({'method':'help_button_click',site:prod_deets.prod_site,uid:id_deets.user_id});
// });




// jQuery(function($) {

//     $('#'+whisperbox).on('scroll', function() {

//         if(!ga_scroll_sent_flag){
//             //send to ga
//             ga_scroll_sent_flag=true;
//             chrome.runtime.sendMessage({ method:'user_scrolled'});

//         }
//        // //to check whether we reached end
//        //  if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {

//        //      if(!ga_scroll_till_end_sent_flag){
//        //          //send to ga scroll end
//        //          ga_scroll_till_end_sent_flag=true;
//        //          chrome.runtime.sendMessage({ method:'user_scrolled_till_end'});

//        //      }

//        //  }
 

//         //to check whether we reached end
//         if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
//             //do something end reached.
//           if(!ga_scroll_till_end_sent_flag){
//                 //send to ga scroll end
//                 ga_scroll_till_end_sent_flag=true;
//                 chrome.runtime.sendMessage({ method:'user_scrolled_till_end'});

//             }

//             if(disp_settings.showDeals){

//             if($('#'+deal+'  #scroll_for_deals_msg').length!=0){
//                 $('#'+deal+'  #scroll_for_deals_msg').remove();
//             }


//             // console.log("End reached");
//             // console.log(deals_next_cursor);
//             // console.log("show_loading= "+ show_loading);

//             var uid='';

//             if((prod_deets.product_id==undefined)||(prod_deets.product_id=='')||(prod_deets.prod_site=='')||(prod_deets.prod_site==undefined)){
//                 uid='';
                                
//             }
//             else{

//                 uid=prod_deets.product_id+prod_deets.prod_site;
//             }


//             var req='https://data1.makkhichoose.com/getsimilardeals?uid='+uid;
            
//             if(deals_next_cursor!="stop"){
                
//                 if(deals_next_cursor!=''){
                    
//                     req=req+'&cursor='+ deals_next_cursor;
//                 }

//                  if(show_loading){
//                         $('#'+deal).append('<div id="loading_deals_msg"><img style="display:block; margin:auto;"src='+loading_img+'></div>');
//                         setTimeout(function(){
//                             $('#'+deal+'  #loading_deals_msg').remove();
//                         },2000);
//                         show_loading=false;
//                     }

           
//             if(deals_req_in_process==true){
//                 return;
//             }

//             var req_send = backPostGet({
//                     type: "GET",
//                     //url:https://data1.makkhichoose.com/getsimilardeals
//                     url:req,
//                     timeout: 3500,
//                 });
//             deals_req_in_process=true;
//             req_send.done(function(response){
//             // console.log(response.next_cursor);
//             // console.log(response.more);
//             // console.log(response);
//             // console.log(response.results);

//             if(response.hasOwnProperty('status')){

//                 if(response.status=='Failure'){
//                      $('#'+deals_header).remove();
//                     return;
//                 }
//             }

//             if(response.results.length==0){

//                    $('#'+deals_header).remove();
//                     return;
//             }

//             insertDeals(response.results);
//             show_loading=true;
//             if(response.more){
//                 deals_next_cursor=response.next_cursor;
                
//             }
//             else{
//               deals_next_cursor="stop";  
//             }
//         deals_req_in_process=false;
//         });

//         req_send.fail(function(){
//             //console.log("fail");
//             $('#'+deal+'  #loading_deals_msg').remove();
//             show_loading=true;

//             deals_req_in_process=false;
//         });

// }//deal_next_cursor if

//     }//show_deals check    
//         }//end check if
//     })
// });



// $('#cashback').click(function() {
//         // open the options page in a new tab
//         chrome.runtime.sendMessage({method: "showCashBackPage"});
//     });

//     var report_data_sent=false;
//     var ga_data_sent_report=false;
//     $('#mcreport').click(function(){
//           //make report box visible 
//           if(!ga_data_sent_report){
//             chrome.runtime.sendMessage({method:'report_button_click'});
//             ga_data_sent_report=true;
//           } 

//         if($('#report-poppup').css('visibility')=='hidden'){
//            $('#report-poppup').css('visibility', 'visible'); 
//         }

//         //make report box invisible when the cancel button gets a click
//         $('#report-poppup #cancel_button').click(function(){
//             $('#report-poppup').css('visibility', 'hidden'); 
//             $('#report-poppup #comment-box textarea').val("");
//             $('#report-poppup p').text(" ");

//         });

//         //get data and send it to server
//         $('#report-poppup #submit_button').click(function(event){
//             $('#report-poppup #submit_button').attr("disabled", true);
//             var reason=$('#report-poppup #reason-select-box select').val();
//             var comment=$('#report-poppup #comment-box textarea').val();
//             var link=window.location.href;
//             //ensure comment box is not empty
//             if((comment!="")&&($.trim(comment)!="")){
//                     var feedback_obj={
//                         'link':link,
//                         'comment':comment,
//                         'reason':reason,
//                         'user_id':id_deets.user_id,
//                         'gcm_id':id_deets.gcm_id,
//                         'ver':chrome.runtime.getManifest().version.toString(),
//                         'ext_id':chrome.runtime.id
//                     };
//                 if(!report_data_sent){
//                     report_data_sent=true;
//                 var req_send = backPostGet({
//                     type: "POST",
//                     url: "https://shades.makkhichoose.com/analytics/logextensionfeedback",
//                     data: JSON.stringify(feedback_obj),
//                     contentType: "application/json; charset=utf-8",
//                     dataType: "json",
//                     timeout: 3500,
//                 });
            

//                 req_send.done(function(response){
                     
//                      $('#report-poppup p').css('color','green');
//                      $('#report-poppup #submit_button').attr("disabled", true);
//                      $('#report-poppup p').text("Thank you for your feedback");
//                     setTimeout(function(){
//                         $('#report-poppup').css('visibility', 'hidden'); 
//                         $('#report-poppup #comment-box textarea').val("");
//                         $('#report-poppup p').text("");
//                         $('#report-poppup #submit_button').attr("disabled", false);
//                         //$('#report-poppup #submit_button').removeAttr("disabled");
//                         report_data_sent=false;
//                     },1500);  


//                 });


//                 req_send.fail(function(response){
//                     $('#report-poppup p').css('color','#FF5600');
//                     $('#report-poppup p').text("Something went wrong, please try again");
//                     $('#report-poppup #submit_button').attr("disabled", false);
//                 });
//             }



                                 
//             }
//             else{
//                  //$('#report-poppup').append('<p class="success-msg" style="color: #FF5600;">Please give us some description</p>');
//                  //$('#report-poppup #submit_button').removeAttr("disabled");
//                  $('#report-poppup #submit_button').attr("disabled", false);
//                  $('#report-poppup p').css('color','#FF5600');
//                  $('#report-poppup p').text("Please give us some description");

//             }
//         });


//     });
//     var ga_sent_settings_click=false;
//     //options page
//     $('#mcsettings').click(function() {
//         // open the options page in a new tab
//         if(!ga_sent_settings_click){
//             chrome.runtime.sendMessage({method:'settings_button_click'});
//             ga_sent_settings_click=true;
//         }
//         chrome.runtime.sendMessage({method: "showOptionsPage"});
//     });

//     $('.alert_message_mc .closebox').click( function() {
//         $('.alert_message_mc').css('visibility', 'hidden');
//         $('.alert_message_mc p#msg').text('');
//     });

// /*    if (!couponate) {
//         // Don't show sweet ad on coupon site
//         var sweetBox = '<div id="'+footer+'" style="line-height: 12px; display: block !important"><a href="#" target="_blank">\
//                             <span class="crazyMsg"></span></a></div>';
//         $('#'+whisperboxcontent).append(sweetBox);
//         var sweetMsgList = [
//             {tagLine: 'The best Android phone for ma pa and didi?', link: 'http://www.amazon.in/Micromax-Canvas-Android-Magnetic-Black/dp/B00NEFFWF6/ref=sr_1_1?s=electronics&ie=UTF8&qid=1418302702&sr=1-1&tag=makkhichoos0c-21'},
//             {tagLine: 'The best Android phone for mom pop and sis?', link: 'http://www.amazon.in/Micromax-Canvas-Android-Magnetic-Black/dp/B00NEFFWF6/ref=sr_1_1?s=electronics&ie=UTF8&qid=1418302702&sr=1-1&tag=makkhichoos0c-21'},
//             {tagLine: 'Because the Devdas look is so 2000AndLame', link: 'http://www.amazon.in/Philips-QT4005-15-Stubble-Trimmer/dp/B00CE3FT66/ref=sr_1_1?s=hpc&ie=UTF8&qid=1418302997&sr=1-1&tag=makkhichoos0c-21'},
//             {tagLine: 'At this price, might as well wear these', link: 'http://www.amazon.in/Huggies-Diapers-Large-Size-Count/dp/B00AXWKY6A/ref=sr_1_2?s=baby&ie=UTF8&qid=1418303138&sr=1-2&tag=makkhichoos0c-21'},
//             {tagLine: 'You must always have a plan B(ackup)', link: 'http://www.amazon.in/WD-Passport-Ultra-Portable-External/dp/B00EYCBFDQ/ref=cm_cr_pr_product_top?tag=makkhichoos0c-21'},
//             {tagLine: 'Build big bulky biceps, buddy', link: 'http://www.amazon.in/RiteBite-Protein-Choco-Fudge-Pack/dp/B00DRE7KOK/ref=sr_1_1?s=hpc&ie=UTF8&qid=1418304147&sr=1-1&tag=makkhichoos0c-21'},
//             {tagLine: 'You will spend 49,275 minutes shaving', link: 'http://www.amazon.in/Philips-AquaTouch-AT890-16-Shaver/dp/B009H0B8FU/ref=zg_bs_hpc_5?tag=makkhichoos0c-21'},
//             {tagLine: 'A crisp shirt makes a girl smile', link: 'http://www.amazon.in/Morphy-Richards-Inspira-1000-Watt-White/dp/B008P7J31M/ref=pd_cp_k_0?tag=makkhichoos0c-21'},
//             {tagLine: 'You like big books and cannot lie', link: 'http://www.amazon.in/All-New-Kindle-Glare-Free-Touchscreen-Display/dp/B00KDRQ2RU/ref=zg_bs_electronics_19?tag=makkhichoos0c-21'},
//             {tagLine: 'Shi**y wireless causes breakups', link: 'http://www.amazon.in/D-Link-DSL-2750U-Wireless-4-Port-Router/dp/B007O7J026/ref=zg_bs_electronics_38?tag=makkhichoos0c-21'},
//             {tagLine: 'You too can pretend to be an expert', link: 'http://www.amazon.in/Canon-Digital-Camera-18-55mm-55-250mm/dp/B00JB0IZHU/ref=sr_1_1?s=electronics&ie=UTF8&qid=1418304811&sr=1-1&tag=makkhichoos0c-21'},
//             {tagLine: 'Drrrrumms in your ear drums', link: 'http://www.amazon.in/Sennheiser-CX-180-Street-II/dp/B00D75AB6I/ref=zg_bs_electronics_63?tag=makkhichoos0c-21'},
//             {tagLine: 'You want to see and hear these', link: 'http://www.amazon.in/Harman-Kardon-Soundsticks-III-Multimedia/dp/B0042F3K9W/ref=sr_1_1?ie=UTF8&qid=1418305213&sr=8-1&tag=makkhichoos0c-21'},
//             {tagLine: 'You can\'t handle the cool', link: 'http://www.amazon.in/Harman-Kardon-Soundsticks-III-Multimedia/dp/B0042F3K9W/ref=sr_1_1?ie=UTF8&qid=1418305213&sr=8-1&tag=makkhichoos0c-21'},
//             {tagLine: 'You need this if you like onion parathas', link: 'http://www.amazon.in/Yardley-Elegance-Body-Spray-150ml/dp/B00G4UB9E6/ref=sr_1_2?s=hpc&ie=UTF8&qid=1418305474&sr=1-2&tag=makkhichoos0c-21'},
//             {tagLine: 'Where did we come from where do we go?', link: 'http://www.amazon.in/India-After-Gandhi-History-Democracy/dp/0330505548/ref=zg_bs_books_6?tag=makkhichoos0c-21'},
//         ];

//         var sweetMsg = sweetMsgList[Math.floor(Math.random() * 16)];

//         $('#'+footer+' a').attr('href', sweetMsg.link);
//         $('#'+footer+' span.crazyMsg').text(sweetMsg.tagLine); // = sweetMsg.tagLine;
//     }*/

//     var footerOptions = [
//         {
//             'icon': 'books1.png',
//             'link': 'http://steals.makkhichoose.com/deliciousdeals?categ=bo',
//             'text': 'Newly discounted books',
//             'disc': 'We go through 12 million products every hour and track the best deals. Get them before they are gone!'
//         },
//         {
//             'icon': 'mobiles1.png',
//             'link': 'http://steals.makkhichoose.com/deliciousdeals?categ=mobiles',
//             'text': 'Just discounted mobiles',
//             'disc': 'We go through 12 million products every hour and track the best deals. Get them before they are gone!'
//         },
//         {
//             'icon': 'tablets1.png',
//             'link': 'http://steals.makkhichoose.com/deliciousdeals?categ=tablets',
//             'text': 'Recently discounted tablets',
//             'disc': 'We go through 12 million products every hour and track the best deals. Get them before they are gone!'
//         },
//         {
//             'icon': 'wc.png',
//             'link': 'http://steals.makkhichoose.com/deliciousdeals?categ=wc',
//             'text': 'Freshly discounted women\'s clothing',
//             'disc': 'We go through 12 million products every hour and track the best deals. Get them before they are gone!'
//         },
//         {
//             'icon': 'mc.png',
//             'link': 'http://steals.makkhichoose.com/deliciousdeals?categ=mc',
//             'text': 'Freshly discounted men\'s clothing',
//             'disc': 'We go through 12 million products every hour and track the best deals. Get them before they are gone!'
//         },
//         {
//             'icon': 'mf.png',
//             'link': 'http://steals.makkhichoose.com/deliciousdeals?categ=mf',
//             'text': 'Recently discounted men\'s shoes',
//             'disc': 'We go through 12 million products every hour and track the best deals. Get them before they are gone!'
//         },
//         {
//             'icon': 'wf.png',
//             'link': 'http://steals.makkhichoose.com/deliciousdeals?categ=wf',
//             'text': 'Recently discounted women\'s shoes',
//             'disc': 'We go through 12 million products every hour and track the best deals. Get them before they are gone!'
//         },
//         {
//             'icon': 'gifticon.png',
//             'link': 'http://steals.makkhichoose.com/deliciousdeals',
//             'text': 'The freshest deals.',
//             'disc': 'We go through 12 million products every hour and track the best deals. Get them before they are gone!'
//         },
//         {
//             'icon': 'pzl1.png',
//             'link': 'http://puzzles.makkhichoose.com/reveal',
//             'text': 'Like puzzles? Here\'s one',
//             'disc': 'Come work with us!  We are looking for smart, dedicated individuals for full-time positions and summer internships. Get in touch!'
//         },
//         {
//             'icon': 'pzl2.png',
//             'link': 'http://www.kernelinsights.com/SolveForMakkhi',
//             'text': 'Where does this lead?',
//             'disc': 'Come work with us!  We are looking for smart, dedicated individuals for full-time positions and summer internships. Get in touch!'
//         },
//         {
//             'icon': 'train.png',
//             'link': 'http://www.makkhichoose.com/gettatkalnow',
//             'text': 'Book tatkal tickets instantly',
//             'disc': 'We know Tatkal ticket booking is a pain. That\'s why we made this nifty plugin. Tens of thousands of people love it, so will you!'
//         },
//         {
//             'icon': 'makkhidroid.png',
//             'link': 'https://play.google.com/store/apps/details?id=kernelinsights.makkhichoose',
//             'text': 'What, comparing in-app! How?',
//             'disc': 'It is just magic. No more opening apps, see prices right away.'
//         },
//     ];

//     var iniRand = Math.floor(Math.random() * 8);
//     var randomFooter = null;


//     if (iniRand > 3) {
//         randomFooter = footerOptions[ Math.floor( Math.random() * (footerOptions.length - 4) ) ];
//     } else {
//         randomFooter = footerOptions[footerOptions.length - iniRand-1];
//     }

//     //randomFooter = footerOptions[footerOptions.length - 1];

//     var gifticon = chrome.extension.getURL(randomFooter['icon']);
//     var randomLink = randomFooter['link'];
//     var randomText = randomFooter['text'];
//     var randomDisc = randomFooter['disc'];

//     // var gifticon = chrome.extension.getURL('gifticon.png');

//     // var base_gifticon = 'url('+gifticon+')';
//     // var sweetBox = '<div id="'+footer+'" style="line-height: 12px; display: block !important"><a href="#"\
//     //  title="' + randomDisc + '"\
//     //   target="_blank" style="display:inline !important;">\
//     //                         <span class="crazyMsg"></span><span class="bgimg"></span></a></div>';
//     // $('#'+whisperboxcontent).append(sweetBox);
//     // // $('#' + footer + ' a').attr('href', 'http://steals.makkhichoose.com/');
//     // $('#' + footer + ' a').attr('href', randomLink);

//     // $('#' + footer + ' a').click(function() {
//     //     stealsHit();
//     // });
//     // //$('#' + footer + ' span.crazyMsg').html('The Freshest Steal Deals');
//     // $('#' + footer + ' span.crazyMsg').html(randomText);

//     var ga_wcbox_hover_first=true;

//     $('#welcomebox #wbimg').hover(function(e) {
//         var thisContext = $(this);
//         var timer = window.setTimeout(function() {
//             // if ($('#'+whisperbox).hasClass('open')) {
//             //     $('#'+whisperboxcontent).css('visibility','hidden');
//             //     $('#'+whisperbox)
//             //     .animate({left:'-' + $('#'+whisperbox).outerWidth()}, 300)
//             //     .removeClass('open');

//             //     // hide the welcome box since the user is already welcomed
//             //     $('#welcomebox').animate(
//             //         {'visibility': 'hidden'},
//             //         {'duration': 400, 'easing': 'swing'}
//             //     );

//             // } else {
//                 hide_gq_ad();
//                 $('#'+whisperboxcontent).css('visibility','visible');
//                 $('#'+whisperbox)
//                 .animate({left:'0'},  300)
//                 .addClass('open');
//                 ga_whisperbox_hover_times.push((new Date().getTime()+300)+'_en');
//                 //console.log(ga_whisperbox_hover_times);

//              if(wcboxclose_timer!=null){
//                     // console.log('cleared welcomebox timer');
//                    window.clearTimeout(wcboxclose_timer);
                   
//                    }
//             // }
//         }, 300);
//         thisContext.data('timer', timer);
//            // e.preventDefault();
//     }, function() {
//         var timer = $(this).data('timer');
//         if (timer != null) {
//             window.clearTimeout(timer);

//         }
//         // $('#welcomebox').hide();


//     });


//     $('#'+whisperboxcontent).hover(function(){
//         //entry time
//         // mouse_on_whsper_box=true;
//         if(!ga_wcbox_hover_first){
//             ga_whisperbox_hover_times.push((new Date().getTime())+'_en');
//             //console.log(ga_whisperbox_hover_times);
//         }
//         else if(ga_wcbox_hover_first==true){
//             trackmakkhiboxview(prod_deets.prod_site);

//             if(site_type=='flights'){
// 				trackmakkhiboxview_flights(prod_deets.prod_site);         
//             }
//         }
        
//     },function(){
//         // closeTabby();
//         // mouse_on_whsper_box=false;
//         ga_whisperbox_hover_times.push((new Date().getTime())+'_ex');
//         ga_wcbox_hover_first=false;
//         // wcboxclose_timer=setTimeout(hidewbox,5*1000);
//         //console.log(ga_whisperbox_hover_times);
//     });

//     $('#'+whisperbox).hover(function(){
//         //hover in
//         mouse_on_whsper_box=true;
//        if(whisperbox_close_timer!=null){
//            window.clearTimeout(whisperbox_close_timer);
//            console.log('hovered in stopped close whisper box');
           
//         }
//         if(wcboxclose_timer!=null){
//             console.log('cleared welcomebox timer');
//                window.clearTimeout(wcboxclose_timer);
//         }

 

//     },function(){
//         //hover out
//         mouse_on_whsper_box=false;
//         if(!walk_through){
//             console.log('whisper box hover ou detected')
//         whisperbox_close_timer=setTimeout(function(){
//             console.log('hovered out initiated close whisper box');
//             if(!mouse_on_graph){
//                 hidewhisperbox('from whisper boc hover out');    
//             }
            
//         },5000);
//     }
//         // console.log('hover out timer');
//         // console.log(whisperbox_close_timer);
//         // wcboxclose_timer=setTimeout(hidewbox,5*1000);
//     });
    


//     // some CSS properties are not being applied if done here,
//     // add a timeout function and add rules from there
//     // var style = '<style>\
//     //                 #' + whisperbox + ' {\
//     //                     overflow-y: scroll;\
//     //             </style>';

//     // setTimeout(function() {
//     //     $('head').append(style);
//     //     console.log('applied overflows');
//     // }, 3000);

// 	// insert <css> 
// 	var resultRowCss = '<style>#'+allprice+' p a, #'+simprice+' p a, #'+nofound+' p a, #'+deal+' p a, #'+oos+' p a, #'+top_tag+' p a{\
// 		padding: 0;\
// 		margin: 0;\
// 		color: #484848;\
// 		border-radius: 2px;\
// 		font-family: Lato;\
// 		font-size: 1.2em;\
// 		text-decoration: none;\
// 		font-weight: 300;\
// 		display: block !important;\
// 		width: 100%;\
// 		padding: 16px;\
// 		margin-bottom: 3px;\
// 		position: relative\
// 	}\
//     #'+allprice+' a:hover, #'+simprice+' a:hover, #'+nofound+' a:hover, #'+deal+' a:hover, #'+nofound+' a:hover #'+top_tag+' a:hover {\
//         background-color: rgba(146, 146, 146, 0.1);\
//     }\
//     #'+nofound+' a {\
//         background-color: rgba(146, 146, 146, 0.11);\
//     }\
//     #'+oos+' a {\
//         background-color: rgba(146, 146, 146, 0.11);\
//     }\
//     \
// 	/*span.'+portalname+' {\
// 		padding-right: 15px;\
// 		margin-left: 10px;\
// 		text-align: left;\
// 		width: 70%;\
// 		top: 9px;\
// 		position: absolute;\
// 	}\
// 	\
// 	span.'+portalmsg+', span.'+rupees+' {\
// 		font-weight: 700;\
// 		display: inline-block !important;\
// 		position: absolute;\
// 		padding: 10px;\
// 		right: 0;\
// 		top: 0;\
// 		width: 30%;\
// 		text-align: left;\
// 	}*/\
//     #'+whisperboxcontent+' a:hover {\
//         text-decoration: none;\
//     }\
//     #'+whisperboxcontent+' .' + hoverimg + ' .row-top, #'+whisperboxcontent+' .' + hoverimg + ' .row-btm,\
//     #welcomebox .row-top {\
//         display: block;\
//         width: 100%;\
//         text-decoration: none;\
//         font-weight: 400;\
//     }\
//     #'+whisperboxcontent+' .' + hoverimg + ' a {\
//         display: block !important;\
//     }\
//     #'+whisperboxcontent+' .' + hoverimg + ' .row-top {\
//         padding-top: 5px;\
//         padding-bottom: 10px;\
//         width: 100%;\
//         clear: both;\
//         font-size: 1.15em;\
//         font-weight: 600;\
//         color: #252525;\
//     }\
//     #'+whisperboxcontent+' .' + hoverimg + ' .row-top .' + portalname + ' {\
//         display: inline-block !important;\
//         font-size: 0.9em; !important\
//     }\
//     #'+whisperboxcontent+' .' + hoverimg + ' .row-top .' + portalmsg + ' {\
//         display: inline-block;\
//         position: absolute;\
//         right: 7px;\
//     }\
//     .row-top .rupee-sign {\
//         font-size: 0.8em !important;\
//         color: #666666 !important;\
//     }\
//     #'+whisperboxcontent+' .' + hoverimg + ' .row-btm img {\
//         max-width: 70px;\
//         max-height: 70px;\
//         float: left;\
//     }\
//     #trackedprods, #mcsettings,#feedback,#useme,#daily_deals,#chillar_change{\
//       border-radius: 10px;\
//       font-family: Arial;\
//       color: #fafafa;\
//       font-size: 1em;\
//       background: #3498db;\
//       padding: 3px 7px 3px 7px;\
//       text-decoration: none;\
//       padding-left: 18px;\
//     }\
//     #mcreport {\
//       border-radius: 10px;\
//       font-family: Arial;\
//       color: #fafafa;\
//       font-size: 1em;\
//       background: #ff3333;\
//       padding: 3px 7px 3px 7px;\
//       text-decoration: none;\
//     }\
//         #hide_button {\
//       border-radius: 10px;\
//       font-family: Arial;\
//       color: rgb(250, 250, 250);\
//       font-size: xx-small;\
//       background: rgba(146, 146, 146, 0.9);\
//       padding: 3px 7px 3px 7px;\
//       text-decoration: none;\    }\
//     #welcomebox #hbdiv{\
//         background: url('+ makkhi_droid_img +') no-repeat right 1px bottom 1px;\
//         padding-left:20px;\
//         margin-bottom:5px;\
//     }\
//     #top_tag{\
//         background-image:url('+az_sale_img+');\
//         background-repeat:no-repeat;\
//         background-position: 90% 30%;\
//         background-color:#f4f1d1;\
//     }\
//     #cashback {\
//       //border-radius: 10px;\
//       font-family: Arial;\
//       color: rgba(146, 146, 146, 0.9);\
//       font-size: 1em;\
//       //background: #ff3333;\
//      // padding: 3px 7px 3px 7px;\
//       //text-decoration: none;\
//     }\
//     #cashback {\
//         //background-color: rgba(146, 146, 146, 0.9);\
//     }\
//     #cashback:hover {\
//         //background-color: rgba(90, 90, 90, 0.9);\
//     }\
//     #mcsettings {\
//         background:rgba(146, 146, 146, 0.9) url(' + settings_img + ') no-repeat left 2px center ;\
//     }\
//     #feedback{\
//         background:rgba(146, 146, 146, 0.9) url(' + feedback_img + ') no-repeat left 2px center ;\
//     }\
//     #daily_deals{\
//         background:rgba(146, 146, 146, 0.9) url(' + daily_deals_icon + ') no-repeat left 2px center ;\
//     }\
//      #chillar_change{\
//         background:rgba(146, 146, 146, 0.9) url(' + gold_coin+ ') no-repeat left 2px center ;\
//     }\
//     #feedback:hover {\
//         background-color: rgba(90, 90, 90, 0.9);\
//     }\
//     #useme{\
//         background:rgba(146, 146, 146, 0.9) url(' + useme_img + ') no-repeat left 2px center ;\
//     }\
//     #useme:hover {\
//         background-color: rgba(90, 90, 90, 0.9);\
//     }\
//     #help_button{\
//       border-radius: 10px;\
//       font-family: Arial;\
//       color: #fafafa;\
//       font-size: 1em;\
//       background:rgba(146, 146, 146, 0.9);\
//       padding: 3px 5px 3px 5px;\
//       text-decoration: none;\
//     }\
//     #help_button:hover{\
//       background-color: rgba(90, 90, 90, 0.9);\
//     }\
//     #mcreport {\
//         background:   rgba(255,105,97,0.6) ;\
//     }\
//     #mcreport:hover {\
//         background:  rgba(255,105,97,0.9) ;\
//     }\
//     #trackedprods {\
//         background:rgba(146, 146, 146, 0.9) url(' + wishlist_img + ') no-repeat left 2px center ;\
//     }\
//     #trackedprods:hover {\
//         background-color: rgba(90, 90, 90, 0.9);\
//     }\
//     #' + emspan+ ' {\
//         background:rgba(146, 146, 146, 0.9) url(' + track_price_img + ') no-repeat left 2px center ;\
//     }\
//     .row-btm .row-btm-title {\
//         display: inline-block;\
//         width: 150px;\
//         height: 70px;\
//         font-size: 1em;\
//         line-height: 1.4em;\
//         margin: 0 auto;\
//         padding: 0 0 0 10px;\
//         color: #252525;\
//         word-break: break-all;\
//     }\
//     .row-btm .r-box {\
//         float: right !important;\
//         width: 70px;\
//         height: 70px;\
//         display: inline-block;\
//         padding: 0;\
//         color: #252525;\
//     }\
//     .row-btm .ask-search {\
//         line-height: 46px;\
//         font-size: 1.1em;\
//         font-weight: 600;\
//         text-align: center !important;\
//         margin: 0 auto;\
//         color: #505050;\
//     }\
//    .row-btm .rp-binder {\
//         text-align: center;\
//         font-size: 1em;\
//         font-weight: 600;\
//         margin-top: 29px;\
//     }\
//     .row-btm .r-box .price-diffn{\
//         padding-top: 10px;\
//     }\
//     #welcomebox img {\
//         display: block;\
//         width: 70px !important;\
//         margin: 0 auto;\
//         padding-top: 10px !important;\
//     }\
//     #welcomebox .r-box {\
//         display: block;\
//         width: 100%;\
//         padding: 2px;\
//         margin: 0;\
//         height: 40px;\
//     }\
//     #welcomebox .rp-binder {\
//         padding-top: 10px !important;\
//     }\
//     #welcomebox .r-box {\
//         font-weight: 400 !important;\
//         font-size: 1em !important;\
//     }\
//     #welcomebox .price-diffn {\
//         font-size: 12px !important;\
//         font-weight: 400 !important;\
//     }\
//     #welcomebox .rp-binder {\
//         margin: 0;\
//     }\
// 	/*#'+allprice+' p, #'+simprice+' p, #'+nofound+' p, #'+deal+' p, #'+oos+' p, #'+top_tag+' p {\
// 		padding: 0;\
// 		margin: 0;\
// 	}*/\
// 	#'+simprice+' p a {\
// 		color: #777;\
// 	}\
//     .green-bg .price-diffn .rp-binder {\
//         color: rgba(206, 246, 216) !important;\
//     }\
//     .orange-bg .price-diffn .rp-binder {\
//         color: rgba(247, 91, 22) !important;\
//     }\
//     .diffn-val {\
//         font-size: 14.5px !important;\
//     }\
//     #'+whisperbox+'::-webkit-scrollbar {\
//         width: 0.8em;\
//     }\
//     #'+whisperbox+'::-webkit-scrollbar-track {\
//         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\
//         border-radius: 10px;\
//     }\
//     #'+whisperbox+'::-webkit-scrollbar-thumb {\
//         border-radius: 10px;\
//         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\
//     }\
//     #'+allprice+' a, #'+simprice+' a, #'+nofound+' a, #'+deal+' a, #'+oos+' a,  #'+top_tag+' a {\
//         border-bottom: 1px solid #ddd;\
//         padding-bottom: 7px;\
//     }\
//     #'+footer+' {\
//         position: absolute;\
//         bottom: 0;\
//         margin-left: 5px;\
//     }\
//     #'+footer+' a{\
//         display: block;\
//         position: relative;\
//         text-decoration: none;\
//         height: 25px;\
//         margin-left: 34px;\
//         line-height: 25px;\
//         font-size: 13px !important;\
//         color: #484848 !important;\
//     }\
//     #'+footer+' a span.crazyMsg{\
//         color: #484848 !important;\
//         line-height: 15px;\
//     }\
//     #'+footer+' a span.crazyRupees{\
//         margin-left: 82px;\
//         color: #484848 !important;\
//         line-height: 5px;\
//     }</style>';

// 	// insert itt
// 	$('head').append(resultRowCss);

    


// 	addEmmyTrack();



// 	$('#'+whisperboxcontent).css({
// 		'visibility':'hidden',
// 		'font-size':'12px',
// 		'text-align':'left',
// 	});

// 	$('#'+pralurrt).css({
// 		'padding':'7px 7px 7px 20px',
// 		'border-bottom': '1px solid #CCC',
// 	});

//     $('.button_row').css({
//         'padding':'7px 7px 7px 20px',
//         'border-bottom': '1px solid #CCC',
//     });


//     $('#'+whisperbox).css({
//         'visibility':'hidden',
//         // 'padding':'0 7px 0 7px',
//         'width':'320px',
//         'height': '400px',
//         'background':'#F9F9F9',
//         'border-color':'#29216d',
//         'border-radius': '0px 2px 2px 0px',
//         'border-width':'1px',
//         'position':'fixed',
//         'top':'200px',
//         'left':'-291px',
//         'z-index':'9999',
//         'box-shadow': '0 0 7px 3px #CBCBCB',
//         'padding': '4px',
//         'padding-bottom': '30px',
//         'overflow-y': 'scroll',
//         'overflow-x': 'hidden'
//     });


//     $('#welcomebox').css({
//         'display': 'inline-block',
//         'position': 'fixed',
//         'top': '200px',
//         'left': '0px',
//         'width': '90px',
//         // 'background-color': 'rgba(0, 0, 0, 0)',
//         'opacity': '1',
//         // 'box-shadow': '0px 0px 25px 1px rgba(133,133,133,1)',
//         'z-index': '9999',
//         'padding-left': '5px',
//         'border-radius': '2px'
//     });


// 	$('#'+highlightm).css({
// 		'position': 'absolute',
// 		'margin': '0 7px 0 7px',
// 		'bottom': '7px',
// 		'right': '0',
// 		'left': '0',
// 		'background':'#eee',
// 		'display': 'block',});

// 	$('#'+cutemsg).css({
// 		'display': 'block'});
	
// 	// $('p.'+hoverimg).css({
// 	// 	'background-color':'#FAFAFA',
// 	// 	'border-radius': '2px',
// 	// 	'margin-bottom': '4px',
// 	// 	'padding': '7px',
// 	// 	'position': 'relative'
// 	// });


// 	if (couponate) {
// 		base_url_img = chrome.extension.getURL('mccoupon.png');
// 	} else {
// 		base_url_img = chrome.extension.getURL('mcicon.png');
// 	}

// 	base_url_str='url('+base_url_img+')';
// 	alert_url_img = chrome.extension.getURL('mciconalert.png');
// 	alert_url_str='url('+alert_url_img+')';
// 	error_url_img = "'"+chrome.extension.getURL('turtleslow.png')+"'";
// 	az_url_img= chrome.extension.getURL('az.png');
// 	spr_url_img= chrome.extension.getURL('spr.png');
// 	alrm_url_img= chrome.extension.getURL('binocs.png');
//     dash_url_img= chrome.extension.getURL('dashbrd.png');

// 	//alert_url_sml_img = "resource://jid1-W2ygRzycWiAk6Q-at-jetpack/mctest/data/icons/mciconalert32.png";;
// 	alert_url_sml_img = chrome.extension.getURL('mciconalert32.png');
// 	alert_url_sml_str='url('+alert_url_sml_img+')';

// 	//$('#'+whisperbox).css('height',$('#'+whisperbox).outerHeight() + 'px');
// 	$('#'+whisperbox).css('left','-'+$('#'+whisperbox).outerWidth() + 'px');

        
//     $('span.'+whisperboxtab).click(closeTabby);


// 	$('.'+whisperboxtab).css({
// 		'background-image':base_url_str,
// 		'border-width':'1px',
// 		'left':'85px',
// 		'cursor':'pointer',
// 		'bottom':'21px',
// 		'position':'relative',
// 		'float':'right',
// 		'text-indent':'-9999px',
// 		'outline':'none',
// 		'z-index':'9999'
// 	});

//     $('.'+whisperboxtab).each(function () {
//         this.style.setProperty( 'display', 'inline', 'important' );
//     });


    

// 	console.log('mc:clappity the gag is in');

// 	bubs = '<div id="'+ hoverdiv +'" class="triangle-isosceles" style="display:none;"><img src="" height="150px" style="display:block !important;" onError="this.onerror=null;this.src='+error_url_img+';"></div>';

// 	$('body:first').append(bubs);

// 	console.log('mc:clappity the window is in');

// 	// $('#'+allprice).on('mouseenter.slowhover','p.'+hoverimg, onEnter);
// 	// $('#'+allprice).on('mouseleave.slowhover','p.'+hoverimg, onLeave);

// 	// Hover, and Click events on result-rows in makkhiBox;
// 	// keep status of attached or not in these
// 	hoverEventDocked = false;
// 	clickEventDocked = false;

} // endofinserttag

    var closeTabby = function(event){
        //console.log('notification contentscript');
        // console.log('ctabby_click');
        // console.log(ctabby_click);
        if(ctabby_click=='button_click'){
            ctabby_click='';
            event.preventDefault();
            return;
        }
        else{
             
            if(!walk_through){
            chrome.runtime.sendMessage({method: "getNotificationPermission"}, function(response){console.log(response);});     
            hidewhisperbox('close tabby');
            }
            return;
        }

        chrome.runtime.sendMessage({method: "getNotificationPermission"}, function(response){console.log(response);});  
        if ($('#'+whisperbox).hasClass('open')) {
            $('#'+whisperboxcontent).css('visibility','hidden');
            $('#'+whisperbox)
            .animate({left:'-' + $('#'+whisperbox).outerWidth()}, 300)
            .removeClass('open');
        } else {
        //     $('#'+whisperboxcontent).css('visibility','visible');
        //     $('#'+whisperbox)
        //     .animate({left:'0'},  300)
        //     .addClass('open');
        //
         }
        if(event!=undefined){
           event.preventDefault();
         }
        ga_wcbox_hover_first=true;

    };

      var cantHandleTruth = function(event) {

        // console.log('canthandle truth');

        // whisper gently into the night so do not disturb oh no no no
        if($(event.target).is('#'+whisperbox+', #'+whisperbox+' *')) {
            return;
        }

        // frisk it lets shut it down and go live
        if ($('#'+whisperbox).hasClass('open')) {
            closeTabby(event);
        }
    }

    // $(document).on("click", cantHandleTruth);    
  

function insertDeals(results){

    var link,img_src,prodlink_txt,price_str;

for(i=0;i<results.length;i++)
{
    if(results[i].stock!=true){
        continue;
    }

   var prod_site=results[i].site;
    var link=results[i].link;
    var  img_src=results[i].image_url;
    var prodlink_txt=results[i].title;
    var price_str=results[i].current_price;
   
    var portal=cssLocs.couponDunia.portalMapReverse[prod_site];
   
    var previous_price=results[i].mrp;
   
    var droppercent=Math.round((results[i].mrp-results[i].current_price)*100/results[i].mrp);
  


var deets={prod_site:prod_site};
link=affyLinkify(deets,link);
   
var repl_string = '<a href="' + link+ '"' +'target=="_blank"'+'>\
                    <div class="row-top">\
                        <span class="'+portalname+'">' + portal + '</span>\
                        <div class="'+portalmsg+'" style="font-size:small;">'+'<span style=" text-decoration: line-through; color:rgb(191,191,191);">'+'<span class="rupee-sign">&#8377;</span>'+previous_price+'</span>\
                          <span style="color:rgba(255,105,97,0.9);">'+" "+droppercent+"% Off"+'</span></div>\
                    </div>\
                    <div class="row-btm">\
                        <img src="' + img_src + '"/>\
                        <div class="row-btm-title">' + prodlink_txt + '</div>' + '<div class="r-box green-bg"><span class="price-diffn">\
                                <p class="rp-binder" style="color: #006700 !important;">\
                                    <span class="rupee-sign">&#8377;</span>\
                                    <span class="diffn-val" style="font-size:large;">' + price_str+ '</span>\
                                </p>\
                            </div>'
                    '</div>\
                  </a>';             
    var repl_string_p = '<div class="'+hoverimg+'">'+repl_string+'</div>';
    //$('#'+deal+'  #loading_deals_msg').remove();
    $('#'+deal).append(repl_string_p);
}


}

var applyCouponWrapper = function(portal) {
	return function(element) {
        element.preventDefault();
        var rowNumber = $('div.foocouponrow').index(this) + 1;
        var portalName = portal;
        hakunaMatata(portalName, rowNumber);
		// get the couponcode
		var couponCode = $(this).children('span.foocode').text();
		console.log('coupon kode: ' + couponCode);
		// fill in the inputbox with it
		$(cssLocs[portal].couponBox).attr("title", "Hang on! We are applying the coupon for you!");
        $(cssLocs[portal].couponBox).tooltip({ hide: { effect: "fade", duration: 500 } });
		
        if(document.URL.match('paytm.com')) {
            document.dispatchEvent(new CustomEvent('fillcoupon', {
                detail: {
                    couponcode: couponCode
                }
            }));
        } else {
            $(cssLocs[portal].couponBox).val(couponCode);
        }

        $(cssLocs[portal].couponBox).tooltip();
        $(cssLocs[portal].couponBox).trigger('mouseenter');
		
        window.setTimeout(function() {
			$(cssLocs[portal].couponBox).trigger('mouseleave');
		}, 1500);
		
        setTimeout(function() {
			if (document.URL.match('cleartrip.com')) {
				document.getElementById('check_saving').click();
			} else if (document.URL.match('lenskart.com')) {
				document.getElementsByClassName('back2saved-add')[0].click();
			} else if (document.URL.match('dominos.co.in/menu')) {
				document.getElementById('redeem-coupon-button').click();
			} else if (document.URL.match('naaptol.com')) {
				document.querySelector('a.button_1').click();
			} else if (document.URL.match('paytm.com')) {
                document.dispatchEvent(new CustomEvent('applycoupon', {
                    detail: {
                        css: cssLocs[portal].couponButton
                    }
                }));
			} else if (document.URL.match('myntra.com')) {
                console.log('myntra, getting forms to apply coupon(s)');
                // get teh form first
                $('a.blue.apply-coupon.apply')[0].click();
                // rest for eh moment, and get to work
                setTimeout(function () {
                    $(cssLocs[portal].couponButton).click();
                }, 1000);
            } else {
				console.log('tryna click ' + cssLocs[portal].couponButton);
				//document.querySelector(cssLocs[portal].couponButton).click();
				$(cssLocs[portal].couponButton).click();
			}
		}, 2000);
	}
}
		
		
var fillCoupons = function(couponList, portal) {
	// var couponRowsHtml = '';
 //    var couponimg=chrome.extension.getURL('mccoupon.png');
 //   var repl_string =  '<a href="'+'#'+ '">\
 //                <div class="row-top">\
 //                </div>\
 //                <div class="row-btm">\
 //                    <img' +' src="' + couponimg + '"/>\
 //                    <div class="row-btm-title">' + ''+ '</div>\
 //                    <div class="r-box"><span class="price-diffn ask-search"> </span></div>\
 //                </div>\
 //              </a>';
 //    //To show a image in welcomebox while displaying coupon results 
 //    updateWelcomeBox(repl_string, 'eggjak');
	// if (couponList.length > 0) {

	// 	for(var i=0; i<couponList.length; i++) {
	// 		couponRowsHtml += ('<div class="foocouponrow" title="'+ couponList[i].desc+"| Expires on "+couponList[i].expires+'"><span class="foocode">'+
	// 			couponList[i].code + '</span><a href class="foomsg">Try this code</a></div>');
	// 	}
	// 	// append couponRowsHtml to whisperboxcontent
	// 	$('#'+whisperboxcontent).prepend(couponRowsHtml);
	// 	$('#'+whisperbox).css('padding', '4px');
	// 	$('#'+whisperbox).css({
	// 		'padding': '4px',
	// 		'background-color': '#D8D8D8'
	// 	});
	// 	$('.foocouponrow').css({
	// 		'background-color': '#FAFAFA',
	// 		'border-radius': '2px',
	// 		'margin-bottom': '4px',
	// 		'padding': '7px',
	// 		'position': 'relative',
	// 	});
	// 	$('.foocouponrow').hover(function() {
	// 			$(this).css('background-color', '#FFFFFF');
	// 		},
	// 		function() {
	// 			$(this).css('background-color', '#FAFAFA');
	// 		}
	// 	);
	// 	$('span.foocode').css({
	// 		'font-size': '1.3em',
	// 		'font-weight': '600',
	// 		'padding-right': '15px',
	// 		'margin-left': '10px'
	// 	});
	// 	$('a.foomsg').css({
	// 		'display': 'inline-block',
	// 		'background-color': '#F5F6CE',
	// 		'padding': '7px',
	// 		'position': 'absolute',
	// 		'right': '0',
	// 		'top': '0',
	// 		'bottom': '0'
	// 	});
	// 	$('div.foocouponrow').tooltip({position: {my: "right"}})
	// 	$('div.foocouponrow').click(applyCouponWrapper(portal));
	// } else {
	// 	// there are no coupon codes available; show a sorry msg!
	// 	var sorryMsg = '<div id="fooSorryMsg">Oops, there are no coupons on this page!</div>'
	// 	$('#'+whisperboxcontent).prepend(sorryMsg);
	// 	$('#'+whisperbox).css('padding', '4px');
	// 	$('#fooSorryMsg').css({
	// 		'background-color': '#FAFAFA',
	// 		'border-radius': '2px',
	// 		'display': 'block',
	// 		'font-size': '1.1em',
	// 		'padding': '2px',
	// 	});
	// }
	// // if height of popup box is more than 350, change footer's css to make it visible
	// /*
	// if ($('#'+whisperbox).height() > 350) {
	// 	$('#'+footer).css({
	// 		'bottom': '0',
	// 		'position': 'static'
	// 	});
	// }
	// */
 //    setTimeout(function() {
 //        $('.'+whisperboxtab).trigger('click');
 //    }, 500);
 //    setTimeout(function() {
 //        $('.'+whisperboxtab).trigger('click');
 //    }, 1500);
} // fillCoupons

var showCoupons = function(couponList) {
// 	var couponRowsHtml = '';
// 	if (couponList.length > 0) {
// 		for(var i=0; i<couponList.length; i++) {
// 			couponRowsHtml += ('<div class="foocouponrow" title="'+ couponList[i].desc +'" portal="'+couponList[i].portal+'" rowID="'+i+'"><span class="foocode">'+
// 			couponList[i].code + '</span>'+ '<span class="website">'+couponList[i].portal+'</span>' +'<a href="#" class="foomsg">Copy</a></div>');
// 		}
// 		// append couponRowsHtml to whisperboxcontent
// 		$('#'+whisperboxcontent).prepend(couponRowsHtml);
// 		$('#'+whisperbox).css('padding', '4px');
// 		$('#'+whisperbox).css({
// 			'padding': '4px',
// 			'background-color': '#D8D8D8',
// 			'width': '300px'
// 		});
// 		$('.foocouponrow').css({
// 			'background-color': '#FAFAFA',
// 			'border-radius': '2px',
// 			'margin-bottom': '4px',
// 			'padding': '7px',
// 			'position': 'relative',
// 		});
// 		// add hover event
// 		$('.foocouponrow').hover(function() {
// 				$(this).css('background-color', '#FFFFFF');
// 			},
// 			function() {
// 				$(this).css('background-color', '#FAFAFA');
// 			}
// 		);
// 		// add click event
// 		$('.foocouponrow').click(function(e) {
//             e.preventDefault();
// 			var couponCode = $(this).find('span.foocode').text();
// 			console.log('code to be copied: ' + couponCode);
// 			var rowID = $(this).attr('rowID');
// 			copyText(couponCode, rowID);
// 		});
// 		$('span.foocode').css({
// 			'font-size': '1.3em',
// 			'font-weight': '600',
// 			'padding-right': '15px',
// 			'margin-left': '10px',
// 			'color': '#474747'
// 		});
// 		$('a.foomsg').css({
// 			'display': 'inline-block',
// 			'background-color': '#F5F6CE',
// 			'padding': '7px',
// 			'position': 'absolute',
// 			'width': '52px',
// 			'right': '0',
// 			'top': '0',
// 			'bottom': '0',
// 			'color': '#474747'
// 		});
// 		$('span.website').css({
// 			'display': 'inline-block',
// 			'background-color': '#F9FAE1',
// 			'padding': '7px',
// 			'position': 'absolute',
// 			'right': '50px',
// 			'top': '0',
// 			'bottom': '0',
// 			'color': '#474747'
// 		});
// 		$('div.foocouponrow').tooltip({position: {my: "right"}})
//         // weird conflict with couponraja style; here is fix
//         if (window.location.host == 'www.couponraja.in') {
//             console.log('in couponraja styling');
//             $('a.foomsg').css({
//                 'width': '34px'
//             });
//             $('span.website').css({
//                 'right': '45px'
//             });
//         }

// 	} else {
// 		// there are no coupon codes available; show a sorry msg!
// 		var sorryMsg = '<div id="fooSorryMsg">Oops, there are no coupons on this page!</div>'
// 		$('#'+whisperboxcontent).prepend(sorryMsg);
// 		$('#'+whisperbox).css('padding', '4px');
// 		$('#fooSorryMsg').css({
// 			'background-color': '#FAFAFA',
// 			'border-radius': '2px',
// 			'display': 'block',
// 			'font-size': '1.1em',
// 			'padding': '2px',
// 		});
// 	}
// 	// if height of popup box is more than 350, change footer's css to make it visible
// 	/*
// 	if ($('#'+whisperbox).height() > 350) {
// 		$('#'+footer).css({
// 			'bottom': '0',
// 			'position': 'static'
// 		});
// 	}
// 	*/
// //	$('#'+whisperbox)
// //	.animate({left:'0'},  300)
// //	.addClass('open');
	
	
// 	eventAdded = false;
// 	checkTabPerm();
// 	checkCookiePerm();
// 	setTimeout(function() {
// 		$('.'+whisperboxtab).trigger('click');
// 	}, 500);
	
} // showCoupons

var onEnter = function(e) {

    console.log('We here');

	if (!$(this).hasClass('attached')){

        console.log(this);
        var url=$(this).attr('href');
        // var img_src="http://ecx.images-amazon.com/images/I/61J%2BtpX0MjL._SX522_.jpg";
         var img_src=$(this).attr('imgsrc');

         if(img_src==''||img_src==undefined){
             img_src=emp_img;
         }    

        console.log('on enter url is '+url);
        console.log('image url is'+ img_src);        

		//if timeout set, then remove
		
		//add timeout func

		var ev = jQuery.extend({},e);
	        var ob = this;

		if (ob.timed_show) {
			ob.timed_show = clearTimeout(ob.timed_show);	
		}

		//current location
		ob.pX=ev.pageX;
		ob.pY=ev.pageY;

		//add tracker to get location
		$(ob).on("mousemove.slowhover",mouseloc);
		
		//add timeout function

		ob.timed_show = setTimeout( function(){checkprox(ev,ob,img_src,url);} , 100 );
	

		
	}	
}//onEnter


var checkprox = function(ev,ob,img_src,url) {
            console.log('in checkprox');
            ob.timed_show = clearTimeout(ob.timed_show);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(ob.pX-mposX) + Math.abs(ob.pY-mposY) ) < 7 ) {

                $(ob).off("mousemove.slowhover",mouseloc);

                // set hoverIntent state to true (so mouseOut can be called)
                ob.hover_status = 1;

                showImg(ob,img_src);

                if(affy_flags['az_search']==true){
                   //send
                    bsend(url);
                }
                    

                console.log('check prox img_src is '+img_src);
                console.log('check prox url is '+url);


            } else {
                // set previous coordinates for next time
                ob.pX = mposX; ob.pY = mposY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.timed_show = setTimeout( function(){checkprox(ev, ob,img_src,url);} , 100 );
            }
        };


var showImg = function (ob,img_src){



		//var curr_img_src = $(ob).find('span').attr('imgsrc');
        // var curr_img_src = chrome.extension.getURL('mciconalert.png');
        var curr_img_src=img_src;
        

		$(ob).addClass('attached');


		var x = $(ob).offset().left;
		var y = $(ob).offset().top;
		var x_pos = $('#'+hoverdiv).offset().left;
		var y_pos = $('#'+hoverdiv).offset().top;

		$('#'+hoverdiv + ' img').attr('src',curr_img_src);
		$('#'+hoverdiv).css({"display":"inline-block","z-index":"10000"});
		$('#'+hoverdiv).css({'opacity':0});
		$('#'+hoverdiv).offset({"left":(parseInt(x)+240),"top":parseInt(y)-145});
		$('#'+hoverdiv).fadeTo('slow',1);

} ;


var onLeave = function(e) {

    console.log('We leaving');

	var ev = jQuery.extend({},e);
	var ob = this;

	if (ob.timed_show) {
		ob.timed_show = clearTimeout(ob.timed_show);	
	}

	$(ob).off("mousemove.slowhover",mouseloc);

	//Try checking for attached and then see
	$(this).removeClass('attached');
	$('#'+hoverdiv).css({'opacity':0});
	$('#'+hoverdiv).css("display","none");
    $('#'+hoverdiv + ' img').attr('src','');
	
} //onLeave


var mouseloc = function(e) {
	mposX = e.pageX;
	mposY = e.pageY;
}; 


Array.prototype.diff = function(a) {
    return this.filter(function(i) {return !(a.indexOf(i) > -1);});
};



var createRandIntString = function(icon_type) {
	var num_int;
	if (icon_type=='init'){
		num_int=Math.floor(Math.random() * 15)+1;
		}
	else {
		num_int=Math.floor(Math.random() * 50)+30;
		}
	return num_int;
}

var createRandString = function() {
	var init_str='mprod-summary'
	var num_inc=Math.floor(Math.random() * 13)+1;
	var len_val = Math.floor(Math.random() * 4)+5;
	var randnum_arr=[];
	for (var num=0;num<len_val;num++){
		randnum_arr.push(Math.floor(Math.random() * 25)+97);
	}
	var rand_str = init_str.slice(0,num_inc+1)+String.fromCharCode.apply(null,randnum_arr);
	return rand_str
}


function isBook() {

if(prod_deets.prod_site=='fk'){
    //check if it is book from json;
    if(fk_book_page){
        return true;
    }
}




	if ((prod_deets.prod_categ+' '+prod_deets.prod_categ_alt+ ' ' + prod_deets.prod_bracktitle).match(/(^|\s)(book|books|hardcover|paperback)(\s|$)/gi)) {


	return true;
	} 
    else {
        book_details=get_book_details(prod_deets.prod_site);
         if((book_details.isbn_10!='') || (book_details.isbn_13 !='')){
            return true;
          }
	return false;
	}
}


function isMobile() {
	reg_pat= /mobile|tablet|ipad|nexus|galaxy/gi;
	var tablet_match = $(cssLocs[prod_deets.prod_site].title).text().match(reg_pat);
	if ( (prod_deets.prod_categ.toLowerCase().search('mobile|smartphone')>-1) || (prod_deets.prod_categ_alt.toLowerCase().search('mobile|smartphone')>-1) || tablet_match) {

        //check if flipkart accessories and not mobile main
        var chk_site_arr =['fk','sc','hs'];
        var sd_check =['tablets','mobile phones'];
        if ((chk_site_arr.indexOf(prod_deets.prod_site)>-1) && (prod_deets.prod_categ_alt.toLowerCase().search('accessories')>-1)) {
            return false;
        }
        else if (prod_deets.prod_site=='sd') {
            if (sd_check.indexOf(prod_deets.prod_categ_alt.toLowerCase().trim())>-1) {
                return true;
            } else {
                return false;
            }   
        }
        else {
            return true;
        }
	
	}
	else {
	return false;
	}
}

function isTelevision() {
    reg_pat= /television|(led|lcd)\stv/gi;
    var tvtitle_match = $(cssLocs[prod_deets.prod_site].title).text().match(reg_pat);
    if ( (prod_deets.prod_categ.toLowerCase().search('television|led tv|lcd tv')>-1) || (prod_deets.prod_categ_alt.toLowerCase().search('television|led tv|lcd tv')>-1) || tvtitle_match) {
            return true;
        }
    else {
    return false;
    }
}

function isLifeStyle() {
	var reg_pat = /(women|unisex|accessories|clothing|footwear|shoes|bags|wallet|beauty|jewellery|fragrance|decor|furniture|fashion)/gi;

	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	   return true;
	}
	else {
	   return false;
	}
} //isLifeStyle

function isApparel() {
    var reg_men_clothing = /\s(tshirt|t shirt|t-shirt|jean|trouser|pant|cargo|short|suit|blazer|shirt|jacket|top|sweatshirt|sleeve|sweater|raincoat|pyjama|trunk|brief|thermal|boxer|vest|socks|shapewear|tights|lungi|turban|kurta|sherwani|dhotis|fabric|unstitched)(s?)\s/g;
    var reg_women_clothing = /\s(tunic|saree|polo|shrug|legging|jegging|capris|lingerie|neck|patiala|chudi|salwar|harem|skirt|maxi|bermuda|denim|bra|panty|camisole|chemise|brief|shapewear|thong|slip|stocking|pallazzo|pallazo|corduroy|chinos|babydoll|nighty|nighti|pajama|robe|gown|negligee|dress|dupatta|material|jumpsuit|ethnic|patiala|kameez|anarkali|shawl|sarong|cap|muffler|coat)(s?)\s/g;
    // var reg_shoes_common = /\s(shoe|sneaker|sandal|floater|flip flop|flip\-flop|adidas|nike|fila|puma|boot|loafer|heel|flat|wedge|belly|bellies|balerina|ethnic|stiletto|pump|peep toe)(s?)\s/g;
    // var reg_categ = /(women|men|kid|unisex|accessory|accessories|clothing|footwear|shoe|bag|wallet|beauty|jewellery|fragrance|decor|furniture|fashion|watch|)/gi;
    var prod_title = ' ' + prod_deets.prod_title.toLowerCase();
    var prod_categ = ' ' + prod_deets.prod_categ.toLowerCase() + ' ';
    var prod_categ_alt = ' ' + prod_deets.prod_categ_alt.toLowerCase() + ' ';

    // if (prod_title.match(reg_men_clothing) || prod_title.match(reg_women_clothing) || prod_title.match(reg_shoes_common) ||
    //     prod_categ.match(reg_men_clothing) || prod_categ.match(reg_women_clothing) || prod_categ.match(reg_shoes_common) || prod_categ.match(reg_categ) ||
    //     prod_categ_alt.match(reg_men_clothing) || prod_categ_alt.match(reg_women_clothing) || prod_categ_alt.match(reg_shoes_common) || prod_categ_alt.match(reg_categ)) {
    //     return true;
    // } else {
    //     return false;
    // }

    if (prod_title.match(reg_men_clothing) || prod_title.match(reg_women_clothing) ||    prod_categ.match(reg_men_clothing) || prod_categ.match(reg_women_clothing) ||
        prod_categ_alt.match(reg_men_clothing) || prod_categ_alt.match(reg_women_clothing)) {
        return true;
    } else {
        return false;
    }

} // isApparel

function isDiaperThing(prod_title) {

    var reg_babycare = /\s(diaper|pad|pamper|huggies|mamy poko|nappies|wipe|libero|potty)(s?)\s/g;
    var prod_title = ' ' + prod_title.toLowerCase();
    if (prod_title.match(reg_babycare)) {
        return true;
    } else {
        return false;
    }
}

function isFootWear() {
	var reg_pat = /(footwear|shoe|sandal|slipper|boot|belli|heel|wedge|sneaker|mocassin|loafer|floater|flip(\-|\s)?flop)/gi;
	var footie_match = $(cssLocs[prod_deets.prod_site].title).text().match(reg_pat);
	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat)) || footie_match) {
	 return true;
	}
	else {
	 return false;
		}
} //isFootWear


function isLaptop() {
	var reg_pat = /(laptop)/gi;
	var laptop_match = $(cssLocs[prod_deets.prod_site].title).text().match(reg_pat);
	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat)) || laptop_match) {
	 return true;
	}
	else {
	 return false;
		}
} //isLaptop


function isAccessories() {
    var reg_pat = /(access|hard\s+drive|cover|battery|screen|external)/gi;
    var access_match = $(cssLocs[prod_deets.prod_site].title).text().match(reg_pat);
    if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat)) || access_match) {
     return true;
    }
    else {
     return false;
        }
} //isAccessories


function isElec() {
	var reg_pat = /(games|gaming|mobile|smartphone|phones|computers|tablets|cameras|electronics|appliances)/gi;
	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	 return true;
	}
	else {
	 return false;
		}
} //isElec

function isBaby() {
	var reg_pat = /(toys|babies|diaper|feeding|wipes|baby|kids|dolls|stroller)/gi;
	if (($.inArray(prod_deets.prod_site,['fc','bo'])>-1) || (prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	 return true;
	}
	else {
	 return false;
		}
} //isBaby


function isWatch() {
	var reg_pat = /(watches)/gi;
	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	 return true;
	}
	else {
	 return false;
		}
} //isBaby


function fetchMissingData(prod_deets_arr) {
		var prods_arr=prod_deets_arr['prodvals'];
		var prods_sites_arr=[],missing_sites_arr=[];
		for (i=0;i<prods_arr.length;i++) {
				prods_sites_arr[prods_sites_arr.length]=prods_arr[i]['prod_site'];
		}
		for (i=0;i<all_sites.length;i++) {
			
				if ($.inArray(all_sites[i],prods_sites_arr)==-1) {
					//Not in fetched, go fetch
					missing_sites_arr[missing_sites_arr.length]=all_sites[i];
					}
		}
		return missing_sites_arr;

}

function cleanPrice(in_str,parse_type) {

    if (in_str==undefined || in_str=='') {
        console.log('whoa price is bare naked!');
        return '';
    }

	parse_type = typeof parse_type !== 'undefined' ? parse_type : 0;

	//console.log('PARSE_TYPE IS: '+parse_type);

	var clean_price_str = $.trim(in_str.replace(/rs\.*|\*|\,|\:/gi,''));

	if (parse_type==0) {
		clean_price_str = clean_price_str.split(/\s+/g)[0];
	} else if (parse_type==-1) {
		clean_price_str = clean_price_str.split(/\s+/g).pop();
	} else {
		clean_price_str = clean_price_str.split(/\s+/g)[parse_type];
	}	


	if (isNaN(parseFloat(clean_price_str))) {
	//if the string is still notafloatthengocharbychar
	    return clean_price_str.split("").filter(function(each) {
        		if (!isNaN(each) || (each=='.')) {
               		return each;
        		}//if
    			}).join(''); //func                                                                           
        
	} //if
	else {
	 return clean_price_str;  
	}


} //cleanPrice

function cleanShipPrice(in_str) {
	return $.trim(in_str.replace(/rs\.*|\*|\,|\+|shipping/gi,''));
} //cleanPrice

function sameProd(a_prc_str,b_prc_str) {
	a_prc=parseFloat(a_prc_str);
	b_prc=parseFloat(b_prc_str);
	if ((a_prc>(2*b_prc)) || (b_prc>(2*a_prc))) {
		return false;
		}
	else {
		return true;
	}

} //sameProd

function tittlyFind(contents_arr, parse_type) {
    var tittly_val='';
    //nodetype only fetches textnode
    $.each(contents_arr, function () {
            if ((this.nodeType === 3) && $.trim($(this).text())!=''){
                    tittly_val += ' '+$.trim($(this).text());
                } //ifloop
            }); // eachFunction

    return tittly_val;
    
} // tittlyFind

function textFind(contents_arr, parse_type) {
	var price_val='';
	//nodetype only fetches textnode
	$.each(contents_arr, function () {
			if ((this.nodeType === 3) && $.trim($(this).text())!=''){
					price_val += ' '+$.trim($(this).text());
				} //ifloop
			}); // eachFunction

	return cleanPrice(price_val,parse_type);
	
} // textFind


//lookforuidinword
function lookForUID(each) {
    if (each.length>4 && each.match(/\d+/gi)) {
         return each;
    }
}

function lopAfterFor(in_str) {
	if (in_str.match(/for\s(women|men)/gi)) {
		return in_str;
	}
	else if (isElec()) {
		if (!in_str.match(/for\s(women|men)/gi) && in_str.match(/\sfor\s/gi)) {
				var formatch_val = in_str.match(/\sfor\s/gi);
				return in_str.split(formatch_val[0])[0];
				
		}	else {
			return in_str;
			}

	}	else {
		return in_str;
		}

}

//lookforuidintitlestring
function findProductUID(in_str) {
	var uid_matches = in_str.split(' ').filter(lookForUID);

	if (uid_matches.length==0) {
		return '';
	}
	else if (uid_matches.length==1) {
		return uid_matches[0];
	} //elseif
	else {
		var uid_match_val = uid_matches[0];
		for (var i=1;i<uid_matches.length;i++) {
			if 	(uid_match_val.length<uid_matches[i].length)	{
				uid_match_val=uid_matches[i];
			}
		return uid_match_val;
		}
	} //else
}

function cleanMatchTitle(in_str) {
    var out_str = in_str.toLowerCase().replace(/\*|\!|\(|\)|\[|\]|\,|\t+|\n+|\r+|\!|\s\-\s/gi,' ');
    return out_str;
}

function cleanTitle(in_str) {


	var out_str = in_str.replace(/\*|\!|\(|\)|\[|\]|\,|\t+|\n+|\r+|\!|\s\-\s/gi,' ');
	
	if (prod_deets.prod_site=='eb') {
		out_str = out_str.replace(/\W/gi,' ');
	}


	var title_uid = findProductUID(out_str);

	if (title_uid!='') {
		var lop_str = lopAfterFor(out_str);

		if (lop_str.match(title_uid)) {
			//uid in lop str, truncate till there
			var trunc_str = lop_str.split(title_uid)[0]+title_uid;
			return $.trim(trunc_str)
		} else {
			//uid not in lop str, tack on
			return $.trim(lop_str+' '+title_uid);
		}
	}

	out_str = out_str.replace(/(^|\s)(mobile|mobiles|free|shipping|ship|cellphone|brand|new|sealed|unlocked|completely|edition|1st|running|sports|phone)(\s|$)/gim,' ');

	out_str=$.trim(out_str.replace(/digital|camera|smartphone|tablet|phablet|point\-and\-shoot|unpacked|warranty/gim,' '));


	if (!isBook()){
	var color_chk = out_str.split(" ").slice(3,7).join(' ');
	var gb_vals = extractTechDeets(out_str.split(" ").slice(7,17).join(' '));
	out_str= $.trim(out_str.split(" ").slice(0,3).join(' ')+' ' + $.trim(color_chk.replace(/\s(black|white|silver|yellow|grey|gray|steel|slate|green|orange|blue|ceramic|metallic|cyan|(slate|steel)(\-|\s)*(grey|gray|black))(\s|$)/gim,' ')))+' '+gb_vals;
	}
	else {
		out_str= $.trim(out_str.split(" ").slice(0,7).join(' '));
	}

    if (isDiaperThing(in_str)) {
        var quantity = in_str.match(/\d+/);
        return out_str + quantity;
    }
	return out_str;


} //

function textFindAll(contents_arr) {
	var text_val='';
	$.each(contents_arr, function () {
			if ($.trim($(this).text())!=''){
					text_val += ' '+$.trim($(this).text());
				} //ifloop
			}); // eachFunction
	return $.trim(text_val);
	
} // textFindAll



function updateWelcomeBox(repl_string_p, type) {
    // so the type should either be an exact match or
    // if it is not-so-confident match, the welcomebox should be empty.

    if (type=='eggjak' || (type == 'sim' && $('#welcomebox').attr('type') != 'eggjak')) {
        var dommed = $(repl_string_p)
        // remove the top bar
        dommed.find('.row-btm-title').remove();
        dommed.find('.row-top').remove();
        $('#welcomebox #wbimg').html(dommed[0].outerHTML);
        $('#welcomebox #wbimg').attr('type', type);
    }
    else if (type=='sim'){
        var dommed = $(repl_string_p)
        // remove the top bar
        dommed.find('.row-btm-title').remove();
        dommed.find('.row-top').remove();
        $('#welcomebox').html(dommed[0].outerHTML);

    }
    // if (!this.switchedCss) {
    $('#welcomebox').css({
        'background-color': '#fff',
        'opacity': '1',
        'box-shadow': '0px 0px 25px 1px rgba(133,133,133,1)',
    });

    if (window.location.hostname.match('flipkart.com')) {
        /// it's spandeal, modify the belchom boccx
        // $('#welcomebox img').css('padding-top', '7px');
        // $('#welcomebox .rp-binder, #welcomebox .more-span, #welcomebox .less-span').css({'width': '62px', 'margin': '0'});
    }

    if (window.location.hostname.match('snapdeal.com')) {
        /// it's spandeal, modify the belchom boccx
        $('#welcomebox img').css('padding-top', '7px');
        $('#welcomebox .rp-binder, #welcomebox .more-span, #welcomebox .less-span').css({'width': '62px', 'margin': '0'});
    }

    if (window.location.hostname.match('amazon.in')) {
        /// it's spandeal, modify the belchom boccx
        $('#welcomebox .more-span, #welcomebox .less-span').css(
            {'margin': '0',
             'margin-top': '-7px',
             'width': '62px'});
        $('#welcomebox .rp-binder').css('width', '62px');
    }
    // }
    $('#hbdiv').css('visibility','visible');
}

function trimRow(repl_strng_var) {
    // trim the title and return the HTML
    var parsed = $(repl_strng_var);
    var title = parsed.find('.row-btm-title').text();
    if (title.length > 60) {
        title = title.slice(0, 60) + '...';
    }
    // put it back together and return back the string as is
    parsed.find('.row-btm-title').text(title);
    return parsed[0].outerHTML;
}

function insertSimilarPrice(repl_strng_var,price_str_var) {

    insertPrice(repl_strng_var,price_str_var);
    return;
    repl_strng_var = trimRow(repl_strng_var);
	var inserted = false;
	var price_val=parseFloat(price_str_var);
	var simprice_arr=$('#'+simprice).children();
	var nofound_arr=$('#'+nofound).children();
	var curr_price;
	var repl_string_p = '<div class="'+hoverimg+'">'+repl_strng_var+'</div>';


	if (!inserted && price_val==-1){
		if (nofound_arr.length==0) {
			$('#'+nofound).html(repl_string_p);
		}
		else {
			//$(repl_string_p).insertAfter(nofound_arr[nofound_arr.length-1]);
			$('#'+nofound).append(repl_string_p);
		}
		inserted = true;
	}

	if (!inserted && simprice_arr.length==0) {
		$('#'+simprice).html(repl_string_p);
		inserted = true;
        updateWelcomeBox(repl_string_p, 'sim');

        $('#'+simprice).on('click','>div',function(e){
        var row_number=$(e.currentTarget).index()+1;
        var link=$(e.currentTarget).find('a').attr('href');
        //console.log($(e.currentTarget).index()+1);
        //console.log($(e.currentTarget).find('a').attr('href'));
        var ga_obj={};
        ga_obj['row_number']=row_number;
        ga_obj['link']=link;

        chrome.runtime.sendMessage({method:'user_clicked_sim',ga_obj:ga_obj});
        });



	}


	for (i=0;!inserted && i<simprice_arr.length;i++) {
		//curr_price=parseFloat($(simprice_arr[i]).children('span.'+simpricespan).html());
		curr_price=parseFloat($(simprice_arr[i]).find('.'+portalmsg).text().slice(1));
		if ( price_val < curr_price) {
			$(repl_string_p).insertBefore(simprice_arr[i]);
			inserted = true;
            updateWelcomeBox(repl_string_p, 'sim');
		} //ifstatement
	} //forstatement
	//hmm if we are here, we have not prepended it yet
	if (!inserted) {
		$(repl_string_p).insertAfter(simprice_arr[simprice_arr.length-1]);
	}
	
	
	//$('#'+whisperbox).css('padding', '4px');
	
	// if (!hoverEventDocked) {
	// 	//console.log('Docking hover evcent ~~~~~~~~~:->');
	// 	$('#'+allprice+', #'+nofound).on('mouseenter', 'p', function() {
	// 		$(this).css({
	// 			'background-color': '#FFF',
	// 			'color': '#343435',
	// 			'text-decoration': 'none'					
	// 		});
	// 	});
		
	// 	$('#'+allprice+', #'+nofound).on('mouseleave', 'p', function() {
	// 		$(this).css({
	// 				'background-color': '#F9F9F9',
	// 				'color': '#484848'					
	// 		});
	// 	});

	// 	hoverEventDocked=true;
	// }
		

	// if (!clickEventDocked) {

 //        $('#'+allprice+' a, #'+simprice+ ' a, #'+nofound+'a').on('click', function(e) {

 //            e.preventDefault()

 //            window.open($(this).find('a').attr('href'));

 //            var toPortal = $(this).find('span.' + portalname).text();

 //            var rowNumber = $(this).index() + 1;
 //            /* defaulting hit type to - allprice */
 //            var hitType = 'allprice';
 //            /* two boxes contains results - simprice, allprice, noprice
 //            need to consider both of them to know the true index
 //            number of current row */
 //            if ($('#' + simprice).has(this).length > 0) {
 //                /* row is under simprice */
 //                rowNumber += $('#' + allprice + ' p').length;
 //                hitType = 'simprice';
 //            } else if ($('#' + nofound).has(this).length > 0) {
 //                /* row is under "search" section */
 //                var priceRows = $('#' + allprice + ' p').length;
 //                var simPriceRows = $('#' + simprice + ' p').length;
 //                rowNumber += (priceRows + simPriceRows);
 //                hitType = 'nofound';
 //            }

 //            var hostname = window.location.hostname;
 //            var motion = {
 //                'redirect': {from: hostname, to: toPortal},
 //                'rowHit': {hitType: hitType, rowNumber: rowNumber}
 //            }
 //            // console.log(motion);
 //            trackMotion(motion);
 //            return false;
 //        });

	// 	clickEventDocked=true;		
	// }
var update_box_image=$('#welcomebox img').attr('src');
if(update_box_image.indexOf("loading_gray.gif")>-1){
//change to some image
   var couponimg=chrome.extension.getURL('mciconalert.png');
   var repl_string =  '<a href="'+'#'+ '">\
                <div class="row-top">\
                </div>\
                <div class="row-btm">\
                    <img' +' src="' + couponimg + '"/>\
                    <div class="row-btm-title">' + ''+ '</div>\
                    <div class="r-box"><span class="price-diffn ask-search"> </span></div>\
                </div>\
              </a>';
    //To show a image in welcomebox while displaying coupon results 
    updateWelcomeBox(repl_string, 'eggjak');


}
}


function insertPrice(repl_strng_var,price_str_var) {
    console.log("insert price called");
    repl_strng_var = trimRow(repl_strng_var);
    // console.log(" insertPrice called by"+arguments.callee.caller.toString());
    
    if (repl_strng_var.match('shopclues')) {
        //too many scammy shitty sellers here
        // insertSimilarPrice(repl_strng_var,price_str_var)
        // return true;
    }
	//console.log('repl_strng_var *** ' + repl_strng_var);
	var inserted = false;
	//console.log('(I P) GOT PRICE_STR_VAR AS : ' + price_str_var);
	var price_val=parseFloat(price_str_var);
	var price_arr=$('#'+allprice).children();

    var repl_str_html = $(repl_strng_var);
    if(repl_str_html.find("."+portalname).text().toLowerCase() == "snapdeal"){
        if(price_str_var==-1){
            send_sd_match("");
        }
        else{
            send_sd_match(repl_str_html.attr("href"));
        }
    }
    

	var nofound_arr=$('#'+nofound).children();
    var oos_arr=$('#'+oos).children();
	var curr_price;
	var repl_string_p = '<div class="'+hoverimg+'">'+repl_strng_var+'</div>';

    if(price_str_var==='oos'){
        if (oos_arr.length==0) {
            $('#'+oos).html(repl_string_p);

            $('#'+oos).on('click','>div',function(e){

                var row_number=$(e.currentTarget).index()+1;
                var link=$(e.currentTarget).find('a').attr('href');
                //console.log($(e.currentTarget).index()+1);
                //console.log($(e.currentTarget).find('a').attr('href'));
                var ga_obj={};
                ga_obj['row_number']=row_number;
                ga_obj['link']=link;
               chrome.runtime.sendMessage({method:'user_clicked_oos',ga_obj:ga_obj});

               if(is_dittory_category()){
                    if(isApparel()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"apparel","link":link});
                    }

                    if(isFootWear()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"footwear","link":link});
                    }

                    if(isWatch()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"watch","link":link});
                    }

               }
               if(is_dittory_sub_categ()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_makkhi_result_click","site":prod_deets.prod_site,"categ":"sub_categ","link":link});

               }

               if(isBook()){
                    chrome.runtime.sendMessage({"method":"book_result_click","deets":prod_deets,"link":link});
               }
                
             send_result_click(link,row_number,false,is_low_price(e.currentTarget));

            });

        }
        else{
            $('#'+oos).append(repl_string_p);   
        }
        return;
    }

	if (!inserted && price_val==-1){
		
        if (nofound_arr.length==0) {
			$('#'+nofound).html(repl_string_p);

            $('#'+nofound).on('click','>div',function(e){
                var row_number=$(e.currentTarget).index()+1;
                var link=$(e.currentTarget).find('a').attr('href');
                //console.log($(e.currentTarget).index()+1);
                //console.log($(e.currentTarget).find('a').attr('href'));
                var ga_obj={};
                ga_obj['row_number']=row_number;
                ga_obj['link']=link;

               if(is_dittory_category()){
                    if(isApparel()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"apparel","link":link});
                    }

                    if(isFootWear()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"footwear","link":link});
                    }

                    if(isWatch()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"watch","link":link});
                    }

               }

              if(is_dittory_sub_categ()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_makkhi_result_click","site":prod_deets.prod_site,"categ":"sub_categ","link":link});

               }


              if(isBook()){
                    chrome.runtime.sendMessage({"method":"book_result_click","deets":prod_deets,"link":link});
               }

                chrome.runtime.sendMessage({method:'user_clicked_search',ga_obj:ga_obj});

                send_result_click(link,row_number,true,is_low_price(e.currentTarget));
            });

		}
		else {
			//$(repl_string_p).insertAfter(nofound_arr[nofound_arr.length-1]);
			$('#'+nofound).append(repl_string_p);
		}
		inserted = true;
	}

	if (!inserted && price_arr.length==0) {

            $('#'+allprice).html(repl_string_p);
            //logging inserted tag
            //console.log(repl_string_p);

            // update the welcome box with this result.
            updateWelcomeBox(repl_string_p, 'eggjak');
            inserted = true;

            $('#'+allprice).on('click','>div',function(e){

                var row_number=$(e.currentTarget).index()+1;
                var link=$(e.currentTarget).find('a').attr('href');
                //console.log($(e.currentTarget).index()+1);
                //console.log($(e.currentTarget).find('a').attr('href'));
                var ga_obj={};
                ga_obj['row_number']=row_number;
                ga_obj['link']=link;

               if(is_dittory_category()){
                    if(isApparel()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"apparel","link":link});
                    }

                    if(isFootWear()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"footwear","link":link});
                    }

                    if(isWatch()){
                        chrome.runtime.sendMessage({"method":"dittory_categ_click","site":prod_deets.prod_site,"categ":"watch","link":link});
                    }

               }

              if(is_dittory_sub_categ()){
                    chrome.runtime.sendMessage({"method":"dittory_categ_makkhi_result_click","site":prod_deets.prod_site,"categ":"sub_categ","link":link});

               }

              if(isBook()){
                    chrome.runtime.sendMessage({"method":"book_result_click","deets":prod_deets,"link":link});
               }

                chrome.runtime.sendMessage({method:'user_clicked_price',ga_obj:ga_obj});
                send_result_click(link,row_number,false,is_low_price(e.currentTarget));

            });



	} else if (!inserted && price_arr.length>0) {
        
        //do it here
   
        for (var i=0;!inserted && i<price_arr.length;i++) {
                curr_price=parseFloat($(price_arr[i]).find('.diffn-val').text().replace(/\,/g, ''));
                // console.log('HERE IS ZE COMPA PRICE ' + curr_price);
                if (( price_val < curr_price)) {
                    $(repl_string_p).insertBefore(price_arr[i]);
                    inserted = true;
                    //logging inserted tag
                    //console.log(repl_string_p);
                    
                } //ifstatement
        } //forstatement
            
        var cur_low_price=parseFloat($(price_arr[0]).find('.diffn-val').text().replace(/\,/g, ''));

        if(price_val<cur_low_price){ 
             // this particular new product has lower value
            // than the one which is currenty sitting inside welcomebox
            // so update the welcomebox with this product; remove old

            updateWelcomeBox(repl_string_p, 'eggjak');
        }


	}
	if (!inserted) {
		//hmm if we are here, we have not prepended it yet
		$(repl_string_p).insertAfter(price_arr[price_arr.length-1]);
	}


	//$('#'+whisperbox).css('padding', '4px');
	
	// if (!hoverEventDocked) {
	// 	//console.log('Docking hover evcent :P~~~~~~~~~');
	// 	$('#'+allprice+', #'+nofound).on('mouseenter', 'p', function() {
	// 		$(this).css({
	// 			'background-color': '#FFF',
	// 			'color': '#343435',
	// 			'text-decoration': 'none'					
	// 		});
	// 	});
		
	// 	$('#'+allprice+', #'+nofound).on('mouseleave', 'p', function() {
	// 		$(this).css({
	// 				'background-color': '#F9F9F9',
	// 				'color': '#484848'					
	// 		});
	// 	});	


	// 	hoverEventDocked=true;
	// }
	
// 	if (!clickEventDocked) {
// 		//console.log('Docking click event :P~~~~~~');
//         /*
// 		$('#'+allprice+', #'+nofound+', #'+simprice).on('click', 'a', function(e) {
// 			//window.open($(this).attr('href'));
// 			e.preventDefault();
// 		});
// */
//         $('#'+allprice+', #'+simprice+ ', #'+nofound).on('click', 'p', function() {

//             window.open($(this).find('a').attr('href'));

//             var toPortal = $(this).find('span.' + portalname).text();

//             var rowNumber = $(this).index() + 1;
//             /* defaulting hit type to - allprice */
//             var hitType = 'allprice';
//             /* two boxes contains results - simprice, allprice, noprice
//             need to consider both of them to know the true index
//             number of current row */
//             if ($('#' + simprice).has(this).length > 0) {
//                  row is under simprice 
//                 rowNumber += $('#' + allprice + ' p').length;
//                 hitType = 'simprice';
//             } else if ($('#' + nofound).has(this).length > 0) {
//                 /* row is under "search" section */
//                 var priceRows = $('#' + allprice + ' p').length;
//                 var simPriceRows = $('#' + simprice + ' p').length;
//                 rowNumber += (priceRows + simPriceRows);
//                 hitType = 'nofound';
//             }

//             var hostname = window.location.hostname;
//             var motion = {
//                 'redirect': {from: hostname, to: toPortal},
//                 'rowHit': {hitType: hitType, rowNumber: rowNumber}
//             }
//             // console.log(motion);
//             trackMotion(motion);
//             return false;
//         });

// 		clickEventDocked=true;		
// 	}

var update_box_image=$('#welcomebox img').attr('src');
if(update_box_image.indexOf("loading_gray.gif")>-1){
//change to some image
   var img=chrome.extension.getURL('empty.png');
   var repl_string =  '<a href="'+'#'+ '">\
                <div class="row-top">\
                </div>\
                <div class="row-btm">\
                    <img' +' src="' + img + '"/>\
                    <div class="row-btm-title">' + ''+ '</div>\
                    <div class="r-box"><span class="price-diffn ask-search"> </span></div>\
                </div>\
              </a>';
    //To show a image in welcomebox while displaying coupon results 
    updateWelcomeBox(repl_string, 'eggjak');


}

}//eof



function brandStrip(in_str) {
	var out_str = in_str.replace(/adidas|asics|bata|converse|crocs|fila|lotto|skechers|timberland|nike|puma|woodland|reebok|lee\scooper|red\stape|kalenji|catwalk/gi,"");
	
	if (out_str!=in_str) {
		return $.trim(out_str);
		}

	out_str=out_str.replace(/allen\ssolly|artengo|calvin\sklein|campus|carlton\slondon|clarks|dunlop|franco\sleone|levi|louis\sphilippe|provogue|salomon|slazenger|vans|wilson|yonex/gi,"");

	if (out_str!=in_str) {
		return $.trim(out_str);
		}

	out_str = out_str.replace(/united\scolors\sof\sbenetton|ralph\slauren|park\savenue|hugo\sboss|peter\sengland|davidoff|wrangler|freecultr|blackberrys|status\squo|fastrack|casio|titan|fossil|tommy|hilfiger|timex|maxima|citizen|giordano/gi,"");

	if (out_str!=in_str) {
		return $.trim(out_str);
		}
	return out_str;

} //brandStrip


function SinFind(in_str) {
	syn_strs={'flats':'sandals','sandals':'flats'};
	if (in_str in syn_strs) {
		return syn_strs[in_str];
		}
	else  {
		return false;
		}

} // SinFind

function addSins(in_arr) {
	var out_arr = [];
	var syn_val;
	for (var i=0;i<in_arr.length;i++){
		syn_val = SinFind(in_arr[i]);
		if (syn_val) {
			out_arr.push(syn_val)
		}
			out_arr.push(in_arr[i]);
	}
	return out_arr

} // addSins


function commonWordLen(in_str_a,in_str_b) {
    //NOT BIDIRECTIONAL, BUT OK AS RARELY DO SUBSTRINGS SIT INSIDE STRINGS
    var in_str_b_lower=$.trim(in_str_b).toLowerCase();
    
	var curr_srch_words = $.trim(in_str_a).toLowerCase().split(/\s+/gi);
	curr_srch_words = addSins(curr_srch_words);
	var common_length = curr_srch_words.filter(function (each) {
    			if (in_str_b_lower.indexOf(each)>-1 ){
            		return true;
    				}
				}).length;

	return common_length;

}

function checkProductMatch(server_prod_deets_var, dyn_prod_deets_var, repl_strng_var, raw_search_url) {

	var compare_title;
    var chk_st=(server_prod_deets_var.prod_site=='az');
	if  ((server_prod_deets_var=='') || ($.trim(server_prod_deets_var.prod_title)=='') || (server_prod_deets_var.prod_avail==false)) {
        
		compare_title = prod_deets.prod_srch;
	}

	else {
		compare_title = cleanMatchTitle(server_prod_deets_var.prod_title);
	}
	


	var check_title=cleanMatchTitle(dyn_prod_deets_var.prod_title.toLowerCase());	
	var check_title_len=check_title.split(/\s+/gi).length
	//now append spaces
	check_title=' '+check_title+' ';
	var curr_srch_words = $.trim(compare_title).toLowerCase().split(/\s+/gi);

    
    

	common_length = commonWordLen(compare_title,check_title);





	var match_val='nan';
	if (common_length>4){
		match_val = 'y';
		//return true;
	}

	else if (common_length==curr_srch_words.length) {
		if ((common_length*3)<check_title_len) {

			match_val = 'm';
			//return false;
 
		} else  {
			match_val = 'y';
			//return true;
			}
	}
	else if ((common_length>1) && (common_length==curr_srch_words.length-1)) {

		if (commonWordLen(brandStrip(compare_title),brandStrip(check_title))>0){

			if (curr_srch_words.length<4) {
				match_val = 'm';
			} else {
				match_val = 'y';
			}
		}	
		else {
			match_val = 'n';
		}
	}

	else if (common_length>1) {
		match_val = 'm';
	}

	else {
       //added this to dsiplay books in increasing order of price
        if(isBook()){
            match_val='y';
        }

		else if (isLifeStyle()) {
			match_val = 'n';
		} else {
			
			match_val = 'm';
		}
	
		//return false;
	}

    if (chk_st && match_val=='n'){
        match_val='m';
    } 

	return match_val;
} //checkProductMatch

//

function insertPriceSendData(server_prod_deets_var, dyn_prod_deets_var, repl_strng_var, raw_search_url) {



	var price_val, orig_price, stat_val='avail';
	var server_price;
	if ((server_prod_deets_var=='') || (typeof server_prod_deets_var===undefined) ){
        
		//TODO is the best idea?
		server_price=-10;
	} else {
        
		server_price=parseFloat(server_prod_deets_var.prod_price);
	}

	if (isNaN(parseFloat(dyn_prod_deets_var['prod_price']))) {
        
		stat_val='notfound';
	} //if
	else {
        
            

			price_val=parseFloat(dyn_prod_deets_var['prod_price']);
			orig_price=parseFloat(dyn_prod_deets_var['orig_prod_price']);


			if ((orig_price*4<price_val) || (orig_price>4*price_val)) {
					stat_val='notfound';
			}			

			else {
				//sendregular
			
				//check if title matches

                
				var check_product_match = checkProductMatch(server_prod_deets_var, dyn_prod_deets_var, repl_strng_var, raw_search_url);

				if (check_product_match=='y'){
					stat_val='avail';
				}
				else if (check_product_match=='m'){
					stat_val='similar';
				} else {
					stat_val='notfound';
				}

			}
		
	} //else



	if (stat_val=='notfound') {
        console.log('ipsp not found');
		insertPrice(createStringLink(dyn_prod_deets_var, raw_search_url,'notfound'),-1);
		
		dyn_prod_deets_var.prod_title=prod_deets.prod_srch;
		dyn_prod_deets_var.prod_link=raw_search_url;
		dyn_prod_deets_var.prod_avail=false;
		dyn_prod_deets_var.prod_price=-1;
		
	} else if (stat_val=='similar') {
        console.log('ipsp similar');
        // trackDisplayedResults(dyn_prod_deets_var.prod_link);
		// insertSimilarPrice(createStringLink(dyn_prod_deets_var, raw_search_url,'similar'),price_val);
        insertPrice(createStringLink(dyn_prod_deets_var, raw_search_url,'similar'),price_val);

		dyn_prod_deets_var.prod_title=prod_deets.prod_srch;
		dyn_prod_deets_var.prod_link=raw_search_url;
		dyn_prod_deets_var.prod_avail=false;
		comparePrices(dyn_prod_deets_var);

	} else {
        console.log('ipsp found');
        // trackDisplayedResults(dyn_prod_deets_var.prod_link);
		insertPrice(createStringLink(dyn_prod_deets_var, raw_search_url,'found'),dyn_prod_deets_var['prod_price']);
		comparePrices(dyn_prod_deets_var);
	}

	
	sendDynData(dyn_prod_deets_var);




} //checkinsert


var get_pricediff_result_row = function(curr_prod_price, page_prod_price) {
    /* Returns a HTML snippet which would become a row in the pop up box.
       Based on price difference different classes are applied to show "less/more"
       indicators in the price section of the row */
    var difference_str = '';

    if((curr_prod_price==-1)||(curr_prod_price=='-1')){
         difference_str = '<div class="r-box orange-bg"><span class="price-diffn">\
                                <p class="rp-binder" style="color:#505050 !important;">\
                                    <span class="price-diffn ">' + 'out of stock'+ '</span>\
                                </p>\
                            </div>';
        return difference_str;
    }
    if (curr_prod_price < page_prod_price) {
        difference_str = '<div class="r-box green-bg"><span class="price-diffn">\
                                <p class="rp-binder" style="color: #006700 !important;">\
                                    <span class="rupee-sign">&#8377;</span>\
                                    <span class="diffn-val">' + curr_prod_price.toLocaleString() + '</span>\
                                </p>\
                            </div>';
        if(ga_low_price_displayed==false){

            makkhi_min=chrome.extension.getURL('makkhichoose_shadow_fullgreenbg_lowprice.png');
            makkhi_min_green_bg=chrome.extension.getURL('makkhichoose_shadow_glowgreenbg_lowprice.png');
            $('#makkhi_min_box img').attr('src',makkhi_min_green_bg);
            chrome.runtime.sendMessage({method:'low_price_displayed',prod_site:prod_deets.prod_site,categ:prod_deets.prod_categ});
            ga_low_price_displayed=true;

        }

    } else {
        difference_str = '<div class="r-box orange-bg"><span class="price-diffn">\
                                <p class="rp-binder" style="color: #FF4B00 !important;">\
                                    <span class="rupee-sign">&#8377;</span>\
                                    <span class="diffn-val">' + curr_prod_price.toLocaleString() + '</span>\
                                </p>\
                            </div>';
    }
    return difference_str;


}



var removeParentheticals = function(orig_ttl){
	return orig_ttl.replace(/\(.+?\)/g,"");
};

var matchParentheticals = function(orig_ttl){
	var matched_val = orig_ttl.match(/\(.+?\)/g);
	if (matched_val) {
		return matched_val[0];
	}
	else {
		return '';
	}
};

var trimForNT = function(orig_ttl){
	var trimmed_ttl=orig_ttl.split(' ');
	trimmed_ttl.splice(5);
	return $.trim(trimmed_ttl.join(' ').replace(/\(.+?\)/g,""));
};



//extract memory strings and search for both variants --with space and with-no space
var extractGB = function(str_val) {
	if (str_val.match('\\d+GB')) {
		return str_val.match('\\d+GB') + ' ' + str_val.match('\\d+GB')[0].replace('GB',' GB');
	}
	else if (str_val.match('\\d+\\s+GB')) {
		return (str_val.match('\\d+\\s+GB') + ' ' + str_val.match('\\d+\\s+GB')[0].replace(/\s+/g, ''));
	}

	else {
		return '';
		}

};

var extractTechDeets = function (str_val) {
	var match_val = str_val.match(/(\d+(g|mp))(\s|$)|wifi/gi);
	if (match_val) {
		return (extractGB(str_val)+' '+match_val.join(" "));
	}
   else {
	   return extractGB(str_val);
	}
}



var checkTitleMatch = function(orig_ttl,srch_ttl){

	var orig_words = $.trim(orig_ttl).toLowerCase().split(' ');
	var srch_words = $.trim(srch_ttl).toLowerCase().split(' ');
	var titlesMatched = true;

	if (orig_words.length >=3 && srch_words.length >=3) {
	    for (var i = 0;i<3; i++)  {
			if (orig_words[i] != srch_words[i]) {

				titlesMatched = false;
				return false;             
			}        
		}

	}
	else if (orig_words.length == srch_words.length)  {
	    for (var i = 0;i<orig_words.length; i++)  {
			if (orig_words[i] != srch_words[i]) {

				titlesMatched = false;
				return false;             
			}        
		}
	}
	else {
		titlesMatched = false;
		return false;
		} 
	if (titlesMatched) {
		return true;
	}

};



var checkGBMatch = function(orig_ttl,srch_ttl){

	if (orig_ttl.match('\\d+\\s*GB') && srch_ttl.match('\\d+\\s*GB')) {		
		var orig_gb, srch_gb;
		orig_gb = 	orig_ttl.match('\\d+\\s*GB')[0].replace(/\s*GB/g, '');
		srch_gb = 	srch_ttl.match('\\d+\\s*GB')[0].replace(/\s*GB/g, '');
		if (srch_gb != orig_gb) {
			return false;
			}
		else {
			return true;
		}
	}
	else {
		return true;
	}

};



// msp

function getFetchSites() {
	

    if (isBaby()) {
        
		if (isLifeStyle()) {
			return babylife_sites;
		} else {
			return baby_sites;
		}
	}
	else if (isElec()) {
        
		return elec_sites;
	}
    else if (isBook()) {
        return book_sites;
        
    }
	else if (isApparel()) {
        
		// return life_sites;
		return apparel_sites;
	}
	else if (isWatch()) {
        
		return watch_sites;
	}
	else {
		return top_sites;
        
	}
}



function capitaliseWord(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function jsonBookResponse(response) {
	var obj = JSON.parse(response);
	if (Object.keys(obj).length > 0) {
		var isbn_val=Object.keys(obj)[0];
		var srch_link = 'http://www.mysmartprice.com/books/msp_book_single.php?q='+obj[isbn_val]['isbn']
		var repl_strng=capitaliseWord(obj[isbn_val]['merchant'])+': Rs.'+obj[isbn_val]['price']+ ' <a href="' + srch_link + '" target="_blank" style="display:inline !important">Search</a> <br>';
		if ($('#'+msprice).hasClass('empty')){
			$('#'+msprice).removeClass('empty');
			$('#'+msprice).html(repl_strng);
		}
		else {
			$('#'+msprice).append(repl_strng);
			
		}
	}

}



var getPrAlertStr = function() {
	return '<p id="'+mfpricedesc+'" style="display:inline !important"> <span id="'+mfpricealert+'" style="display:inline !important"></span> Lower price found! Click on tag at the screen border to see.</p>';
}


var setPrAlertCSS = function() {
    

	$('#'+mfpricedesc).css({
		'font-size':'8px',
		'color':'#95002b',
		'background-color':'#a6f16c',
		'margin':'5px'});

   if (prod_deets.prod_site=='fk') {
	$('#'+mfpricealert).css({
		'background-image':alert_url_sml_str,
		'border-width':'1px',
		'height':'32px',
		'width':'32px',
		'position':'relative',
		'float':'left',
		'outline':'none'});
    if ($('#'+mfpricealert).length>0){
        $('#'+mfpricealert)[0].style.setProperty( 'display', 'inline', 'important' );
    }
}
else {
	$('#'+mfpricealert).css({
		'background-image':alert_url_sml_str,
		'border-width':'1px',
		'height':'32px',
		'width':'32px',
		'position':'relative',
		'float':'left',
		'outline':'none'});
    if ($('#'+mfpricealert).length>0){
        $('#'+mfpricealert)[0].style.setProperty( 'display', 'inline', 'important' );
    }
} //else


}

function publishProdData(server_prod_deets_var) {
	return function(response,textStatus,sent_req) {
		insertPrice(createStringLink(server_prod_deets_var,'','found'),server_prod_deets_var.prod_price);
		comparePrices(prod_deets.prod_price,server_prod_deets_var.prod_price,prod_deets.prod_site);
	}//closure
} //publishProdData

function genFail(server_prod_deets_var, fetch_site, fetch_url) {
	return function(response,textStatus,sent_req) {
		if (server_prod_deets_var!='') {
			publishProdData(server_prod_deets_var);
		}//ifstale
		else {

			var err_prod_deets ={
            title:prod_deets.prod_title,
            prod_bracktitle:'',
            prod_fulltitle:'',
            prod_categ:'',
            prod_price: -1,
            orig_prod_price: prod_deets.prod_price,
            prod_link: createFetchURL('', fetch_site),
            prod_site:fetch_site,
            bundle_key: prod_deets.bundle_key,
            call_type: prod_deets.call_type,
            prod_avail: false,
            img_src:prod_deets.prod_img,
            website:fetch_site		
        	};
			
			// sendDynData(err_prod_deets);
			// insertPrice(createStringLink(err_prod_deets,this.url,'notfound'),-1);
            insert_manual_search_box(make_manual_search_box(err_prod_deets));

		}
	} //closure
}

function addNoFetchSiteLink(fetch_site){

	var nofetch_prod_deets ={
			title:prod_deets.prod_title,
			prod_bracktitle:'',
			prod_fulltitle:'',
			prod_categ:'',
			prod_price: -1,
			orig_prod_price: prod_deets.prod_price,
			prod_link: createFetchURL('', fetch_site),
			prod_site:fetch_site,
			bundle_key: prod_deets.bundle_key,
			call_type: prod_deets.call_type,
			prod_avail: false,
            img_src:prod_deets.prod_img,
            website:fetch_site

			};
	// insertPrice(createStringLink(nofetch_prod_deets,createFetchURL('', fetch_site),'notfound'),-1);
    insert_manual_search_box(make_manual_search_box(nofetch_prod_deets));

} //addNoFetchSiteLink



function alertEach(dyn_prod_deets_var) {
	return function (each) {
		alert(dyn_prod_deets_var.prod_site+' to: '+each);
		}//closure
}//alertEach



var comparePrices = function(dyn_prod_deets_var) {

	var orig_price_fl, srch_price_fl;

	if ((dyn_prod_deets_var.prod_price=='-1') || (dyn_prod_deets_var.prod_price==-1)) {
		return true;
		}


	if (typeof prod_deets.prod_price == 'string') {
		orig_price_fl = parseFloat(prod_deets.prod_price.replace('Rs.','').replace(',',''));
	} 
	else {
		orig_price_fl = parseFloat(prod_deets.prod_price);
	}

	if (typeof dyn_prod_deets_var.prod_price == 'string') {
		srch_price_fl = parseFloat(dyn_prod_deets_var.prod_price.replace('Rs.','').replace(',',''));
	} 
	else {
		srch_price_fl = parseFloat(dyn_prod_deets_var.prod_price);
	}

	if (srch_price_fl<orig_price_fl) {
		

		if ($('span.'+whisperboxtab).length > 0) {


			$('#'+ whisperbox + ' span.'+whisperboxtab).css({
				'background-image':alert_url_str,'display':'inline !important'});
			
			
			$('#' + whisperbox +' span.'+whisperboxtab).addClass(whisperboxalerttab).removeClass(whisperboxtab);
			
		} //ifwhispertab

		if ($('#'+mfpricedesc).length == 0) {
            if(prod_deets.prod_site!='az')
            {
            $(getPrAlertStr()).insertAfter($(cssLocs[prod_deets.prod_site].pricealert));
            // SetCSSforAlertImg
            // setPrAlertCSS();             

            }
		}


		return true;

		}
	else {
		return false;
		}

};

function encodeURIComponentFix(in_str) {
	return encodeURIComponent(in_str).replace(/%20/g,'+').replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}

//NOTE*** One more insertPiddle after this one!
function insertPiddleDirect(prod_deets){
    try{
        console.log('Looking for birth marks!');
        var id_val;
        if (prod_deets.prod_site == 'fk') {
                if (prod_deets.prod_link.indexOf('?pid=') > -1) {
                    id_val=prod_deets.prod_link.split('?pid=')[1].split(/\&|\#/)[0];  
                }
                else if (prod_deets.prod_link.indexOf('&pid=') > -1) {
                    id_val=prod_deets.prod_link.split('&pid=')[1].split(/\&|\#/)[0];  
                }
                else if ($(cssLocs.fk.pid).length > 0) {
                    id_val=$(cssLocs.fk.pid).attr('data-pid');
                }
                else {
                        //no prod id?
                        id_val='';
                }
        }
        else if (prod_deets.prod_site == 'sd') {

            var sd_link = $.trim($('link[rel="canonical"]').attr('href'));

            if ((sd_link=='') || (sd_link==undefined)) {
            id_val=prod_deets.prod_link.split('#')[0].split('/').pop().split('?')[0];
            id_val = id_val.match(/^\d+/gim)[0];
            }
            else {
                id_val=sd_link.split('/').pop().split('?')[0];
                id_val = id_val.match(/^\d+/gim)[0];
            }



        }
        else if (prod_deets.prod_site == 'az') {

            var az_link = $('link[rel="canonical"]').attr('href');

            if (az_link.indexOf('/dp/')>-1) {
                id_val = az_link.split('/dp/')[1].split('/')[0];
            }

            else if (prod_deets.prod_link.match(/\?asin=|\&asin=/i) != null){
                id_val = prod_deets.prod_link.split(/\?asin=|\&asin=/i)[1].split(/\/+/)[0].split('&')[0];
            }

            else if (prod_deets.prod_link.indexOf('/dp/') > -1){
                id_val = prod_deets.prod_link.split('/dp/')[1].split('/')[0].split('?')[0];
            }
            else if (prod_deets.prod_link.indexOf('/product/') > -1){
                id_val = prod_deets.prod_link.split(/\/product\/+/)[1].split(/\/+/)[0].split('?')[0];
            }
            
            else {

                id_val = '';
            }

        }
        else if (prod_deets.prod_site == 'ja') {

            id_val = prod_deets.prod_link.split('.html')[0].split('-').pop();
        }
        else if (prod_deets.prod_site=='my') {
            id_val=prod_deets.prod_link.split('/buy')[0].split('/').pop();
            id_val = id_val.match(/^\d+/gim)[0];

        }

        else if (prod_deets.prod_site == 'hs') {
            if (prod_deets.prod_link.indexOf('/product:')>-1){
                id_val = prod_deets.prod_link.split('/product:')[1].split('/')[0];
            }
            else if (prod_deets.prod_link.indexOf('homeshop18.com/')>-1) {
                id_val = prod_deets.prod_link.split('homeshop18.com/')[1].split('/')[0];
            }
            else {
                id_val='';
            }
     
        }//homeshop18

        else if (prod_deets.prod_site == 'fc') {
            if (prod_deets.prod_link.indexOf('/product-detail')>-1){
                id_val=prod_deets.prod_link.split('/product-detail')[0].split('/').pop();
            }
            else {
                id_val='';
            }
     
        }//firstcry

        else if (prod_deets.prod_site == 'bo') {
            if (prod_deets.prod_link.indexOf('p_')>-1){
                id_val=prod_deets.prod_link.split('p_')[1].split(/\?|\&/gi)[0];
            }
            else {
                id_val='';
            }
     
        }//babyoye

        else if (prod_deets.prod_site == 'sc') {
            if ($(cssLocs.sc.pid).length>0){
                    id_val=$(cssLocs.sc.pid).attr('value');
                }
            else {
                id_val='';
            }
     
        }//shopclues
        else if (prod_deets.prod_site == 'it') {

            id_val=prod_deets.prod_link.split('/').pop().split('?')[0];
     
        }//indiatimes

        else if (prod_deets.prod_site == 'pt') {

            id_val=prod_deets.prod_link.split('/').pop().split('-').pop();

            if (id_val=='') {
                id_val=$(cssLocs.pt.pid).text();
            }
     
        }//paytm

        else if (prod_deets.prod_site == 'eb') {

            id_val=prod_deets.prod_link.split('/').pop().split('?')[0];

            if (id_val=='') {
                id_val=$(cssLocs.eb.pid).text();
            }
     
        }//ebay

        else {

            id_val='';
        }
        //id_val='';
        prod_deets.product_id=id_val;

    }
    catch(err){

    }
  
    
}


function insertPiddle(prod_deets, resp_elem){

    if (resp_elem==undefined) {
        insertPiddleDirect(prod_deets);
        return true;
    }

    console.log('we be calling after a catch and throw');
    var id_val;

    if (prod_deets.prod_site == 'fk') {

            if (prod_deets.prod_link.indexOf('?pid=') > -1) {
                id_val=prod_deets.prod_link.split('?pid=')[1].split(/\&|\#/)[0];  
            }
            else if (prod_deets.prod_link.indexOf('&pid=') > -1) {
                id_val=prod_deets.prod_link.split('&pid=')[1].split(/\&|\#/)[0];  
            }
            else {
                    //no prod id?
                    id_val='';
            }
    }
    else if (prod_deets.prod_site == 'sd') {

        var sd_link = $('link[rel="canonical"]').attr('href');
        id_val=sd_link.split('/').pop().split('?')[0];
        id_val = id_val.match(/^\d+/gim)[0];


    }
    else if (prod_deets.prod_site == 'az') {

        var az_link = $('link[rel="canonical"]').attr('href');

        if (az_link.indexOf('/dp/')>-1) {
            id_val = az_link.split('/dp/')[1].split('/')[0];
        }

        else if (prod_deets.prod_link.match(/\?asin=|\&asin=/i) != null){
            id_val = prod_deets.prod_link.split(/\?asin=|\&asin=/i)[1].split(/\/+/)[0].split('&')[0];
        }

        else if (prod_deets.prod_link.indexOf('/dp/') > -1){
            id_val = prod_deets.prod_link.split('/dp/')[1].split('/')[0].split('?')[0];
        }
        else if (prod_deets.prod_link.indexOf('/product/') > -1){
            id_val = prod_deets.prod_link.split(/\/product\/+/)[1].split(/\/+/)[0].split('?')[0];
        }
        else {

            id_val = '';
        }

    }
    else if (prod_deets.prod_site == 'ja') {
        id_val = prod_deets.prod_link.split('.html')[0].split('-').pop();
    }
    else if (prod_deets.prod_site=='my') {
        id_val=prod_deets.prod_link.split('/buy')[0].split('/').pop();
        id_val = id_val.match(/^\d+/gim)[0];

    }

    else if (prod_deets.prod_site == 'hs') {
        if (prod_deets.prod_link.indexOf('/product:')>-1){
            id_val = prod_deets.prod_link.split('/product:')[1].split('/')[0];
        }
        else if (prod_deets.prod_link.indexOf('homeshop18.com/')>-1) {
            id_val = prod_deets.prod_link.split('homeshop18.com/')[1].split('/')[0];
        }
        else {
            id_val='';
        }
 
    }//homeshop18

    else if (prod_deets.prod_site == 'fc') {
        if (prod_deets.prod_link.indexOf('/product-detail')>-1){
            id_val=prod_deets.prod_link.split('/product-detail')[0].split('/').pop();
        }
        else {
            id_val='';
        }
 
    }//firstcry

    else if (prod_deets.prod_site == 'bo') {
        if (prod_deets.prod_link.indexOf('p_')>-1){
            id_val=prod_deets.prod_link.split('p_')[1].split(/\?|\&/gi)[0];
        }
        else {
            id_val='';
        }
 
    }//babyoye

    else if (prod_deets.prod_site == 'sc') {
        if (resp_elem.find(cssLocs.sc.pid).length>0){
                id_val=resp_elem.find(cssLocs.sc.pid).attr('value');
            }
        else {
            id_val='';
        }
 
    }//shopclues
    else if (prod_deets.prod_site == 'it') {

        id_val=prod_deets.prod_link.split('/').pop().split('?')[0];
 
    }//indiatimes

    else if (prod_deets.prod_site == 'pt') {

        id_val=prod_deets.prod_link.split('/').pop().split('-').pop();

        if (id_val=='') {
            id_val=resp_elem.find(cssLocs.pt.pid).text();
        }
 
    }//paytm

    else if (prod_deets.prod_site == 'eb') {

        id_val=prod_deets.prod_link.split('/').pop().split('?')[0];

        if (id_val=='') {
            id_val=resp_elem.find(cssLocs.eb.pid).text();
        }
 
    }//ebay
    else {

        id_val='';
    }
    //id_val='';
    prod_deets.product_id=id_val;
}




function isClothing() {
	var reg_pat = /(clothing)/gi;

	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	 return true;
	}
	else {
	 return false;
		}
} //isClothing

function isWatches() {
	var reg_pat = /(watch|timex|fossil|fastrack|chronograph|titan)/gi;

	if (prod_deets.prod_categ.match(reg_pat) || prod_deets.prod_categ_alt.match(reg_pat) || prod_deets.prod_title_raw.match(reg_pat)) {

    //console.log('DEBUG: TODO DESPITE COMMENT REMOVE!');
    if (prod_deets.prod_site=='ja') {
        if ($('#configSku').length>0) {
            prod_deets.product_id = $('#configSku').val();
        }
        else {
            prod_deets.product_id = $.trim($('title').html().split('|').pop());
        }
    }

	 return true;
	}
	else {
	 return false;
		}
} //isWatches
function fetchFromElec() {

	if (isMobile() && mobi_sites.indexOf(prod_deets.prod_site)>-1 ) {
		console.log('entering world for electastic threads');
		return true;
	}
	else {
		console.log('no simworld regular humdrum wonly');
		return false;
	}
	console.log('really should not be here kid, dangerous');
}


function fetchFromSim() {
	if (isClothing() && sim_sites.indexOf(prod_deets.prod_site)>-1 ) {
		console.log('entering simworld for huetastic threads');
		return true;
	}
	else {
		console.log('no simworld regular humdrum wonly');
		return false;
	}
	console.log('really should not be here kid, dangerous');
}


function fetchFromFootie() {

	if (isFootWear() && foot_sites.indexOf(prod_deets.prod_site)>-1 ) {
		console.log('entering world for footie treads');
		return true;
	}
	else {
		console.log('no simworld regular humdrum wonly');
		return false;
	}
	console.log('really should not be here kid, dangerous');
}


function fetchFromLappy() {
	return false;

	if (isLaptop() && laptop_sites.indexOf(prod_deets.prod_site)>-1 ) {
		console.log('entering world for lappy happies');
		return true;
	}
	else {
		console.log('no lappy nappies regular humdrum wonly');
		return false;
	}
	console.log('really should not be here kid, dangerous');
}

function fetchFromClockTower() {

	if (isWatches() && watch_sites.indexOf(prod_deets.prod_site)>-1 ) {
		console.log('entering clocktower');
		return true;
	}
	else {
		console.log('no clocktower regular humdrum wonly');
		return false;
	}
	console.log('really should not be here kid, dangerous');
}

function insertPriceSendSimData(server_prod_deets_var,link_type,price_str) {
	if (('wd' in server_prod_deets_var) && (server_prod_deets_var['wd']==3)) {
		console.log('stale rice reaction no insertions');
        //console.log('DEBUG: REMOVE BELOW');
        //console.log(server_prod_deets_var);
		sendPuddleData(server_prod_deets_var);

	}
	else {
        //adding searchid as track id as the result is from backprice search
        // trackDisplayedResults(server_prod_deets_var.uid);
		insertPrice(createStringLinkSim(server_prod_deets_var,link_type,'sim',server_prod_deets_var['score']),price_str);
        // insertPrice(createStringLinkSim(prods_rec_arr[i],'found','',prods_rec_arr[i]['score']),prods_rec_arr[i].prod_price);
		comparePrices(server_prod_deets_var);
		sendPuddleData(server_prod_deets_var);
	}
}

function insertStalePriceOnly(server_prod_deets_var,link_type,price_str) {
	if (server_prod_deets_var.wd!=3) {
    // trackDisplayedResults(server_prod_deets_var.uid);    
	insertPrice(createStringLinkSim(server_prod_deets_var,link_type,'oos',server_prod_deets_var['score']),'oos');
    elastic_data_displayed_as_oos=elastic_data_displayed_as_oos+1;
	comparePrices(server_prod_deets_var);
	} else {
		//send fail data to server
		console.log('couldnt resuscitate stale rice, still stinks, sadly');
		server_prod_deets_var.prod_price = -1;
		sendPuddleData(server_prod_deets_var);
	}
}

function setOfferMessage(response) {
	var show_msg_str, show_msg_bool
	show_msg_bool=response['sh'];
	if (show_msg_bool) {
		show_msg_str=response['msg'];
			$('#'+highlightm).html('<span style="font-style:bold; color:#1A5430; \
			 display:inline !important"><img src="'+spr_url_img+'"" height="32px">'+show_msg_str+' \
	 		<img src="'+az_url_img+'"" height="18px"> <a href="http://makkhichoose.com/winner?offerid='+response['offerid']+'&uid='+response['uid']+'" \
	 		style="display:inline !important" target="_blank">Click here to get it!</a></span>');	
	 		$('#'+cutemsg).html('');
	}
	else {
		return false;
	}
}

function checkDeetsComplete() {

	if ($.trim(prod_deets.prod_title)=='' || $.trim(prod_deets.prod_price)=='' || prod_deets.product_id ==  '') {
		//hmm data missing, check to see if we have CSS that will help fill this in
        if ($.trim(prod_deets.prod_title)==''){
            console.log('title not present')
        }
        if($.trim(prod_deets.prod_price)==''){
            console.log('price not present');
        }
        if(prod_deets.product_id ==  ''){
            console.log('pid present');
        }        
		console.log('whoa, deets looking weak and thin!');

        // console.log('prod_title:'+$.trim(prod_deets.prod_title)+'prod_price:'+$.trim(prod_deets.prod_price+"pid:"+prod_deets.product_id));

		return false;
	}
	else {
		console.log('deets look full and phat');
		return true;
	}

	//are the details there?

	//if not, go check localStorage to see if CSS exists
}//checkDeetsComplete

function rePopDeets(cssLocsVigor) {

	
	var curr_website = prod_deets.prod_site;

	prod_deets.prod_categ = $.trim($(cssLocsVigor[curr_website].category).text());
	prod_deets.prod_categ_alt = $.trim($(cssLocsVigor[curr_website].category_alt).text());

	//cssLocsVigor in helperfuncs.js has the details stored
	prod_deets.prod_title = cleanTitle($(cssLocsVigor[curr_website].title).text());

	//store text in brackets separately; this makes search heard 
	prod_deets.prod_bracktitle = $.trim($(cssLocsVigor[curr_website].bracktitle).text());

	//if price not in this location, look in alternate
	var chk_price=$.trim($(cssLocsVigor[curr_website].price).text());

	if (chk_price=='') {
		prod_deets.prod_price = cleanPrice($(cssLocsVigor[curr_website].price_alt).text());
	}
	else {
		prod_deets.prod_price = cleanPrice(chk_price);
	}

	prod_deets.prod_srch = prod_deets.prod_title;

	//prod_deets.prod_srch='';

	if (isBook()) {
			//check if this is paperback or hardcover
			if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
				prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
			}

            book_details=get_book_details(prod_deets.prod_site)     
            if((book_details.isbn_10!='') || (book_details.isbn_13 !='') ){
                if((book_details.isbn_13!='')){

                    console.log("added isbn_13 as search");
                    //prod_deets.prod_srch="isbn:"+book_details.isbn_10;
                    prod_deets.prod_srch=book_details.isbn_13;
                    console.log(prod_deets.prod_srch);
                }

                else{
                    if(book_details.isbn_10 !=''){
                        console.log("added isbn_10 as search");

                        prod_deets.prod_srch=book_details.isbn_10;
                }
                else{
                    console.log("not set search details");
                }


                    }
                }
            
	}
	else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
				prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
			}


	return checkDeetsComplete();

}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function repairimglinks(img_link) {
    console.log('embiggening image');
    if (img_link.indexOf('amazon.')>-1) {
        var page_id = img_link.split('/').pop();
        var new_page_id = page_id.replace(/\..+\./,'.');
        img_link=img_link.replace(page_id,new_page_id);
    }
    else if (img_link.indexOf('assets.mynt')>-1) {
        img_link = img_link.replace('h_64,q_95,w_48','h_480,q_95,w_360');
    }
    else if (img_link.indexOf('sdlcdn')>-1) {
        img_link = img_link.replace('/small/','/large/');
    }
    else if (img_link.indexOf('flixcart.com')>-1) {
        img_link = img_link.replace('100x100','400x400');
    }

    return img_link;
}

function getGraph()
{
    if(prod_deets.product_id)
    {
        console.log('asking server for rice history');
        /*
		var graph_obj ={'pid':prod_deets.product_id , 'site': prod_deets.prod_site };
        
        var req_send = backPostGet({
            type: "POST",
           // url: "http://shades.makkhichoose.com/pricealert/gethistoryprice",
           url: "http://pricegraph.smartmakkhi.appspot.com/pricealert/gethistoryprice",
            data: JSON.stringify(graph_obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 10000,
        });
		*/

        var url= "https://data1.makkhichoose.com/gethistoryprice?pid=~~PID~~&site=~~SITE~~";
		url = url.replace('~~PID~~', prod_deets.product_id).replace('~~SITE~~', prod_deets.prod_site);
		var req_send = backPostGet({
           type: "GET",
           url: url,
		   dataType: "json",
           timeout: 10000,
        });
    req_send.done(getGraphSuccess );
    req_send.fail(getGraphFailure );
    }
}

function getGraphSuccess(response) {
    console.log("in graphsuccess");
    if($(cssLocs[prod_deets.prod_site].graph).length && response.found==true && response.listprice.length > 4){    
        console.log('mission success');
        
        setGraphCss(response);
        
        var s1 = document.createElement('script');
        s1.src = 'https://www.google.com/jsapi';
        s1.setAttribute('type','application/javascript');
        s1.onload = function(){
             
            var s = document.createElement('script');
            var script1 = document.createElement("script");

            s.src = 'https://cdn.rawgit.com/ankane/chartkick.js/master/chartkick.js';
            
            s.setAttribute('type','application/javascript');
            script1.setAttribute('type','application/javascript');

            s.onload = function() {
                           
                var scriptsrc = '';
                var graphhtml = '<div id="price-history" style="width:400px ;height:200px;">\
                                    <div class="box-01-graph">\
                                        <div id="chart-history" style="height: 200px; width:100% !important;"></div>\
                                    </div>\
                                </div>';
                scriptsrc += '\nnew Chartkick.LineChart("chart-history", ' + JSON.stringify(response.listprice) + ',{"library": {"colors": ["#8ac5c3"],"hAxis": {"format":"MMM d"},"pointSize": 0 }});\n';
                
                var graphtimerID = setInterval(startTimer, 100);

                function startTimer() {
                    var childLength = $('#chart-history').children().length;
                    if (childLength > 0 ) {
                        //do the work here
                        var offsetg = $('#'+mfhistory).offset();
                        $('#price-history').css({
                            'position' : 'absolute',
                            'top' : offsetg.top+30 ,
                            'left' : offsetg.left-150,
                            'z-index' : '100000', 
                            'box-shadow' : 'rgb(203, 203, 203) 0px 0px 7px 3px',
                            'display':'none'
                        });

                        $('#price-history').hover(
                            function(){ }, 
                            function() {

                                if(!walk_through){
                                //$('#price-history').css({'display':'none'});
                                // $('#price-history')[0].style.setProperty( 'display', 'none', 'important' );
                               }
                            }
                        );
                    clearInterval(graphtimerID);
                    }
                }
                // if(prod_deets.prod_site!='az')
                {
                    $('body').append(graphhtml);
                    script1.innerHTML = scriptsrc;
                    document.body.appendChild(script1);
                }

                
            };
            (document.head||document.documentElement).appendChild(s);

        };
        (document.head||document.documentElement).appendChild(s1);
    }
    else
    {
        console.log('history not enough ')
    }

}

function getGraphFailure(response)
{
    console.log(response);console.log('fail');
}

function setGraphCss(response)
{
    flag = 1;
    mfhistory = createRandString();
    if(response.droppercent == 0)
        {history_icon_img = chrome.extension.getURL('up_arrow.png');}
    else if(response.droppercent > 0)
        {history_icon_img = chrome.extension.getURL('down_arrow.png');}
    else if(response.droppercent < 0)
        {history_icon_img = chrome.extension.getURL('up_arrow.png');}
    else
        {history_icon_img = ''}
    // history_icon_img=chrome.extension.getURL('graph.png');
 
    history_icon = 'url(' + history_icon_img + ')';
    // if(prod_deets.prod_site!='az')
    {

        console.log('inserting price graph');
        // $('<div id="'+ mfhistory +'"style="display:inline !important" ></div>').insertAfter($(cssLocs[prod_deets.prod_site].graph));
        $('.changing_div').css('margin-left','0px');
        $('.changing_div').css('margin-top','15px');
        // $('<div id="'+ mfhistory +'"style="display:inline !important" ></div>').insertAfter('.changing_div');
        // $('.button_row').append('<a style="color:#fafafa;padding-right:1px;padding-top:3px; padding-bottom:3px;border-color:grey; border-style:solid; border-width:1px;border-radius: 40px;margin-left:1px;padding-left:18px;background:rgba(146, 146, 146, 0.9) url(' + history_icon_img + ') no-repeat left 2px center ;" id="'+ mfhistory +'">      price graph</a>')
        // $('.button_row').append('<a style="color:#3f51b5;padding-right:1px;padding-top:3px; padding-bottom:3px;border-radius: 40px;margin-left:1px;padding-left:18px;background:#d7ccc8 url(' + history_icon_img + ') no-repeat left 2px center ;" id="'+ mfhistory +'">      price graph</a>')
        $('.button_row').append('<a style="color: grey;padding-right:1px;padding-top:3px; padding-bottom:3px;border-style:solid;border-color:rgb(204, 204, 204);border-radius: 40px; border-width:1px;margin-left:1px;padding-left:18px;background: url(' + history_icon_img + ') no-repeat left 2px center ;" id="'+ mfhistory +'"> Price Graph</a>')
    }
    // $('#' + mfhistory).css({
    //     // 'float' : 'left',
    //     'width':'36px',
    //     'height': '36px',
    //     // 'background':'rgba(146, 146, 146, 0.9) url(' + history_icon_img + ') no-repeat left 2px center ;'
    //     // 'background-image' : history_icon ,
    //     // 'background-repeat' : 'no-repeat',
    //     // 'background-size' : 'contain'
    //      });

    // $('#'+mfhistory)[0].style.setProperty( 'display', 'inline-block', 'important' );

    $('#' + mfhistory).hover(function(){
     /*   if(flag){
            $('#price-history')[0].style.setProperty( 'display', 'block', 'important' );
            chrome.runtime.sendMessage({ method: "trackhoverGraph",site:prod_deets.prod_site });
            console.log(prod_deets.prod_site);
            flag = 0;
        }*/
        console.log('hover detected');
        // var offsetg = $('#'+mfhistory).offset();
        // $('#price-history:eq(0)').css({

        //     'position' : 'absolute',
        //     'top' : offsetg.top,
        //     'left' : offsetg.left-150,

        // });

        // var offsetg = $('#'+whisperbox).offset();
         var offsetg = $('#'+mfhistory).offset();
        $('#price-history:eq(0)').css({

            'position' : 'absolute',
            'top' : offsetg.top+20-200,
            'left' : offsetg.left

        });

        $('#price-history')[0].style.setProperty( 'display', 'block', 'important' );
        $('#price-history:eq(0)').hover(function(){
            //graph hover in
           //to keep whisperbox visible
           if(whisperbox_close_timer!=null){
               window.clearTimeout(whisperbox_close_timer);
               console.log('hovered in stopped close whisper box');
               
            }
            if(wcboxclose_timer!=null){
                console.log('cleared welcomebox timer');
                   window.clearTimeout(wcboxclose_timer);
            }

            mouse_on_graph=true;

        },function(){
            //graph hover out
            // //to close
            whisperbox_close_timer=setTimeout(function(){
                if(! mouse_on_whsper_box && ! mouse_on_graph){
                    hidewhisperbox('from whisper graph hover out');    
                }
                
            },5000);

             if(!walk_through){
                
                    if ($('#price-history:hover').length == 0){
                        $('#price-history')[0].style.setProperty( 'display', 'none', 'important' );
                        // flag=1;
                    }
                    // ga_graph_hover_times.push(new Date().getTime()+'ex');      

                }
            mouse_on_graph=false;

        });


        ga_graph_hover_times.push(new Date().getTime()+'en');

    },function(){

        if(!walk_through){

        
        if ($('#price-history:hover').length == 0){
            $('#price-history')[0].style.setProperty( 'display', 'none', 'important' );
            // flag=1;
        }
        ga_graph_hover_times.push(new Date().getTime()+'ex');      

        }  
      
    })

}

function lickHotStove(site)
{
   clickMenu(site);
   clickButton(site); 
}

function clickMenu(site)
{
    //console.log("you are here");
    $(cssLocs[site].menu).click(function(){
        //console.log($(this).text());
        //event.preventDefault();
        sendclickMenu(site,$(this).text());
    })
}

function clickButton(site)
{
    //console.log("you are here for buttons");
    
    $(cssLocs[site].button).click(function(){

        button = $(this).val();
        if($(this).val() == ""){
            button = "Buy Now"
        }
        if($(this).is("a")){
            button = $.trim($(this).text());
            button = button.slice(0, -1);
            button = $.trim(button);
        }
        //console.log(button);
        sendclickButton(site,button );
        //return false;
        return true;
    });
}



if (advtsites.indexOf(window.location.hostname) > -1) {
    var ExtensionId = "konojmimochobcfkmnamhlhnpiofplkm";

    chrome.runtime.sendMessage(ExtensionId, {getTargetData: "hello tatkal"},
      function(response) {
        if (response){
            //console.log('Already Installed');
            }
        else{
            //alert('Failure');
            chrome.storage.sync.get('donotshow',function(data){
                //console.log(data['donotshow'] );
                if(data['donotshow'] != true){
                    //console.log("what happens here");
                    datenow = new Date();
                    datenow = datenow.getTime();
                    chrome.storage.sync.get('date', function(data) {
                        if(data['date'] != null){
                            day = (datenow - data['date'])/ 86400000;
                            //console.log(day);
                            if(day >= 1 ){
                                chrome.storage.sync.set({'show' : true}, function(data){});                
                            }
                        }
                    });
                    chrome.runtime.sendMessage({method: "showTatkalNotification"}, function(response){});
                }
            });
            
        }
      });
}


function switchIconography(){
    insertHelpy(false);
    $('.'+helpyboxtab).css({
    'background-image':base_mclgcon,
    'opacity':.6,
    'border-width':'1px',
    'left':'165px',
    'cursor':'pointer',
    'bottom':'21px',
    'position':'relative',
    'float':'right',
    'text-indent':'-9999px',
    'outline':'none',
    'z-index':'9999'
});


 $('#'+helpybox).css('visibility','visible');

$('.'+helpyboxtab).hover(function() {
    console.log('we here we here!');
$(this).css("opacity", 1);
}, function() {
$(this).css("opacity", .6);
});

 
}

function checkYogiLevitate() {
    console.log('mister yogi!');
    console.log(prod_deets);
    if ((isTelevision() || isLaptop()) && (!isAccessories())){
        console.log('it is tvss');
        addTheYogiFootie();
    }
}

function addTheYogiFootie() {
    console.log('is ziz compiling?');


    var discval = 'Confused? Get Free Expert Buying Advice';
    var disctxt = 'Confused? Get Free Expert Buying Advice';
    var disclink = 'http://www.makkhichoose.com/r/findyogi'

    $('#'+footer).html('<a href="#"\
     title="' + discval + '"\
      target="_blank" style="display:inline !important;">\
                            <span class="crazyMsg"></span><span class="bgimg"></span></a></div>');
    $('#'+footer).css({
        'background': base_yogiicon + ' no-repeat 5px 10px', 
        'width': '100%',
        'padding-top': '5px',  
        'padding-bottom': '10px',
        'background-size': '25px 25px', 
    });

    $('#' + footer + ' a').attr('href', disclink);

    $('#' + footer + ' a').click(function() {
        yogiHit();
    });
    //$('#' + footer + ' span.crazyMsg').html('The Freshest Steal Deals');
    $('#' + footer + ' span.crazyMsg').html(disctxt);

}


function get_book_details(site){
    


//to make a case independent match adding  "Contains"(beware "cap  c") to jquery

jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});




    //flipkart

    if(site=='fk'){

        //var isbn10_td=$( "tr:contains('ISBN-10') td:nth-child(2)");
        var isbn10_val=$.trim($(cssLocs.fk.book_isbn10).text());

        //var isbn13_td=$( "tr:contains('ISBN-13') td:nth-child(2)");
         var isbn13_val=$.trim($(cssLocs.fk.book_isbn13).text());
            


        return{'isbn_10':isbn10_val,'isbn_13':isbn13_val };


    }//fk


    //amazon
    if(site=='az'){

        var isbn10_val=$.trim($(cssLocs.az.book_isbn10).text().slice(8));
        var isbn13_val=($.trim($(cssLocs.az.book_isbn13).text().slice(8))).replace('-', '');
        return{'isbn_10':isbn10_val,'isbn_13':isbn13_val };

    }//az

    //snapdeal

    if(site=='sd'){

        var isbn10_val=$.trim($(cssLocs.sd.book_isbn10).text().split(':')[1]);
        var isbn13_val=$.trim($(cssLocs.sd.book_isbn13).text().split(':')[1]);
        return{'isbn_10':isbn10_val,'isbn_13':isbn13_val };

    }//sd


    //bookadda
    if(site=='ba'){

        var isbn10_val=$.trim($(cssLocs.ba.book_isbn10).text());
        var isbn13_val=$.trim($(cssLocs.ba.book_isbn13).text());
        return{'isbn_10':isbn10_val,'isbn_13':isbn13_val };
    }//ba


    //infibeam
    if(site=='ib'){

        var isbn10_val=$.trim($(cssLocs.ib.book_isbn10).text());
        var isbn13_val=$.trim($(cssLocs.ib.book_isbn13).text());
        return{'isbn_10':isbn10_val,'isbn_13':isbn13_val };
    }//ib


    return{'isbn_10':"",'isbn_13':"" };

}

function get_tv_model(site){
    

    if(site=='fk'){

        var modelName=$.trim($( "tr:contains('Model Name') td:nth-child(2)").text());

        return modelName;


    }//fk


}

// for quality check

function dml_distance (prices, damerau) {
    // 'prices' customisation of the edit costs by passing an
    // object with optional 'insert', 'remove', 'substitute', and
    // 'transpose' keys, corresponding to either a constant
    // number, or a function that returns the cost. The default
    // cost for each operation is 1. The price functions take
    // relevant character(s) as arguments, should return numbers,
    // and have the following form:
    //
    // insert: function (inserted) { return NUMBER; }
    //
    // remove: function (removed) { return NUMBER; }
    //
    // substitute: function (from, to) { return NUMBER; }
    //
    // transpose: function (backward, forward) { return NUMBER; }
    //
    // The damerau flag allows us to turn off transposition and
    // only do plain Levenshtein distance.

    if (damerau !== false) damerau = true;
    if (!prices) prices = {};
    var insert, remove, substitute, transpose;

    switch (typeof prices.insert) {
    case 'function': insert = prices.insert; break;
    case 'number': insert = function (c) { return prices.insert; }; break;
    default: insert = function (c) { return 1; }; break; }

    switch (typeof prices.remove) {
    case 'function': remove = prices.remove; break;
    case 'number': remove = function (c) { return prices.remove; }; break;
    default: remove = function (c) { return 1; }; break; }

    switch (typeof prices.substitute) {
    case 'function': substitute = prices.substitute; break;
    case 'number':
        substitute = function (from, to) { return prices.substitute; };
        break;
    default: substitute = function (from, to) { return 1; }; break; }

    switch (typeof prices.transpose) {
    case 'function': transpose = prices.transpose; break;
    case 'number':
        transpose = function (backward, forward) { return prices.transpose; };
        break;
    default: transpose = function (backward, forward) { return 1; }; break; }

    function distance(down, across) {
        // http://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance
        var ds = [];
        if ( down === across ) {
            return 0;
        } else {
            down = down.split(''); down.unshift(null);
            across = across.split(''); across.unshift(null);
            down.forEach(function (d, i) {
                if (!ds[i]) ds[i] = [];
                across.forEach(function (a, j) {
                    if (i === 0 && j === 0) ds[i][j] = 0;
                    // Empty down (i == 0) -> across[1..j] by inserting
                    else if (i === 0) ds[i][j] = ds[i][j-1] + insert(a);
                    // Down -> empty across (j == 0) by deleting
                    else if (j === 0) ds[i][j] = ds[i-1][j] + remove(d);
                    else {
                        // Find the least costly operation that turns
                        // the prefix down[1..i] into the prefix
                        // across[1..j] using already calculated costs
                        // for getting to shorter matches.
                        ds[i][j] = Math.min(
                            // Cost of editing down[1..i-1] to
                            // across[1..j] plus cost of deleting
                            // down[i] to get to down[1..i-1].
                            ds[i-1][j] + remove(d),
                            // Cost of editing down[1..i] to
                            // across[1..j-1] plus cost of inserting
                            // across[j] to get to across[1..j].
                            ds[i][j-1] + insert(a),
                            // Cost of editing down[1..i-1] to
                            // across[1..j-1] plus cost of
                            // substituting down[i] (d) with across[j]
                            // (a) to get to across[1..j].
                            ds[i-1][j-1] + (d === a ? 0 : substitute(d, a))
                        );
                        // Can we match the last two letters of down
                        // with across by transposing them? Cost of
                        // getting from down[i-2] to across[j-2] plus
                        // cost of moving down[i-1] forward and
                        // down[i] backward to match across[j-1..j].
                        if (damerau
                            && i > 1 && j > 1
                            && down[i-1] === a && d === across[j-1]) {
                            ds[i][j] = Math.min(
                                ds[i][j],
                                ds[i-2][j-2] + (d === a ? 0 : transpose(d, down[i-1]))
                            );
                        };
                    };
                });
            });
            return ds[down.length-1][across.length-1];
        };
    };
    return distance;
};




/*
function make_match_score(prod_title,response_title){
    var bnm;
    prod_title=prod_title.replace(/[^a-zA-Z0-9 ]/g, "");
    response_title=response_title.replace(/[^a-zA-Z0-9 ]/g, "");

    prod_title=prod_title.toLowerCase();
    response_title=response_title.toLowerCase();

    console.log(prod_title);
    console.log(response_title);
    
    //brand name
    var prod_brand=prod_title.slice(0,prod_title.indexOf(" "));
    var response_brand=response_title.slice(0,response_title.indexOf(" "));

    console.log(prod_brand);
    console.log(response_brand);

    if(prod_brand===response_brand){
        bnm=true;
    }
    else{
        bnm=false;
    }


    //removing first word
    prod_title=prod_title.substr(prod_title.indexOf(" ") + 1);
    response_title=response_title.substr(response_title.indexOf(" ") + 1);

    console.log(prod_title);
    console.log(response_title);

    var distance=dml_distance()(prod_title,response_title);
    var max_len = Math.max(prod_title.length,response_title.length);
    
    console.log(distance/max_len);
    return {score:distance/max_len,bnm:bnm};
}


*/


function make_match_score(prod_title,response_title,website){
    
    // console.log(website);
    // console.log(prod_title);
    // console.log(response_title);
    // if(prod_title==''||prod_title==undefined||response_title==''||response_title==undefined){
    //     return 3;
    // }
    // if(prod_title=='fk'){
    //         return 3;
    // }

console.log('in start of make_match_score')

console.log('logging prod_title');


console.log(prod_title);

console.log(response_title);

console.log(website);


    var spec_match_score;
    var bnm;

    var prd_str=prod_title;
    var resp_str=response_title;

    prod_title=prod_title.replace(/[^a-zA-Z0-9 ]/g, "");
    response_title=response_title.replace(/[^a-zA-Z0-9 ]/g, "");

    prod_title=prod_title.toLowerCase();
    response_title=response_title.toLowerCase();


   
    console.log('prod_title');
    console.log(prod_title);

    console.log('response title');
    console.log(response_title);
    
    //brand name
    var prod_brand=prod_title.slice(0,prod_title.indexOf(" "));
    var response_brand=response_title.slice(0,response_title.indexOf(" "));

    console.log('prod_brand');
    console.log(prod_brand);

    console.log('resp_brand');
    console.log(response_brand);

    if(prod_brand===response_brand){
        bnm=true;
    }
    else{
        bnm=false;
    }


    //removing first word
    prod_title=prod_title.substr(prod_title.indexOf(" ") + 1);
    response_title=response_title.substr(response_title.indexOf(" ") + 1);

    spec_match_score=make_spec_match_score(prod_title,response_title);

    console.log('prod_title');
    console.log(prod_title);

    console.log('resp_title');
    console.log(response_title);

    var pt_words=prod_title.split(" ");
    var rt_words=response_title.split(" ");

    var pt_words=pt_words.filter(function(value){
    
       /*
        if((value=="")||(value==" ")){
            console.log("space filter returns false  for");
            console.log(value);
            return false;
        }
        else{
             console.log("space filter returns true for");
            console.log(value);
            return true;
        }
       */ 
        return !((value=="")||(value==" "));
        

    });

    rt_words=rt_words.filter(function(value){
        return !((value=="")||(value==" "));
        
    });

    console.log(pt_words);
    console.log(rt_words);



    common_words_length=intersect_safe(pt_words,rt_words).length

    console.log(common_words_length);




    console.log(prod_title);
    console.log(response_title);

    var distance=dml_distance()(prod_title,response_title);
    var max_len = Math.max(prod_title.length,response_title.length);

    var common_words_score=common_words_length/Math.max(pt_words.length,rt_words.length);
    var dist_score=distance/max_len;

    if(common_words_score==0){
        common_words_score=-2;
    }

    var final_match_score;
    //making final scores
    if(bnm){
        final_match_score=(1-dist_score)+common_words_score+spec_match_score+1.5;
    }
    else{
        final_match_score=(1-dist_score)+common_words_score+spec_match_score;
    }
    
    console.log(final_match_score);
    console.log(JSON.stringify({website:website,prd_title:prd_str,resp_title:resp_str,dist_score:dist_score,bnm:bnm,common_words_score:common_words_score,spec_match_score:spec_match_score}));
   
    return final_match_score
}

function is_score_ok(score,website){

    if(isBook()){
        return true;
    }
    if((fk_fail==true)&&(fk_fail_search==false)){
        return true;
    }

  if(score>2){
    return true;
  }
  else
  {
    if(website=='pt'){
        var prodlink_txt=prod_deets.prod_title;
        var link='http://paytm.com/shop/search/?q='+prod_deets.prod_title;;

        // repl_strng = repl_strng = '<a href="' + link + '"' + 'target="_blank"'+'>\
        //                                 <div class="row-top">\
        //                                     <span class="'+portalname+'">' + "Paytm" + '</span>\
        //                                 </div>\
        //                                 <div class="row-btm">\
        //                                     <img '+'style="opacity: 0.4;"'+' src="' + prod_deets.prod_img + '"/>\
        //                                     <div class="row-btm-title">' + prodlink_txt + '</div>\
        //                                     <div class="r-box"><span class="price-diffn ask-search"> Search </span></div>\
        //                                 </div>\
        //                               </a>';
        // insertPrice(repl_strng,-1);
        insert_manual_search_box(make_manual_search_box({"prod_site":"pt","prod_link":link,"website":"Paytm","title":prod_deets.prod_title,"img_src":prod_deets.prod_img},"searchid"));


    }
    
    return false;
    }
  
  return true;
   
}


/*
function intersect_safe(a, b)
{
 var ai=0, bi=0;
 var result = [];

 while( ai < a.length && bi < b.length )
 {
    if      (a[ai] < b[bi] ){ ai++; }
    else if (a[ai] > b[bi] ){ bi++; }
    else 
    {
      result.push(a[ai]);
      ai++;
      bi++;
    }
 }

 return result;
}
*/
function intersect_safe(a,b){
    var cwords=a.filter(function(value){

        return b.indexOf(value)!=-1;

    });
    return cwords;
}

function find_spec_words(prod_title){

    //var regexp=/(\d+[a-zA-Z-]+\w+)|( \d+\w+-[\w-]+)|([a-zA-Z]+\w+-[\w-]+)|([a-zA-z]+\d+\w+)|([a-zA-Z]+ \d+[ $])/g;
    var regexp=/(\d+[a-zA-Z-]+\w*)|(\d+\w+-[\w-]*)|([a-zA-Z]+\w+-[\w-]*)|([a-zA-z]+\d+\w*)|([a-zA-Z]+ \d+[ $])/g;
    prod_title=prod_title+" ";
    var match_words=[];
   var match =regexp.exec(prod_title);

    
    while (match != null) {
        // matched text: match[0]
        // match start: match.index
        // capturing group n: match[n]
        //console.log(match[0]);
        match_words.push(match[0]);
        match = regexp.exec(prod_title);
    }
    return match_words;

}

function make_spec_match_score(prod_title, response_title){
    var prod_title_spec_words=find_spec_words(prod_title);
    var resp_title_spec_words=find_spec_words(response_title);

   /* var spec_matched_words= prod_title_spec_words.filter(function(value){

        return (resp_title_spec_words.indexOf(value)!=-1);
    });

    return spec_matched_words.length;
    */
    //console.log(prod_title_spec_words);
    //console.log(resp_title_spec_words);

    var spec_matched_words=prod_title_spec_words.filter(function(value){

            var dist_score;
            if(value.length>3){
                for(i=0;i<resp_title_spec_words.length;i++){
                    dist_score=dml_distance()(value,resp_title_spec_words[i]);
                    
                    if((dist_score/Math.max(value.length,resp_title_spec_words[i].length))<0.20){

                        return true;
                    } 
                }
                return false;
            }
            else{
                return false;
            }

            return false;
    });

    // console.log(spec_matched_words)
    return 2*spec_matched_words.length;

}

function url_domain(data) {
  var    a      = document.createElement('a');
         a.href = data;
  var domain= a.hostname.split('.')[1];
   return domain.charAt(0).toUpperCase() + domain.slice(1);
}





function checkFromplugin_informServer(received_prod_deets,received_prod_deets_match_score){
    console.log('checking for good products from back search');

    var server_prod_deets_var="";
    var fetch_site=received_prod_deets.website;

    received_prod_deets.prod_deets_match_score=received_prod_deets_match_score;

    var deets_to_search={
        prod_title:prod_deets.prod_title,
        prod_srch:prod_deets.prod_title
    }

    //console.log(deets_to_search);
    //console.log("fetch_website"+" "+fetch_site);
    var search_url;
    var fetch_req = createFetchURL("", fetch_site);
    var deets_obj={website:fetch_site};
    var back_search_url=affyLinkifySimbacksearch(deets_obj,fetch_req);
    var back_search_proc='back_search_'+fetch_site;

    if(affy_flags[fetch_site+'_search']==true){
        search_url=back_search_url;
        //setting flags to false;
        affy_flags[fetch_site+'_search']=false;
        set_affy(fetch_site+'_search',false);

    }
    else{
        search_url=fetch_req;
    }


if(fetch_site=='fk'){
        //usual backsearch request to send affilate params to fk server 
        var dummy_req = backPostGet({
            type: "GET",
            url: search_url
        });

        //request to get data via mobile api
        var fk_search_url="https://mobileapi.flipkart.net/2/discover/getSearch?store=search.flipkart.com&start=0&count=10&disableMultipleImage=true&ads-offset=1&q="+prod_deets.prod_title;
        if(isBook){
        fk_search_url="https://mobileapi.flipkart.net/2/discover/getSearch?store=search.flipkart.com&start=0&count=10&disableMultipleImage=true&ads-offset=1&q="+prod_deets.prod_srch;   
        }


        var dyn_req = backPostGet({
            type: "GET",
            url: fk_search_url,
            headers:{
                // "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36",
                "x-user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36 FKUA/website/41/website/Desktop"
            }
         });


        }//if

else{

    var dyn_req = backPostGet({
            type: "GET",
            url: search_url
        });
}//else
      disp_analytics_send_flags[back_search_proc]='req_sent';

      dyn_req.fail(genFail(server_prod_deets_var, fetch_site, fetch_req));

      dyn_req.fail(function(){
            disp_analytics_send_flags[back_search_proc]='ok';           
        });


        if ( fetch_site=='ib'){
            dyn_req.done(ibSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='ip'){
            dyn_req.done(ipSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='it'){
            dyn_req.done(itSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='hs'){
            dyn_req.done(hsSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='ms'){
            dyn_req.done(msSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='nt'){
            dyn_req.done(ntSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='sa'){
            dyn_req.done(saSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='sd'){
            dyn_req.done(sdSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='tr'){
            dyn_req.done(trSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='fk'){
            dyn_req.done(fkSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='az'){
            dyn_req.done(azSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='eb'){
            dyn_req.done(ebSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='ye'){
            dyn_req.done(yeSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='my'){
            dyn_req.done(mySuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='ja'){
            dyn_req.done(jaSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='sc'){
            dyn_req.done(scSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='fc'){
            dyn_req.done(fcSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='bo'){
            dyn_req.done(boSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='ba'){
            dyn_req.done(baSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
        else if ( fetch_site=='tc'){
            dyn_req.done(tcSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            }
   
        else if ( fetch_site=='pt'){
           // dyn_req.done(ptSuccess(server_prod_deets_var, fetch_req,true,received_prod_deets));
            disp_analytics_send_flags[back_search_proc]='ok';
            }




 }//eof

 function disp_alert(){
   var alert_tag=' <div id="alert-msg" style="position: absolute; border-radius: 4px;border: 1px solid transparent; padding:2px;border-radius: 4px;border-color: #444; background-color: white;color:green;">\
              Great! We\'ll let you know when the price drops.\
    </div>';

   $('#'+pralurrt).append(alert_tag);
   
   $( "div#alert-msg" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );

   $('#trackedprods').text("Wishlist");


 }

// function update_cashback_details(user_id){

//     var tdata,trow,site,order_date,order_amount,cash_back_amount,status;

//     $('#install_makkhi_header').css("display","none");
//     $('#loading_data').css("display","block");


//     $('#user_id').text(user_id);


//     var command_obj={"userId":user_id,"type":2};
  
//     var cashback_amount_req=$.ajax({
//                     type: "POST",
//                     url: "http://cashback-1294.appspot.com/search_by_id",
//                     data: JSON.stringify(command_obj),
//                     contentType: "application/json; charset=utf-8",
//                     dataType: "json",
//                     timeout: 3500,
//                 });
//     cashback_amount_req.done(function(response){

//         $('#cash_back_amount').text(response['cashbackAcceptedAmount']);
//     }); 

//     cashback_amount_req.fail(function(response){
//         console.log("failed getting cash_back_amount");

//     });



//      command_obj={"userId":user_id,"type":1};

//    var purchase_history_req= $.ajax({
//                     type: "POST",
//                     url: "http://cashback-1294.appspot.com/search_by_id",
//                     data: JSON.stringify(command_obj),
//                     contentType: "application/json; charset=utf-8",
//                     dataType: "json",
//                     timeout: 3500,
//                 }); 

//    purchase_history_req.done(function(response){
    

//         for(var i=0;i<response.length;i++){
//             tdata=response[i];
//             site=tdata['site'];
//             order_date=tdata['orderDate'];
//             order_amount=tdata['orderAmount'];
//             cash_back_amount=tdata['revenueAmount'];
//             status=tdata['status'];

//             trow='<tr>\
//                     <td>'+site+'</td>\
//                     <td>'+order_date+'</td>\
//                     <td>'+order_amount+'</td>\
//                     <td>'+cash_back_amount+'</td>\
//                     <td>'+status+'</td>\
//                 </tr>';

//             $("#purchase_history_table_body").append(trow);

//         }
//         $('#loading_data').css("display","none");
//         $("#page-content").css('display','block');
//    });
  

// }



function send_ga_disp_results(){

    var send_ga_data=false;
    $.each(disp_analytics_send_flags,function(key,value){

        if(value!='ok'){
            send_ga_data=false;
            return false;
        }
        send_ga_data=true;

    });//each

    if(send_ga_data===true){
        //all requests are done 
        //send  data  here 
        var i=0; 
        var match_score_total=0;   
        var displayed_details={};
        var ga_data={};
        var total_no_of_results_displayed=$('#'+allprice).children().length+$('#'+simprice).children().length+$('#'+oos).children().length;

        get_displayed_pids();
        send_displayed_results();

        displayed_details['price_results_displayed']=displayed_results.join();
        displayed_details['num_price_results_displayed_from_elastic']=elastic_data_displayed;
        displayed_details['num_oos_results_displayed']=elastic_data_displayed_as_oos;
        displayed_details['num_data_from_elastic']=no_data_from_elastic;
        displayed_details['total_no_of_results_displayed']=total_no_of_results_displayed;

        for(i=0;i<elastic_match_scores.length;i++){
            match_score_total=match_score_total+elastic_match_scores[i];
        }
        displayed_details['average_match_score']=match_score_total/elastic_match_scores.length;

        var ga_data={
            method: "trackDisplayedResults",
            displayed_details:displayed_details
        };


        if(prod_deets.product_id!=''||prod_deets.product_id!=undefined){
            ga_data['product_page']=prod_deets.product_id+prod_deets.prod_site.toLowerCase();
        }
        else{
            ga_data['product_page']=window.location.href;
        }

        if(prod_deets.prod_categ==''){

            displayed_details['categ']=prod_deets.prod_categ_alt;
        }
        else{
            displayed_details['categ']=prod_deets.prod_categ;
        }

        displayed_details['site']=prod_deets.prod_site


        chrome.runtime.sendMessage(ga_data);

    }
    else{
    setTimeout(send_ga_disp_results,1000);

    }
}

fk_is_current_page_pp = false;
fk_kadoo_notif_already_displayed =false;

var fk_previous_url='';
function flipkart_react_page(){

    var flipref = window.location.href;
    var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
    fk_previous_url=flipref;

    if (!((url_params['pid']!=undefined && !flipref.match('product-reviews')) || ($(cssLocs.fk.title).length>0))){
        //not a product page 
        //start checking url for change
        // $('#'+whisperbox).remove();
        // $('#welcomebox').remove();

        if(window.location.href.match("www.flipkart.com/toys")){

            // $('#'+whisperbox).remove();
            // $('#welcomebox').remove();
            // if($('#makkhi_min_box').hasClass('mopen')){
            //         // console.log('hidden mmbox');
            //         $('#makkhi_min_box').hide();
            //         $('#makkhi_min_box').removeClass('mopen');
            //       }
            // $('#makkhi_min_box').remove();
            // $('#gq_ad ').remove();   
            $('#mc_root').remove();   

            //insert kadoo image 
            if(!fk_kadoo_notif_already_displayed == false){
                kaddo_notif_insert();
                fk_kadoo_notif_already_displayed = true;
            }
            
        }
        else{
            console.log("not a toys page");
        }

        fk_url_change_check();

    }
    else if ((url_params['pid']!=undefined && !flipref.match('product-reviews')) || ($(cssLocs.fk.title).length>0)){
        //product page do fk_task
        do_fk_task();
        fk_is_current_page_pp = true;
        // setTimeout(function(){
        //     do_fk_task();
        //     fk_url_change_check();
        // },2000);
        fk_url_change_check();

    }

}



function fk_url_change_check(){
    // console.log("fk_url_change");
    current_url=window.location.href;
    var flipref = window.location.href;
    var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
    if(fk_previous_url===current_url || fk_previous_url+'#' === current_url){
   


    if (!((url_params['pid']!=undefined && !flipref.match('product-reviews')) || ($(cssLocs.fk.title).length>0) || window.location.href.match("www.flipkart.com/toys"))){
        //not a product page 
        //start checking url for change
        // $.toast('not a product page 1');
        fk_is_current_page_pp = false;

        // $('#'+whisperbox).remove();
        // $('#welcomebox').remove();
        //   if($('#makkhi_min_box').hasClass('mopen')){
        //     // console.log('hidden mmbox');
        //         $('#makkhi_min_box').hide();
        //         $('#makkhi_min_box').removeClass('mopen');
        //       }
        // $('#makkhi_min_box').remove(); 
        // $('#gq_ad ').remove(); 
        $('#mc_host').remove();    

    }

    // console.log('no change detected');

    }
    else{
       //change detected 
       // $.toast('change in url detected');
     prod_deets.prod_link = window.location.href;

     console.log("%c url change detected","color:green");
    if(fk_is_current_page_pp){
        fk_send_graph_times();
        console.log("%c sending graph","color:blue");

    }
    else{
     console.log("%c not sending graph","color:blue");

    }
    
    if (!((url_params['pid']!=undefined && !flipref.match('product-reviews')) || ($(cssLocs.fk.title).length>0))){
        //not a product page 
        //start checking url for change
        // $.toast('not a product page 2');

        fk_is_current_page_pp = false;
       //  $('#'+whisperbox).remove();
       //  $('#welcomebox').remove();
       //    if($('#makkhi_min_box').hasClass('mopen')){
       //      // console.log('hidden mmbox');
       //          $('#makkhi_min_box').hide();
       //          $('#makkhi_min_box').removeClass('mopen');
       //        }
       // $('#makkhi_min_box').remove();    
       // $('#gq_ad ').remove();   
        $('#mc_host').remove();    

    }
    else if ((url_params['pid']!=undefined && !flipref.match('product-reviews')) || ($(cssLocs.fk.title).length>0)){
       
        fk_is_current_page_pp = true;
        reset_displayed_analytics();
        //product page do fk_task
        // $.toast('not a product page 3');
      //  $('#'+whisperbox).remove();
      //   $('#welcomebox').remove();
      // if($('#makkhi_min_box').hasClass('mopen')){
      //           // console.log('hidden mmbox');
      //           $('#makkhi_min_box').hide();
      //           $('#makkhi_min_box').removeClass('mopen');
      //         }
      //   $('#makkhi_min_box').remove();
      //   $('#gq_ad ').remove();      
      //   // setTimeout(do_fk_task,2000);
        $('#mc_host').remove();    
        do_fk_task()

    }

    if(window.location.href.match("www.flipkart.com/toys")){
        // $('#'+whisperbox).remove();
        // $('#welcomebox').remove();
        // if($('#makkhi_min_box').hasClass('mopen')){
        //         // console.log('hidden mmbox');
        //         $('#makkhi_min_box').hide();
        //         $('#makkhi_min_box').removeClass('mopen');
        //       }
        // $('#makkhi_min_box').remove();
        // $('#gq_ad ').remove();      

        // //insert kadoo image 
        $('#mc_host').remove();    
        kaddo_notif_insert();
    }
    else{
        console.log("not a toys page");
    }

    fk_previous_url=current_url;
    
    }

    setTimeout(fk_url_change_check,200);
}

function do_fk_task(){
    var flipref = window.location.href;
    prod_deets.prod_link = window.location.href;
    var url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
        if ((url_params['pid']!=undefined && !flipref.match('product-reviews')) || ($(cssLocs.fk.title).length>0)) {

          fk_book_page=false;  
        window.onbeforeunload=function(){
            var hover_time_array;
            if(ga_whisperbox_hover_times.length==0){
                hover_time_array='results_not_hovered';

            }
            else if(ga_whisperbox_hover_times.length>0){
                hover_time_array=ga_whisperbox_hover_times.join();
            }
            chrome.runtime.sendMessage({ method:"time_spent_in_results",message:hover_time_array });

            if(ga_graph_hover_times.length==0){
                hover_time_array='graph_not_hovered';

            }
            else if(ga_graph_hover_times.length>0){
                hover_time_array=ga_graph_hover_times.join();
            }
            // chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array });
            chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array,prod_id:prod_deets.product_id+prod_deets.prod_site,page_url:window.location.href });


            
        }



        if(url_params['affid']!='saikerneli' && url_params['affid']!=undefined){
            set_affy('fk_search',true);
            set_affy('fk_price',true);
            get_affy_flags();
        }
 

        console.log('mc: hippity hop, trying the tag!');

        prod_deets.prod_site='fk';
        prod_deets.prod_categ = $.trim($(cssLocs.fk.category).text());
        prod_deets.prod_categ_alt = $.trim($(cssLocs.fk.category_alt).text());

        if (prod_deets.prod_categ_alt != '' && prod_deets.prod_categ != '') {
            trackCateg('flipkart', prod_deets.prod_categ, prod_deets.prod_categ_alt);
        }
        //cssLocs in helperfuncs.js has the details stored
        prod_deets.prod_title = cleanTitle($(cssLocs.fk.title).text());
        prod_deets.prod_title_raw = $.trim($(cssLocs.fk.title).text());

        //store text in brackets separately; this makes search heard 
        prod_deets.prod_bracktitle = $.trim($(cssLocs.fk.bracktitle).text());

        //if price not in this location, look in alternate
        var chk_price=$.trim($(cssLocs.fk.price).text());

        if (chk_price=='') {
            prod_deets.prod_price = cleanPrice($(cssLocs.fk.price_alt).text());
        }
        else {
            prod_deets.prod_price = cleanPrice(chk_price);
        }


        prod_deets.ss = 0;
        var oosData = $(cssLocs.fk.oos);
        if(oosData.length > 0) {
            prod_deets.ss = 1;
        }

        var disc_prod=$(cssLocs.fk.disc_prod);
        if (disc_prod.length>0) {
            prod_deets.ss = 2;
        }

        var shp_price=0;
        try {
            shp_price = cleanPrice(tittlyFind($(cssLocs.fk.price_shp).contents()).toLowerCase(),1);
            if (shp_price.match('free') && ship_price!='') {
                //looks like free delivery
            }
            else {


                if (isNaN(parseInt(prod_deets.prod_price)) || isNaN(parseInt(shp_price))) {
                    // hmm nannanana na re nan
                }
                else {
                    prod_deets.prod_price = parseInt(prod_deets.prod_price)+parseInt(shp_price);
                }
            }   

        } catch(err) {
            console.log('couldnt subsume shipping charges, sadly');

        }



        prod_deets.prod_srch = prod_deets.prod_title;

        //prod_deets.prod_srch='';

        if (isBook()) {

            //console.log("book page");
    
            //check if this is paperback or hardcover
            if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover'))    {
                prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;

            }

            book_details=get_book_details(prod_deets.prod_site);

            //$("#is_it_a_book_page").text("Yes a bookpage");

            //$("#book_isbn_10").text(book_details.isbn_10);
            //$("#book_isbn_13").text(book_details.isbn_13);

        

            if((book_details.isbn_10!='') || (book_details.isbn_13 !='') ){

                if((book_details.isbn_13!='')){

                    prod_deets.prod_srch=book_details.isbn_13;
                }

                else{
                    if(book_details.isbn_10 !=''){

                        prod_deets.prod_srch=book_details.isbn_10;
                }


                    }
                }
            
        }
        else if(isTelevision()){
            var tv_model=get_tv_model(prod_deets.prod_site)
            console.log("Tv page found"+" "+tv_model);
            prod_deets.prod_srch=prod_deets.prod_title+' '+ tv_model;
            prod_deets.prod_title=prod_deets.prod_title+' '+ tv_model;          

        }
        else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB'))    {
            prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
        }

        prod_deets.prod_img = $.trim($(cssLocs.fk.prod_img).attr('src'));
        //console.log('mc: '+ prod_deets.prod_srch+' '+prod_deets.prod_price);

        insertPiddle(prod_deets);
        url_params=window.location.search.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});

        prod_deets.product_id=url_params.pid;
        prod_deets.prod_title=$.trim($('h1').text());
        prod_deets.prod_srch=prod_title=$.trim($('h1').text());

        if(prod_deets.prod_title==''){
            prod_deets.prod_title=$.trim($('h1').text());
        }

    if((prod_deets.product_id!=undefined)||(prod_deets.product_id!='')){
            //get price here

            var fk_req_body=  {  
           "requestContext":{  
              "productId":prod_deets.product_id,
              "sessionContext":{  
              }
           }
        }


var fk_req= {
    "type":"POST",
    "url":"https://www.flipkart.com/api/3/page/dynamic/product",
    // url: "http://139.162.26.46:8082/postpid",
    "headers":{
    "x-user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36 FKUA/website/41/website/Desktop",
    // "Origin":"https://www.flipkart.com",
    // "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36",
    "content-type":"application/json",
    "timeout":1000,
    },
    "data":JSON.stringify(fk_req_body),
    };

   var dyn_req = backPostGet(fk_req);


    dyn_req.done(function(res){
        fk_fail=false;

        var img_url_template=res.RESPONSE.pageContext.imageUrl;

        var img_url= img_url_template.replace('{@width}','50');
        img_url= img_url.replace('{@height}','100');
        img_url= img_url.replace('{@quality}','100');
        prod_deets.prod_img=img_url;

        // insertTag(false);
        // $('#'+whisperbox).css('visibility','visible');

        
        // console.log("fk price success,price is "+res.RESPONSE.data.product_summary_1.data[0].value.pricing.finalPrice.value+' '+prod_deets.prod_title);
        // console.log('pp'+prod_deets.prod_price);

        // prod_deets.prod_title=$.trim($('h1').text());
        // prod_deets.prod_srch=prod_title=$.trim($('h1').text());
        // prod_deets.prod_title_raw=$.trim($('h1').text());



        prod_deets.prod_title=res.RESPONSE.pageContext.titles.title;
        prod_deets.prod_srch=res.RESPONSE.pageContext.titles.title;
        prod_deets.prod_title_raw=res.RESPONSE.pageContext.titles.title;

        try{
            prod_deets.prod_price=res.RESPONSE.data.product_summary_1.data[0].value.pricing.finalPrice.value;
            prod_deets.prod_categ = res.RESPONSE.data.product_breadcrumb.data[0].value.productBreadcrumbs[res.RESPONSE.data.product_breadcrumb.data[0].value.productBreadcrumbs.length-2].title;
            prod_deets.prod_categ_alt = "";
            var crumbs = res.RESPONSE.data.product_breadcrumb.data[0].value.productBreadcrumbs;
            for(var i=0; i<crumbs.length; i++){
             prod_deets.prod_categ_alt += crumbs[i].title + '_';
            }
            prod_deets.prod_categ_alt = prod_deets.prod_categ_alt.slice(0,prod_deets.prod_categ_alt.length-1);
        }
        catch (e) {

        }

        if(res.RESPONSE.pageContext.titles.subtitle){
            prod_deets.prod_title_raw=res.RESPONSE.pageContext.titles.title + ' ('+res.RESPONSE.pageContext.titles.subtitle+')';    
        }


        try{
            // prod_deets.prod_title = prod_deets.prod_title + " " +res.RESPONSE.data.product_specification_1.data[0].value.attributes[0].values[0]
           var fk_model_attributes = res.RESPONSE.data.product_specification_1.data[0].value.attributes;
           var fk_prod_model_name ="";
           var fk_prod_model_number = "";
           for(var i=0; i<fk_model_attributes.length;i++){
                if(fk_model_attributes[i].name.toLowerCase() == "model name"){
                    fk_prod_model_name = res.RESPONSE.data.product_specification_1.data[0].value.attributes[i].values[0]
                }

                if(fk_model_attributes[i].name.toLowerCase() == "model number"){
                    fk_prod_model_number = res.RESPONSE.data.product_specification_1.data[0].value.attributes[i].values[0]
                }
           }

           if( !prod_deets.prod_title.match(fk_prod_model_name)){
                prod_deets.prod_title = prod_deets.prod_title +" "+fk_prod_model_name;
           }

          if( !prod_deets.prod_title.match(fk_prod_model_number)){
                prod_deets.prod_title = prod_deets.prod_title +" "+fk_prod_model_number;
           }


        }
        catch(err){

        }
        
        if(res.RESPONSE.data.product_summary_1.data[0].value.vertical=="book"){
            //book page
            fk_book_page=true;
            prod_deets.prod_srch=prod_deets.product_id;

        }
        console.log("inserting main container");
        // insert_main_container();
        update_data_for_spa();

    });

    dyn_req.fail(function(res){
        // insertTag(false);
        fk_fail=true;
        // $('#'+whisperbox).css('visibility','visible');
        prod_deets.prod_title=$.trim($('h1').text());
        prod_deets.prod_srch=prod_title=$.trim($('h1').text());

        // prod_deets.prod_price=res.RESPONSE.data.product_summary_1.data[0].value.pricing.finalPrice.value;
        console.log("price failure");
        console.log("inserting main container");
        // insert_main_container();
        update_data_for_spa();

    });

}//price fetch
else{
        prod_deets.prod_title=$.trim($('h1').text());
        prod_deets.prod_srch=prod_title=$.trim($('h1').text());
        console.log('pid is not there');
        // insert_main_container();
        update_data_for_spa();

}        
        // checkYogiLevitate();
    } //   pidmatch

}

//function for amazon gis table page
function bsend(url){
    if(affy_flags['az_search']==true){
        //send
    search_url=affydeals(url);

   var dyn_req = backPostGet({
            type: "GET",
            url: search_url
        });
        
    }

    dyn_req.done(function(){
        affy_flags['az_search']=false;
        set_affy('az_search',false);
    });
}


function affydeals(url){
        var clean_url = url.substring(0, url.indexOf("?"));
        params = {'tag':'gisbot-21'};
        redir_link=combineUrlBitsWithParams(clean_url,params);
        console.log(redir_link);
        return redir_link;
}

function hidewbox(){
    if(wcboxclose_timer!=null){
        // console.log('cleared welcomebox timer');
           window.clearTimeout(wcboxclose_timer);
           
        }

            hide_gq_ad();


        if($('#welcomebox').hasClass('openwbox')){

            //box is open close it

                $('#welcomebox').animate({left:-200},300);

                if(!walk_through){
                   setTimeout(function(){
                       $('#welcomebox ').hide();
                    },300);                   
                }
                else{
                        $('#welcomebox ').hide();
                }
 
                
        }

        $('#welcomebox').removeClass('openwbox');

       if(!$('#makkhi_min_box').hasClass('mopen')){
            // console.log('displayed mmini');
            $('#makkhi_min_box').show();
            $('#makkhi_min_box').addClass('mopen');
        }


$('#makkhi_min_box').draggable({

                // scroll: false,
                 // containment: [$(window).width()-100,$(window).height()-100,$(window).width()+100,$(window).height()+100],
                 containment:[-4000,-4000,4000,4000],
              start: function(event, ui) {
                    $(this).addClass('noclick');
                },

             stop: makkhimin_drag_stop,
    } );

}

function unhidewbox(){

	$('#welcomebox').addClass('openwbox');
	$('#welcomebox').animate({left:0},300);
	//hide makkhimin
	if($('#makkhi_min_box').hasClass('mopen')){
		// console.log('hidden mmbox');
		$('#makkhi_min_box').hide();
		$('#makkhi_min_box').removeClass('mopen');
	}

}


function hide_gq_ad(){
    
        if($('#gq_ad').hasClass('open_gq_ad')){

        //box is open close it

            $('#gq_ad').animate({left:-200},300);

                setTimeout(function(){
                    $('#gq_ad ').hide();
            },300);

    $('#welcomebox').removeClass('open_gq_ad');
            
    }


}

function unhidewhisperbox(){
        //to prevent click while drag and drop
        hide_gq_ad();

        if(whisperbox_close_timer!=null){
           window.clearTimeout(whisperbox_close_timer);
           
                }
       if ($('#makkhi_min_box').hasClass('noclick')) {
            $('#makkhi_min_box').removeClass('noclick');
        }

        else{
               //displaying whisperbox 
              if(site_type=="flights"){
              	hidewbox();
              } 

            $('#'+whisperbox+' ').show();
    
                $('#'+whisperboxcontent).css('visibility','visible');
                $('#'+whisperbox)
                .animate({left:'0'},  300)
                .addClass('open');
              
              if($('#makkhi_min_box').hasClass('mopen')){
                // console.log('hidden mmbox');
                $('#makkhi_min_box').hide();
                $('#makkhi_min_box').removeClass('mopen');
              }
                     
            }

   

        whisperbox_close_timer=setTimeout(function(){
            hidewhisperbox('from unhide whisperbox')
        },5000);            

        // console.log(whisperbox_close_timer);
     }

function hidewhisperbox(funcaller){
    console.log(funcaller);
    console.log('hide whisper box called');
    if(!site_type=="flights"){
     $('#welcomebox').hide();
    }
    
    hide_gq_ad();


       if ($('#'+whisperbox).hasClass('open')) {
            $('#'+whisperboxcontent).css('visibility','hidden');
            $('#'+whisperbox)
            .animate({left:'-' + $('#'+whisperbox).outerWidth()}, 300)
            .removeClass('open');

        } 

       if(!$('#makkhi_min_box').hasClass('mopen')){
        console.log('displayed mmini');
            $('#makkhi_min_box').show();
            $('#makkhi_min_box').addClass('mopen');
        }

        if(site_type=="flights"){
			     $('#welcomebox').show();
			     unhidewbox();
	    }
	    else{
            if(!walk_through){
              hidewbox();
            }
	    }


$('#makkhi_min_box').draggable({

    // scroll: false,
     // containment:[$(window).width()-100,$(window).height()-100,$(window).width()+100,$(window).height()+100],
     containment:[-90000,-90000,90000,90000],

     // containment:'document',

  start: function(event, ui) {
        $(this).addClass('noclick');
    },

 stop: makkhimin_drag_stop,
 
       } );

         if(whisperbox_close_timer!=null){
           window.clearTimeout(whisperbox_close_timer);
           
                }
}


function savemakkhiminpos(top,left,wh,ww){

    chrome.runtime.sendMessage({
        site:prod_deets.prod_site,
        method:'save_makkhi_min_pos',
        top:top,
        left:left,
        wh:wh,
        ww:ww
    });
}

function getmmpos(){
    // var mc_draggable_left_limit = parseInt($(mc_root).find("#preview_min_root .pop-up").css("width"));
    // var mc_draggable_top_limit = parseInt($(mc_root).find("#preview_min_root").css("height"));;
    var mc_draggable_top_limit = 0;
    var mc_draggable_left_limit = 0;
    var mc_draggable_right_limit = parseInt($(mc_root).find("#preview_min_root div.pop-up").outerWidth());
    var mc_draggable_bot_limit = parseInt($(mc_root).find("#preview_min_root").css("height"));;

    if(prod_deets.prod_site =="mmt"){
        mc_draggable_top_limit = 75;
    }


    var c_wh,c_ww,top,left;

    if(prod_deets.prod_site!=undefined){

        chrome.runtime.sendMessage({method:"get_mmpos",site:prod_deets.prod_site},function(response){
        if(response.state=='ok'){
            if(response.win_height==undefined||response.win_height==undefined){
                    
                 $(mc_root).find("#preview_min_root").css('left','0px');
                 // $(mc_root).find("#preview_min_root").css('top','230px');
                 $(mc_root).find("#preview_min_root").css('top',($(window).height()-150));

            }
            else{   
                     c_wh=$(window).height();
                     c_ww=$(window).width();   
                     // console.log('c_wh:'+c_wh);
                     // console.log('c_ww:'+c_ww)
                     // console.log('heigh_ratio:'+Math.round((parseInt(response.pos_top)/parseInt(response.win_height))*parseInt(c_wh)));
                     // console.log('left_ratio:'+Math.round((parseInt(response.pos_left)/parseInt(response.win_width))*parseInt(c_ww)));
                     // console.log('pos_top'+response.pos_top);
                     // console.log('pos_left'+response.pos_left);
                     // console.log('wh:'+response.win_height);
                     // console.log('ww:'+response.win_width);
                     top=Math.round((parseInt(response.pos_top)/parseInt(response.win_height))*parseInt(c_wh));
                     left=Math.round((parseInt(response.pos_left)/parseInt(response.win_width))*parseInt(c_ww));

                     if(top<mc_draggable_top_limit){
                        top=mc_draggable_top_limit;
                     }
                     if(top>$(window).height()-mc_draggable_bot_limit){
                        top=($(window).height()-mc_draggable_bot_limit);
                     }
                     if(left<mc_draggable_left_limit){
                        left=mc_draggable_left_limit;
                     }
                     if(left>$(window).width()-mc_draggable_right_limit){
                        left=($(window).width()-mc_draggable_right_limit);
                    }
                      // console.log('reset makkhi positions left:'+left+'top:'+top);  
                     $(mc_root).find("#preview_min_root").css('left',left+'px');
                     $(mc_root).find("#preview_min_root").css('top',top+'px'); 
                     savemakkhiminpos(top,left,$(window).height(),$(window).width()); 
            
            }

        }
        else{
            console.log('mmmpos not ok');
        }
            });
    }
    else{
        setTimeout(getmmpos,10*1000);
    }
}

// setTimeout(getmmpos,3*1000);

function makkhimin_drag_stop(event, ui) {
        console.log("makkhi dragged");
        // register_user_action('price_box_moved');
        var mc_draggable_left_limit = 0;
        var mc_draggable_top_limit = 0;
        var mc_draggable_right_limit = parseInt($(mc_root).find("#preview_min_root .pop-up").outerWidth());
        var mc_draggable_bot_limit = parseInt($(mc_root).find("#preview_min_root").css("height"));;

        if(prod_deets.prod_site =="mmt"){
            mc_draggable_top_limit = 75;
        }
        if(prod_deets.prod_site =="aj"){
            mc_draggable_top_limit = 75;
        }


        var top_pos=parseInt($(this).css('top'));
        var left_pos=parseInt($(this).css('left'));
        console.log('left: '+left_pos+' Top: '+top_pos);
        var pos_saved=false;

        if((top_pos>$(window).height()-mc_draggable_bot_limit) ||top_pos<0){
            console.log('did not saved makkhi pos');
        }   
        else if((left_pos>$(window).width()-mc_draggable_right_limit) ||left_pos<0){
            console.log('did not saved makkhi pos');
        }
        else{
             console.log('saved makkhi pos');
            pos_saved=true;
        savemakkhiminpos(top_pos,left_pos,$(window).height(),$(window).width());    
        }

        if(top_pos>$(window).height()-mc_draggable_bot_limit){
            console.log(' top position too high');
            top_pos=($(window).height()-mc_draggable_bot_limit);
            $(mc_root).find("#preview_min_root").css('top',($(window).height()-mc_draggable_bot_limit)+'px');
        }
        if(top_pos<mc_draggable_top_limit){
            console.log('top position too low');
            top_pos=mc_draggable_top_limit;
            $(mc_root).find("#preview_min_root").css('top',mc_draggable_top_limit+'px');
        }

        if(left_pos>$(window).width()-mc_draggable_right_limit){
            console.log(' left position too high');
            left_pos=($(window).width()-mc_draggable_right_limit);
            $(mc_root).find("#preview_min_root").css('left',($(window).width()-mc_draggable_right_limit)+'px');
        }
        if(left_pos<mc_draggable_left_limit){
            console.log(' left position too low');
            left_pos=-mc_draggable_left_limit;
            $(mc_root).find("#preview_min_root").css('left',mc_draggable_left_limit+'px');
        }
        if(pos_saved==false){
            console.log('new positions'+'left: '+left_pos+' Top: '+top_pos);
            savemakkhiminpos(top_pos,left_pos,$(window).height(),$(window).width());
        }
                    
}

$(window).resize(function(){
    console.log('window resized');
if((window.location.hostname==="www.google.co.in") &&(window.location.pathname==="/_/chrome/newtab")){
    //do something;
   
}
else{
    getmmpos();
}

    
});


var walk_through=false;


function do_walk_through(){

    // console.log('in walk through check');
    // chrome.runtime.sendMessage({method:'do_walk_through'},function(response){
    //     if(response.state=='ok'){
    //         console.log(response['resp'].is_walk_through_done);
    //         if(response['resp'].is_walk_through_done==false){
    //             step1fun();
    //         }
    //     }
    // });

    step1fun();

}

function step1fun(){
 walk_through=true;   
var html_prompt="<div style='font-size:large;'>  <p style='text-align:left;'><img src='"+housefly+"' style='vertical-align:middle;'>Here's a super short tutorial on how the Makkhi can help you.</p><p></p></div>"
    
   try{
        start_prompt.remove(); 
    }
    catch(err){
        console.log(err);
    }

  $.prompt(html_prompt,{
        buttons:[

            {title:'Continue', value:'continue',classes:['continue_button']},
            {title:'Skip', value:'skip',classes:['skip_button']}

        ],
        position:{
            width:700,
        },

  
  close:function(e,v,m,f){
            walk_through_close(e,v,m,f,1);            
        },
  
        submit:function(e,v,m,f){
            console.log(v);
            if(v=='continue'){
            chrome.runtime.sendMessage({method:'wt_continue_button_clicked'})    
            step2fun();
            }
            else if(v=='skip'){
                //do smoething to close everything
                chrome.runtime.sendMessage({method:'skip_button_clicked'})
            }
    
        }


  });
}

function step2fun(){

    var html_prompt="<div><p><img src='"+mbox_img+"' style='vertical-align:middle;'><br>The Makkhi will find lower prices and show them here. Hover to see prices for all sites.</p></div>"
    if(wcboxclose_timer!=null){
        // console.log('cleared welcomebox timer');
           window.clearTimeout(wcboxclose_timer);
           
        }

  if($('#makkhi_min_box').hasClass('mopen')){
        // console.log('hidden mmbox');
        $('#makkhi_min_box').hide();
        $('#makkhi_min_box').removeClass('mopen');
    }
    //display welcome box

    $('#welcomebox').animate({left:'0'}, 10);

    $('#welcomebox').show();


   $.prompt(html_prompt,{

    buttons:{Next:true},
    position:{
                container:$('#welcomebox'),
                width:250,
                // x:parseInt($('#welcomebox').width())+parseInt($('#welcomebox').css('left')+20),
                // y:parseInt($('#welcomebox').height()/2)+parseInt($('#welcomebox').css('top')),
                x:parseInt($('#welcomebox').width()+20),
                y:parseInt($('#welcomebox').height()/16),
                arrow:'lt'

                },
 close:function(e,v,m,f){
            walk_through_close(e,v,m,f,2);            
        },
           
    submit:function(e,v,m,f){
        chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'2'})
        step3fun();
    }
    
    });   

}

function step8fun(){
walkthrough =true;
var html_prompt='<div> Don\'t want to see the Makkhi? You can use the <span style="border-radius: 10px;font-family: Arial;color: rgb(250, 250, 250);font-size:small;background: rgba(146, 146, 146, 0.9);padding: 3px 7px 3px 7px;">Hide</span>  button to make it disappear. If not, it closes in 15 seconds in any case.</div>';
    if(wcboxclose_timer!=null){
        // console.log('cleared welcomebox timer');
           window.clearTimeout(wcboxclose_timer);
           
        }

  if($('#makkhi_min_box').hasClass('mopen')){
        // console.log('hidden mmbox');
        $('#makkhi_min_box').hide();
        $('#makkhi_min_box').removeClass('mopen');
    }
    //display welcome box

    // $('#welcomebox').animate({left:'0'}, 10);

    // $('#welcomebox').show();

    // $('#welcomebox').addClass('openwbox');
    // $('#welcomebox').animate({left:0},300);
    // $("#welcomebox").css("display","block");


    unhidewbox();

   $.prompt(html_prompt,{

    buttons:{Next:true},
    position:{
                container:$('#welcomebox'),
                width:250,
                // x:parseInt($('#welcomebox').width())+parseInt($('#welcomebox').css('left')+20),
                // y:parseInt($('#welcomebox').height()/2)+parseInt($('#welcomebox').css('top')),
                x:parseInt($('#welcomebox').width()+20),
                y:parseInt($('#welcomebox').height()/16),
                arrow:'lm'

                },
    close:function(e,v,m,f){
            walk_through_close(e,v,m,f,8);            
        },
            
    submit:function(e,v,m,f){
        chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'8'})
        step9fun();
    }
    
    });   

}


function step9fun(){
    var html_prompt="<div><p> <img src='"+makkhi_min_green_bg+"' style='vertical-align:middle;'> <br> This icon will appear when idle. Click on it if you want to see the lower prices it found. </p></div>"
     hidewbox();
     hidewhisperbox();
     $('#makkhi_min_box').css('left','-35px');
     $('#makkhi_min_box').css('top','230px');


   $.prompt(html_prompt,{

    buttons:{Next:true},
    position:{
                container:$('#welcomebox'),
                width:250,
                // x:parseInt($('#welcomebox').width())+parseInt($('#welcomebox').css('left')+20),
                // y:parseInt($('#welcomebox').height()/2)+parseInt($('#welcomebox').css('top')),
                x:parseInt($('#makkhi_min_box').width()),
                y:parseInt($('#makkhi_min_box').css('top')),
                // y:200,
                arrow:'lt'

                },
    close:function(e,v,m,f){
            walk_through_close(e,v,m,f,9);            
        },
            
    submit:function(e,v,m,f){
        chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'9'})
        step10fun();
    }
    
    });   

}


function step10fun(){

    var mmTimer;
    var count=0;

     hidewbox();
     hidewhisperbox();
     $('#makkhi_min_box').css('left','-35px');
     $('#makkhi_min_box').css('top','230px');


   $.prompt("You can drag this icon and place it any where on the screen",{

    buttons:{Next:true},
    position:{
                container:$('#welcomebox'),
                width:250,
                // x:parseInt($('#welcomebox').width())+parseInt($('#welcomebox').css('left')+20),
                // y:parseInt($('#welcomebox').height()/2)+parseInt($('#welcomebox').css('top')),
                x:parseInt($('#makkhi_min_box').width()),
                y:parseInt($('#makkhi_min_box').css('top')),
                // y:200,
                arrow:'lt'

                },
    close:function(e,v,m,f){
            walk_through_close(e,v,m,f,10);            
        },
            
    submit:function(e,v,m,f){
    if(mmTimer!=null){
        // console.log('cleared welcomebox timer');
           window.clearTimeout(mmTimer);
           
        }
        chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'10'})
        step11fun();
    }
    
    });

mmTimer=setTimeout(mmakkhi,1500);

// function mmakkhi(){
// $( "#makkhi_min_box" ).animate({ "left": "+=50px","top": "+=50px", }, "slow" );
// count=count+1;
// if(count<5){
// mmTimer=setTimeout(mmakkhi,1000);    
// }

// }


function mmakkhi(){

    $( "#makkhi_min_box" ).animate({ "left": "+=500px", }, 800 );

    $( "#makkhi_min_box" ).animate({ "left": "-=500px", }, 800 );

}

}


function step3fun(){
   
   walk_through=true; 
   // unhidewhisperbox();


   $('#'+whisperbox+' ').show();

    $('#'+whisperboxcontent).css('visibility','visible');
    $('#'+whisperbox)
    .animate({left:'0'},10)
    .addClass('open');
  
  if($('#makkhi_min_box').hasClass('mopen')){
    // console.log('hidden mmbox');
    $('#makkhi_min_box').hide();
    $('#makkhi_min_box').removeClass('mopen');
  }


   window.clearTimeout(whisperbox_close_timer);


   $.prompt("This is where all the magic happens. You can see all the lower price we found here",{

    buttons:{Next:true},
    position:{
                container:$('body'),
                width:250,
                // x:parseInt($('#welcomebox').width())+parseInt($('#welcomebox').css('left')+20),
                // y:parseInt($('#welcomebox').height()/2)+parseInt($('#welcomebox').css('top')),
                // x:parseInt($('#'+whisperbox).width()+20),
                // y:parseInt($('#'+whisperbox).css('top'))+100,
                //x:parseInt($('#'+whisperbox).offset().left)+$('#'+whisperbox).width()+30,
                 // y:parseInt($('#'+whisperbox).offset().top)+$('#'+whisperbox).height()-40,
               x:$('#'+whisperbox).width()+30,
               y:$('#'+whisperbox).height()-40,
                arrow:'lt'

                },
    close:function(e,v,m,f){
            walk_through_close(e,v,m,f,3);            
        },
            
    submit:function(e,v,m,f){
        chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'3'})
            step4fun();
    }
    
    });   

}


function step4fun(){

  var html_prompt="<div>Want to know when the price goes down? We have that covered.Click on the <br> <span style='font-size:small;border-radius: 10px;font-family: Arial;color: rgb(250, 250, 250);padding: 3px 7px 3px 7px;background:rgba(146, 146, 146, 0.9) url(" + track_price_img + ") no-repeat left 2px center ;'>&nbsp Track price</span> button and we'll send you an email and a notification</div>"
   walk_through=true; 
   unhidewhisperbox();

   window.clearTimeout(whisperbox_close_timer);


   $.prompt(html_prompt,{

    buttons:{Next:true},
    position:{
                container:$('body'),
                width:250,
                x:parseInt($('#'+whisperbox).width()+30),
                y:200,
                arrow:'lt'

                },
    close:function(e,v,m,f){
            walk_through_close(e,v,m,f,4);            
        },
            
    submit:function(e,v,m,f){
        chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'4'})
        hidewhisperbox();

        step8fun();
    }
    
    });   

}

function step5fun(){

   walk_through=true; 
   unhidewhisperbox();

   window.clearTimeout(whisperbox_close_timer);


   $.prompt("We like showing you great deals. So if we find super low prices on similar products, we will show them down here.",{

    buttons:{Next:true},
    position:{
                container:$('#'+whisperbox),
                width:250,
                x:parseInt($('#'+whisperbox).width()+20),
                y:parseInt($('#'+whisperbox).css('top'))+100,
                arrow:'lt'

                },
     close:function(e,v,m,f){
            walk_through_close(e,v,m,f,5);            
        },
           
    submit:function(e,v,m,f){
        chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'5'})
        step6fun();
    }
    
    }); 
  setTimeout(function(){
    $('#'+whisperbox).animate({scrollTop:$('#'+whisperbox).innerHeight()},300);
  },1000);    
 
}


function step6fun(){


   var html_prompt="<div><p>Want to know how the price of the product has changed? Hover on <img src='"+history_icon_img+"' style='vertical-align:middle;'> this Icon</p></div>" 

   hidewhisperbox();
     if($('#makkhi_min_box').hasClass('mopen')){
        // console.log('hidden mmbox');
        $('#makkhi_min_box').hide();
        $('#makkhi_min_box').removeClass('mopen');
    }


   $.prompt(html_prompt,{

    buttons:{Next:true},
    position:{
                container:$('body'),
                width:250,
                 x:parseInt($('#'+mfhistory).offset().left)+50,
                 y:parseInt($('#'+mfhistory).offset().top),
                // // y:200,
                arrow:'lt'

                },
    close:function(e,v,m,f){
            walk_through_close(e,v,m,f,6);            
        },
            
    submit:function(e,v,m,f){
        chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'6'})
        step7fun();
    }

    });   

}


function step7fun(){

    $('#'+mfhistory).mouseover();

    walk_through=true;

   $.prompt("A price graph will appear and let you know whether that deal is really a deal or if someone is trying to pull a fast one.",{

    buttons:{Next:true},
    position:{
                container:$('body'),
                width:250,
                 x:parseInt($('#price-history').offset().left)+$('#price-history').width()+30,
                 y:parseInt($('#price-history').offset().top)+$('#price-history').height()-40,
                // // y:200,
                arrow:'lt'

                },
    close:function(e,v,m,f){
            walk_through_close(e,v,m,f,7);            
        },
            

    submit:function(e,v,m,f){
          walk_through=false;  
         $('#'+mfhistory).mouseout();
         walk_through=true;
         chrome.runtime.sendMessage({method:'wt_next_button_clicked',step_num:'7'})
        step8fun();

    }

    });

      

}

function step11fun(){
    var html_prompt="<div style='font-size:large;'>  <p style='text-align:left;font-weight: bold;'><img src='"+housefly+"' style='vertical-align:middle;'> Aaand that's it. Happy savings!</p><p style='text-align:left;'>You may also like<a href='http://makkhichoose.com/gettatkalnow' target='_blank'>TatkalNow</a>,our irctc ticket booking plugin.</p></div>";
    walk_through=false;
    $('#'+mfhistory).mouseout();

    $.prompt(html_prompt,{
        position:{
            width:550
        },
        buttons:{Done:'close'},
        close:function(e,v,m,f){
            walk_through_close(e,v,m,f,11);            
        },
        submit:function(){
        chrome.runtime.sendMessage({method:'wt_Done_button_clicked',step_num:'11'})
        }
    });
}

function walk_through_close(e,v,m,f,step){

    console.log('in walthrough step number '+step);

   if((v==undefined)||(v=='close')||(v=='skip')){
       window.clearTimeout(whisperbox_close_timer);
       hidewhisperbox();
       walk_through=false;
       window.clearTimeout(whisperbox_close_timer);

       console.log('walkthrough stopped');

   } 

   if(v==undefined){
    console.log('undefined close');
    chrome.runtime.sendMessage({method:'close_button_clicked',step_number:step+''});
   }
   
}

// function get_nt_deals(site_fetch){

// var site="";
// var req="";

// if(site_fetch===undefined){
    
//     if(Math.random()>0.5){
//         site='az';
//     }
//     else{
//         site='fk';
//     }

// }
// else{
//     site=site_fetch;
// }

// // req="https://data1.makkhichoose.com/getdailydeals?&site=fkcount=8"
//  req="https://data1.makkhichoose.com/getdailydeals";

//     var req_send = backPostGet({
//         type: "GET",
//         //url:https://data1.makkhichoose.com/getdailydeals?site=az&count=3
//         url:req,
//         timeout: 3500,
//     });

// req_send.done(function(response){
//     //do something o show it on page
//     var parsed_response=$.parseJSON(response);
//     if(parsed_response['success']){
//     insert_deals(parsed_response);
//     }
//     else{
//         if(site=='fk'){

//             get_nt_deals('az');
//         }
//     }

// });

// }

// function insert_deals(response){
// var slide_1,slide_2,slide_3,slide_4,slide_5,slide_6,slide_7,slide_8;

//     var i=0;
// var slide_row_temp;

// for(i=0;i<response['deals'].length;i++){

//     slide_row_temp=get_slide(response['deals'][i],i);

//     if((i+1)==1){
//         slide_1=slide_row_temp;
//     }
//     if((i+1)==2){
//         slide_2=slide_row_temp;
//     }
//     if((i+1)==3){
//         slide_3=slide_row_temp;
//     }
//     if((i+1)==4){
//         slide_4=slide_row_temp;
//     }
//     if((i+1)==5){
//         slide_5=slide_row_temp;
//     }
//     if((i+1)==6){
//         slide_6=slide_row_temp;
//     }
//     if((i+1)==7){
//         slide_7=slide_row_temp;
//     }
//     if((i+1)==8){
//         slide_8=slide_row_temp;
//     }

// }



// $('head').append("<style>.mcmvt:hover{border-color: rgba(150,150,150,1); box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 4px 8px 0 rgba(0,0,0,0.2); border-color: rgba(150,150,150,1);}<\/style>");
// $('head').append("<style>.switch{position: relative; display: inline-block; width: 30px; height: 17px;}.switch input{display:none;}.slider{position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; -webkit-transition: .4s; transition: .4s;}.slider:before{position: absolute; content: \"\"; height: 13px; width: 13px; left: 2px; bottom: 2px; background-color: white; -webkit-transition: .4s; transition: .4s;}input:checked + .slider{background-color: #2196F3;}input:focus + .slider{box-shadow: 0 0 1px #2196F3;}input:checked + .slider:before{-webkit-transform: translateX(13px); -ms-transform: translateX(13px); transform: translateX(13px);}\/* Rounded sliders *\/.slider.round{border-radius: 17px;}.slider.round:before{border-radius: 50%;}<\/style>");
// $('head').append("<style>.mcfoot{width:344px;}@media only screen and (min-width:660px){.mcfoot{width: 516px}}@media only screen and (min-width:820px){.mcfoot{width: 688px}}<\/style>");
// var slide_temp="";
// slide_temp += "<div style=' margin-top:-10px; height:132px; max-height:132px; overflow:hidden;'id=\"most-visited\" class=\"thumb-ntp\"><div id=\"mv-tiles\" style=\"opacity:1;\">";
// slide_temp +=slide_1+slide_2+slide_3+slide_4;
// slide_temp += "<\/div><\/div>";


// var deals_temp='';
// deals_temp+='<div class="mcfoot">';
// deals_temp += "<div  id='foot_div' style='float:right; margin:10px;'><img style='vertical-align:middle;'src=\"";
// deals_temp += makkhi_droid_img;
// deals_temp += "\">Powered by MakkhiChoose <label title=\" Don't want to view interesting deals here? Turn them off using this switch\" class=\"switch\" id='toggle_switch' style='vertical-align:middle; margin-left:3px;'> <input id='toogle_check_box' type=\"checkbox\" checked> <div class=\"slider round\"><\/div> <\/label> <\/div>";
// deals_temp+='</div>'

// $('body').append(slide_temp+deals_temp);
// // $('body').animate({scrollTop:$('body').innerHeight()},50);

// $('img[id^="makkhi_back_img_"]').each(function(index){
//     var imgID= $(this).attr('id');
//     var imgURL = $(this).attr('data-src');
//     chrome.runtime.sendMessage({method: "image_url_to_b64_url", url: imgURL, id: imgID}, function(response) {
//         if(response.status && response.req == "succ") {
//             document.getElementById(response.id).src = response.data;
//         }
//     });

// });



// $('#toogle_check_box').click(function(){

//     if($('#toogle_check_box').prop('checked')){

//         chrome.runtime.sendMessage({method:'toggle_button_turned_on',uid:id_deets.user_id});
//         //checked
//         chrome.storage.local.set({'showNewTabsDeals':true,});
//     }
//     else{



//           $.toast({
//            heading: 'A Note from MakkhiChoose',
//            text: 'Sorry about that! No deals on the new tab from the next time. If you do change your mind, you can always turn them back on from the settings page.',
//            showHideTransition: 'slide',
//            icon: 'info',
//             hideAfter: 5000
//         })


//         chrome.storage.local.set({'showNewTabsDeals':false,});

//     }


// });

// $('.mcmvt').click(function(){

//     chrome.runtime.sendMessage({method:'new_tab_deals_clicked',uid:id_deets.user_id});

// })



// }



function get_slide(deets,i){
var slide_row_image,slide_row_title,slide_row_mrp,slide_row_price,slide_row_expire_time,slide_row_link, slide_row_drop,slide_row_head_icon,slide_row_head_title;
var deals_domain,header_image_url;

// slide_row_head_icon='https://s2.googleusercontent.com/s2/favicons?domain_url=https%3A%2F%2Fwww.amazon.in%2F&alt=s&sz=32&src=chrome_newtab';
// slide_row_head_title='amazon';


slide_row_image=deets['image_url'];
slide_row_title=deets['title'];
slide_row_mrp=deets['mrpPrice'];
slide_row_price=deets['dealPrice'];
slide_row_expire_time=deets['expires'];
slide_row_link=affynewtabdeals(deets['dealurl']);

deals_domain=url_domain(slide_row_link);

if(deals_domain=='Amazon'){
    //insert amazon image to header
    
    slide_row_head_icon=chrome.extension.getURL('az_header_icon.png');
    // slide_row_head_title='Amazon';
    slide_row_head_title='Makkhi Deals';

}
else if(deals_domain=='Flipkart'){
    //insert Flipkart image to header
    slide_row_head_icon=chrome.extension.getURL('fk_header_icon.png');
    // slide_row_head_title='Flipkart';
    slide_row_head_title='Makkhi Deals';
}
else{
    //insert makkhi image to header
    slide_row_head_icon=chrome.extension.getURL('makkhidroid_small.png');
    slide_row_head_title='Makkhi Deals';
}

if(slide_row_mrp!=undefined && slide_row_price){
slide_row_drop= Math.round(((slide_row_mrp-slide_row_price )/slide_row_mrp)*100);
slide_row_drop+='%'

slide_row_title=slide_row_title+" -- "+slide_row_drop+" off";
}



var slide_row_temp="";
slide_row_temp += "<a class=\"mv-tile mcmvt\" title=\""+slide_row_title+"\" target='_blank'  style='border: 1px solid rgba(150,150,150,0.3137254901960784); width:151px;}'href=\"";
slide_row_temp +=slide_row_link;
slide_row_temp += "\"> <div style=\"background-size: 16px; height: 16px; left: 7px; margin: 0; pointer-events: none; position: absolute; top: 7px; width: 16px;\" class=\"mv-favicon\"> <img style=\"height: 100%; width:100%;\" src=\"";
slide_row_temp +=slide_row_head_icon;
slide_row_temp += "\"> <\/div><div class=\"mv-title\" style=\"direction: ltr; color:black;\">";
slide_row_temp +=slide_row_head_title;
slide_row_temp += "<\/div><div style='background:white; display:flex; margin-left:-2.5px;'title=\"";
slide_row_temp +=slide_row_title;
slide_row_temp += "\" class=\"mv-thumb\"> <img id='makkhi_back_img_" + i.toString() + "' style='max-width:100%;max-height:100%; margin:auto;' class=\"thumbnail\" data-src=\"";
slide_row_temp +=slide_row_image;
slide_row_temp += "\"> <\/div><\/a>";

return slide_row_temp;


}

function affynewtabdeals(url){

    var newurl;    
    var deals_domain=url_domain(url);

    if(deals_domain='Amazon'){

        newurl=updateURLParameter(url,'tag','newtabdeal-21');

        newurl=updateURLParameter(newurl,'ascsubtag',id_deets.user_id);

        return newurl;

    }
    else if(deals_domain='Flipkart'){

        newurl=updateURLParameter(url,'affid','saikerneli');
        newurl=updateURLParameter(newurl,'affExtParam1','newtabdeal');
        newurl=updateURLParameter(newurl,'affExtParam2',id_deets.user_id);

        return newurl;

    }



}

function updateURLParameter(url, param, paramVal)
{
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    var i=0;
    if (additionalURL) 
    {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (i=0; i<tempArray.length; i++)
        {
            if(tempArray[i].split('=')[0] != param)
            {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }        
    }
    else
    {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if(TheParams)
            baseURL = TheParams;
    }

    if(TheAnchor)
        paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}


var pt_previous_url='';


function pt_prod_page_task(){
            //product page
        reset_displayed_analytics();

        console.log('product page detected');
        // var prod_path=window.location.pathname;
        // var prod_link_part= prod_path.slice(prod_path.indexOf('/p/'));

        var prod_link_part = window.location.href.split('paytmmall.com/')[1]

        var pt_req= {
        "type":"GET",
        "url":"https://catalog.paytm.com/"+prod_link_part,
        "content-type":"application/json"

        }

       var dyn_req = backPostGet(pt_req);

       dyn_req.done(function(response){

            var prod_details= response;
            var product_id = prod_details.product_id;
            var prod_mrp=prod_details.actual_price;
            var prod_title = prod_details.bargain_name;
            var prod_img = prod_details.image_url;
            var prod_sell_price = prod_details.offer_price;
            var prod_link = prod_details.shareurl;

            var breadcrumb_list = prod_details.ancestors;
            var crumbs = ""
            for(i=0; i<breadcrumb_list.length;i++){
                crumbs += breadcrumb_list[i].name;
                crumbs += "_";
            }
            if(crumbs){
                crumbs = crumbs.slice(0,-1);
            }
            crumbs = crumbs?crumbs:"";

            var prod_categ_alt = crumbs;
            var prod_categ = "";
            if(crumbs){
                prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
            }

            document.dispatchEvent(new CustomEvent('pitama_communique', {
                detail: {
                    isProdPage: true,
                    prod_id: product_id,
                    prod_title: prod_title,
                    prod_categ: prod_categ,
                    prod_categ_alt: prod_categ_alt,
                    prod_mrp: prod_mrp,
                    prod_sell_price: prod_sell_price,
                    prod_link: prod_link,
                    prod_img: prod_img
                }
            }));

       });
}


function pt_not_a_pp_task(){

        document.dispatchEvent(new CustomEvent('pitama_communique', {
                detail: {
                            isProdPage: false,
                            isResultsPage: true
                        }
            }));

}


var pt_check_counter =1;

function pt_url_check(){
    url=window.location.href;
    var pt_current_url=url

    if(pt_check_counter==1){
        console.log(pt_previous_url);
        console.log(pt_current_url);
        pt_check_counter += 1;
    }

    if(pt_previous_url!=pt_current_url && pt_previous_url+'#'!=pt_current_url ){
        //found paytm.com
        console.log('inpaytm');
        if(is_pt_product_page()){
            pt_prod_page_task();

        }
        else{
            pt_not_a_pp_task();
        }
    }else{
        // console.log(pt_previous_url);
        // console.log(pt_current_url);
        // console.log("no url change detected");
    }       
    pt_previous_url=pt_current_url;
    setTimeout(pt_url_check,500);

}

function is_pt_product_page(){
    if( (window.location.href.match(/paytmmall.com\/[\w-]+-pdp\?/g)) || (window.location.href.match(/paytmmall.com\/[\w-]+-pdp\b/g)) ){
        return true;
    }else{
        return false;
    }
}
//functions for gold quest page
//function for amazon gis table page
function bsend_gq(url){
        //send
     console.log(url);   
    search_url=affydeals_gq(url);
    console.log(search_url);
   var dyn_req = backPostGet({
            type: "GET",
            url: search_url
        });
        

    dyn_req.done(function(){
        // affy_flags['az_search']=false;
        // set_affy('az_search',false);
    });
}


function affydeals_gq(url){
        if(url.indexOf('?')!=-1){
        var clean_url = url.substring(0, url.indexOf("?"));
        }
        else{
            clean_url=url;
        }
        console.log(clean_url);
        params = {'tag':'makkhigold-21','ascsubtag':id_deets.user_id};
        redir_link=combineUrlBitsWithParams(clean_url,params);
        console.log(redir_link);
        return redir_link;
}

function lbtest(){
    chrome.runtime.sendMessage({method:'sendlp'})
}



chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){

    console.log(' some message passed');
    console.log(message);

 
   if(message.method=='show_toast'){
        var t_message = message.toast_msg;
        if(typeof t_message =="string"){
            t_message = JSON.parse(t_message);
        }
        $.toast(t_message);

    }else if(message.method=='deals_reminder_notification'){
        $.toast(message.toast_msg);
        $('body').on('click','#deal_reminder_toast_message',function(){
            $(this).siblings('.close-jq-toast-single').click(); 
        });

    } else if(message.method=="get_url"){
        sendResponse({"url":window.location.hostname.replace("www.","")});
    }else if(message.method=="browser_action_clicked"){
        if($('#mc_pop_up').length > 0){
            $('#mc_pop_up').remove();
        }
        else{

             // $('body').append("<div id = \"mc_pop_up\" style=\"top:80px; right:40px; text-align: left; background-color:white; box-sizing:content-box; position:fixed; z-index: 2147483647 !important;  box-shadow: 0px 0px 38px 3px; border-bottom:4px solid #9ed763; \"><div id =\"mc_main_popup_close_box\" style=\" box-sizing:content-box; height: 16px; text-align: left; background-color:white; width: 16px;cursor: pointer;background:url("+closebox+");position:relative; top:5px; left:95%;\" title=\"Close\"></div>\ <div style=\"box-sizing:content-box;\" id=\"mc_pop_up_container\"> </div> </div>");
             
             // if(shadow_dom_support == "v1"){
             //    //attachShadow
             //    var mc_pop_up_shadow = document.querySelector("#mc_pop_up_container").attachShadow({"mode":"open"});                
             // }
             // else if(shadow_dom_support =="v0"){
             //    // createShadowRoot
             //    var mc_pop_up_shadow = document.querySelector("#mc_pop_up_container").createShadowRoot({"mode":"open"});   
             // }
             // $(mc_pop_up_shadow).append("<style>iframe::-webkit-scrollbar{width:4px;} iframe::-webkit-scrollbar-thumb {background-color: #9ed763; outline: 1px solid #9ed763; height: 30px; } </style><iframe src="+chrome.extension.getURL('popup.html')+"  style=\" width:550px; box-sizing: content-box; height:500px; display:inline-block;  border-radius:5px; background-color:white; border:none;  margin:auto; overflow-y: hidden; \"></iframe>");
             
             // // if(!window.location.href.match("https://www.google.co.in")){
             // //    $("#mc_pop_up iframe").css("width","570px");   
             // // }

             display_popup();

        }
        send_makkhi_popup_icon_click();
    }else if(message.method=="remove_popup"){
         $('#mc_pop_up').remove();
    }else if(message.method=="coupon_copied_cs"){
        console.log("coupon copied");
         send_copied_coupon(message.coupon);
    }else if(message.method == "show_mc_remove_notif"){

         var remove_mc_box =    '<div id="mc_remove_popup_container" style="width:100%; position:fixed; top:30%; box-sizing:content-box; z-index:99999;">\
                    <div id="mc_disable_popup" style="box-sizing:content-box; margin:auto; border-width: 1px; border-bottom: 4px solid #9ed763; padding:20px; border-radius: 5px;  width:550px; box-shadow: 0px 0px 38px 2px; background: #fff url('+housefly+') no-repeat right 5px bottom 5px; background-size: 45px; text-align: left;">\
                            <div id ="mc_email_popup_close_box" style="box-sizing:content-box; height: 16px; width: 16px;cursor: pointer;background:url('+closebox+');position:relative; top:-5px; left:530px;" title="Close"></div>\
                            <div style="font-family: baloo; font-size: 18px; color:#2e3437; margin-bottom:5px;">An Old version of Makkhichoose exists in this browser, please click the Disable button below to disable it  </div>\
                            <button class="disable" style="color: #8fc952; background: none; border: 2px solid #8fc952;     border-radius: 30px; padding: 9px 22px;font-family: \'Lato\', sans-serif; font-weight: bold; font-size: 14px; transition: 0.3s; cursor:pointer; text-align: center; outline:none;">    Disable\
                            </button>   \
                            <div id="mc_email_popup_msg" style="text-align: center; display:none;"> Success </div>\
                    </div>\
                 </div>';
        $("body").append(remove_mc_box);

        $("body").on("click","#mc_disable_popup button.disable",function(){
            $("#mc_remove_popup_container").remove();
            chrome.runtime.sendMessage({"method":"disable_ext","id":message.id},function(response){
                $("body").off("click","#mc_disable_popup button.disable");
            });
        });

    }
    else{
        console.log('no message received');
    }
});

// to close popup
$("body").on("click","#mc_main_popup_close_box",function(){
    $('#mc_pop_up').remove();
});

function remind_me_test(){
    chrome.runtime.sendMessage({method:"remind_me_test"});
}


function display_popup(){
    var iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('popup.html');
    iframe.id = "mc_pop_up";
    iframe.setAttribute("style","overflow-y: hidden;;; position:fixed;top:10px;right:10px;display:block;z-index:2147483647; height:510px; width:550px; border:none; border-bottom:4px solid #9ed763;box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.21); ");
    document.body.appendChild(iframe);
    register_user_action("popup_click_open");
}

function encode_json_to_url(obj){
	var str = Object.keys(obj).map(function(key){ 
		  return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]); 
		}).join('&')
	return str;
}


var flights_img=chrome.extension.getURL('flights.png');
function insert_flights_card(result_box){

    
    var current_price_str = result_box.querySelector(".main-price").textContent.replace("₹","");
    var current_price = parseInt(current_price_str);

    results_list = $(result_view).find("#result_container a.link");

    console.log("inserting box");
     console.log("curent price str"+current_price_str);
    console.log("current price "+current_price);

    if(results_list.length==0){
        //no result result box is empty
        console.log("empty append");
        $(result_view).find("#result_container").append(result_box);
        // update_preview_box(make_preview_box(current_price,current_image));
            update_flights_preview_box(current_price);  
    }
    else{
        //insert it in the correct place based on price order
        var result_inserted = false;
        for(var i=0; i<results_list.length;i++){
            //index starts from top result
            var result_list_el_price=parseInt($(results_list[i]).find(".main-price").text().slice(1));
            console.log(result_list_el_price);

            if(current_price<result_list_el_price){
                console.log("inserting before"+ i);
                $(result_box).insertBefore(results_list[i]);
                //update welcome box
                if(i==0){
                    //1st position
                    update_flights_preview_box(current_price);  
                }
                
                var result_inserted = true;
                break;
            }
        }

        if(!result_inserted){
            console.log("appending")
            $(result_view).find("#result_container").append(result_box);
        }
    }

}


function update_flights_preview_box(price){
    $(mc_root).find("#preview_min_root #price").text("₹"+price);

    if(price<parseInt(journey_deets.price)){
        $(mc_root).find("#preview_min_root #price").css("color","#8fc952");
    }
    else{
        $(mc_root).find("#preview_min_root #price").css("color","#f73f52");
    }
}


	function mc_display_flights_tab(evt, site_tab_id) {
	    // Declare all variables
	    var i, tabcontent, tablinks;

	    // Get all elements with class="tabcontent" and hide them
	    tabcontent = document.getElementsByClassName("mc_tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
	        tabcontent[i].style.display = "none";
	    }

	    // Get all elements with class="tablinks" and remove the class "active"
	    tablinks = document.getElementsByClassName("mc_tablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        tablinks[i].className = tablinks[i].className.replace(" mc_active", "");
	    }

	    // Show the current tab, and add an "active" class to the link that opened the tab
	    document.getElementById(site_tab_id).style.display = "block";
	    evt.currentTarget.className += " mc_active";
	}


function make_flights_card(data){

    if(!view_update){
        flights_results.push(data);
    }


    console.log("card data");
    console.log(data);

    var site_name,carrier_name,total_fare,onward_start_time_str,onward_start_date_str,onward_reach_time_str,onward_reach_date_str,onward_duration_str,onward_stops,return_start_time_str,return_start_date_str,return_reach_time_str,return_reach_date_str,return_duration_str,return_stops;
    var fare_card="";
    
    
    site_name=cssLocs.couponDunia.portalMapReverse[data.site];
    

    carrier_name=data.dept_data.airlineName;
    total_fare=data.low_price;
        
    var t1=$.trim(data.dept_data.deptTime.split(':')[0]);
    var t2=$.trim(data.dept_data.deptTime.split(':')[1]);
    t1=('0'+t1).slice(-2);
    t2=('0'+t2).slice(-2);
    data.dept_data.deptTime=t1+':'+t2+' '
    
    t1=$.trim(data.dept_data.arrTime.split(':')[0]);
    t2=$.trim(data.dept_data.arrTime.split(':')[1]);
    t1=('0'+t1).slice(-2);
    t2=('0'+t2).slice(-2);
    data.dept_data.arrTime=t1+':'+t2+' ';

    onward_start_time_str=data.dept_data.deptTime;
    onward_start_date_str=data.dept_data.deptDate;
    onward_reach_time_str=data.dept_data.arrTime;
    onward_reach_date_str=data.dept_data.arrDate;
    
    onward_duration_str=data.dept_data.duration;

    if(onward_duration_str == "0" || onward_duration_str == 0){
        onward_duration_str = "1";
    }
    
    onward_stops=data.dept_data.stops;

    if(data.arr_data.isFound){

        t1=data.arr_data.deptTime.split(':')[0];
        t2=data.arr_data.deptTime.split(':')[1];
        t1=('0'+t1).slice(-2);
        t2=('0'+t2).slice(-2);
        data.arr_data.deptTime=t1+':'+t2+' '
        
        t1=data.arr_data.arrTime.split(':')[0];
        t2=data.arr_data.arrTime.split(':')[1];
        t1=('0'+t1).slice(-2);
        t2=('0'+t2).slice(-2);
        data.arr_data.arrTime=t1+':'+t2+' ';


        return_start_time_str=data.arr_data.deptTime;
        return_start_date_str=data.arr_data.deptDate;
        return_reach_time_str=data.arr_data.arrTime;
        return_reach_date_str=data.arr_data.arrDate;
        //get it or calculate
        return_duration_str=data.arr_data.duration;
        if(return_duration_str=="0" || return_duration_str==0){
            return_duration_str = "1";
        }

        return_stops=data.arr_data.stops;

    }
    else{

        return_start_time_str='-- --';
        return_start_date_str='';
        return_reach_time_str='-- --';
        return_reach_date_str='';
        //get it or calculate
        return_duration_str='--';
        return_stops='-';

    }

    var price_color;


    if(parseInt(total_fare)<parseInt(journey_deets.price)){
        price_color='#006700';
        // low price display
        if(!flights_analyitics_flags['result_view']){
            flights_analyitics_flags['result_view'] = true;
            chrome.runtime.sendMessage({"method":"low_price_displayed_flights","prod_site":prod_deets.prod_site});
        }
    }
    else{
        price_color='#FF4B00';
    }

    var link= make_flights_link(data.site);
    var result_box =  result_template.cloneNode(true);

    if(!data.arr_data.isFound){
        result_box.querySelector(".return_deets").style.display ="none";
    }

    if(dock_settings=="top" || dock_settings=="bottom"){
        result_box.querySelector(".airline_name").textContent = carrier_name;
        result_box.querySelector(".site_name").textContent = site_name;

        result_box.querySelector(".j_date").textContent = onward_start_date_str;
        result_box.querySelector(".j_start_time").textContent = onward_start_time_str;
        result_box.querySelector(".j_edate").textContent = onward_reach_date_str;
        result_box.querySelector(".j_end_time").textContent = onward_reach_time_str;
        result_box.querySelector(".j_dur").textContent = onward_duration_str;
        result_box.querySelector(".j_stops").textContent = onward_stops;

        result_box.querySelector(".r_date").textContent = return_start_date_str;
        result_box.querySelector(".r_start_time").textContent = return_start_time_str;
        result_box.querySelector(".r_edate").textContent = return_reach_date_str;
        result_box.querySelector(".r_end_time").textContent = return_reach_time_str;

        result_box.querySelector(".r_dur").textContent = return_duration_str;
        result_box.querySelector(".r_stops").textContent = return_stops;

        result_box.querySelector(".main-price").textContent = "₹"+total_fare;
        result_box.querySelector(".link").href = link;
    }

    if(dock_settings=="left" || dock_settings=="right"){
        result_box.querySelector(".airline_name").textContent = carrier_name;
        result_box.querySelector(".site_name").textContent = site_name;

        result_box.querySelector(".j_date").textContent = onward_start_date_str;
        result_box.querySelector(".j_start_time").textContent = onward_start_time_str;
        // result_box.querySelector(".j_edate").textContent = onward_reach_date_str;
        // result_box.querySelector(".j_end_time").textContent = onward_reach_time_str;
        result_box.querySelector(".j_dur").textContent = onward_duration_str;
        result_box.querySelector(".j_stops").textContent = onward_stops;

        result_box.querySelector(".r_date").textContent = return_start_date_str;
        result_box.querySelector(".r_start_time").textContent = return_start_time_str;
        // result_box.querySelector(".r_edate").textContent = return_reach_date_str;
        // result_box.querySelector(".r_end_time").textContent = return_reach_time_str;

        result_box.querySelector(".r_dur").textContent = return_duration_str;
        result_box.querySelector(".r_stops").textContent = return_stops;

        result_box.querySelector(".main-price").textContent = "₹"+total_fare;
        result_box.querySelector(".link").href = link;
    }


    if(parseInt(total_fare)<parseInt(journey_deets.price)){
        console.log("setting price color to green");
        result_box.querySelector(".main-price").style.color="#8fc952";
    }
    else{
        console.log("setting price color to red");
        result_box.querySelector(".main-price").style.color="#f73f52";
    }


    return result_box.cloneNode(true);

}


function get_flights_data(json_data,current_site){
	site_type='flights';
	var current_site=prod_deets.prod_site;

	// remove_makkhi_tag();
	// insertTag(false,'flights');
	
	// //resetting for view analytics
	// ga_wcbox_hover_first=true;
 	
 // 	//flights
	// trackMakkhiboxDisplay_flights(prod_deets.prod_site);

	// //common
	// trackMakkhiboxDisplay(prod_deets.prod_site);

	// $("#mc_"+prod_deets.prod_site+"_load").remove();

	// $('#'+whisperbox).css('padding-bottom','0px');
	
	// if(journey_deets.isReturn){
	// 	$('#to_and_fro_deets').html(journey_deets.fromCityCode+' '+'⇄'+' '+journey_deets.toCityCode);
	// }
	// else{
	// 	$('#to_and_fro_deets').html(journey_deets.fromCityCode+' '+'→'+' '+journey_deets.toCityCode);
	// }

	// $('#'+whisperbox).css('visibility','visible');
	// getmmpos();
	// // wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);

	// // setTimeout(function(){
	// // 	wcboxclose_timer= setTimeout(hidewbox,1000*15);
	// // 	getmmpos();

	// // },2000);

    // insert_flights_container(json_data);
    update_data_for_flights_spa(json_data);


}


function fetch_flights_data(json_data){
    trackMakkhiboxDisplay_flights(prod_deets.prod_site);
    site_type='flights';
    var current_site=prod_deets.prod_site;
    console.log("fetching flights data");

    if(journey_deets.isReturn){
     // $('#to_and_fro_deets').html(journey_deets.fromCityCode+' '+'⇄'+' '+journey_deets.toCityCode);
         result_view.querySelector("#from_city_code").textContent = journey_deets.fromCityCode;
         result_view.querySelector("#to_city_code").textContent = journey_deets.toCityCode;
         result_view.querySelector("#jtype").src = chrome.extension.getURL('design_files/resources/images/left-right.png');
    }
    else{
     // $('#to_and_fro_deets').html(journey_deets.fromCityCode+' '+'→'+' '+journey_deets.toCityCode);
         result_view.querySelector("#from_city_code").textContent = journey_deets.fromCityCode;
         result_view.querySelector("#to_city_code").textContent = journey_deets.toCityCode;
         result_view.querySelector("#jtype").src = chrome.extension.getURL('design_files/resources/images/left-right.png');

    }



    if(current_site!='ct'){
        if(json_data.isInternational){
            // get ct int data
            get_clear_trip_data(json_data);
        }
        else{
            get_clear_trip_data(json_data);
        }
    }

    if(current_site!='mmt') {
        if(json_data.isInternational){
            // get mmt int data
            getMakeMyTripInternationalData(json_data);
        }
        else{
            getMakeMyTripDomesticData(json_data);
        }   
    }

    if(current_site!='emt'){
        get_emt_data(json_data);
    }

    if(current_site!='gb'){
        get_goibibo_data(json_data);
    }

    if(current_site!='mf'){
        get_musafir_data(json_data);
    }

}


function remove_makkhi_tag(){

   $('#'+whisperbox).remove();
    $('#welcomebox').remove();
      if($('#makkhi_min_box').hasClass('mopen')){
        // console.log('hidden mmbox');
            $('#makkhi_min_box').hide();
            $('#makkhi_min_box').removeClass('mopen');
          }
    $('#makkhi_min_box').remove(); 
    $('#gq_ad ').remove();     

}

function make_flights_link(site) {

	var month_map={'jan':'01','feb':'02','mar':'03','apr':'04','may':'05','jun':'06','jul':'07','aug':'08','sep':'09','oct':'10','nov':'11','dec':'12'};
	var date_to_convert,from_city_code,to_city_code,depart_date,return_date,is_round,is_international,link;

	from_city_code=journey_deets.fromCityCode;
	to_city_code=journey_deets.toCityCode;

	var json_data = journey_deets;

    if(json_data.nAdults){
        nAdults=json_data.nAdults;
    }
    else{
        nAdults='-';
    }

    if(json_data.nChilds){
        nChilds=json_data.nChilds;
    }
    else{
        nChilds='-';
    }

    if(json_data.nInfants){
        nInfants=json_data.nInfants;
    }
    else{
        nInfants='-';
    }

	if(!journey_deets.isInternational && !journey_deets.isReturn){
		//domestic oneway

		if(site=='ct'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=date_to_convert[1]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[2];
			link="https://www.cleartrip.com/flights/results?from="+from_city_code+"&to="+to_city_code+"&depart_date="+depart_date+"&adults="+journey_deets.nAdults+"&childs="+journey_deets.nChilds+"&infants="+journey_deets.nInfants+"&class=Economy&airline=&carrier=&intl=n";	
			return link;
		}

		if(site=='mmt'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=('0'+date_to_convert[1]).slice(-2)+'-'+month_map[date_to_convert[0].toLowerCase()]+'-'+date_to_convert[2];
			link="https://flights.makemytrip.com/makemytrip/search/O/O/E/"+journey_deets.nAdults+"/"+journey_deets.nChilds+"/"+journey_deets.nInfants+"/S/V0/"+from_city_code+"_"+to_city_code+"_"+depart_date;
			return link;
		}

		if(site=='emt'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=('0'+date_to_convert[1]).slice(-2)+'/'+(('0'+month_map[date_to_convert[0].toLowerCase()]).slice(-2))+'/'+date_to_convert[2];

			createCookie('EMTSearchKey','_searchKeys=2',1);
			createCookie('EMTSearch2','_searchValue=_searchKey'+"&domType=Any&OneWay=true&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt=&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any",1);

			// link="http://www.easemytrip.in/EaseAir/searchmidscreen.aspx?_searchKey=1&domType=Any&OneWay=true&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt=&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any";		
			link="http://www.easemytrip.in?utm_source=m_open"+"&domType=Any&OneWay=true&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt=&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any&int=false";

			return link;
		}

		if(site =='gb'){
			var action_data='air-'+json_data.fromCityCode+'-'+json_data.toCityCode+'-'+json_data.depatureDate.split(' ')[2]+month_name_to_num_map[json_data.depatureDate.split(' ')[0].toLowerCase()]+('0'+json_data.depatureDate.split(' ')[1]).slice(-2)+'-'+'-'+nAdults+'-'+nChilds+'-'+nInfants+'-'+'E';
			link="https://www.goibibo.com/flights/#flight-searchresult/#"+action_data;
			return link;
		}

		if(site == 'mf'){
			var sd = journey_deets["depatureDate"].split(' ')[1] + '/'+(month_name_to_num_map[(journey_deets["depatureDate"].split(' ')[0]).toLowerCase()]) + '/' + journey_deets["depatureDate"].split(' ')[2].slice(2);
			var o = journey_deets["fromCityCode"].toUpperCase();
			var d = journey_deets["toCityCode"].toUpperCase();

			var link = "https://in.musafir.com/Trip/Flights.aspx#p=1&f=0&o="+o+"&d="+d+"&sd="+sd;

			if(nAdults !='-' && nAdults != '0'){
				link = link+"&ad="+nAdults;
			}
			if(nChilds != '-' && nChilds != '0'){
				link = link+"&ch="+nChilds;	
			}
			if(nInfants != '-' && nInfants != '0'){
				link = link+"&in="+nInfants;		
			}
			return link;
		}
	}

	if(!journey_deets.isInternational && journey_deets.isReturn){
		// domestic roundtrip
		if(site=='ct'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=date_to_convert[1]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[2];

			date_to_convert=journey_deets.returnDate.split(' ');
			return_date=date_to_convert[1]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[2];

			link="https://www.cleartrip.com/flights/results?from="+from_city_code+"&to="+to_city_code+"&depart_date="+depart_date+"&return_date="+return_date+"&adults="+journey_deets.nAdults+"&childs="+journey_deets.nChilds+"&infants="+journey_deets.nInfants+"&class=Economy&airline=&carrier=&intl=n";	
			return link;
		}

		if(site=='mmt'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=('0'+date_to_convert[1]).slice(-2)+'-'+month_map[date_to_convert[0].toLowerCase()]+'-'+date_to_convert[2];

			date_to_convert=journey_deets.returnDate.split(' ');
			return_date=('0'+date_to_convert[1]).slice(-2)+'-'+month_map[date_to_convert[0].toLowerCase()]+'-'+date_to_convert[2];



			link="https://flights.makemytrip.com/makemytrip/search/R/R/E/"+journey_deets.nAdults+"/"+journey_deets.nChilds+"/"+journey_deets.nInfants+"/S/V0/"+from_city_code+"_"+to_city_code+"_"+depart_date+","+to_city_code+"_"+from_city_code+"_"+return_date;
			return link;
		}

		if(site=='emt'){
			// link='javascript:';
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=('0'+date_to_convert[1]).slice(-2)+'/'+(('0'+month_map[date_to_convert[0].toLowerCase()]).slice(-2))+'/'+date_to_convert[2];

			date_to_convert=journey_deets.returnDate.split(' ');
			return_date=(('0'+date_to_convert[1]).slice(-2))+'/'+(('0'+month_map[date_to_convert[0].toLowerCase()]).slice(-2))+'/'+date_to_convert[2];

			createCookie('EMTSearchKey','_searchKeys=1',1);
			createCookie('EMTSearch1','_searchValue=_searchKey'+"&domType=Any&OneWay=false&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt="+return_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any",1);

			// link=link="http://www.easemytrip.in/EaseAir/FlightListingRoundTrip.aspx?_searchKey=1&domType=Any&OneWay=false&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt="+return_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any&res=ok&int=false"
			link="http://www.easemytrip.in?utm_source=m_open"+"&domType=Any&OneWay=false&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt="+return_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any&int=false";
			return link;
		}

		if(site =='gb'){
			var action_data='air-'+json_data.fromCityCode+'-'+json_data.toCityCode+'-'+json_data.depatureDate.split(' ')[2]+month_name_to_num_map[json_data.depatureDate.split(' ')[0].toLowerCase()]+('0'+json_data.depatureDate.split(' ')[1]).slice(-2)+'-'+json_data.returnDate.split(' ')[2]+month_name_to_num_map[json_data.returnDate.split(' ')[0].toLowerCase()]+('0'+json_data.returnDate.split(' ')[1]).slice(-2)+'-'+nAdults+'-'+nChilds+'-'+nInfants+'-'+'E';
			link="https://www.goibibo.com/flights/#flight-searchresult/#"+action_data;
			return link;
		}

		if(site == 'mf'){
			var sd = journey_deets["depatureDate"].split(' ')[1] + '/'+(month_name_to_num_map[(journey_deets["depatureDate"].split(' ')[0]).toLowerCase()]) + '/' + journey_deets["depatureDate"].split(' ')[2].slice(2);
			var ed = journey_deets["returnDate"].split(' ')[1] + '/'+(month_name_to_num_map[(journey_deets["returnDate"].split(' ')[0]).toLowerCase()]) + '/' + journey_deets["returnDate"].split(' ')[2].slice(2);
			var o = journey_deets["fromCityCode"].toUpperCase();
			var d = journey_deets["toCityCode"].toUpperCase();

			var link = "https://in.musafir.com/Trip/Flights.aspx#p=1&f=1&o="+o+"&d="+d+"&sd="+sd+"&ed="+ed;

			if(nAdults !='-' && nAdults != '0'){
				link = link+"&ad="+nAdults;
			}
			if(nChilds != '-' && nChilds != '0'){
				link = link+"&ch="+nChilds;	
			}
			if(nInfants != '-' && nInfants != '0'){
				link = link+"&in="+nInfants;		
			}
			return link;
		}

	}


	if(journey_deets.isInternational && !journey_deets.isReturn){
		//international oneway

		if(site=='ct'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=date_to_convert[1]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[2];
			link="https://www.cleartrip.com/flights/international/results?from="+from_city_code+"&to="+to_city_code+"&depart_date="+depart_date+"&adults="+journey_deets.nAdults+"&childs="+journey_deets.nChilds+"&infants="+journey_deets.nInfants+"&class=Economy&airline=&carrier=&intl=y";
			return link;

		}

		if(site=='mmt'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=('0'+date_to_convert[1]).slice(-2)+date_to_convert[0]+date_to_convert[2];

			var itinerary= from_city_code+"-"+to_city_code+"-D-"+depart_date;

			var paxType='A-'+journey_deets.nAdults;
			if(journey_deets.nChilds!=0){
				paxType += '-C-'+journey_deets.nChilds;
			}
			if(journey_deets.nInfants!=0){
				paxType += '-I-'+journey_deets.nInfants;
			}

			link="https://www.makemytrip.com/air/search?tripType=O&itinerary="+itinerary+"&paxType="+paxType+"&cabinClass=E";
			return link;

		}

		if(site=='emt'){

			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=('0'+date_to_convert[1]).slice(-2)+'/'+(('0'+month_map[date_to_convert[0].toLowerCase()]).slice(-2))+'/'+date_to_convert[2];

			createCookie('EMTSearchKey','_searchKeys=1',1);
			createCookie('EMTSearch1','_searchValue=_searchKey'+"&domType=Any&OneWay=true&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any",1);
			// link='javascript:';
			// link="http://www.easemytrip.in/EaseAir/InternationalFlightListing.aspx?_searchKey=1&domType=Any&OneWay=true&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any&res=ok&int=true";
			link="http://www.easemytrip.in?utm_source=m_open"+"&domType=Any&OneWay=true&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any&int=true";
			return link;
		}

		if(site =='gb'){
			var action_data='air-'+json_data.fromCityCode+'-'+json_data.toCityCode+'-'+json_data.depatureDate.split(' ')[2]+month_name_to_num_map[json_data.depatureDate.split(' ')[0].toLowerCase()]+('0'+json_data.depatureDate.split(' ')[1]).slice(-2)+'-'+'-'+nAdults+'-'+nChilds+'-'+nInfants+'-'+'E';
			link="https://www.goibibo.com/flights/#flight-searchresult/?from=international-flights#"+action_data;
			return link;
		}

		if(site == 'mf'){
			var sd = journey_deets["depatureDate"].split(' ')[1] + '/'+(month_name_to_num_map[(journey_deets["depatureDate"].split(' ')[0]).toLowerCase()]) + '/' + journey_deets["depatureDate"].split(' ')[2].slice(2);
			var o = journey_deets["fromCityCode"].toUpperCase();
			var d = journey_deets["toCityCode"].toUpperCase();

			var link = "https://in.musafir.com/Trip/Flights.aspx#p=1&f=0&o="+o+"&d="+d+"&sd="+sd;
			if(nAdults !='-' && nAdults != '0'){
				link = link+"&ad="+nAdults;
			}
			if(nChilds != '-' && nChilds != '0'){
				link = link+"&ch="+nChilds;	
			}
			if(nInfants != '-' && nInfants != '0'){
				link = link+"&in="+nInfants;		
			}
			return link;
		}

	}


	if(journey_deets.isInternational && journey_deets.isReturn){
		//international roundtrip

		if(site=='ct'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=date_to_convert[1]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[2];

			date_to_convert=journey_deets.returnDate.split(' ');
			return_date=date_to_convert[1]+'/'+month_map[date_to_convert[0].toLowerCase()]+'/'+date_to_convert[2];

			link="https://www.cleartrip.com/flights/international/results?from="+from_city_code+"&to="+to_city_code+"&depart_date="+depart_date+"&return_date="+return_date+"&adults="+journey_deets.nAdults+"&childs="+journey_deets.nChilds+"&infants="+journey_deets.nInfants+"&class=Economy&airline=&carrier=&intl=y"
			return link;
		}

		if(site=='mmt'){
			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=('0'+date_to_convert[1]).slice(-2)+date_to_convert[0]+date_to_convert[2];

			date_to_convert=journey_deets.returnDate.split(' ');
			return_date=('0'+date_to_convert[1]).slice(-2)+date_to_convert[0]+date_to_convert[2];

			var itinerary= from_city_code+"-"+to_city_code+"-D-"+depart_date+'_'+to_city_code+'-'+from_city_code+'-D-'+return_date;

			var paxType='A-'+journey_deets.nAdults;
			if(journey_deets.nChilds!=0){
				paxType += '-C-'+journey_deets.nChilds;
			}
			if(journey_deets.nInfants!=0){
				paxType += '-I-'+journey_deets.nInfants;
			}

			link="https://www.makemytrip.com/air/search?tripType=R&itinerary="+itinerary+"&paxType="+paxType+"&cabinClass=E";
			return link;

		}

		if(site=='emt'){

			date_to_convert=journey_deets.depatureDate.split(' ');
			depart_date=('0'+date_to_convert[1]).slice(-2)+'/'+(('0'+month_map[date_to_convert[0].toLowerCase()]).slice(-2))+'/'+date_to_convert[2];

			date_to_convert=journey_deets.returnDate.split(' ');
			return_date=(('0'+date_to_convert[1]).slice(-2))+'/'+(('0'+month_map[date_to_convert[0].toLowerCase()]).slice(-2))+'/'+date_to_convert[2];

			createCookie('EMTSearchKey','_searchKeys=1',1);
			createCookie('EMTSearch1','_searchValue=_searchKey'+"&domType=Any&OneWay=false&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt="+return_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any&res=ok",1);
			// link='javascript:';
			// link="http://www.easemytrip.in/EaseAir/InternationalFlightListing.aspx?_searchKey=1&domType=Any&OneWay=false&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt="+return_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any&res=ok&int=true"
			link="http://www.easemytrip.in?utm_source=m_open"+"&domType=Any&OneWay=false&fromCity="+from_city_code+"&toCity="+to_city_code+"&fromDt="+depart_date+"&toDt="+return_date+"&adultNum="+journey_deets.nAdults+"&childNum="+journey_deets.nChilds+"&infantNum="+journey_deets.nInfants+"&selClass=&selAirLine=Any&res=ok&int=true";
			return link;
		}

		if(site =='gb'){
			var action_data='air-'+json_data.fromCityCode+'-'+json_data.toCityCode+'-'+json_data.depatureDate.split(' ')[2]+month_name_to_num_map[json_data.depatureDate.split(' ')[0].toLowerCase()]+('0'+json_data.depatureDate.split(' ')[1]).slice(-2)+'-'+json_data.returnDate.split(' ')[2]+month_name_to_num_map[json_data.returnDate.split(' ')[0].toLowerCase()]+('0'+json_data.returnDate.split(' ')[1]).slice(-2)+'-'+nAdults+'-'+nChilds+'-'+nInfants+'-'+'E';
			link="https://www.goibibo.com/flights/#flight-searchresult/?from=international-flights#"+action_data;
			return link;
		}

		if(site == 'mf'){
			var sd = journey_deets["depatureDate"].split(' ')[1] + '/'+(month_name_to_num_map[(journey_deets["depatureDate"].split(' ')[0]).toLowerCase()]) + '/' + journey_deets["depatureDate"].split(' ')[2].slice(2);
			var ed = journey_deets["returnDate"].split(' ')[1] + '/'+(month_name_to_num_map[(journey_deets["returnDate"].split(' ')[0]).toLowerCase()]) + '/' + journey_deets["returnDate"].split(' ')[2].slice(2);
			var o = journey_deets["fromCityCode"].toUpperCase();
			var d = journey_deets["toCityCode"].toUpperCase();

			var link = "https://in.musafir.com/Trip/Flights.aspx#p=1&f=1&o="+o+"&d="+d+"&sd="+sd+"&ed="+ed;
			if(nAdults !='-' && nAdults != '0'){
				link = link+"&ad="+nAdults;
			}
			if(nChilds != '-' && nChilds != '0'){
				link = link+"&ch="+nChilds;	
			}
			if(nInfants != '-' && nInfants != '0'){
				link = link+"&in="+nInfants;		
			}
			return link;
		}




	}

}


function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}


function sendsearchIntent(site, value){
	var deets_obj={};

    chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
        var id_deets={};

        id_deets.gcm_id="";
        id_deets.user_id="";
        id_deets.emmy="";
        id_deets.sd_id="";

        id_deets.gcm_id=response.status.gcm_id;
        id_deets.user_id=response.status.user_id;
        id_deets.emmy=response.status.emmy;
        if(response.status.sd_id != undefined){
            id_deets.sd_id = response.status.sd_id;
        }

        deets_obj.site=site;
        deets_obj.ss=value;
        deets_obj.user_id=id_deets.user_id;
        deets_obj.gcm_id=id_deets.gcm_id;
        deets_obj.sd_id=id_deets.sd_id;
        deets_obj.ver=chrome.runtime.getManifest().version;
        deets_obj.ext_id=chrome.runtime.id;
        deets_obj.url=window.location.href;

        var req_send = backPostGet({
            type: "POST",
            // url: "http://shades.makkhichoose.com/dorecomb",
            url: "https://shades.makkhichoose.com/ibqd/dorecomb",
            data: JSON.stringify(deets_obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3500,
        });
                     
 });



}

function sendcartevent(site,button_name,product_id,location,title){

	var deets_obj={};

    chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
        var id_deets={};

        id_deets.gcm_id="";
        id_deets.user_id="";
        id_deets.emmy="";
        id_deets.sd_id="";

        id_deets.gcm_id=response.status.gcm_id;
        id_deets.user_id=response.status.user_id;
        id_deets.emmy=response.status.emmy;
        if(response.status.sd_id != undefined){
            id_deets.sd_id = response.status.sd_id;
        }

        deets_obj.site=site;
        deets_obj.bn=button_name;
        deets_obj.pid=product_id;
        deets_obj.url=location;
        deets_obj.user_id=id_deets.user_id;
        deets_obj.gcm_id=id_deets.gcm_id;
        deets_obj.sd_id=id_deets.sd_id;
        deets_obj.ver=chrome.runtime.getManifest().version;
        deets_obj.ext_id=chrome.runtime.id;
        deets_obj.title=title;

        var req_send = backPostGet({
            type: "POST",
            // url: "http://shades.makkhichoose.com/dorecoma",
            url: "https://shades.makkhichoose.com/ibqd/dorecoma",
            data: JSON.stringify(deets_obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3500,
        });

                     
    });



}

var my_previous_url = "";

function my_url_watcher(){

    if(my_previous_url != window.location.href && my_previous_url+"#" != window.location.href){
        prod_deets.prod_link = window.location.href;
        if(window.location.pathname.match("buy")){
            
            reset_displayed_analytics();

            var bc =  $(".breadcrumbs-container .breadcrumbs-link");
            var paths_len = window.location.pathname.split("/").length;
            prod_deets.product_id = window.location.pathname.split("/")[paths_len-2];
            prod_deets.prod_title = $("h1.pdp-title").text();
            prod_deets.prod_price =  $(".pdp-price").text().replace(" ","").slice(3);
            prod_deets.prod_fulltitle = prod_deets.prod_title;
            prod_deets.prod_title_raw = prod_deets.prod_title;
            prod_deets.prod_srch = prod_deets.prod_title;
            // prod_deets.prod_categ = $(bc[bc.length-1]).text();
            // prod_deets.prod_categ_alt = $(bc[bc.length-2]).text();
            prod_deets.prod_img = $(".thumbnails-selected-image").attr("src");
            prod_deets.prod_site = "my";
    
            var breadcrumb_list = $(".breadcrumbs-container a.breadcrumbs-link");
            var crumbs = ""
            for(i=0; i<breadcrumb_list.length;i++){
                crumbs += $.trim($(breadcrumb_list[i]).text());
                crumbs += "_";
            }
            if(crumbs){
                crumbs = crumbs.slice(0,-1);
            }
            crumbs = crumbs?crumbs:"";

            prod_deets.prod_categ_alt = crumbs;
            if(crumbs){
                prod_deets.prod_categ = crumbs.split('_')[crumbs.split('_').length-1];
            }


            // insert_main_container();
            update_data_for_spa();
            // remove_makkhi_tag();
            // insertTag(false);
            // getmmpos();
            // checkUUID();
            // $('#'+whisperbox).css('visibility','visible');
            // wcboxclose_timer=setTimeout(hidewbox,wcbox_page_start_hide_time);

        }
        else{
            // remove_makkhi_tag();
            $("#mc_host").remove();
        }

    }

    my_previous_url = window.location.href;

    setTimeout(my_url_watcher,1000);

}

var coupons_data_key='mc_coupon_'+window.location.hostname.replace("www.","");
var coupons_msg_obj={};
coupons_msg_obj[coupons_data_key] = "";

chrome.runtime.sendMessage({"method":"get_coupons_from_server","key":coupons_data_key},function(response){
    if(response.msg == "exist"){
        register_user_action("coupon_site_visit");
    }
});

function send_sd_match(link){
    // console.log(" send_sd_match called by"+arguments.callee.caller.toString());
    var id_val = "";
    if(link == ""){
        // console.log("%c manual search","color:red;font-size:large");        
    }
    else{
        id_val=link.split('/').pop().split('?')[0];
        id_val = id_val.match(/^\d+/gim)[0];
    }


    chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
        var id_deets={};

        id_deets.gcm_id="";
        id_deets.user_id="";
        id_deets.emmy="";
        id_deets.sd_id="";

        id_deets.gcm_id=response.status.gcm_id;
        id_deets.user_id=response.status.user_id;
        id_deets.emmy=response.status.emmy;
        if(response.status.sd_id != undefined){
            id_deets.sd_id = response.status.sd_id;
        }

       //sending snapdeal pid to server
        var deets_to_send = JSON.parse(JSON.stringify(prod_deets));
        deets_to_send.user_id=id_deets.user_id;
        deets_to_send.sd_id=id_deets.sd_id;
        deets_to_send.gcm_id=id_deets.gcm_id;
        deets_to_send.ver=chrome.runtime.getManifest().version;
        deets_to_send.ext_id=chrome.runtime.id;
 
        delete deets_to_send["simfound"];
        deets_to_send.sd_match = id_val;

        console.log("logging id_deets");
        console.log(id_deets);
        
        console.log(deets_to_send);

        var req_send = backPostGet({
            type: "POST",
            // url: "http://shades.makkhichoose.com/dorecoma",
            url: "https://shades.makkhichoose.com/ibqd/dorecomc",
            data: JSON.stringify(deets_to_send),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3500,
        });
                     
    });

 

}

function is_dittory_category(){
    if(isApparel() || isFootWear() || isWatch()){

        if(isApparel()){
            console.log("apparel");
        }

        if(isFootWear()){
            console.log("Footwear");
        }

        if(isWatch()){
            console.log("watches");
        }


        return true;
    }
    else{
        return false;
    }
}


$("body").on("click","#mc_popup_close_button",function(){
    $.toast("popup close clicked");
    $('#mc_pop_up').remove();
});

is_fk_kaddo_toast_dispalyed =false;

function kaddo_notif_insert(){
    // $("body").append("<div style=\"position:fixed; bottom:30px; z-index:3000;\" id=\"mc_kadoo_banner\"><a id=\"mc_kadoo_banner_close\" title=\"Close\" style=\"position: absolute;top:-28px; right:-3px;width: 36px;height: 36px;cursor: pointer;z-index: 18040;font-size: 0px;background-color: transparent; background-position: 0px 0px; background-image:url('https://i.imgur.com/8PdquKi.png')\"> </a><img src=\"https://i.imgur.com/hWzw7ys.png\" style=\" display: block; margin-left: auto; margin-right: auto; margin-top:0px;\"></div>") 
    // $("#mc_kadoo_banner #mc_kadoo_banner_close");
    var temp={};
    temp["displayed_kadoo_toast"] = false;
     chrome.storage.local.get(temp,function(response){
            if(response["displayed_kadoo_toast"] == false){

                setTimeout(function(){

                    $.toast({
                            "hideAfter": 1000*30,
                            "text":  "<a id=\"mc_kadoo_notif\" href=\"https://shop.kaadoothebiggame.com/?utm_source=makkhichoose&utm_medium=categ_notif\" style=\" min-width:250px; text-decoration: none;\" target=\"_blank\"><div><div style=\"min-width:250px; font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\">  We have something unique for you<br>We recently discovered this board game, Kaadoo, and loved the idea of exploring Indian wildlife in a fun new way. We are working with them to give MakkhiChoose users a special 20% discount. Click here to learn more. Have a great day!</div></div></a>",
                            "bgColor": "#424242 ",
                            "position": "bottom-right"
                    });
                    $(".jq-toast-single").css("width","280px");

                    send_kadoo_categ_notif_disp();
                    chrome.runtime.sendMessage({"method":"kadoo_categ_notif_displayed","link":window.location.href},function(response){});

                    $("body").on("click","#mc_kadoo_notif",function(){
                      chrome.runtime.sendMessage({"method":"kadoo_categ_notif_clicked","link":window.location.href},function(response){});
                      send_kadoo_categ_notif_click();
                    });

                    //set it in storage
                    temp={};
                    temp["displayed_kadoo_toast"] = true;
                    chrome.storage.local.set(temp,function(response){});


                },5*1000);


            }
     });   
﻿
﻿  

}


function is_game_categ_word(categ_word){
    var reg_game_categ = /toy|game|puzzle/g;
    console.log(categ_word);
    if(categ_word.match(reg_game_categ)){
        return true
    }
    else{
        console.log("does not match");
    }
}

function is_dittory_sub_categ(){
    var reg_sub_categ = /kurti|shirt|saree/g;
    if ((prod_deets.prod_categ.toLowerCase().match(reg_sub_categ)) || (prod_deets.prod_categ_alt.toLowerCase().match(reg_sub_categ)) || (prod_deets.prod_title.toLowerCase().match(reg_sub_categ)) || (prod_deets.prod_title_raw.toLowerCase().match(reg_sub_categ)) || (prod_deets.prod_fulltitle.toLowerCase().match(reg_sub_categ)) ) {
     return true;
    }
    else {
     return false;
    }

}


function game_categ_check(){
    if(prod_deets.prod_site == "az"){
        var nav_tags = $("#nav-subnav a")
        var game_nav_texts = [];
        console.log(nav_tags.length);

        for(var i=0; i<nav_tags.length; i++){
            console.log(i);
            console.log($(nav_tags[i]).text().toLowerCase());
            if(is_game_categ_word($(nav_tags[i]).text().toLowerCase())){
                game_nav_texts.push($(nav_tags[i]).text());
            }
        }

        //check for product page
        var flipref=window.location.href;
        if((flipref.match('/dp/') || flipref.match('/gp/product/')) && (!flipref.match('/gp/product/handle-buy'))){
            if(game_nav_texts.length > 0){
                //product page
                kadoo_banner_insert();
            }

        }
        else{
            //not a product page
            if(game_nav_texts.length > 0){
                //game category page
                kaddo_notif_insert();
            }
        }

    }

    if(prod_deets.prod_site == "fk"){

        var nav_tags = prod_deets.prod_categ_alt.split("_")
        var game_nav_texts = [];
        console.log(nav_tags.length);

        for(var i=0; i<nav_tags.length; i++){
            console.log(i);
            console.log();
            if(is_game_categ_word($.trim((nav_tags[i])).toLowerCase())){
                game_nav_texts.push((nav_tags[i]));
            }
        }
        if(game_nav_texts.length > 0){
            //product page
            kadoo_banner_insert();
        }
 
    }
}

function kadoo_banner_insert(){
    $("#"+whisperbox).append("<a id = \"mc_kadoo_banner\"href=\"https://shop.kaadoothebiggame.com/?utm_source=makkhichoose&utm_medium=categ_result_banner\" target=\"_blank\" stylr=\"text-decoration:none; cursor:pointer;\"><div style=\"position:fixed; margin-right:0px; margin-bottom:0px; top:500px; max-width:300px; \" id=\"mc_kadoo_coupon\" title=\"Click here to get the deal\" style=\"cursor:pointer;\"><img src=\"https://i.imgur.com/zrXBoNU.png\" style=\" max-width:100%; display: block; margin-left: auto; margin-right: auto; margin-top:0px;\"> </div></a>")

    chrome.runtime.sendMessage({"method":"kadoo_pp_banner_displayed","link":window.location.href},function(response){});
    send_kadoo_categ_banner_disp();

    $("body").on("click","#mc_kadoo_banner",function(){
      chrome.runtime.sendMessage({"method":"kadoo_pp_banner_clicked","link":window.location.href},function(response){});
      send_kadoo_categ_banner_click();

    });

}

function send_kadoo_categ_notif_disp(){
    var deets_obj={};

    chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
        var id_deets={};

        id_deets.gcm_id="";
        id_deets.user_id="";
        id_deets.emmy="";
        id_deets.sd_id="";

        id_deets.gcm_id=response.status.gcm_id;
        id_deets.user_id=response.status.user_id;
        id_deets.emmy=response.status.emmy;
        if(response.status.sd_id != undefined){
            id_deets.sd_id = response.status.sd_id;
        }

        deets_obj.user_id=id_deets.user_id;
        deets_obj.gcm_id=id_deets.gcm_id;
        deets_obj.sd_id=id_deets.sd_id;
        deets_obj.ver=chrome.runtime.getManifest().version;
        deets_obj.ext_id=chrome.runtime.id;
        deets_obj.site =prod_deets.prod_site;
        deets_obj.url=window.location.href;

        var req_send = backPostGet({
            type: "POST",
            // url: "http://shades.makkhichoose.com/dorecomb",
            url: "https://shades.makkhichoose.com/ibqd/kaadoonotifshow",
            data: JSON.stringify(deets_obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3500,
        });
                     
 });
}

function send_kadoo_categ_notif_click(){
    var deets_obj={};

    chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
        var id_deets={};

        id_deets.gcm_id="";
        id_deets.user_id="";
        id_deets.emmy="";
        id_deets.sd_id="";

        id_deets.gcm_id=response.status.gcm_id;
        id_deets.user_id=response.status.user_id;
        id_deets.emmy=response.status.emmy;
        if(response.status.sd_id != undefined){
            id_deets.sd_id = response.status.sd_id;
        }

        deets_obj.user_id=id_deets.user_id;
        deets_obj.gcm_id=id_deets.gcm_id;
        deets_obj.sd_id=id_deets.sd_id;
        deets_obj.ver=chrome.runtime.getManifest().version;
        deets_obj.ext_id=chrome.runtime.id;
        deets_obj.site =prod_deets.prod_site;
        deets_obj.url=window.location.href;

        var req_send = backPostGet({
            type: "POST",
            // url: "http://shades.makkhichoose.com/dorecomb",
            url: "https://shades.makkhichoose.com/ibqd/kaadoonotifclick",
            data: JSON.stringify(deets_obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3500,
        });
                     
 });
}


function send_kadoo_categ_banner_disp(){
    var deets_obj={};

    chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
        var id_deets={};

        id_deets.gcm_id="";
        id_deets.user_id="";
        id_deets.emmy="";
        id_deets.sd_id="";

        id_deets.gcm_id=response.status.gcm_id;
        id_deets.user_id=response.status.user_id;
        id_deets.emmy=response.status.emmy;
        if(response.status.sd_id != undefined){
            id_deets.sd_id = response.status.sd_id;
        }

        deets_obj.user_id=id_deets.user_id;
        deets_obj.gcm_id=id_deets.gcm_id;
        deets_obj.sd_id=id_deets.sd_id;
        deets_obj.ver=chrome.runtime.getManifest().version;
        deets_obj.ext_id=chrome.runtime.id;
        deets_obj.site = prod_deets.prod_site;
        deets_obj.pid = prod_deets.product_id;
        deets_obj.url=window.location.href;

        var req_send = backPostGet({
            type: "POST",
            // url: "http://shades.makkhichoose.com/dorecomb",
            url: "https://shades.makkhichoose.com/ibqd/kaadoomakkhiboxbannershow",
            data: JSON.stringify(deets_obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3500,
        });
                     
 });
}


function send_kadoo_categ_banner_click(){
    var deets_obj={};

    chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
        var id_deets={};

        id_deets.gcm_id="";
        id_deets.user_id="";
        id_deets.emmy="";
        id_deets.sd_id="";

        id_deets.gcm_id=response.status.gcm_id;
        id_deets.user_id=response.status.user_id;
        id_deets.emmy=response.status.emmy;
        if(response.status.sd_id != undefined){
            id_deets.sd_id = response.status.sd_id;
        }

        deets_obj.user_id=id_deets.user_id;
        deets_obj.gcm_id=id_deets.gcm_id;
        deets_obj.sd_id=id_deets.sd_id;
        deets_obj.ver=chrome.runtime.getManifest().version;
        deets_obj.ext_id=chrome.runtime.id;
        deets_obj.site = prod_deets.prod_site;
        deets_obj.pid = prod_deets.product_id;
        deets_obj.url=window.location.href;

        var req_send = backPostGet({
            type: "POST",
            // url: "http://shades.makkhichoose.com/dorecomb",
            url: "https://shades.makkhichoose.com/ibqd/kaadoomakkhiboxbannerclick",
            data: JSON.stringify(deets_obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3500,
        });
                     
 });
}


function get_displayed_pids(){
     // var prods_disp = $("#"+allprice+" div a");
     var prods_disp = price_results.slice();
     console.log(prods_disp);
     for(var i=0; i< prods_disp.length; i++){
        // var link = $(prods_disp[i]).attr('href');
        var link = prods_disp[i]["link"];
        if((link).toLowerCase()=="paytm"){
            continue;
        }
        console.log(link);
        console.log(prods_disp[i]);
        var prod_link = extract_prod_link_from_affy_link(link).toLowerCase();

        var pid = get_pid_from_link(prod_link);
        var temp_obj ={};
        // temp_obj[pid] = $.trim($(prods_disp[i]).find(".row-btm-title").text());
        temp_obj["pid"] = pid;
        temp_obj["title"] = prods_disp[i]["title"];
        temp_obj["res_price"] = prods_disp[i]["prod_price"];
        temp_obj["page_price"] = parseInt(prod_deets.prod_price);
        // temp_obj[pid] = prods_disp[i]["title"];
        displayed_results.push(temp_obj); 
    }
}

function site_name_from_url(link){
  var    a      = document.createElement('a');
         a.href = link;
   if(a.hostname.startsWith("paytm")){
    return 'paytm'
   }else if(a.hostname.startsWith("track")){
    //omg site
    var url_params = link.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
    var new_link = decodeURIComponent(url_params["r"]);
    a.href = new_link;
    return a.hostname.split('.')[1];
   }
   else{
    return a.hostname.split('.')[1];    
   }      
  

}

function extract_prod_link_from_affy_link(link){

      var a = document.createElement('a');
      a.href = link;
    if(a.hostname.startsWith("track")){
        //omg site
        var url_params = link.replace('?','').split('&').reduce(function(s,c){var t=c.split('=');s[t[0]]=t[1];return s;},{});
        var new_link = decodeURIComponent(url_params["r"]);
        return new_link;
    }
    else{
        return link;
    }


}

function get_pid_from_link(link){

    try{

       var id_val;
        var site = site_domain_map[site_name_from_url(link)];
        console.log(site);
        if (site == 'fk') {
                if (link.indexOf('?pid=') > -1) {
                    id_val=link.split('?pid=')[1].split(/\&|\#/)[0];  
                }
                else if (link.indexOf('&pid=') > -1) {
                    id_val=link.split('&pid=')[1].split(/\&|\#/)[0];  
                }
                else if ($(cssLocs.fk.pid).length > 0) {
                    id_val=$(cssLocs.fk.pid).attr('data-pid');
                }
                else {
                        //no prod id?
                        id_val='';
                }
        }
        else if (site == 'sd') {

            // var sd_link = $.trim($('link[rel="canonical"]').attr('href'));
            var sd_link = link;

            if ((sd_link=='') || (sd_link==undefined)) {
            id_val=link.split('#')[0].split('/').pop().split('?')[0];
            id_val = id_val.match(/^\d+/gim)[0];
            }
            else {
                id_val=sd_link.split('/').pop().split('?')[0];
                id_val = id_val.match(/^\d+/gim)[0];
            }



        }
        else if (site == 'az') {

            // var az_link = $('link[rel="canonical"]').attr('href');
            var az_link = link;
            // if (az_link.indexOf('/dp/')>-1) {
            //     id_val = az_link.split('/dp/')[1].split('/')[0];
            // }

            // else if (link.match(/\?asin=|\&asin=/i) != null){
            //     id_val = link.split(/\?asin=|\&asin=/i)[1].split(/\/+/)[0].split('&')[0];
            // }

            // else if (link.indexOf('/dp/') > -1){
            //     id_val = link.split('/dp/')[1].split('/')[0].split('?')[0];
            // }
            // else if (link.indexOf('/product/') > -1){
            //     id_val = link.split(/\/product\/+/)[1].split(/\/+/)[0].split('?')[0];
            // }
            
            // else {

            //     id_val = '';
            // }

            var az_pid_match_group="";

            if(az_link.match(/dp\/(.+)\/ref/)){
                az_pid_match_group = az_link.match(/dp\/(.+)\/ref/);
            }else if(az_link.match(/dp\/(.+)\/\?/)){
                az_pid_match_group = az_link.match(/dp\/(.+)\/\?/);
            }else if(az_link.match(/dp\/(.+)\?/)){
                az_pid_match_group = az_link.match(/dp\/(.+)\?/);
            }else if(az_link.match(/dp\/(.+)$/)){
                az_pid_match_group = az_link.match(/dp\/(.+)$/);
            }else if(az_link.match(/\/gp\/product\/(.+?)\b/)){
                az_pid_match_group = az_link.match(/\/gp\/product\/(.+?)\b/);
            }

            if(az_pid_match_group[1]){
                id_val = az_pid_match_group[1];
            }

        }
        else if (site == 'ja') {

            id_val = link.split('.html')[0].split('-').pop();
        }
        else if (site=='my') {
            id_val=link.split('/buy')[0].split('/').pop();
            id_val = id_val.match(/^\d+/gim)[0];

        }

        else if (site == 'hs') {
            if (link.indexOf('/product:')>-1){
                id_val = link.split('/product:')[1].split('/')[0];
            }
            else if (link.indexOf('homeshop18.com/')>-1) {
                id_val = link.split('homeshop18.com/')[1].split('/')[0];
            }
            else {
                id_val='';
            }
     
        }//homeshop18

        else if (site == 'fc') {
            if (link.indexOf('/product-detail')>-1){
                id_val=link.split('/product-detail')[0].split('/').pop();
            }
            else {
                id_val='';
            }
     
        }//firstcry

        else if (site == 'bo') {
            if (link.indexOf('p_')>-1){
                id_val=link.split('p_')[1].split(/\?|\&/gi)[0];
            }
            else {
                id_val='';
            }
     
        }//babyoye

        else if (site == 'sc') {
            // if ($(cssLocs.sc.pid).length>0){
            //      id_val=$(cssLocs.sc.pid).attr('value');
            //  }
            // else {
            //  id_val='';
            // }
     
        }//shopclues
        else if (site == 'it') {

            id_val=link.split('/').pop().split('?')[0];
     
        }//indiatimes

        else if (site == 'pt') {

            // id_val=link.split('/').pop().split('-').pop();
            id_val = "";

            // if (id_val=='') {
            //  id_val=$(cssLocs.pt.pid).text();
            // }
     
        }//paytm

        else if (site == 'eb') {

            id_val=link.split('/').pop().split('?')[0];

            // if (id_val=='') {
            //     id_val=$(cssLocs.eb.pid).text();
            // }
     
        }//ebay
        else if(site == "tc"){
            id_val = link.match(/\/p-mp\d+/g)[0].slice(5);
        }

        else {

            id_val=site;
            return id_val;
        }
        //id_val='';
        console.log(id_val+site);
        return id_val+site;
    }
    catch(err){
        return site;
    }    
 
}

function reset_displayed_analytics(){

   disp_analytics_send_flags={

        all_elastic_data_processed:'not yet',
    };
   displayed_results=[];
   
}

function send_result_click(link,row_number,manual_search_link=false,is_low_price){
    console.log("trying to send result click");
    try{
           var pid = "";
            try{
                pid = get_pid_from_link(extract_prod_link_from_affy_link(link).toLowerCase());
            }
            catch(err){
                console.log("error in do logc while pid extraction");
            }
            var page_pid = prod_deets.product_id;
            var deets_obj ={};
            console.log("getting emmy for logc");
            chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
                var id_deets={};

                id_deets.gcm_id="";
                id_deets.user_id="";
                id_deets.emmy="";
                id_deets.sd_id="";

                id_deets.gcm_id=response.status.gcm_id;
                id_deets.user_id=response.status.user_id;
                id_deets.emmy=response.status.emmy;
                if(response.status.sd_id != undefined){
                    id_deets.sd_id = response.status.sd_id;
                }

                deets_obj.user_id=id_deets.user_id;
                deets_obj.gcm_id=id_deets.gcm_id;
                deets_obj.sd_id=id_deets.sd_id;
                deets_obj.ver=chrome.runtime.getManifest().version;
                deets_obj.ext_id=chrome.runtime.id;
                deets_obj.page_pid = prod_deets.product_id+prod_deets.prod_site;
                deets_obj.page_url=window.location.href;
                deets_obj.clicked_link = link;
                deets_obj.row_number = row_number;
                deets_obj.link_pid = pid;
                deets_obj.islowprice = is_low_price;
                deets_obj.is_dittory_prod = is_dittory_prods;
                if(!manual_search_link){
                    deets_obj.is_smartmakkhi = is_smart_makkhi(pid);
                    deets_obj.is_backsearch = !(is_smart_makkhi(pid));
                    deets_obj.is_manual = is_manual_bundle;
                }
                else{
                    deets_obj.is_smartmakkhi = false;
                    deets_obj.is_backsearch = false;
                    deets_obj.is_manual = false;
                }

                if(pid=='pt'){

                    deets_obj.is_smartmakkhi = true;
                    deets_obj.is_backsearch = false;
                    deets_obj.is_manual = false;   
                }

                console.log("%c deets_obj" ,"color:red");
                console.log(deets_obj);

                var req_send = backPostGet({
                    type: "POST",
                    // url: "http://shades.makkhichoose.com/dorecomb",
                    url: "https://shades.makkhichoose.com/ibqd/dologrc",
                    data: JSON.stringify(deets_obj),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 3500,
                });
                             
            });       
    }
    catch(err){
        console.log("error in do logc");
        console.log(err);
    }
 
}

function is_smart_makkhi(pid){
    if(smart_makkhi_pid_list.indexOf(pid)!=-1){
        return true;
    }
    else{
        return false;
    }
}

function send_makkhi_popup_icon_click(){

       try{
            var page_pid ="";
            if(typeof prod_deets!= "undefined"){

               page_pid = prod_deets.product_id;    
            }

            var deets_obj ={};
            chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
                var id_deets={};

                id_deets.gcm_id="";
                id_deets.user_id="";
                id_deets.emmy="";
                id_deets.sd_id="";

                id_deets.gcm_id=response.status.gcm_id;
                id_deets.user_id=response.status.user_id;
                id_deets.emmy=response.status.emmy;
                if(response.status.sd_id != undefined){
                    id_deets.sd_id = response.status.sd_id;
                }

                deets_obj.user_id=id_deets.user_id;
                deets_obj.gcm_id=id_deets.gcm_id;
                deets_obj.sd_id=id_deets.sd_id;
                deets_obj.ver=chrome.runtime.getManifest().version;
                deets_obj.ext_id=chrome.runtime.id;
                deets_obj.page_url=window.location.href;

                console.log("%c deets_obj" ,"color:red");
                console.log(deets_obj);

                var req_send = backPostGet({
                    type: "POST",
                    // url: "http://shades.makkhichoose.com/dorecomb",
                    url: "https://shades.makkhichoose.com/ibqd/dologpc",
                    data: JSON.stringify(deets_obj),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 3500,
                });
                             
            });       
    }
    catch(err){

    } 
}

function send_copied_coupon(coupon){
   try{

            var page_pid = prod_deets.product_id;
            var deets_obj ={};
            chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
                var id_deets={};

                id_deets.gcm_id="";
                id_deets.user_id="";
                id_deets.emmy="";
                id_deets.sd_id="";

                id_deets.gcm_id=response.status.gcm_id;
                id_deets.user_id=response.status.user_id;
                id_deets.emmy=response.status.emmy;
                if(response.status.sd_id != undefined){
                    id_deets.sd_id = response.status.sd_id;
                }

                deets_obj.user_id=id_deets.user_id;
                deets_obj.gcm_id=id_deets.gcm_id;
                deets_obj.sd_id=id_deets.sd_id;
                deets_obj.ver=chrome.runtime.getManifest().version;
                deets_obj.ext_id=chrome.runtime.id;
                deets_obj.page_url=window.location.href;
                deets_obj.coupon = coupon;

                console.log("%c deets_obj" ,"color:red");
                console.log(deets_obj);

                var req_send = backPostGet({
                    type: "POST",
                    // url: "http://shades.makkhichoose.com/dorecomb",
                    url: "https://shades.makkhichoose.com/ibqd/dologcc",
                    data: JSON.stringify(deets_obj),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 3500,
                });
                             
            });       
    }
    catch(err){

    }
}

function fk_send_graph_times(hover_time_array){
  
    var hover_time_array;
    if(ga_graph_hover_times.length==0){
        hover_time_array='graph_not_hovered';

    }
    else if(ga_graph_hover_times.length>0){
        hover_time_array=ga_graph_hover_times.join();
    }
    ga_graph_hover_times = [];
    // chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array });
    // chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array,prod_id:prod_deets.product_id,page_url:window.location.href });
    chrome.runtime.sendMessage({ method:"time_spent_in_graph",message:hover_time_array,prod_id:prod_deets.product_id+prod_deets.prod_site,page_url:window.location.href });

}

function send_displayed_results(){
       try{

            var page_pid = prod_deets.product_id;
            var deets_obj ={};
            chrome.runtime.sendMessage({method: "getEmmy"}, function(response){
                var id_deets={};

                id_deets.gcm_id="";
                id_deets.user_id="";
                id_deets.emmy="";
                id_deets.sd_id="";

                id_deets.gcm_id=response.status.gcm_id;
                id_deets.user_id=response.status.user_id;
                id_deets.emmy=response.status.emmy;
                if(response.status.sd_id != undefined){
                    id_deets.sd_id = response.status.sd_id;
                }

                deets_obj.user_id=id_deets.user_id;
                deets_obj.gcm_id=id_deets.gcm_id;
                deets_obj.sd_id=id_deets.sd_id;
                deets_obj.ver=chrome.runtime.getManifest().version;
                deets_obj.ext_id=chrome.runtime.id;
                deets_obj.page_url=window.location.href;
                deets_obj.page_pid = prod_deets.product_id+prod_deets.prod_site;
                deets_obj.displayed_results = displayed_results;
                deets_obj.is_dittory_prods = is_dittory_prods;

                console.log("%c deets_obj" ,"color:red");
                console.log(deets_obj);

                var req_send = backPostGet({
                    type: "POST",
                    // url: "http://shades.makkhichoose.com/dorecomb",
                    url: "https://shades.makkhichoose.com/ibqd/dologdispres",
                    data: JSON.stringify(deets_obj),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 3500,
                });
                             
            });       
    }
    catch(err){

    }
}

function is_low_price(elem){
    try{

        if($(elem).find(".mc_price").css("color")=="rgb(143, 201, 82)"){
            return true;
        }
        else{
            return false;
        }

    }
    catch(err){
        return false;
    }

}

//may sale other site notificatons

function may_sale_other_site_notifs(){

    var current_date = new Date();

    chrome.storage.local.get({"ms_os_notif_logs":""},function(response){
        if(response.ms_os_notif_logs){
            //logs present
            //month starts from 0
            if((current_date.getDate()==11)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_os_notif_logs['may_11']){
                    //send notification
                    disp_may_os_notifs();
                }
            }

            if((current_date.getDate()==12)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_os_notif_logs['may_12']){
                    //send notification
                    disp_may_os_notifs();
                }
            }

            if((current_date.getDate()==13)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_os_notif_logs['may_13']){
                    //send notification
                    disp_may_os_notifs();
                }
            }

           if((current_date.getDate()==14)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_os_notif_logs['may_14']){
                    //send notification
                    disp_may_os_notifs();
                }
            }
        }
        else{

           if((current_date.getDate()==11)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_os_notifs();

            }

            if((current_date.getDate()==12)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_os_notifs();
            }

            if((current_date.getDate()==13)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_os_notifs();
            }

           if((current_date.getDate()==14)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_os_notifs();
            }

        }
    })
}


var may_sale_os_notifs_msg = {
"may_11":"<a href=\"http://www.makkhichoose.com/dailydeals\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\">Psst, you might want to look at this <br>The Amazon sale starts today. We put all the best deals on page to make it easy for you to see. Do check it out.</div></div></a>",
"may_12":"<a href=\"http://www.makkhichoose.com/dailydeals\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\"> It's the 2nd day <br> And there are some great deals on fashion and other categories in the Amazon sale. See them all in one place here.</div></div></a>",
"may_13":"<a href=\"http://www.makkhichoose.com/dailydeals\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\"> 2 down, 2 to go <br>There are some great gadgets on sale today on Amazon. We put them together on one page. Take a look </div></div></a>",
"may_14":"<a href=\"http://www.makkhichoose.com/dailydeals\" style=\"text-decoration: none;\" target=\"_blank\"><div><div style=\"font-family: arial,sans-serif; background-color: #424242; color:white;\"><img style=\"vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/jqwy87z.png\" alt=\"\"> Last day of the Amazon sale <br>You might want to click here to see all the last day deals we have put together </div></div></a>"
}

function disp_may_os_notifs(){
    var current_date = new Date();
    var monthNames = ["jan", "feb", "mar", "apr", "may", "jun","jul", "aug", "sep", "oct", "nov", "dec"];
    var msg_key = monthNames[current_date.getMonth()]+'_'+current_date.getDate();
    if(may_sale_os_notifs_msg[msg_key]){
        $.toast({
            "text":may_sale_os_notifs_msg[msg_key],
            hideAfter:90000,
            position : 'bottom-right'
        });
    chrome.storage.local.get({"ms_os_notif_logs":""},function(response){
        var obj_to_write ={}
        if(response.ms_os_notif_logs==""){
            //no data
            obj_to_write[msg_key] = true;
        }
        else{
            obj_to_write = response.ms_os_notif_logs;
            obj_to_write[msg_key] = true;   
        }

        chrome.storage.local.set({"ms_os_notif_logs":obj_to_write},function(response){

        });


    })      

    }

}

function may_sale_daily_notifs(){
   var current_date = new Date();

    chrome.storage.local.get({"ms_daily_notif_logs":""},function(response){
        if(response.ms_daily_notif_logs){
            //logs present
            //month starts from 0
            if((current_date.getDate()==11)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_daily_notif_logs['may_11']){
                    //send notification
                    disp_may_daily_notifs();
                }
            }

            if((current_date.getDate()==12)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_daily_notif_logs['may_12']){
                    //send notification
                    disp_may_daily_notifs();
                }
            }

            if((current_date.getDate()==13)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_daily_notif_logs['may_13']){
                    //send notification
                    disp_may_daily_notifs();
                }
            }

           if((current_date.getDate()==14)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                if(!response.ms_daily_notif_logs['may_14']){
                    //send notification
                    disp_may_daily_notifs();
                }
            }
        }
        else{

           if((current_date.getDate()==11)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_daily_notifs();

            }

            if((current_date.getDate()==12)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_daily_notifs();
            }

            if((current_date.getDate()==13)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_daily_notifs();
            }

           if((current_date.getDate()==14)&&(current_date.getMonth()==4)&&(current_date.getFullYear()==2017)){
                disp_may_daily_notifs();
            }

        }
    })
}

function disp_may_daily_notifs(){
    if(prod_deets.prod_site!="az"){
        chrome.runtime.sendMessage({"method":"may_sale_daily_notifs"},function(){});
    }
}

function check_for_beacon(){
    chrome.storage.local.get({"beacon_msg":false},function(response){
        if(response.beacon_msg == false){
            // hide beacon
            hide_beacon();
        }else if(response.beacon_msg == true) {
            // display beacon
            display_beacon();
        }
        setTimeout(check_for_beacon,2000);
    });
}
check_for_beacon();

function hide_beacon(){
    if(typeof(result_view) != "undefined"){
        $(result_view).find(".beacon.msg").css("visibility","hidden");
        $(mc_root).find("#preview_min_root .beacon.msg").css("visibility","hidden");
        $(mc_root).find("#pv_makkhi_logo .beacon.msg").css("visibility","hidden");
    }
}

function display_beacon(){
    if(typeof(result_view) != "undefined"){
        $(result_view).find(".beacon.msg").css("visibility","visible");
        $(mc_root).find("#preview_min_root .beacon.msg").css("visibility","visible");
        $(mc_root).find("#pv_makkhi_logo .beacon.msg").css("visibility","visible");
    }
}


function check_for_image_search_notif(){
    chrome.storage.local.get({"image_search_notif_shown":false},function(response){
        var site = site_domain_map[site_name_from_url(window.location.href)];
        var is_site_available = site?true:false;
        if((!response["image_search_notif_shown"]) && is_site_available){
            // set listener
            // show notification 
            $("body").on("click","#image_search_toast",function(e){
                // display popup
                // send analytics
                chrome.runtime.sendMessage({"method":"send_event","eventCategory":"image_search_toast_clicked","eventAction":window.location.href,"eventLabel":""},function(response){
                });
                // remove toast
                $.toast().reset('all');
                display_popup();
            });
            $("body").on("click",".close-jq-toast-single",function(e){
                // display popup
                // send analytics
                chrome.runtime.sendMessage({"method":"send_event","eventCategory":"image_search_toast_closed","eventAction":window.location.href,"eventLabel":""},function(response){
                });
                display_popup();
            });

            $.toast({
                // text: "<div><div style=\"font-size:13px;font-family: arial,sans-serif; background-color: #d2f0ce; color:#212121; min-height:54px; cursor:pointer;\"><img style=\"float:left; margin-right:2px; vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/8rTK9fJ.png\" alt=\"\"> <h4>New</h4> MakkhiChoose just got smarter. You can now search using images. Click on the Makkhi icon above to try it out!</div></div>", // Text that is to be shown in the toast
                text: "<div id=\"image_search_toast\"><div style=\"font-size:13px;font-family: arial,sans-serif; background-color: #d2f0ce; color:#212121; min-height:54px; cursor:pointer;\"><img style=\"float:left; margin-right:2px; vertical-align:middle; text-align:center; max-height:48px;\" src=\"https://i.imgur.com/8rTK9fJ.png\" alt=\"\"> <h4>MakkhiChoose got smarter</h4> You can now search using images. Click on the Makkhi above to try it out!</div></div>",
                // heading: 'New', // Optional heading to be shown on the toast
                showHideTransition: 'fade', // fade, slide or plain
                allowToastClose: true, // Boolean value true or false
                hideAfter: false, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                stack: false, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                
                bgColor: '#d2f0ce',  // Background color of the toast
                textColor: '#212121',  // Text color of the toast
                textAlign: 'left',  // Text alignment i.e. left, right or center
                loader: true,  // Whether to show loader or not. True by default
                loaderBg: '#9EC600',  // Background color of the toast loader
            });

            chrome.storage.local.set({"image_search_notif_shown":true},function(response){

            });
        }else{
            // do nothing
        }
    })
}
check_for_image_search_notif()


function check_for_scroll_notif(){
    chrome.storage.local.get({"scroll_notif_avail":false,"scroll_notif_deets":false,"scroll_notif_on_all_pages":false},function(response){
        var site = site_domain_map[site_name_from_url(window.location.href)];
        var is_site_available = site?true:false;
        if(response.scroll_notif_on_all_pages){
            is_site_available = true;
        }
        if(response.scroll_notif_avail && response.scroll_notif_deets && is_site_available){
            set_scroll_message(response['scroll_notif_deets'])
        }
    });
}

var notif_main = ".notif_main"+Math.floor(Math.random() * 90000) + 10000;
function set_scroll_message(deets){
    var ditto_color = chrome.runtime.getURL("ditto_color.png");
    var ditto_bw = chrome.runtime.getURL("ditto_bw.png");
    // var sample_msg = 'Lorem ipsum dolor <span style="display:inline; cursor:pointer;" class="link_button" data-url="">link</span> sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione at cumque, ad sunt asperiores accusantium eos nemo eius atque explicabo molestias facere ea quos cum incidunt reprehenderit  velit ipsam? consectetur adipisicing elit. Fugit ex perspiciatis um?'
    // var data_main_url = "https://www.amazon.in/b/ref=IN-PR-PC-GW-Jan18-ART-Renew-Rec-SDK?node=11486823031&pf_rd_p=5e258f15-aa45-4ebc-b239-16becb6bca7f&pf_rd_r=GKJZ7WPWMWSTXBWXFDJD"
    var sample_msg = deets.message;
    var data_main_url = "";
    if(deets.msg_url){
        data_main_url = deets.msg_url;
    }
    var msg_box = '<div class="'+notif_main.replace(".","")+' close" style="max-width:320px; border:1px solid #e2e2e2; border-right:none; max-height:75px; position:fixed; top:10%;right:0px; box-sizing:content-box; z-index:999999999" data-url="'+data_main_url+'">\
      <div class="position_adjust" style="background-color:#f4f5f2; "><div class="notif_msg_main" style="display:inline-block;max-height:75px;max-width:235px; overflow:hidden; background-color:#f4f5f2; font-size:13px; font-family:Arial, sans-serif; color:rgb(33,33,33); line-height:18.2px; width:0px; vertical-align:top; cursor:default; height:75px;">\
        <span class="msg_text" style="margin-left:10px; margin-top:7px;">'+sample_msg+'</span>\
      </div>\
      <span class="pointer_arrow" style="position:relative;top:15px;">&#9666;</span>\
      <img class="notif_logo" src="' + ditto_bw + '" style="display:inline-block;vertical-align:middle; max-height:40px; position:relative;top:15px;"/>\
      <span class="close_button" style="display:none; position:relative; top:-77px;left:266px; color:gray; cursor:pointer;" title="Close"> ✖ </span> </div>\
       </div>\
     '

     function remove_scroll_notif(){
        chrome.storage.local.set({"scroll_notif_avail":false},function(response){
            $("#mc_notif_main_host").remove();
        })
     }


    $("body").append("<div id=\"mc_notif_main_host\" style=\"position:fixed; left:0px; top:200px; z-index:9999;\" > <div id=\"mc_notif_host\" style=\"\" ></div> </div>");
    var host =  document.getElementById('mc_notif_host');

    // $("body").append(msg_box);
    if(shadow_dom_support == "v1"){
       //attachShadow
       var container_dom = host.attachShadow({"mode":"open"});
    }
    else if(shadow_dom_support =="v0"){
       // createShadowRoot
       var container_dom = host.createShadowRoot({"mode":"open"});
    }
    var msg_box_node = document.createElement("div");
    msg_box_node.innerHTML = msg_box;
    console.log("appending to shadow dom")
    console.log(msg_box_node.cloneNode(true))
    container_dom.appendChild(msg_box_node.cloneNode(true));
    mc_notif_root = container_dom.querySelector("div");

    $(mc_notif_root).on("click", notif_main+" .notif_msg_main", function() {
        var url = "";
        console.log("notif message main click");
        url = $(mc_notif_root).find(notif_main).attr("data-url");
        if (url) {
            // remove_scroll_notif();
            chrome.runtime.sendMessage({ 'method': "open_url_in_tab", "url": url });
        }
    });

    $(mc_notif_root).on("click", notif_main+" .close_button", function(event) {
        // $(notif_main).remove();
        remove_scroll_notif();
        event.stopPropagation();
    });

    $(mc_notif_root).on("click", notif_main+" .notif_msg_main .close_button_text", function(event) {
        // $(notif_main).remove();
        console.log("close button text click");
        event.stopPropagation();
        remove_scroll_notif();
        
    });

    $(mc_notif_root).on("click",notif_main + " .notif_msg_main .link_button", function(event) {
      // var url = $(mc_notif_root).find(notif_main+" .link_button").attr("data-url");
      var url = $(this).attr("data-url");
      if(url){
          chrome.runtime.sendMessage({ 'method': "open_url_in_tab", "url": url });
          event.stopPropagation();
      }
    });

    var mouse_out_of_notif = true;
   $(mc_notif_root).on("mouseenter",notif_main, function() {
        mouse_out_of_notif = false;
        open_notif();
  
    })

    $(mc_notif_root).on("mouseleave", notif_main, function() {
        mouse_out_of_notif = true;
        close_notif();
 
    })

  function open_notif(){
    if ($(mc_notif_root).find(notif_main).hasClass("close")) {
        $(mc_notif_root).find(notif_main+" .notif_msg_main").animate({ "width": 235 }, function() {
            $(mc_notif_root).find(notif_main+" .notif_msg_main span.msg_text").css("display", "block");
            $(mc_notif_root).find(notif_main).toggleClass("close");
            // change image
            // change close button display
            $(mc_notif_root).find(notif_main+" .pointer_arrow").css("display", "none");
            $(mc_notif_root).find(notif_main+" .notif_logo").attr("src", ditto_color);
            $(mc_notif_root).find(notif_main+" .close_button").css("display", "block");
            if(mouse_out_of_notif){
              // close that box
              close_notif();
            }
        });
    }
  }

  function close_notif(){
   if (!$(mc_notif_root).find(notif_main).hasClass("close")) {
        $(mc_notif_root).find(notif_main+" .notif_msg_main span.msg_text").css("display", "none");
        $(mc_notif_root).find(notif_main+" .notif_msg_main").animate({ "width": 0 }, function() {
            $(mc_notif_root).find(notif_main).toggleClass("close");
            // change image
            // change close button display
            $(mc_notif_root).find(notif_main+" .pointer_arrow").css("display", "inline");
            $(mc_notif_root).find(notif_main+" .notif_logo").attr("src", ditto_bw);
            $(mc_notif_root).find(notif_main+" .close_button").css("display", "none");
        });
    }
  }

}

check_for_scroll_notif();