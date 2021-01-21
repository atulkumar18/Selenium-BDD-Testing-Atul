$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Search_And_Logout.feature");
formatter.feature({
  "name": "feature to search and logout functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search\u0026Logout"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Check user is able to logout succesfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user logout from the site",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "akshatababar90@gmail.com",
        "aksh@123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User views Udemy website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginSteps.user_views_Udemy_website()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check user is able to logout succesfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search\u0026Logout"
    },
    {
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginSteps.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters akshatababar90@gmail.com and aksh@123",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginSteps.user_enters_atulvp18_gmail_com_and_Atul(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logout from the site",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginSteps.user_logout_from_the_site()"
});
formatter.result({
  "status": "passed"
});
});