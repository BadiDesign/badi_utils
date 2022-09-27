////////////////// BASE URLS //////////////////
const API_VERSION = '/api/v1/',
    REFRESH_TOKEN_URL = API_VERSION + 'auth/refresh/',
    LOGIN_TOKEN_URL = API_VERSION + 'auth/login/',
    REGISTER_TOKEN_URL = API_VERSION + 'auth/register/',
    REGISTER_VERIFY_URL = API_VERSION + 'auth/verify/',
    FORGOT_PASSWORD_VERIFY_URL = API_VERSION + 'auth/forgot_password/',
    FORGOT_PASSWORD_CHANGE_URL = API_VERSION + 'auth/forgot_change_password/',
    RESEND_VERIFY_URL = API_VERSION + 'auth/resend/',
    CHANGE_PASSWORD_API_URL = API_VERSION + 'auth/change_password/',
    LOGIN_URL = '/login/';

////////////////// USER //////////////////

//   // API URLS:
const USER_WITH_PK_API_URL = API_VERSION + 'user/0',
    USER_SELF_INFO_API_URL = API_VERSION + 'user/self/',
    USER_API_ACTIVE_STATUS_URL = API_VERSION + 'user/change_state/0',
    USER_API_DATATABLE_URL = API_VERSION + 'user/datatable/',
    MEMBER_API_URL = API_VERSION + 'member/',
    MEMBER_POINT_API_URL = API_VERSION + 'member/point/',
    MEMBER_API_DATATABLE_URL = API_VERSION + 'member/datatable/',
    SEARCH_USER_API_URL = API_VERSION + 'member/search/',
    LOG_API_DATATABLE_URL = API_VERSION + 'log/datatable/',
    USER_LOG_API_DATATABLE_URL = API_VERSION + 'log/user/',
    MEMBER_API_WITH_PK_URL = API_VERSION + 'member/0',
    ROLE_DATATABLE_API_URL = API_VERSION + 'group/datatable/',
    ROLE_WITH_PK_API_URL = API_VERSION + 'group/0',
    ROLE_PERMISSIONS_API_URL = API_VERSION + 'group/permissions',
    GROUP_API_URL = API_VERSION + 'group/',
    GROUP_PERMISSIONS_API_URL = API_VERSION + 'group/permissions/',
    MEMBER_CHART_API_URL = API_VERSION + 'member/chart/',
    USER_API_URL = API_VERSION + 'user/';

//  // TEMPLATE URLS:
const USER_CREATE_TEMPLATE = '/dashboard/user/create',
    USER_UPDATE_TEMPLATE = '/dashboard/user/update/0',
    MEMBER_UPDATE_TEMPLATE = '/dashboard/user/member/update/0',
    USER_LIST_TEMPLATE = '/dashboard/user/list',
    MEMBER_LIST_TEMPLATE = '/dashboard/user/member/list',
    USER_VERIFICATION_EMAIL_CODE = '/dashboard/user/verification_email_code/';

////////////////// BLOG_NEWS //////////////////

//   // API URLS:
const BLOG_NEWS_WITH_PK_API_URL = API_VERSION + 'blog/news/0',
    BLOG_NEWS_SELF_INFO_API_URL = API_VERSION + 'blog/news/self/',
    BLOG_NEWS_API_ACTIVE_STATUS_URL = API_VERSION + 'blog/news/change_state/0',
    BLOG_NEWS_API_DATATABLE_URL = API_VERSION + 'blog/news/datatable/',
    BLOG_NEWS_API_URL = API_VERSION + 'blog/news/';

//  // TEMPLATE URLS:
const BLOG_NEWS_CREATE_TEMPLATE = '/dashboard/blog/blognews/create',
    BLOG_NEWS_UPDATE_TEMPLATE = '/dashboard/blog/blognews/update/0',
    BLOG_NEWS_LIST_TEMPLATE = '/dashboard/blog/blognews/list'


////////////////// BLOG_LEARN //////////////////

//   // API URLS:
const BLOG_LEARN_WITH_PK_API_URL = API_VERSION + 'blog/learn/0',
    BLOG_LEARN_SELF_INFO_API_URL = API_VERSION + 'blog/learn/self/',
    BLOG_LEARN_API_ACTIVE_STATUS_URL = API_VERSION + 'blog/learn/change_state/0',
    BLOG_LEARN_API_DATATABLE_URL = API_VERSION + 'blog/learn/datatable/',
    BLOG_LEARN_API_URL = API_VERSION + 'blog/learn/';

//  // TEMPLATE URLS:
const BLOG_LEARN_CREATE_TEMPLATE = '/dashboard/blog/bloglearn/create',
    BLOG_LEARN_UPDATE_TEMPLATE = '/dashboard/blog/bloglearn/update/0',
    BLOG_LEARN_LIST_TEMPLATE = '/dashboard/blog/bloglearn/list';


////////////////// NOTIFICATION //////////////////

//   // API URLS:
const NOTIFICATION_SELF_API_URL = API_VERSION + 'notification/self/',
    NOTIFICATION_USER_API_URL = API_VERSION + 'notification/user/',
    NOTIFICATION_API_URL = API_VERSION + 'notification/',
    NOTIFICATION_DETAIL_API_URL = API_VERSION + 'notification/details/',
    NOTIFICATION_CHANGE_API_URL = API_VERSION + 'notification/change/'
;

////////////////// POST //////////////////

//   // API URLS:
const PRODUCT_WITH_PK_API_URL = API_VERSION + 'product/0',
    PRODUCT_SELF_INFO_API_URL = API_VERSION + 'product/self/',
    PRODUCT_API_ACTIVE_STATUS_URL = API_VERSION + 'product/change_state/0',
    PRODUCT_API_DATATABLE_URL = API_VERSION + 'product/datatable/',
    PRICE_PRODUCT_UPDATE_API_URL = API_VERSION + 'product/',
    PRODUCT_CATEGORY_API_URL = API_VERSION + 'post_category/',
    PRODUCT_API_URL = API_VERSION + 'product/';

//  // TEMPLATE URLS:
const PRODUCT_CREATE_TEMPLATE = '/dashboard/advertisement/product/create',
    PRODUCT_UPDATE_TEMPLATE = '/dashboard/advertisement/product/update/0',
    PRODUCT_LIST_TEMPLATE = '/dashboard/advertisement/product/list';

////////////////// POSTER //////////////////

//   // API URLS:
const POSTER_WITH_PK_API_URL = API_VERSION + 'poster/0',
    POSTER_SELF_INFO_API_URL = API_VERSION + 'poster/self/',
    POSTER_API_DATATABLE_URL = API_VERSION + 'poster/datatable/',
    POSTER_API_URL = API_VERSION + 'poster/';

//  // TEMPLATE URLS:
const POSTER_CREATE_TEMPLATE = '/dashboard/advertisement/poster/create',
    POSTER_UPDATE_TEMPLATE = '/dashboard/advertisement/poster/update/0',
    POSTER_LIST_TEMPLATE = '/dashboard/advertisement/poster/list';


////////////////// PAGE //////////////////

//   // API URLS:
const PAGE_WITH_PK_API_URL = API_VERSION + 'page/0',
    PAGE_API_DATATABLE_URL = API_VERSION + 'page/datatable/',
    PAGE_API_URL = API_VERSION + 'page/';

//  // TEMPLATE URLS:
const PAGE_CREATE_TEMPLATE = '/dashboard/advertisement/page/create',
    PAGE_UPDATE_TEMPLATE = '/dashboard/advertisement/page/update/0',
    PAGE_LIST_TEMPLATE = '/dashboard/advertisement/page/list';


////////////////// MENU_LINK //////////////////

//   // API URLS:
const MENU_LINK_WITH_PK_API_URL = API_VERSION + 'menulink/0',
    MENU_LINK_API_DATATABLE_URL = API_VERSION + 'menulink/datatable/',
    LINK_API_URL = API_VERSION + 'link/',
    LINK_WITH_PK_API_URL = API_VERSION + 'link/0',
    MENU_LINK_API_URL = API_VERSION + 'menulink/';

//  // TEMPLATE URLS:
const MENU_LINK_CREATE_TEMPLATE = '/dashboard/setting/menulink/create',
    MENU_LINK_UPDATE_TEMPLATE = '/dashboard/setting/menulink/update/0',
    MENU_LINK_LIST_TEMPLATE = '/dashboard/setting/menulink/list';


////////////////// ANIMAL //////////////////

//   // API URLS:
const ANIMAL_API_URL = API_VERSION + 'animal/animal/',
    QUESTION_API_URL = API_VERSION + 'animal/question/',
    QUESTION_PROPERTY_API_URL = API_VERSION + 'animal/questionproperty/',
    ANIMAL_DATA_API_URL = API_VERSION + 'animal/animaldata/',
    PARTNER_LINK_API_URL = API_VERSION + 'blog/partnerlink/',
    SEARCH_API_URL = API_VERSION + 'animal/search/',
    ANIMAL_PROPERTY_DATA_API_URL = API_VERSION + 'animal/animalpropertydata/',
    ANIMAL_DATA_DATATABLE_API_URL = API_VERSION + 'animal/animaldata/datatable/'
;

////////////////// ANIMAL_SOCIAL //////////////////

//   // API URLS:
const ANIMAL_SOCIAL_API_URL = API_VERSION + 'animal/animalsocial/',
    ANIMAL_RADAR_CHART_API_URL = API_VERSION + 'animal/animalradarchart/',
    ANIMAL_PICTURES_API_URL = API_VERSION + 'animal/animalpicture/',
    ANIMAL_PIE_CHART_API_URL = API_VERSION + 'animal/animalpiechart/';


////////////////// TRANSACTION //////////////////

//   // API URLS:
const TRANSACTION_API_DATATABLE_URL = API_VERSION + 'transaction/datatable/',
    ALL_TRANSACTION_API_DATATABLE_URL = API_VERSION + 'transaction/all_transactions/',
    ZP_TRANSACTION_REQUEST_CHARGE = API_VERSION + 'transaction/charge_request/',
    GROUP_COURSE_FACTOR_API_URL = API_VERSION + 'transaction/group_course_factor/',
    GROUP_COURSE_BUY_API_URL = API_VERSION + 'transaction/group_course_buy/',
    PACKAGE_FACTOR_API_URL = API_VERSION + 'transaction/package_factor/',
    PACKAGE_BUY_API_URL = API_VERSION + 'transaction/package_buy/',
    SESSION_BUY_API_URL = API_VERSION + 'transaction/session_buy/',
    INCREASE_WALLET_API_URL = API_VERSION + 'transaction/increase_wallet/0',
    DECREASE_WALLET_API_URL = API_VERSION + 'transaction/decease_wallet/0';


//  // TEMPLATE URLS:
const
    TRANSACTION_UPDATE_TEMPLATE = '/dashboard/transaction/transaction/update/0',
    TRANSACTION_LIST_TEMPLATE = '/dashboard/transaction/ticket/list';


////////////////// TICKET //////////////////

//   // API URLS:
const TICKET_API_DELETE_URL = API_VERSION + 'ticket/0',
    TICKET_API_UPDATE_URL = API_VERSION + 'ticket/0',
    TICKET_API_DATATABLE_URL = API_VERSION + 'ticket/datatable/',
    MESSAGES_API_URL = API_VERSION + 'message/',
    TICKET_SEND_USERS = API_VERSION + 'ticket/send_ticket/',
    TICKET_API_CREATE_URL = API_VERSION + 'ticket/';


//  // TEMPLATE URLS:
const
    TICKET_UPDATE_TEMPLATE = '/dashboard/ticket/ticket/update/0',
    TICKET_LIST_TEMPLATE = '/dashboard/ticket/ticket/list';


////////////////// SELECT2 STR //////////////////

const SELECT2_COLLECTION = '/select2/collection',
    SELECT2_PROVINCE = '/select2/province',
    SELECT2_CATEGORY_POST = '/select2/category_post',
    SELECT2_BRAND = '/select2/brand',
    SELECT2_CITY = '/select2/city'
;

