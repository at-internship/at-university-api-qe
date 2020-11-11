$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/delete.feature");
formatter.feature({
  "name": "Create Delete operation to delete a course by \"_ID\" on mongoDB",
  "description": "    if the \"_ID\" is not found, return NOT FOUND exception (custom exceptions)",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.background({
  "name": "Create Course",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "course and get course information",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.course_and_get_course_information()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The API Recived a delete method with ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    },
    {
      "name": "@deleteP1"
    }
  ]
});
formatter.step({
  "name": "check course in mongoDB and ID course",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.check_course_in_mongoDB_and_ID_course()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the delete resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.I_prepare_the_delete_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try delete a course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.i_try_delete_a_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status no content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.the_API_should_indicate_status_no_content()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Create Course",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "course and get course information",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.course_and_get_course_information()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The API Recived a delete method with random ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    },
    {
      "name": "@deleteP2"
    }
  ]
});
formatter.step({
  "name": "I have a random ID",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.i_have_a_random_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the delete resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.I_prepare_the_delete_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try delete a course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.i_try_delete_a_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status not found",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.the_API_should_indicate_status_not_found()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Create Course",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "course and get course information",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.course_and_get_course_information()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The API Recived a delete method with ID and category",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    },
    {
      "name": "@deleteP3"
    }
  ]
});
formatter.step({
  "name": "check course in mongoDB and tabs id and category",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.check_course_in_mongoDB_and_tabs_id_and_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the delete resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.I_prepare_the_delete_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try delete a course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.i_try_delete_a_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status no content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.the_API_should_indicate_status_no_content()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Create Course",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "course and get course information",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.course_and_get_course_information()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The API Recived a delete method with ID and status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    },
    {
      "name": "@deleteP4"
    }
  ]
});
formatter.step({
  "name": "check course in mongoDB and tabs id and status",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.check_course_in_mongoDB_and_tabs_id_and_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the delete resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.I_prepare_the_delete_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try delete a course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.i_try_delete_a_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status no content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.the_API_should_indicate_status_no_content()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Create Course",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "course and get course information",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.course_and_get_course_information()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The API Recived a delete method with description and title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    },
    {
      "name": "@deleteP5"
    }
  ]
});
formatter.step({
  "name": "check course in mongoDB and tabs description and title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.check_course_in_mongoDB_and_tabs_description_and_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the delete resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.I_prepare_the_delete_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try delete a course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.i_try_delete_a_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status no content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.DeleteTest.the_API_should_indicate_status_no_content()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/post.feature");
formatter.feature({
  "name": "In order to test API Post method",
  "description": "    we need type our scenarios\n    and make automating testing",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.scenario({
  "name": "Create new course with all data with the category is incorrect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    },
    {
      "name": "@postP1"
    }
  ]
});
formatter.step({
  "name": "I have a course category outside the enum",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_course_category_outside_the_enum()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a title",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a description",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a img",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_img()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a status",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_prepare_the_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try create a new course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_try_create_a_new_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status error",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.the_API_should_indicate_status_error()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new course with all data with the title is empty",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    },
    {
      "name": "@PostP2"
    }
  ]
});
formatter.step({
  "name": "I have a course category",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_course_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I dont have title",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_dont_have_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a description",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a img",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_img()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a status",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_prepare_the_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try create a new course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_try_create_a_new_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status error",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.the_API_should_indicate_status_error()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new course with all data with the status is teen",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    },
    {
      "name": "@PostP3"
    }
  ]
});
formatter.step({
  "name": "I have a course category",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_course_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a title",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a description",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a img",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_img()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a status is a teen",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_status_is_a_teen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_prepare_the_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try create a new course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_try_create_a_new_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status error",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.the_API_should_indicate_status_error()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new course with all data with the title is space blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    },
    {
      "name": "@PostP4"
    }
  ]
});
formatter.step({
  "name": "I have a course category",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_course_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a title is space blank",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_title_is_space_blank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a description",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a img",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_img()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a status",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_prepare_the_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try create a new course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_try_create_a_new_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status error",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.the_API_should_indicate_status_error()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The API recived a Post method whit only category title status tabs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    },
    {
      "name": "@PostP5"
    }
  ]
});
formatter.step({
  "name": "I have a course category",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_course_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a title",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a status",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_prepare_the_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try create a new course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_try_create_a_new_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status ok",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.the_API_should_indicate_status_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The API recived a Post method whit only title status description img tabs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    },
    {
      "name": "@PostP6"
    }
  ]
});
formatter.step({
  "name": "I have a title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a status",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a description",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a img",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_img()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_prepare_the_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try create a new course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_try_create_a_new_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status error",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.the_API_should_indicate_status_error()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The API recived a post method whit category in lower and upper case",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    },
    {
      "name": "@PostP7"
    }
  ]
});
formatter.step({
  "name": "I have a category in lower and upper case",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_category_in_lower_and_upper_case()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a title",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a status",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a description",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a img",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_have_a_img()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I prepare the resource",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_prepare_the_resource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I try create a new course on the API",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.i_try_create_a_new_course_on_the_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should indicate status ok",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.PostTest.the_API_should_indicate_status_ok()"
});
formatter.result({
  "status": "passed"
});
});