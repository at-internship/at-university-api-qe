@post
Feature: In order to test API Post method
  we need type our scenarios
  and make automating testing

  @post
  Scenario: Create new course with all fields complete
    Given I have a category
    And I have a title
    And I have a description
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status ok

  @postP1
  Scenario: Create new course with all data with the category is incorrect
    Given I have a course category outside the enum
    And I have a title
    And I have a description
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error

  @postP1.1
  Scenario: Create new course with all data with the category is numeric
    Given I have a category numeric
    And I have a title
    And I have a description
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error

  @postP1.2
  Scenario: Create new course with all data with the category is null
    Given I have a category null
    And I have a title
    And I have a description
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error

  @PostP2
  Scenario: Create new course with all data with the title is empty
    Given I have a course category
    And I dont have title
    And I have a description
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error

  @postP2.1
  Scenario: Create new course with all data with the title is numeric
    Given I have a category
    And I have a title numeric
    And I have a description
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status ok

  @postP2.2
  Scenario: Create new course with all data with the title is boolean
    Given I have a category
    And I have a title boolean
    And I have a description
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error

  @PostP3
  Scenario: Create new course with all data with the status is teen
    Given I have a course category
    And I have a title
    And I have a description
    And I have a img
    And I have a status is a teen
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error
    
    @postP3.1
  Scenario: Create new course with all data with the description is numeric
    Given I have a category
    And I have a title
    And I have a description numeric
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status ok

  @postP3.2
  Scenario: Create new course with all data with the description is boolean
    Given I have a category
    And I have a title
    And I have a description boolean
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error

  @PostP4
  Scenario: Create new course with all data with the title is space blank
    Given I have a course category
    And I have a title is space blank
    And I have a description
    And I have a img
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error

  @PostP5
  Scenario: The API recived a Post method whit only category title status tabs
    Given I have a course category
    And I have a title
    And I have a status
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error
  @PostP6
  Scenario: The API recived a Post method whit only title status description img tabs
    Given I have a title
    And I have a status
    And I have a description
    And I have a img
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status error

  @PostP7
  Scenario: The API recived a post method whit category in lower and upper case
    Given I have a category in lower and upper case
    And I have a title
    And I have a status
    And I have a description
    And I have a img
    And I prepare the resource
    When I try create a new course on the API
    Then the API should indicate status ok
