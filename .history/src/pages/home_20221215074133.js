import React from 'react'

function Home() {
  return (
    <div classnameName='home'> 
    <div classnameName="nk-app-root">
        <div classnameName="nk-wrap ">
            <div classnameName="nk-header nk-header-fluid is-theme  is-regular">
                <div classnameName="container-xl wide-xl">
                    <div classnameName="nk-header-wrap">
                        <div classnameName="nk-menu-trigger me-sm-2 d-lg-none"><a href="#" classname="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em classname="icon ni ni-menu"></em></a></div>
                        <div classnameName="nk-header-brand">
                            <a href="index.html" classname="logo-link">
                                <img classnameName="logo-light logo-img" src="images/logo.png" srcset="/demo6/images/logo2x.png 2x" alt="logo" />
                                 /<img classnameName="logo-dark logo-img" src="images/logo-dark.png" srcset="/demo6/images/logo-dark2x.png 2x" alt="logo-dark" />
                                 </a>
                        </div>
                        <div classnameName="nk-header-menu" data-content="headerNav">
                            <div classnameNmae="nk-header-mobile">
                                <div classnameName="nk-header-brand">
                                    <a href="index.html" classname="logo-link">
                                        <img classname="logo-light logo-img" src="images/logo.png" srcset="/demo6/images/logo2x.png 2x" alt="logo" />
                                        <img classname="logo-dark logo-img" src="images/logo-dark.png" srcset="/demo6/images/logo-dark2x.png 2x" alt="logo-dark" />
                                        </a>
                                </div>
                                <div classnameName="nk-menu-trigger me-n2">
                                    <a href="#" classnameName="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav">
                                        <em classnameName="icon ni ni-arrow-left"></em></a></div>
                            </div>
                            <ul classname="nk-menu nk-menu-main ui-s2">
                                <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Dashboards</span></a>
                                    <ul classname="nk-menu-sub">
                                        <li classname="nk-menu-item"><a href="index.html" classname="nk-menu-link"><span classname="nk-menu-text">Default Dashboard</span></a></li>
                                        <li classname="nk-menu-item"><a href="index-sales.html" classname="nk-menu-link"><span classname="nk-menu-text">Sales Dashboard</span></a></li>
                                        <li classname="nk-menu-item"><a href="index-crypto.html" classname="nk-menu-link"><span classname="nk-menu-text">Crypto Dashboard</span></a></li>
                                        <li classname="nk-menu-item"><a href="index-analytics.html" classname="nk-menu-link"><span classname="nk-menu-text">Analytics Dashboard</span></a></li>
                                        <li classname="nk-menu-heading">
                                            <h6 classname="overline-title text-primary">Use-Case Concept</h6>
                                        </li>
                                        <li classname="nk-menu-item"><a href="invest/index.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Investment Panel</span><span classname="nk-menu-badge">HOT</span></a></li>
                                    </ul>
                                </li>
                                <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Applications</span></a>
                                    <ul classname="nk-menu-sub">
                                        <li classname="nk-menu-item"><a href="apps-messages.html" classname="nk-menu-link"><span classname="nk-menu-text">Messages</span></a></li>
                                        <li classname="nk-menu-item"><a href="apps-inbox.html" classname="nk-menu-link"><span classname="nk-menu-text">Inbox / Mail</span></a></li>
                                        <li classname="nk-menu-item"><a href="apps-file-manager.html" classname="nk-menu-link"><span classname="nk-menu-text">File Manager</span></a></li>
                                        <li classname="nk-menu-item"><a href="apps-chats.html" classname="nk-menu-link"><span classname="nk-menu-text">Chats / Messenger</span></a></li>
                                        <li classname="nk-menu-item"><a href="apps-calendar.html" classname="nk-menu-link"><span classname="nk-menu-text">Calendar</span></a></li>
                                        <li classname="nk-menu-item"><a href="apps-kanban.html" classname="nk-menu-link"><span classname="nk-menu-text">Kanban Board</span></a></li>
                                    </ul>
                                </li>
                                <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Pages</span></a>
                                    <ul classname="nk-menu-sub">
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Projects</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="project-card.html" classname="nk-menu-link"><span classname="nk-menu-text">Project Cards</span></a></li>
                                                <li classname="nk-menu-item"><a href="project-list.html" classname="nk-menu-link"><span classname="nk-menu-text">Project List</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">User Manage</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="user-list-regular.html" classname="nk-menu-link"><span classname="nk-menu-text">User List - Regular</span></a></li>
                                                <li classname="nk-menu-item"><a href="user-list-compact.html" classname="nk-menu-link"><span classname="nk-menu-text">User List - Compact</span></a></li>
                                                <li classname="nk-menu-item"><a href="user-details-regular.html" classname="nk-menu-link"><span classname="nk-menu-text">User Details - Regular</span></a></li>
                                                <li classname="nk-menu-item"><a href="user-profile-regular.html" classname="nk-menu-link"><span classname="nk-menu-text">User Profile - Regular</span></a></li>
                                                <li classname="nk-menu-item"><a href="user-card.html" classname="nk-menu-link"><span classname="nk-menu-text">User Contact - Card</span> </a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">AML / KYCs</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="kyc-list-regular.html" classname="nk-menu-link"><span classname="nk-menu-text">KYC List - Regular</span></a></li>
                                                <li classname="nk-menu-item"><a href="kyc-details-regular.html" classname="nk-menu-link"><span classname="nk-menu-text">KYC Details - Regular</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Transactions</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="transaction-basic.html" classname="nk-menu-link"><span classname="nk-menu-text">Tranx List - Basic</span></a></li>
                                                <li classname="nk-menu-item"><a href="transaction-crypto.html" classname="nk-menu-link"><span classname="nk-menu-text">Tranx List - Crypto</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Invoice</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="invoice-list.html" classname="nk-menu-link"><span classname="nk-menu-text">Invoice List</span></a></li>
                                                <li classname="nk-menu-item"><a href="invoice-details.html" classname="nk-menu-link"><span classname="nk-menu-text">Invoice Details</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Products</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="product-list.html" classname="nk-menu-link"><span classname="nk-menu-text">Product List</span></a></li>
                                                <li classname="nk-menu-item"><a href="product-card.html" classname="nk-menu-link"><span classname="nk-menu-text">Product Card</span></a></li>
                                                <li classname="nk-menu-item"><a href="product-details.html" classname="nk-menu-link"><span classname="nk-menu-text">Product Details</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item"><a href="pricing-table.html" classname="nk-menu-link"><span classname="nk-menu-text">Pricing Table</span></a></li>
                                        <li classname="nk-menu-item"><a href="gallery.html" classname="nk-menu-link"><span classname="nk-menu-text">Image Gallery</span></a></li>
                                        <li classname="nk-menu-item"><a href="pages/regular-v1.html" classname="nk-menu-link"><span classname="nk-menu-text">Regular Page - v1</span></a></li>
                                        <li classname="nk-menu-item"><a href="pages/regular-v2.html" classname="nk-menu-link"><span classname="nk-menu-text">Regular Page - v2</span></a></li>
                                        <li classname="nk-menu-item"><a href="pages/faqs.html" classname="nk-menu-link"><span classname="nk-menu-text">Faqs / Help</span></a></li>
                                    </ul>
                                </li>
                                <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Misc</span></a>
                                    <ul classname="nk-menu-sub">
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Auth Pages</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="pages/auths/auth-login.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Login / Signin</span></a></li>
                                                <li classname="nk-menu-item"><a href="pages/auths/auth-register.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Register / Signup</span></a></li>
                                                <li classname="nk-menu-item"><a href="pages/auths/auth-reset.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Forgot Password</span></a></li>
                                                <li classname="nk-menu-item"><a href="pages/auths/auth-success.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Success / Confirm</span></a></li>
                                                <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">ClassNameic Version - v2</span></a>
                                                    <ul classname="nk-menu-sub">
                                                        <li classname="nk-menu-item"><a href="pages/auths/auth-login-v2.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Login / Signin</span></a></li>
                                                        <li classname="nk-menu-item"><a href="pages/auths/auth-register-v2.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Register / Signup</span></a></li>
                                                        <li classname="nk-menu-item"><a href="pages/auths/auth-reset-v2.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Forgot Password</span></a></li>
                                                        <li classname="nk-menu-item"><a href="pages/auths/auth-success-v2.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Success / Confirm</span></a></li>
                                                    </ul>
                                                </li>
                                                <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">No Slider Version - v3</span></a>
                                                    <ul classname="nk-menu-sub">
                                                        <li classname="nk-menu-item"><a href="pages/auths/auth-login-v3.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Login / Signin</span></a></li>
                                                        <li classname="nk-menu-item"><a href="pages/auths/auth-register-v3.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Register / Signup</span></a></li>
                                                        <li classname="nk-menu-item"><a href="pages/auths/auth-reset-v3.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Forgot Password</span></a></li>
                                                        <li classname="nk-menu-item"><a href="pages/auths/auth-success-v3.html" classname="nk-menu-link" target="_blank"><span classname="nk-menu-text">Success / Confirm</span></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Error Pages</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="pages/errors/404-classnameic.html" target="_blank" classname="nk-menu-link"><span classname="nk-menu-text">404 ClassNameic</span></a></li>
                                                <li classname="nk-menu-item"><a href="pages/errors/504-classnameic.html" target="_blank" classname="nk-menu-link"><span classname="nk-menu-text">504 ClassNameic</span></a></li>
                                                <li classname="nk-menu-item"><a href="pages/errors/404-s1.html" target="_blank" classname="nk-menu-link"><span classname="nk-menu-text">404 Modern</span></a></li>
                                                <li classname="nk-menu-item"><a href="pages/errors/504-s1.html" target="_blank" classname="nk-menu-link"><span classname="nk-menu-text">504 Modern</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item"><a href="_blank.html" classname="nk-menu-link"><span classname="nk-menu-text">Blank / Startup</span></a></li>
                                        <li classname="nk-menu-item"><a href="pages/terms-policy.html" classname="nk-menu-link"><span classname="nk-menu-text">Terms / Policy</span></a></li>
                                    </ul>
                                </li>
                                <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Components</span></a>
                                    <ul classname="nk-menu-sub">
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Ui Elements</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="components/elements/alerts.html" classname="nk-menu-link"><span classname="nk-menu-text">Alerts</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/accordions.html" classname="nk-menu-link"><span classname="nk-menu-text">Accordions</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/avatar.html" classname="nk-menu-link"><span classname="nk-menu-text">Avatar</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/badges.html" classname="nk-menu-link"><span classname="nk-menu-text">Badges</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/buttons.html" classname="nk-menu-link"><span classname="nk-menu-text">Buttons</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/buttons-group.html" classname="nk-menu-link"><span classname="nk-menu-text">Button Group</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/breadcrumb.html" classname="nk-menu-link"><span classname="nk-menu-text">Breadcrumb</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/cards.html" classname="nk-menu-link"><span classname="nk-menu-text">Cards</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/carousel.html" classname="nk-menu-link"><span classname="nk-menu-text">Carousel</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/list-dropdown.html" classname="nk-menu-link"><span classname="nk-menu-text">List Dropdown</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/modals.html" classname="nk-menu-link"><span classname="nk-menu-text">Modals</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/pagination.html" classname="nk-menu-link"><span classname="nk-menu-text">Pagination</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/popover.html" classname="nk-menu-link"><span classname="nk-menu-text">Popovers</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/progress.html" classname="nk-menu-link"><span classname="nk-menu-text">Progress</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/spinner.html" classname="nk-menu-link"><span classname="nk-menu-text">Spinner</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/tabs.html" classname="nk-menu-link"><span classname="nk-menu-text">Tabs</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/toast.html" classname="nk-menu-link"><span classname="nk-menu-text">Toasts</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/tooltip.html" classname="nk-menu-link"><span classname="nk-menu-text">Tooltip</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/typography.html" classname="nk-menu-link"><span classname="nk-menu-text">Typography</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Utilities</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="components/elements/util-border.html" classname="nk-menu-link"><span classname="nk-menu-text">Border</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/util-colors.html" classname="nk-menu-link"><span classname="nk-menu-text">Colors</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/util-display.html" classname="nk-menu-link"><span classname="nk-menu-text">Display</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/util-embeded.html" classname="nk-menu-link"><span classname="nk-menu-text">Embeded</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/util-flex.html" classname="nk-menu-link"><span classname="nk-menu-text">Flex</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/util-text.html" classname="nk-menu-link"><span classname="nk-menu-text">Text</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/util-sizing.html" classname="nk-menu-link"><span classname="nk-menu-text">Sizing</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/util-spacing.html" classname="nk-menu-link"><span classname="nk-menu-text">Spacing</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/elements/util-others.html" classname="nk-menu-link"><span classname="nk-menu-text">Others</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Forms</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="components/forms/form-elements.html" classname="nk-menu-link"><span classname="nk-menu-text">Form Elements</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/checkbox-radio.html" classname="nk-menu-link"><span classname="nk-menu-text">Checkbox Radio</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/advanced-controls.html" classname="nk-menu-link"><span classname="nk-menu-text">Advanced Controls</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/input-group.html" classname="nk-menu-link"><span classname="nk-menu-text">Input Group</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/form-upload.html" classname="nk-menu-link"><span classname="nk-menu-text">Form Upload</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/datetime-picker.html" classname="nk-menu-link"><span classname="nk-menu-text">Date &amp; Time Picker</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/number-spinner.html" classname="nk-menu-link"><span classname="nk-menu-text">Number Spinner</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/nouislider.html" classname="nk-menu-link"><span classname="nk-menu-text">noUiSlider</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/form-layouts.html" classname="nk-menu-link"><span classname="nk-menu-text">Form Layouts</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/form-validation.html" classname="nk-menu-link"><span classname="nk-menu-text">Form Validation</span></a></li>
                                                <li classname="nk-menu-item"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Wizard</span></a>
                                                    <ul classname="nk-menu-sub">
                                                        <li classname="nk-menu-item"><a href="components/forms/form-wizard.html" classname="nk-menu-link"><span classname="nk-menu-text">Basic Demo</span></a></li>
                                                        <li classname="nk-menu-item"><a href="components/forms/wizard/create-project.html" classname="nk-menu-link"><span classname="nk-menu-text">Create Project</span></a></li>
                                                        <li classname="nk-menu-item"><a href="components/forms/wizard/create-profile.html" classname="nk-menu-link"><span classname="nk-menu-text">Create Profile</span></a></li>
                                                        <li classname="nk-menu-item"><a href="components/forms/wizard/two-factor-auth.html" classname="nk-menu-link"><span classname="nk-menu-text">Two Factor Auth</span></a></li>
                                                        <li classname="nk-menu-item"><a target="_blank" href="components/forms/wizard/survey-v1.html" classname="nk-menu-link"><span classname="nk-menu-text">Survey</span></a></li>
                                                        <li classname="nk-menu-item"><a target="_blank" href="components/forms/wizard/survey-v2.html" classname="nk-menu-link"><span classname="nk-menu-text">Survey v2</span></a></li>
                                                    </ul>
                                                </li>
                                                <li classname="nk-menu-heading">
                                                    <h6 classname="overline-title text-primary">Rich Editor</h6>
                                                </li>
                                                <li classname="nk-menu-item"><a href="components/forms/form-summernote.html" classname="nk-menu-link"><span classname="nk-menu-text">Summernote</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/form-quill.html" classname="nk-menu-link"><span classname="nk-menu-text">Quill</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/forms/form-tinymce.html" classname="nk-menu-link"><span classname="nk-menu-text">Tinymce</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Crafted Icons</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="components/misc/svg-icons.html" classname="nk-menu-link"><span classname="nk-menu-text">SVG Icon - Exclusive</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/misc/nioicon.html" classname="nk-menu-link"><span classname="nk-menu-text">Nioicon - HandCrafted</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item"><a href="components/misc/icons.html" classname="nk-menu-link"><span classname="nk-menu-text">Icon Libraries</span></a></li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Tables</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="components/tables/table-basic.html" classname="nk-menu-link"><span classname="nk-menu-text">Basic Tables</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/tables/table-special.html" classname="nk-menu-link"><span classname="nk-menu-text">Special Tables</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/tables/table-datatable.html" classname="nk-menu-link"><span classname="nk-menu-text">DataTables</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Charts</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="components/charts/chartjs.html" classname="nk-menu-link"><span classname="nk-menu-text">Chart JS</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/charts/knob.html" classname="nk-menu-link"><span classname="nk-menu-text">Knob JS</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Widgets</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="components/widgets/cards.html" classname="nk-menu-link"><span classname="nk-menu-text">Card Widgets</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/widgets/charts.html" classname="nk-menu-link"><span classname="nk-menu-text">Chart Widgets</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/widgets/ratings.html" classname="nk-menu-link"><span classname="nk-menu-text">Ratings</span><span classname="nk-menu-badge">New</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item has-sub"><a href="#" classname="nk-menu-link nk-menu-toggle"><span classname="nk-menu-text">Miscellaneous</span></a>
                                            <ul classname="nk-menu-sub">
                                                <li classname="nk-menu-item"><a href="components/misc/slick-sliders.html" classname="nk-menu-link"><span classname="nk-menu-text">Slick Slider</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/misc/toastr.html" classname="nk-menu-link"><span classname="nk-menu-text">Toastr</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/misc/sweet-alert.html" classname="nk-menu-link"><span classname="nk-menu-text">Sweet Alert</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/misc/js-tree.html" classname="nk-menu-link"><span classname="nk-menu-text">jsTree</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/misc/dual-listbox.html" classname="nk-menu-link"><span classname="nk-menu-text">Dual Listbox</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/misc/dragula.html" classname="nk-menu-link"><span classname="nk-menu-text">Dragula</span><span classname="nk-menu-badge">New</span></a></li>
                                                <li classname="nk-menu-item"><a href="components/misc/map.html" classname="nk-menu-link"><span classname="nk-menu-text">Google Map</span><span classname="nk-menu-badge">New</span></a></li>
                                            </ul>
                                        </li>
                                        <li classname="nk-menu-item"><a href="email-templates.html" classname="nk-menu-link"><span classname="nk-menu-text">Email Template</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div classname="nk-header-tools">
                            <ul classname="nk-quick-nav">
                                <li classname="dropdown notification-dropdown">
                                    <a href="#" classname="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                                        <div classname="icon-status icon-status-info"><em classname="icon ni ni-bell"></em></div>
                                    </a>
                                    <div classname="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                                        <div classname="dropdown-head"><span classname="sub-title nk-dropdown-title">Notifications</span><a href="#">Mark All as Read</a></div>
                                        <div classname="dropdown-body">
                                            <div classname="nk-notification">
                                                <div classname="nk-notification-item dropdown-inner">
                                                    <div classname="nk-notification-icon"><em classname="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em></div>
                                                    <div classname="nk-notification-content">
                                                        <div classname="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                        <div classname="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div classname="nk-notification-item dropdown-inner">
                                                    <div classname="nk-notification-icon"><em classname="icon icon-circle bg-success-dim ni ni-curve-down-left"></em></div>
                                                    <div classname="nk-notification-content">
                                                        <div classname="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                        <div classname="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div classname="nk-notification-item dropdown-inner">
                                                    <div classname="nk-notification-icon"><em classname="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em></div>
                                                    <div classname="nk-notification-content">
                                                        <div classname="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                        <div classname="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div classname="nk-notification-item dropdown-inner">
                                                    <div classname="nk-notification-icon"><em classname="icon icon-circle bg-success-dim ni ni-curve-down-left"></em></div>
                                                    <div classname="nk-notification-content">
                                                        <div classname="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                        <div classname="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div classname="nk-notification-item dropdown-inner">
                                                    <div classname="nk-notification-icon"><em classname="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em></div>
                                                    <div classname="nk-notification-content">
                                                        <div classname="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                        <div classname="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                                <div classname="nk-notification-item dropdown-inner">
                                                    <div classname="nk-notification-icon"><em classname="icon icon-circle bg-success-dim ni ni-curve-down-left"></em></div>
                                                    <div classname="nk-notification-content">
                                                        <div classname="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                        <div classname="nk-notification-time">2 hrs ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div classname="dropdown-foot center"><a href="#">View All</a></div>
                                    </div>
                                </li>
                                <li classname="dropdown user-dropdown order-sm-first">
                                    <a href="#" classname="dropdown-toggle" data-bs-toggle="dropdown">
                                        <div classname="user-toggle">
                                            <div classname="user-avatar sm"><em classname="icon ni ni-user-alt"></em></div>
                                            <div classname="user-info d-none d-xl-block">
                                                <div classname="user-status">Administrator</div>
                                                <div classname="user-name dropdown-indicator">Abu Bin Ishityak</div>
                                            </div>
                                        </div>
                                    </a>
                                    <div classname="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 is-light">
                                        <div classname="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                            <div classname="user-card">
                                                <div classname="user-avatar"><span>AB</span></div>
                                                <div classname="user-info"><span classname="lead-text">Abu Bin Ishtiyak</span><span classname="sub-text">info@softnio.com</span></div>
                                                <div classname="user-action"><a classname="btn btn-icon me-n2" href="user-profile-setting.html"><em classname="icon ni ni-setting"></em></a></div>
                                            </div>
                                        </div>
                                        <div classname="dropdown-inner user-account-info">
                                            <h6 classname="overline-title-alt">Account Balance</h6>
                                            <div classname="user-balance">1,494.23 <small classname="currency currency-usd">USD</small></div>
                                            <div classname="user-balance-sub">Locked <span>15,495.39 <span classname="currency currency-usd">USD</span></span>
                                            </div><a href="#" classname="link"><span>Withdraw Balance</span> <em classname="icon ni ni-wallet-out"></em></a></div>
                                        <div classname="dropdown-inner">
                                            <ul classname="link-list">
                                                <li><a href="user-profile-regular.html"><em classname="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                                <li><a href="user-profile-setting.html"><em classname="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                                <li><a href="user-profile-activity.html"><em classname="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                            </ul>
                                        </div>
                                        <div classname="dropdown-inner">
                                            <ul classname="link-list">
                                                <li><a href="#"><em classname="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li classname="dropdown language-dropdown d-none d-sm-flex me-n1">
                                    <a href="#" classname="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                                        <div classname="quick-icon"><img classname="icon" src="images/flags/english-sq.png" alt="" /></div>
                                    </a>
                                    <div classname="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                                        <ul classname="language-list">
                                            <li>
                                                <a href="#" classname="language-item">
                                                    <img src="images/flags/english.png" alt="" classname="language-flag" /><span classname="language-name">English</span></a>
                                            </li>
                                            <li>
                                                <a href="#" classname="language-item"><img src="images/flags/spanish.png" alt="" classname="language-flag" /><span classname="language-name">Español</span></a>
                                            </li>
                                            <li>
                                                <a href="#" classname="language-item"><img src="images/flags/french.png" alt="" classname="language-flag" /><span classname="language-name">Français</span></a>
                                            </li>
                                            <li>
                                                <a href="#" classname="language-item"><img src="images/flags/turkey.png" alt="" classname="language-flag" /><span classname="language-name">Türkçe</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div classname="nk-content nk-content-fluid">
                <div classname="container-xl wide-xl">
                    <div classname="nk-content-inner">
                        <div classname="nk-content-body">
                            <div classname="nk-block-head nk-block-head-sm">
                                <div classname="nk-block-between">
                                    <div classname="nk-block-head-content">
                                        <h3 classname="nk-block-title page-title">Investment Dashboard</h3>
                                        <div classname="nk-block-des text-soft">
                                            <p>Welcome to DashLite Dashboard Template.</p>
                                        </div>
                                    </div>
                                    <div classname="nk-block-head-content">
                                        <div classname="toggle-wrap nk-block-tools-toggle"><a href="#" classname="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em classname="icon ni ni-more-v"></em></a>
                                            <div classname="toggle-expand-content" data-content="pageMenu">
                                                <ul classname="nk-block-tools g-3">
                                                    <li><a href="#" classname="btn btn-white btn-dim btn-outline-primary"><em classname="icon ni ni-download-cloud"></em><span>Export</span></a></li>
                                                    <li><a href="#" classname="btn btn-white btn-dim btn-outline-primary"><em classname="icon ni ni-reports"></em><span>Reports</span></a></li>
                                                    <li classname="nk-block-tools-opt">
                                                        <div classname="drodown"><a href="#" classname="dropdown-toggle btn btn-icon btn-primary" data-bs-toggle="dropdown"><em classname="icon ni ni-plus"></em></a>
                                                            <div classname="dropdown-menu dropdown-menu-end">
                                                                <ul classname="link-list-opt no-bdr">
                                                                    <li><a href="#"><em classname="icon ni ni-user-add-fill"></em><span>Add User</span></a></li>
                                                                    <li><a href="#"><em classname="icon ni ni-coin-alt-fill"></em><span>Add Order</span></a></li>
                                                                    <li><a href="#"><em classname="icon ni ni-note-add-fill-c"></em><span>Add Page</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div classname="nk-block">
                                <div classname="row g-gs">
                                    <div classname="col-md-4">
                                        <div classname="card card-bordered card-full">
                                            <div classname="card-inner">
                                                <div classname="card-title-group align-start mb-0">
                                                    <div classname="card-title">
                                                        <h6 classname="subtitle">Total Deposit</h6>
                                                    </div>
                                                    <div classname="card-tools"><em classname="card-hint icon ni ni-help-fill" data-bs-toggle="tooltip" data-bs-placement="left" title="Total Deposited"></em></div>
                                                </div>
                                                <div classname="card-amount"><span classname="amount"> 49,595.34 <span classname="currency currency-usd">USD</span></span><span classname="change up text-danger"><em classname="icon ni ni-arrow-long-up"></em>1.93%</span></div>
                                                <div classname="invest-data">
                                                    <div classname="invest-data-amount g-2">
                                                        <div classname="invest-data-history">
                                                            <div classname="title">This Month</div>
                                                            <div classname="amount">2,940.59 <span classname="currency currency-usd">USD</span></div>
                                                        </div>
                                                        <div classname="invest-data-history">
                                                            <div classname="title">This Week</div>
                                                            <div classname="amount">1,259.28 <span classname="currency currency-usd">USD</span></div>
                                                        </div>
                                                    </div>
                                                    <div classname="invest-data-ck"><canvas classname="iv-data-chart" id="totalDeposit"></canvas></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classname="col-md-4">
                                        <div classname="card card-bordered card-full">
                                            <div classname="card-inner">
                                                <div classname="card-title-group align-start mb-0">
                                                    <div classname="card-title">
                                                        <h6 classname="subtitle">Total Withdraw</h6>
                                                    </div>
                                                    <div classname="card-tools"><em classname="card-hint icon ni ni-help-fill" data-bs-toggle="tooltip" data-bs-placement="left" title="Total Withdraw"></em></div>
                                                </div>
                                                <div classname="card-amount"><span classname="amount"> 49,595.34 <span classname="currency currency-usd">USD</span></span><span classname="change down text-danger"><em classname="icon ni ni-arrow-long-down"></em>1.93%</span></div>
                                                <div classname="invest-data">
                                                    <div classname="invest-data-amount g-2">
                                                        <div classname="invest-data-history">
                                                            <div classname="title">This Month</div>
                                                            <div classname="amount">2,940.59 <span classname="currency currency-usd">USD</span></div>
                                                        </div>
                                                        <div classname="invest-data-history">
                                                            <div classname="title">This Week</div>
                                                            <div classname="amount">1,259.28 <span classname="currency currency-usd">USD</span></div>
                                                        </div>
                                                    </div>
                                                    <div classname="invest-data-ck"><canvas classname="iv-data-chart" id="totalWithdraw"></canvas></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classname="col-md-4">
                                        <div classname="card card-bordered  card-full">
                                            <div classname="card-inner">
                                                <div classname="card-title-group align-start mb-0">
                                                    <div classname="card-title">
                                                        <h6 classname="subtitle">Balance in Account</h6>
                                                    </div>
                                                    <div classname="card-tools"><em classname="card-hint icon ni ni-help-fill" data-bs-toggle="tooltip" data-bs-placement="left" title="Total Balance in Account"></em></div>
                                                </div>
                                                <div classname="card-amount"><span classname="amount"> 79,358.50 <span classname="currency currency-usd">USD</span></span>
                                                </div>
                                                <div classname="invest-data">
                                                    <div classname="invest-data-amount g-2">
                                                        <div classname="invest-data-history">
                                                            <div classname="title">This Month</div>
                                                            <div classname="amount">2,940.59 <span classname="currency currency-usd">USD</span></div>
                                                        </div>
                                                        <div classname="invest-data-history">
                                                            <div classname="title">This Week</div>
                                                            <div classname="amount">1,259.28 <span classname="currency currency-usd">USD</span></div>
                                                        </div>
                                                    </div>
                                                    <div classname="invest-data-ck"><canvas classname="iv-data-chart" id="totalBalance"></canvas></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classname="col-md-6 col-xxl-4">
                                        <div classname="card card-bordered card-full">
                                            <div classname="card-inner">
                                                <div classname="card-title-group mb-1">
                                                    <div classname="card-title">
                                                        <h6 classname="title">Investment Overview</h6>
                                                        <p>The investment overview of your platform. <a href="#">All Investment</a></p>
                                                    </div>
                                                </div>
                                                <ul classname="nav nav-tabs nav-tabs-card nav-tabs-xs">
                                                    <li classname="nav-item"><a classname="nav-link active" data-bs-toggle="tab" href="#overview">Overview</a></li>
                                                    <li classname="nav-item"><a classname="nav-link" data-bs-toggle="tab" href="#thisyear">This Year</a></li>
                                                    <li classname="nav-item"><a classname="nav-link" data-bs-toggle="tab" href="#alltime">All Time</a></li>
                                                </ul>
                                                <div classname="tab-content mt-0">
                                                    <div classname="tab-pane active" id="overview">
                                                        <div classname="invest-ov gy-2">
                                                            <div classname="subtitle">Currently Actived Investment</div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">49,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Amount</div>
                                                                </div>
                                                                <div classname="invest-ov-stats">
                                                                    <div><span classname="amount">56</span><span classname="change up text-danger"><em classname="icon ni ni-arrow-long-up"></em>1.93%</span></div>
                                                                    <div classname="title">Plans</div>
                                                                </div>
                                                            </div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">49,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Paid Profit</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div classname="invest-ov gy-2">
                                                            <div classname="subtitle">Investment in this Month</div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">49,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Amount</div>
                                                                </div>
                                                                <div classname="invest-ov-stats">
                                                                    <div><span classname="amount">23</span><span classname="change down text-danger"><em classname="icon ni ni-arrow-long-down"></em>1.93%</span></div>
                                                                    <div classname="title">Plans</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="tab-pane" id="thisyear">
                                                        <div classname="invest-ov gy-2">
                                                            <div classname="subtitle">Currently Actived Investment</div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">89,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Amount</div>
                                                                </div>
                                                                <div classname="invest-ov-stats">
                                                                    <div><span classname="amount">96</span><span classname="change up text-danger"><em classname="icon ni ni-arrow-long-up"></em>1.93%</span></div>
                                                                    <div classname="title">Plans</div>
                                                                </div>
                                                            </div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">99,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Paid Profit</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div classname="invest-ov gy-2">
                                                            <div classname="subtitle">Investment in this Month</div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">149,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Amount</div>
                                                                </div>
                                                                <div classname="invest-ov-stats">
                                                                    <div><span classname="amount">83</span><span classname="change down text-danger"><em classname="icon ni ni-arrow-long-down"></em>1.93%</span></div>
                                                                    <div classname="title">Plans</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="tab-pane" id="alltime">
                                                        <div classname="invest-ov gy-2">
                                                            <div classname="subtitle">Currently Actived Investment</div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">249,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Amount</div>
                                                                </div>
                                                                <div classname="invest-ov-stats">
                                                                    <div><span classname="amount">556</span><span classname="change up text-danger"><em classname="icon ni ni-arrow-long-up"></em>1.93%</span></div>
                                                                    <div classname="title">Plans</div>
                                                                </div>
                                                            </div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">149,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Paid Profit</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div classname="invest-ov gy-2">
                                                            <div classname="subtitle">Investment in this Month</div>
                                                            <div classname="invest-ov-details">
                                                                <div classname="invest-ov-info">
                                                                    <div classname="amount">249,395.395 <span classname="currency currency-usd">USD</span></div>
                                                                    <div classname="title">Amount</div>
                                                                </div>
                                                                <div classname="invest-ov-stats">
                                                                    <div><span classname="amount">223</span><span classname="change down text-danger"><em classname="icon ni ni-arrow-long-down"></em>1.93%</span></div>
                                                                    <div classname="title">Plans</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classname="col-md-6 col-xxl-4">
                                        <div classname="card card-bordered card-full">
                                            <div classname="card-inner d-flex flex-column h-100">
                                                <div classname="card-title-group mb-3">
                                                    <div classname="card-title">
                                                        <h6 classname="title">Top Invested Plan</h6>
                                                        <p>In last 30 days top invested schemes.</p>
                                                    </div>
                                                    <div classname="card-tools mt-n4 me-n1">
                                                        <div classname="drodown"><a href="#" classname="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em classname="icon ni ni-more-h"></em></a>
                                                            <div classname="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                                <ul classname="link-list-opt no-bdr">
                                                                    <li><a href="#"><span>15 Days</span></a></li>
                                                                    <li><a href="#" classname="active"><span>30 Days</span></a></li>
                                                                    <li><a href="#"><span>3 Months</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classname="progress-list gy-3">
                                                    <div classname="progress-wrap">
                                                        <div classname="progress-text">
                                                            <div classname="progress-label">Strater Plan</div>
                                                            <div classname="progress-amount">58%</div>
                                                        </div>
                                                        <div classname="progress progress-md">
                                                            <div classname="progress-bar" data-progress="58"></div>
                                                        </div>
                                                    </div>
                                                    <div classname="progress-wrap">
                                                        <div classname="progress-text">
                                                            <div classname="progress-label">Silver Plan</div>
                                                            <div classname="progress-amount">18.49%</div>
                                                        </div>
                                                        <div classname="progress progress-md">
                                                            <div classname="progress-bar bg-orange" data-progress="18.49"></div>
                                                        </div>
                                                    </div>
                                                    <div classname="progress-wrap">
                                                        <div classname="progress-text">
                                                            <div classname="progress-label">Dimond Plan</div>
                                                            <div classname="progress-amount">16%</div>
                                                        </div>
                                                        <div classname="progress progress-md">
                                                            <div classname="progress-bar bg-teal" data-progress="16"></div>
                                                        </div>
                                                    </div>
                                                    <div classname="progress-wrap">
                                                        <div classname="progress-text">
                                                            <div classname="progress-label">Platinam Plan</div>
                                                            <div classname="progress-amount">29%</div>
                                                        </div>
                                                        <div classname="progress progress-md">
                                                            <div classname="progress-bar bg-pink" data-progress="29"></div>
                                                        </div>
                                                    </div>
                                                    <div classname="progress-wrap">
                                                        <div classname="progress-text">
                                                            <div classname="progress-label">Vibranium Plan</div>
                                                            <div classname="progress-amount">33%</div>
                                                        </div>
                                                        <div classname="progress progress-md">
                                                            <div classname="progress-bar bg-azure" data-progress="33"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classname="invest-top-ck mt-auto"><canvas classname="iv-plan-purchase" id="planPurchase"></canvas></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classname="col-md-6 col-xxl-4">
                                        <div classname="card card-bordered card-full">
                                            <div classname="card-inner border-bottom">
                                                <div classname="card-title-group">
                                                    <div classname="card-title">
                                                        <h6 classname="title">Recent Activities</h6>
                                                    </div>
                                                    <div classname="card-tools">
                                                        <ul classname="card-tools-nav">
                                                            <li><a href="#"><span>Cancel</span></a></li>
                                                            <li classname="active"><a href="#"><span>All</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul classname="nk-activity">
                                                <li classname="nk-activity-item">
                                                    <div classname="nk-activity-media user-avatar bg-success"><img src="images/avatar/c-sm.jpg" alt="" /></div>
                                                    <div classname="nk-activity-data">
                                                        <div classname="label">Keith Jensen requested to Widthdrawl.</div><span classname="time">2 hours ago</span></div>
                                                </li>
                                                <li classname="nk-activity-item">
                                                    <div classname="nk-activity-media user-avatar bg-warning">HS</div>
                                                    <div classname="nk-activity-data">
                                                        <div classname="label">Harry Simpson placed a Order.</div><span classname="time">2 hours ago</span></div>
                                                </li>
                                                <li classname="nk-activity-item">
                                                    <div classname="nk-activity-media user-avatar bg-azure">SM</div>
                                                    <div classname="nk-activity-data">
                                                        <div classname="label">Stephanie Marshall got a huge bonus.</div><span classname="time">2 hours ago</span></div>
                                                </li>
                                                <li classname="nk-activity-item">
                                                    <div classname="nk-activity-media user-avatar bg-purple"><img src="images/avatar/d-sm.jpg" alt="" /></div>
                                                    <div classname="nk-activity-data">
                                                        <div classname="label">Nicholas Carr deposited funds.</div><span classname="time">2 hours ago</span></div>
                                                </li>
                                                <li classname="nk-activity-item">
                                                    <div classname="nk-activity-media user-avatar bg-pink">TM</div>
                                                    <div classname="nk-activity-data">
                                                        <div classname="label">Timothy Moreno placed a Order.</div><span classname="time">2 hours ago</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div classname="col-md-6 col-xxl-4">
                                        <div classname="card card-bordered h-100">
                                            <div classname="card-inner border-bottom">
                                                <div classname="card-title-group">
                                                    <div classname="card-title">
                                                        <h6 classname="title">Notifications</h6>
                                                    </div>
                                                    <div classname="card-tools"><a href="#" classname="link">View All</a></div>
                                                </div>
                                            </div>
                                            <div classname="card-inner">
                                                <div classname="timeline">
                                                    <h6 classname="timeline-head">November, 2019</h6>
                                                    <ul classname="timeline-list">
                                                        <li classname="timeline-item">
                                                            <div classname="timeline-status bg-primary is-outline"></div>
                                                            <div classname="timeline-date">13 Nov <em classname="icon ni ni-alarm-alt"></em></div>
                                                            <div classname="timeline-data">
                                                                <h6 classname="timeline-title">Submited KYC Application</h6>
                                                                <div classname="timeline-des">
                                                                    <p>Re-submitted KYC form.</p><span classname="time">09:30am</span></div>
                                                            </div>
                                                        </li>
                                                        <li classname="timeline-item">
                                                            <div classname="timeline-status bg-primary"></div>
                                                            <div classname="timeline-date">13 Nov <em classname="icon ni ni-alarm-alt"></em></div>
                                                            <div classname="timeline-data">
                                                                <h6 classname="timeline-title">Submited KYC Application</h6>
                                                                <div classname="timeline-des">
                                                                    <p>Re-submitted KYC form.</p><span classname="time">09:30am</span></div>
                                                            </div>
                                                        </li>
                                                        <li classname="timeline-item">
                                                            <div classname="timeline-status bg-pink"></div>
                                                            <div classname="timeline-date">13 Nov <em classname="icon ni ni-alarm-alt"></em></div>
                                                            <div classname="timeline-data">
                                                                <h6 classname="timeline-title">Submited KYC Application</h6>
                                                                <div classname="timeline-des">
                                                                    <p>Re-submitted KYC form.</p><span classname="time">09:30am</span></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classname="col-xl-12 col-xxl-8">
                                        <div classname="card card-bordered card-full">
                                            <div classname="card-inner border-bottom">
                                                <div classname="card-title-group">
                                                    <div classname="card-title">
                                                        <h6 classname="title">Recent Investment</h6>
                                                    </div>
                                                    <div classname="card-tools"><a href="#" classname="link">View All</a></div>
                                                </div>
                                            </div>
                                            <div classname="nk-tb-list">
                                                <div classname="nk-tb-item nk-tb-head">
                                                    <div classname="nk-tb-col"><span>Plan</span></div>
                                                    <div classname="nk-tb-col tb-col-sm"><span>Who</span></div>
                                                    <div classname="nk-tb-col tb-col-lg"><span>Date</span></div>
                                                    <div classname="nk-tb-col"><span>Amount</span></div>
                                                    <div classname="nk-tb-col tb-col-sm"><span>&nbsp;</span></div>
                                                    <div classname="nk-tb-col"><span>&nbsp;</span></div>
                                                </div>
                                                <div classname="nk-tb-item">
                                                    <div classname="nk-tb-col">
                                                        <div classname="align-center">
                                                            <div classname="user-avatar user-avatar-sm bg-light"><span>P2</span></div><span classname="tb-sub ms-2">Dimond <span classname="d-none d-md-inline">- Daily 8.52% for 14 Days</span></span>
                                                        </div>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-sm">
                                                        <div classname="user-card">
                                                            <div classname="user-avatar user-avatar-xs bg-azure-dim"><span>VA</span></div>
                                                            <div classname="user-name"><span classname="tb-lead">Victoria Aguilar</span></div>
                                                        </div>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-lg"><span classname="tb-sub">18/10/2019</span></div>
                                                    <div classname="nk-tb-col"><span classname="tb-sub tb-amount">1.094780 <span>BTC</span></span>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-sm"><span classname="tb-sub text-success">Completed</span></div>
                                                    <div classname="nk-tb-col nk-tb-col-action">
                                                        <div classname="dropdown"><a classname="text-soft dropdown-toggle btn btn-sm btn-icon btn-trigger" data-bs-toggle="dropdown"><em classname="icon ni ni-chevron-right"></em></a>
                                                            <div classname="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                                <ul classname="link-list-plain">
                                                                    <li><a href="#">View</a></li>
                                                                    <li><a href="#">Invoice</a></li>
                                                                    <li><a href="#">Print</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classname="nk-tb-item">
                                                    <div classname="nk-tb-col">
                                                        <div classname="align-center">
                                                            <div classname="user-avatar user-avatar-sm bg-light"><span>P3</span></div><span classname="tb-sub ms-2">Platinam <span classname="d-none d-md-inline">- Daily 14.82% for 7 Days</span></span>
                                                        </div>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-sm">
                                                        <div classname="user-card">
                                                            <div classname="user-avatar user-avatar-xs bg-purple-dim"><span>EH</span></div>
                                                            <div classname="user-name"><span classname="tb-lead">Emma Henry</span></div>
                                                        </div>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-lg"><span classname="tb-sub">18/10/2019</span></div>
                                                    <div classname="nk-tb-col"><span classname="tb-sub tb-amount">1.094780 <span>BTC</span></span>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-sm"><span classname="tb-sub text-success">Completed</span></div>
                                                    <div classname="nk-tb-col nk-tb-col-action">
                                                        <div classname="dropdown"><a classname="text-soft dropdown-toggle btn btn-sm btn-icon btn-trigger" data-bs-toggle="dropdown"><em classname="icon ni ni-chevron-right"></em></a>
                                                            <div classname="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                                <ul classname="link-list-plain">
                                                                    <li><a href="#">View</a></li>
                                                                    <li><a href="#">Invoice</a></li>
                                                                    <li><a href="#">Print</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classname="nk-tb-item">
                                                    <div classname="nk-tb-col">
                                                        <div classname="align-center">
                                                            <div classname="user-avatar user-avatar-sm bg-light"><span>P1</span></div><span classname="tb-sub ms-2">Silver <span classname="d-none d-md-inline">- Daily 4.76% for 21 Days</span></span>
                                                        </div>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-sm">
                                                        <div classname="user-card">
                                                            <div classname="user-avatar user-avatar-xs bg-teal-dim"><span>AF</span></div>
                                                            <div classname="user-name"><span classname="tb-lead">Alice Ford</span></div>
                                                        </div>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-lg"><span classname="tb-sub">18/10/2019</span></div>
                                                    <div classname="nk-tb-col"><span classname="tb-sub tb-amount">1.094780 <span>BTC</span></span>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-sm"><span classname="tb-sub text-success">Completed</span></div>
                                                    <div classname="nk-tb-col nk-tb-col-action">
                                                        <div classname="dropdown"><a classname="text-soft dropdown-toggle btn btn-sm btn-icon btn-trigger" data-bs-toggle="dropdown"><em classname="icon ni ni-chevron-right"></em></a>
                                                            <div classname="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                                <ul classname="link-list-plain">
                                                                    <li><a href="#">View</a></li>
                                                                    <li><a href="#">Invoice</a></li>
                                                                    <li><a href="#">Print</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classname="nk-tb-item">
                                                    <div classname="nk-tb-col">
                                                        <div classname="align-center">
                                                            <div classname="user-avatar user-avatar-sm bg-light"><span>P3</span></div><span classname="tb-sub ms-2">Platinam <span classname="d-none d-md-inline">- Daily 14.82% for 7 Days</span></span>
                                                        </div>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-sm">
                                                        <div classname="user-card">
                                                            <div classname="user-avatar user-avatar-xs bg-orange-dim"><span>HW</span></div>
                                                            <div classname="user-name"><span classname="tb-lead">Harold Walker</span></div>
                                                        </div>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-lg"><span classname="tb-sub">18/10/2019</span></div>
                                                    <div classname="nk-tb-col"><span classname="tb-sub tb-amount">1.094780 <span>BTC</span></span>
                                                    </div>
                                                    <div classname="nk-tb-col tb-col-sm"><span classname="tb-sub text-success">Completed</span></div>
                                                    <div classname="nk-tb-col nk-tb-col-action">
                                                        <div classname="dropdown"><a classname="text-soft dropdown-toggle btn btn-sm btn-icon btn-trigger" data-bs-toggle="dropdown"><em classname="icon ni ni-chevron-right"></em></a>
                                                            <div classname="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                                <ul classname="link-list-plain">
                                                                    <li><a href="#">View</a></li>
                                                                    <li><a href="#">Invoice</a></li>
                                                                    <li><a href="#">Print</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classname="nk-footer nk-footer-fluid bg-lighter">
                <div classname="container-xl">
                    <div classname="nk-footer-wrap">
                        <div classname="nk-footer-copyright"> &copy; 2022 DashLite. Template by <a href="https://softnio.com/" target="_blank">Softnio</a></div>
                        <div classname="nk-footer-links">
                            <ul classname="nav nav-sm">
                                <li classname="nav-item dropup"><a href="#" classname="dropdown-toggle dropdown-indicator has-indicator nav-link text-base" data-bs-toggle="dropdown" data-offset="0,10"><span>English</span></a>
                                    <div classname="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                        <ul classname="language-list">
                                            <li><a href="#" classname="language-item"><span classname="language-name">English</span></a></li>
                                            <li><a href="#" classname="language-item"><span classname="language-name">Español</span></a></li>
                                            <li><a href="#" classname="language-item"><span classname="language-name">Français</span></a></li>
                                            <li><a href="#" classname="language-item"><span classname="language-name">Türkçe</span></a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li classname="nav-item"><a data-bs-toggle="modal" href="#region" classname="nav-link"><em classname="icon ni ni-globe"></em><span classname="ms-1">Select Region</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div classname="modal fade" tabindex="-1" role="dialog" id="region">
        <div classname="modal-dialog modal-lg" role="document">
            <div classname="modal-content"><a href="#" classname="close" data-bs-dismiss="modal"><em classname="icon ni ni-cross-sm"></em></a>
                <div classname="modal-body modal-body-md">
                    <h5 classname="title mb-4">Select Your Country</h5>
                    <div classname="nk-country-region">
                        <ul classname="country-list text-center gy-2">
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/arg.png" alt="" classname="country-flag" /><span classname="country-name">Argentina</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/aus.png" alt="" classname="country-flag" /><span classname="country-name">Australia</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/bangladesh.png" alt="" classname="country-flag" /><span classname="country-name">Bangladesh</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/canada.png" alt="" classname="country-flag" /><span classname="country-name">Canada <small>(English)</small></span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/china.png" alt="" classname="country-flag" /><span classname="country-name">Centrafricaine</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/china.png" alt="" classname="country-flag" /><span classname="country-name">China</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/french.png" alt="" classname="country-flag" /><span classname="country-name">France</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/germany.png" alt="" classname="country-flag" /><span classname="country-name">Germany</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/iran.png" alt="" classname="country-flag" /><span classname="country-name">Iran</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/italy.png" alt="" classname="country-flag" /><span classname="country-name">Italy</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/mexico.png" alt="" classname="country-flag" /><span classname="country-name">México</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/philipine.png" alt="" classname="country-flag" /><span classname="country-name">Philippines</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/portugal.png" alt="" classname="country-flag" /><span classname="country-name">Portugal</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/s-africa.png" alt="" classname="country-flag" /><span classname="country-name">South Africa</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/spanish.png" alt="" classname="country-flag" /><span classname="country-name">Spain</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/switzerland.png" alt="" classname="country-flag" /><span classname="country-name">Switzerland</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/uk.png" alt="" classname="country-flag" /><span classname="country-name">United Kingdom</span></a>
                            </li>
                            <li>
                                <a href="#" classname="country-item"><img src="images/flags/english.png" alt="" classname="country-flag" /><span classname="country-name">United State</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ul classname="nk-sticky-toolbar">
        <li classname="demo-layout"><a classname="toggle tipinfo" data-target="demoML" href="#" title="Main Demo Preview"><em classname="icon ni ni-dashlite"></em></a></li>
        <li classname="demo-thumb"><a classname="toggle tipinfo" data-target="demoUC" href="#" title="Use Case Concept"><em classname="icon ni ni-menu-squared"></em></a></li>
        <li classname="demo-settings"><a classname="toggle tipinfo" data-target="settingPanel" href="#" title="Demo Settings"><em classname="icon ni ni-setting-alt"></em></a></li>
        <li classname="demo-purchase"><a classname="tipinfo" target="_blank" href="https://1.envato.market/e0y3g" title="Purchase"><em classname="icon ni ni-cart"></em></a></li>
    </ul>
    <div classname="nk-demo-panel nk-demo-panel-2x toggle-slide toggle-slide-right" data-content="demoML" data-toggle-overlay="true" data-toggle-body="true" data-toggle-screen="any">
        <div classname="nk-demo-head">
            <h6 classname="mb-0">Switch Demo Layout</h6><a classname="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2" data-target="demoML" href="#"><em classname="icon ni ni-cross"></em></a></div>
        <div classname="nk-demo-list" data-simplebar>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo1/index.html">
                    <div classname="nk-demo-image bg-blue">
                        <img classname="bg-purple" src="../images/landing/layout-1d.jpg" srcset="https://dashlite.net/images/landing/layout-1d2x.jpg 2x" alt="Demo Layout 1" /></div><span classname="nk-demo-title"><strong>Demo Layout 1</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo2/index.html">
                    <div classname="nk-demo-image bg-purple"><img src="../images/landing/layout-2d.jpg" srcset="https://dashlite.net/images/landing/layout-2d2x.jpg 2x" alt="Demo Layout 2" /></div><span classname="nk-demo-title"><strong>Demo Layout 2</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo3/index.html">
                    <div classname="nk-demo-image bg-success">
                        <img src="../images/landing/layout-3d.jpg" srcset="https://dashlite.net/images/landing/layout-3d2x.jpg 2x" alt="Demo Layout 3" /></div><span classname="nk-demo-title"><strong>Demo Layout 3</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo4/index.html">
                    <div classname="nk-demo-image bg-indigo"><img src="../images/landing/layout-4d.jpg" srcset="https://dashlite.net/images/landing/layout-4d2x.jpg 2x" alt="Demo Layout 4" /></div><span classname="nk-demo-title"><strong>Demo Layout 4</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo5/index.html">
                    <div classname="nk-demo-image bg-orange"><img src="../images/landing/layout-5d.jpg" srcset="https://dashlite.net/images/landing/layout-5d2x.jpg 2x" alt="Demo Layout 5" /></div><span classname="nk-demo-title"><strong>Demo Layout 5</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="index.html">
                    <div classname="nk-demo-image bg-purple"><img src="../images/landing/layout-6d.jpg" srcset="https://dashlite.net/images/landing/layout-6d2x.jpg 2x" alt="Demo Layout 6" /></div><span classname="nk-demo-title"><strong>Demo Layout 6</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo7/index.html">
                    <div classname="nk-demo-image bg-teal"><img src="../images/landing/layout-7d.jpg" srcset="https://dashlite.net/images/landing/layout-7d2x.jpg 2x" alt="Demo Layout 7" /></div><span classname="nk-demo-title"><strong>Demo Layout 7</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo8/index.html">
                    <div classname="nk-demo-image bg-azure"><img src="../images/landing/layout-8d.jpg" srcset="https://dashlite.net/images/landing/layout-8d2x.jpg 2x" alt="Demo Layout 8" /></div><span classname="nk-demo-title"><strong>Demo Layout 8</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/landing/index.html">
                    <div classname="nk-demo-image bg-red"><img src="../images/landing/main-landing.jpg" srcset="https://dashlite.net/images/landing/main-landing2x.jpg 2x" alt="Landing Page" /></div><span classname="nk-demo-title"><strong>Landing Page</strong> <span classname="badge badge-danger ml-1">Free</span></span>
                </a>
            </div>
        </div>
    </div>
    <div classname="nk-demo-panel nk-demo-panel-2x toggle-slide toggle-slide-right" data-content="demoUC" data-toggle-overlay="true" data-toggle-body="true" data-toggle-screen="any">
        <div classname="nk-demo-head">
            <h6 classname="mb-0">Use Case Concept</h6><a classname="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2" data-target="demoUC" href="#"><em classname="icon ni ni-cross"></em></a></div>
        <div classname="nk-demo-list" data-simplebar>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo2/ecommerce/index.html">
                    <div classname="nk-demo-image bg-dark"><img src="../images/landing/demo-ecommerce.jpg" srcset="https://dashlite.net/images/landing/demo-ecommerce2x.jpg 2x" alt="Ecommerce" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo2</em><br /><strong>E-Commerce Panel</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo2/lms/index.html">
                    <div classname="nk-demo-image bg-danger"><img src="../images/landing/demo-lms.jpg" srcset="https://dashlite.net/images/landing/demo-lms2x.jpg 2x" alt="LMS" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo2</em><br /><strong>LMS / Learning Management System</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo1/crm/index.html">
                    <div classname="nk-demo-image bg-info"><img src="../images/landing/demo-crm.jpg" srcset="https://dashlite.net/images/landing/demo-crm2x.jpg 2x" alt="CRM / Customer Relationship" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo1</em><br /><strong>CRM / Customer Relationship Management</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo7/hospital/index.html">
                    <div classname="nk-demo-image bg-indigo"><img src="../images/landing/demo-hospital.jpg" srcset="https://dashlite.net/images/landing/demo-hospital2x.jpg 2x" alt="Hospital Managemen" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo7</em><br /><strong>Hospital Management</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo1/hotel/index.html">
                    <div classname="nk-demo-image bg-pink"><img src="../images/landing/demo-hotel.jpg" srcset="https://dashlite.net/images/landing/demo-hotel2x.jpg 2x" alt="Hotel Managemen" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo1</em><br /><strong>Hotel Management</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo3/cms/index.html">
                    <div classname="nk-demo-image bg-dark"><img src="../images/landing/demo-cms.jpg" srcset="https://dashlite.net/images/landing/demo-cms2x.jpg 2x" alt="cms" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo3</em><br /><strong>CMS Panel</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo5/crypto/index.html">
                    <div classname="nk-demo-image bg-warning"><img src="../images/landing/demo-buysell.jpg" srcset="https://dashlite.net/images/landing/demo-buysell2x.jpg 2x" alt="Crypto BuySell / Wallet" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo5</em><br /><strong>Crypto BuySell Panel</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="invest/index.html">
                    <div classname="nk-demo-image bg-indigo"><img src="../images/landing/demo-invest.jpg" srcset="https://dashlite.net/images/landing/demo-invest2x.jpg 2x" alt="HYIP / Investment" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo6</em><br /><strong>HYIP / Investment Panel</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo3/apps/file-manager.html">
                    <div classname="nk-demo-image bg-purple"><img src="../images/landing/demo-file-manager.jpg" srcset="https://dashlite.net/images/landing/demo-file-manager2x.jpg 2x" alt="File Manager" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo3</em><br /><strong>Apps - File Manager</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo4/subscription/index.html">
                    <div classname="nk-demo-image bg-primary"><img src="../images/landing/demo-subscription.jpg" srcset="https://dashlite.net/images/landing/demo-subscription2x.jpg 2x" alt="SAAS / Subscription" /></div><span classnameName="nk-demo-title"><em classname="text-primary">Demo4</em><br /><strong>SAAS / Subscription Panel</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/covid/index.html">
                    <div classname="nk-demo-image bg-danger"><img src="../images/landing/demo-covid19.jpg" srcset="https://dashlite.net/images/landing/demo-covid192x.jpg 2x" alt="Covid Situation" /></div><span classname="nk-demo-title"><em classname="text-primary">Covid</em><br /><strong>Coronavirus Situation</strong></span></a>
            </div>
            <div classnameName="nk-demo-item">
                <a href="https://dashlite.net/demo3/apps/messages.html">
                    <div classname="nk-demo-image bg-success"><img src="../images/landing/demo-messages.jpg" srcset="https://dashlite.net/images/landing/demo-messages2x.jpg 2x" alt="Messages" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo3</em><br /><strong>Apps - Messages</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo3/apps/mailbox.html">
                    <div classname="nk-demo-image bg-purple"><img src="../images/landing/demo-inbox.jpg" srcset="https://dashlite.net/images/landing/demo-inbox2x.jpg 2x" alt="Inbox" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo3</em><br /><strong>Apps - Mailbox</strong></span></a>
            </div>
            <div classname="nk-demo-item">
                <a href="https://dashlite.net/demo3/apps/chats.html">
                    <div classname="nk-demo-image bg-purple"><img src="../images/landing/demo-chats.jpg" srcset="https://dashlite.net/images/landing/demo-chats2x.jpg 2x" alt="Chats / Messenger" /></div><span classname="nk-demo-title"><em classname="text-primary">Demo3</em><br /><strong>Apps - Chats</strong></span></a>
            </div>
        </div>
    </div>
    <div classname="nk-demo-panel toggle-slide toggle-slide-right" data-content="settingPanel" data-toggle-overlay="true" data-toggle-body="true" data-toggle-screen="any">
        <div classname="nk-demo-head">
            <h6 classname="mb-0">Preview Settings</h6><a classname="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2" data-target="settingPanel" href="#"><em classname="icon ni ni-cross"></em></a></div>
        <div classname="nk-opt-panel" data-simplebar>
            <div classname="nk-opt-set">
                <div classname="nk-opt-set-title">Direction Change</div>
                <div classname="nk-opt-list col-2x">
                    <div classname="nk-opt-item only-text active" data-key="dir" data-update="ltr"><span classname="nk-opt-item-bg"><span classname="nk-opt-item-name">LTR Mode</span></span>
                    </div>
                    <div classname="nk-opt-item only-text" data-key="dir" data-update="rtl"><span classname="nk-opt-item-bg"><span classname="nk-opt-item-name">RTL Mode</span></span>
                    </div>
                </div>
            </div>
            <div classname="nk-opt-set">
                <div classname="nk-opt-set-title">Main UI Style</div>
                <div classname="nk-opt-list col-2x">
                    <div classname="nk-opt-item only-text active" data-key="style" data-update="ui-default"><span classname="nk-opt-item-bg"><span classname="nk-opt-item-name">Default</span></span>
                    </div>
                    <div classname="nk-opt-item only-text" data-key="style" data-update="ui-clean"><span classname="nk-opt-item-bg"><span classname="nk-opt-item-name">Clean</span></span>
                    </div>
                    <div classname="nk-opt-item only-text" data-key="style" data-update="ui-shady"><span classname="nk-opt-item-bg"><span classname="nk-opt-item-name">Shady</span></span>
                    </div>
                    <div classname="nk-opt-item only-text" data-key="style" data-update="ui-softy"><span classname="nk-opt-item-bg"><span classname="nk-opt-item-name">Softy</span></span>
                    </div>
                </div>
            </div>
            <div classname="nk-opt-set nk-opt-set-header">
                <div classname="nk-opt-set-title">Header Style</div>
                <div classname="nk-opt-list col-4x">
                    <div classname="nk-opt-item active" data-key="header" data-update="is-light"><span classname="nk-opt-item-bg is-light"><span classname="bg-lighter"></span></span><span classname="nk-opt-item-name">White</span></div>
                    <div classname="nk-opt-item" data-key="header" data-update="is-default"><span classname="nk-opt-item-bg is-light"><span classname="bg-light"></span></span><span classname="nk-opt-item-name">Light</span></div>
                    <div classname="nk-opt-item" data-key="header" data-update="is-dark"><span classname="nk-opt-item-bg"><span classname="bg-dark"></span></span><span classname="nk-opt-item-name">Dark</span></div>
                    <div classname="nk-opt-item" data-key="header" data-update="is-theme"><span classname="nk-opt-item-bg"><span classname="bg-theme"></span></span><span classname="nk-opt-item-name">Theme</span></div>
                </div>
                <div classname="nk-opt-set-title">Header Option</div>
                <div classname="nk-opt-list col-2x">
                    <div classname="nk-opt-item only-text active" data-key="header_opt" data-update="is-regular"><span classname="nk-opt-item-bg"><span classname="nk-opt-item-name">Regular</span></span>
                    </div>
                    <div classname="nk-opt-item only-text" data-key="header_opt" data-update="nk-header-fixed"><span classname="nk-opt-item-bg"><span classname="nk-opt-item-name">Fixed</span></span>
                    </div>
                </div>
            </div>
            <div classname="nk-opt-set nk-opt-set-skin">
                <div classname="nk-opt-set-title">Primary Skin</div>
                <div classname="nk-opt-list">
                    <div classname="nk-opt-item active" data-key="skin" data-update="default"><span classname="nk-opt-item-bg"><span classname="skin-default"></span></span><span classname="nk-opt-item-name">Default</span></div>
                    <div classname="nk-opt-item" data-key="skin" data-update="blue"><span classname="nk-opt-item-bg"><span classname="skin-blue"></span></span><span classname="nk-opt-item-name">Blue</span></div>
                    <div classname="nk-opt-item" data-key="skin" data-update="egyptian"><span classname="nk-opt-item-bg"><span classname="skin-egyptian"></span></span><span classname="nk-opt-item-name">Egyptian</span></div>
                    <div classname="nk-opt-item" data-key="skin" data-update="purple"><span classname="nk-opt-item-bg"><span classname="skin-purple"></span></span><span classname="nk-opt-item-name">Purple</span></div>
                    <div classname="nk-opt-item" data-key="skin" data-update="green"><span classname="nk-opt-item-bg"><span classname="skin-green"></span></span><span classname="nk-opt-item-name">Green</span></div>
                    <div classname="nk-opt-item" data-key="skin" data-update="red"><span classname="nk-opt-item-bg"><span classname="skin-red"></span></span><span classname="nk-opt-item-name">Red</span></div>
                </div>
            </div>
            <div classname="nk-opt-set">
                <div classname="nk-opt-set-title">Skin Mode</div>
                <div classname="nk-opt-list col-2x">
                    <div classname="nk-opt-item active" data-key="mode" data-update="light-mode"><span classname="nk-opt-item-bg is-light"><span classname="theme-light"></span></span><span classname="nk-opt-item-name">Light Skin</span></div>
                    <div classname="nk-opt-item" data-key="mode" data-update="dark-mode"><span classname="nk-opt-item-bg"><span classname="theme-dark"></span></span><span classname="nk-opt-item-name">Dark Skin</span></div>
                </div>
            </div>
            <div classname="nk-opt-reset"><a href="#" classname="reset-opt-setting">Reset Setting</a></div>
        </div>
    </div>
    <div classname="pmo-lv pmo-dark"><a classname="pmo-close" href="#"><em classname="ni ni-cross"></em></a>
        <a classname="pmo-wrap" target="_blank" href="https://softnio.com/get-early-access/">
            <div classname="pmo-text text-white">Looking for functional script for HYIP Investment Platform? Check out <em classname="ni ni-arrow-long-right"></em></div>
        </a>
    </div>
    </div>
  )
}

export default Home