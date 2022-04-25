// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.deepl.com/translator
// @icon         https://www.google.com/s2/favicons?sz=64&domain=deepl.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const switchButton = document.querySelector(".lmt__language_container_switch")
    const activeLanguageButton = document.querySelectorAll(".lmt__language_select__active")[1]
    const textAreas = document.querySelectorAll("textarea");
    textAreas.forEach((t,i) => t.setAttribute("tabindex",i+1))

    document.addEventListener('keydown', (e) => {
        if(e.ctrlKey) {
            if (e.key.toLowerCase() === 's') {
                switchButton.click()
            }
            if (e.key.toLowerCase() === 'd') {
                activeLanguageButton.click()
                document.querySelector("button[dl-test='translator-lang-option-da-DA']").click()
            }
            if (e.key.toLowerCase() === 'a') {
                activeLanguageButton.click()
                document.querySelector("button[dl-test='translator-lang-option-de-DE']").click()
            }
            textAreas[0].focus()
        }


    });

    function copyTextToClipboard(text) {

        navigator.clipboard.writeText(text).then(function() {
          console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
        });
      }

})();
