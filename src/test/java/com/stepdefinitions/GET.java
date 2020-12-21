package com.stepdefinitions;

import com.globalClasses.ApiPaths;
import com.globalClasses.ApiTools;
import com.globalClasses.BasicSecurityUtil;
import com.globalClasses.MongoDBConnection;
import com.globalClasses.MongoDBUtils;
import com.globalClasses.MyTools;
import com.globalClasses.RandomTools;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class GET {
	
	private BasicSecurityUtil base;
	int statusCodeExpected, statusCodeRetrieved;
	boolean boolCheck = false;
	boolean boolRetrieved = false;
	
	String allCourses;
	
	public GET(BasicSecurityUtil base) {
		this.base = base;
	}
	
	RandomTools random = new RandomTools();
	MyTools myTools = new MyTools();
	
	@Given("I need see all courses")
	public void i_need_see_all_sprints() {
		base.param = "";
	}
	
	
	@When("I send GET request to API")
	public void i_send_GET_request_to_API() {
		
		base.apiResource = ApiPaths.UNIVERSITY_APY_JAVA_ENDPOINT_GET;
		base.ServiceApi = new ApiTools();
        base.response = base.ServiceApi.retrieve(base.apiResource);
        base.responseBody = base.response.getBody();
        base.method = "GET";
        statusCodeRetrieved = base.response.getStatusCodeValue();
        
        System.out.println(base.apiResource);
		System.out.println(base.responseBody);
		System.out.println(statusCodeRetrieved);
        
        myTools.resource( ApiPaths.UNIVERSITY_APY_JAVA_ENDPOINT_POST);
        myTools.statusCode(String.valueOf(statusCodeRetrieved));
        myTools.responseBody(base.responseBody);

	}
	
	@Then("Return an status {string}")
	public void return_an_status(String statusCode) {
			int value = Integer.parseInt(statusCode);
			Assert.assertEquals(value, base.response.getStatusCodeValue());
			//Assert.assertEquals(statusCode, myTools.statusCode(String.valueOf(statusCodeRetrieved)));
		}
	
	@And("I validate the mongodb data and the courses")
    public void i_validate_the_mongodb_data_and_the_courses() {
        assert true == MongoDBUtils.compareJsonString("TEST", "at-university-db", "courses", base.responseBody);
    }

}
