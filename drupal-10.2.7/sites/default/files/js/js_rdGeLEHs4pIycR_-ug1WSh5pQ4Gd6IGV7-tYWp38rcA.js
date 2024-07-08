/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($,Drupal,drupalSettings,once){'use strict';Drupal.webform=Drupal.webform||{};Drupal.webform.intlTelInput=Drupal.webform.intlTelInput||{};Drupal.webform.intlTelInput.options=Drupal.webform.intlTelInput.options||{};Drupal.behaviors.webformTelephoneInternational={attach:function(context){if(!$.fn.intlTelInput)return;$(once('webform-telephone-international','input.js-webform-telephone-international',context)).each(function(){var $telephone=$(this);var $error=$('<strong class="error form-item--error-message">'+Drupal.t('Invalid phone number')+'</strong>').hide();$telephone.closest('.js-form-item').append($error);var options={utilsScript:drupalSettings.webform.intlTelInput.utilsScript,nationalMode:false};if($telephone.attr('data-webform-telephone-international-initial-country'))options.initialCountry=$telephone.attr('data-webform-telephone-international-initial-country');if($telephone.attr('data-webform-telephone-international-preferred-countries'))options.preferredCountries=JSON.parse($telephone.attr('data-webform-telephone-international-preferred-countries'));options=$.extend(options,Drupal.webform.intlTelInput.options);$telephone.intlTelInput(options);var reset=function(){$telephone.removeClass('error');$error.hide();};var validate=function(){if($.trim($telephone.val()))if(!$telephone.intlTelInput('isValidNumber')){$telephone.addClass('error');var placeholder=$telephone.attr('placeholder');var message;if(placeholder)message=Drupal.t('The phone number is not valid. (e.g. @example)',{'@example':placeholder});else message=Drupal.t('The phone number is not valid.');$error.html(message).show();return false;}return true;};$telephone.on('blur',function(){reset();validate();});$telephone.on('keyup change',reset);var $form=$(this.form);$form.on('submit',function(event){if(!validate()){$telephone.focus();event.preventDefault();if(Drupal.behaviors.webformSubmitOnce)Drupal.behaviors.webformSubmitOnce.clear();}});});}};})(jQuery,Drupal,drupalSettings,once);;
(function($,Drupal,once){'use strict';Drupal.behaviors.webformElementMore={attach:function(context){$(once('webform-element-more','.js-webform-element-more',context)).each(function(event){var $more=$(this);var $a=$more.find('a').first();var $content=$more.find('.webform-element-more--content');$a.attr({'aria-expanded':false,'aria-controls':$content.attr('id')});$a.parent().on('click',toggle).on('keydown',function(event){if(event.which===32||event.which===13)toggle(event);});function toggle(event){var expanded=($a.attr('aria-expanded')==='true');$a.attr('aria-expanded',!expanded);if(expanded){$more.removeClass('is-open');$content.slideUp();}else{$more.addClass('is-open');$content.slideDown();}event.preventDefault();}});}};})(jQuery,Drupal,once);;
